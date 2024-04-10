import requests, os, time, colorama, json
OFF_LOG = False
BASE_URL = 'http://localhost:8080'
PASSWORD = 'tronghoa'



class log:
    @staticmethod
    def info (message):
        if OFF_LOG == True:
            return
        currentTime = time.strftime('%H:%M:%S', time.localtime())
        print(f'[\033[92mINFO\033[0m] [{currentTime}] {message}')
    @staticmethod
    def error (message):
        if OFF_LOG == True:
            return
        currentTime = time.strftime('%H:%M:%S', time.localtime())
        print(f'[\033[91mERROR\033[0m] [{currentTime}] {message}')
    @staticmethod
    def warning (message):
        if OFF_LOG == True:
            return
        currentTime = time.strftime('%H:%M:%S', time.localtime())
        print(f'[\033[93mWARNING\033[0m] [{currentTime}] {message}')


class req:
    @staticmethod
    def post(url, data='') -> requests.Response:
        try:
            data = 'password=' + PASSWORD + '&' + data
            headers = {'Content-Type': 'application/x-www-form-urlencoded'}
            res = requests.post(BASE_URL + url, data=data, headers=headers, timeout=10)
            resInfo = res.text.split('\n')
            resInfo = [element for element in resInfo if element != '' and element != '\r']
            checkInfo = json.loads(resInfo[0])
            if checkInfo['status'] == 'success':
                return json.loads(resInfo[1])
            else:
                raise Exception(checkInfo['message'])
        except Exception as e:
            log.error(f'Error: {e}')
            return None
    


class api_get:
    @staticmethod
    def getTokenSolveCaptcha() -> dict:
        return req.post('/api/getTokenSolveCaptcha.php')
    
    @staticmethod
    def getWallets () -> dict:
        return req.post('/api/getWallets.php')
    

    @staticmethod
    def getSettings () -> dict:
        return req.post('/api/getSettings.php')
    
    @staticmethod
    def getAllServers () -> dict:
        return req.post('/api_sys/getAllServers.php')
    

    @staticmethod
    def getTaskByServerId (serverId: str) -> dict:
        return req.post('/api_sys/getTaskByServerId.php?serverId=' + serverId)
    
    @staticmethod
    def deleteTask (id: str) -> dict:
        return req.post('/api_sys/deleteTask.php?id=' + str(id))
    
    @staticmethod
    def deleleToken (id: str) -> dict:
        return req.post('/api/removeTokenSolveCaptcha.php?id=' + str(id))
    
class api_post:
    @staticmethod
    def addNewOrUpdateServer (data) -> dict:
        return req.post('/api_sys/addNewOrUpdateServer.php', data)
    
    
    
    






        