import afp_server, threading, os, time, psutil, requests, platform, base64, json
import platform, datetime


# afp_server.BASE_URL = 'YOUR_SERVER_URL'
# afp_server.PASSWORD = 'ADMIN_PASSWORD'

def getCurrentIP () -> str:
    try:
        return requests.get('https://api.ipify.org').text
    except:
        return False
    

log_session = []


infoSettings = afp_server.api_get.getSettings()
if infoSettings['status'] != 'success':
    afp_server.log.error('Cannot get settings')
    quit()


currentIP = None
while currentIP == None:
    currentIP = getCurrentIP()
    if currentIP == False:
        afp_server.log.error('Cannot get current IP address')
        time.sleep(5)
        continue
    break


if infoSettings == None:
    afp_server.log.error('Cannot get settings')
    quit()



def getSetting (name: str) -> str:
    data_setting = infoSettings['message']
    for setting in data_setting:
        if setting['name'] == name:
            return setting['value']
    
    return None


def encIP () -> str:
    return base64.b64encode(currentIP.encode()).decode()



def updateOrUploadServer (currentWork: str, isRunning: bool, logs: str) -> bool:
    if isRunning == False: isRunning = 0
    elif isRunning == 'no_change': isRunning = 'no_change'
    else: isRunning = 1

    info = getInfoSystem()
    data = 'currentWork=' + currentWork + '&'
    data += 'isRunning=' + str(isRunning) + '&'
    infoDataSystem = base64.b64encode(str(
        json.dumps(info)
    ).encode()).decode()
    data += 'info=' + infoDataSystem + '&'
    data += 'id=' + info['id'] + '&'
    lastModifyDate = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    data += 'lastModifyDate=' + lastModifyDate + '&'
    data += 'serverIP=' + currentIP + '&'
    data += 'serverOS=' + info['os_name'] + '&'
    logs_enc = base64.b64encode(logs.encode()).decode()
    data += 'logs=' + logs_enc

    try:
        req = afp_server.api_post.addNewOrUpdateServer(data)
        if req == None:
            afp_server.log.error('Cannot connect to server')
            return False
        print(req)
    except:
        afp_server.log.error('Cannot connect to server')
        return False


def getInfoSystem () -> dict:
    info = {}
    info['cpu'] = psutil.cpu_percent()
    info['ram'] = psutil.virtual_memory().percent
    info['disk'] = psutil.disk_usage('/').percent
    info['user'] = os.getlogin()
    info['time'] = time.strftime('%H:%M:%S', time.localtime())
    info['os_name'] = platform.system() + ' ' + platform.release()
    info['id'] = encIP()
    info['IPAddress'] = currentIP
    afp_server.log.info(info)
    return info

def createTaskChange (coin: str) -> bool:
    # create file change.txt
    try:
        with open('change.txt', 'w+') as f:
            f.write(coin)
    except:
        afp_server.log.error('Cannot create file change.txt')
        return False
    


def taskEndCurrentProcess () -> None:
    # get pid
    pid = os.getpid()
    # kill process
    os.system(f'taskkill /F /PID {pid}')
    exit()


def taskAction (taskInfo) -> bool:
    task: str = taskInfo['taskInfo']
    serverId=  taskInfo['serverId']
    taskId = taskInfo['id']

    if task == 'offServer':
        afp_server.log.info('[OFF-SERVER] Turn off server , serverId: ' + serverId)
        updateOrUploadServer('No work', False, getLogSessions())
        afp_server.api_get.deleteTask(taskId)
        taskEndCurrentProcess()

        # DO SOMETHING
        
            

    if 'runServer_coin_' in task:
        coin = task.split('runServer_coin_')[1]
        afp_server.log.info(f'[RUN-SERVER] Run server with coin: {coin}')
        updateOrUploadServer(coin, True, getLogSessions())
        afp_server.api_get.deleteTask(taskId)
        # taskEndCurrentProcess()
        # exit()

        # DO SOMETHING


def getLogSessions () -> str:
    global log_session
    logs = ''
    for log in log_session:
        logs += log + '\n'

    if len(log_session) > 20:
        log_session.clear()
    return logs


def uploadInfoServer () -> None:
    delay_cron = 0
    if getSetting('delay_cron') == None:
        afp_server.log.error('Cannot get delay_cron -> solution: check settings')
        exit()

    delay_cron = int(getSetting('delay_cron'))
    while True:
        try:
            allServers = afp_server.api_get.getAllServers()
            print(allServers)
            if allServers == False:
                afp_server.log.error('Cannot get all servers')
                time.sleep(5)
                continue

            data = allServers['data']
            server = None 
            for sv in data:
                if sv['serverIP'] == currentIP:
                    server = sv
                    break

            if server == None:
                afp_server.log.error('Cannot get server')
                afp_server.log.info('Upload new server')
                updateOrUploadServer('none', 'none', getLogSessions())
                time.sleep(delay_cron)
                continue
            


            info = server['info']
            infoDecode = json.loads(base64.b64decode(info).decode())
          
            updateOrUploadServer('no_change', 'no_change', getLogSessions())
            time.sleep(delay_cron)

        except:
            afp_server.log.error('Cannot connect to server')
            time.sleep(delay_cron)
            continue


def taskFork () -> None:
    if getSetting('delay_fork_task') == None:
        afp_server.log.error('Cannot get delay_fork_task -> solution: check settings')
        exit()

    DELAY_FORK_TASK = int(getSetting('delay_fork_task'))
    afp_server.log.info(f'Start fork task with delay: {DELAY_FORK_TASK}s')

    while True:
        allTask = afp_server.api_get.getTaskByServerId(encIP())
        if allTask == False:
            afp_server.log.error('Cannot get task, retry in 5s')
            time.sleep(5)


        if 'data' not in allTask:
            afp_server.log.info('Task not found, retry in 5s')
            time.sleep(5)
            continue

        if len(allTask['data']) < 1:
            afp_server.log.info('No task')
            time.sleep(DELAY_FORK_TASK)
            continue

        for task in allTask['data']:
            taskAction(task)
        

        time.sleep(DELAY_FORK_TASK)



threading.Thread(target=taskFork).start() # auto fork task
threading.Thread(target=uploadInfoServer).start() # auto upload info server





