


async function updateServerData () {
    const listServers = document.getElementById('listServers');
    var res = await objSelfRequest.api('getAllServers.php', systemAPI = true);

    if (res.status === 'success') {
        for (let i = 0; i < res.data.length; i++) {
            let server = res.data[i];
            var info = JSON.parse(atob(server.info));
            var infoStr = `CPU: ${info.cpu}% || RAM: ${info.ram}% || Disk: ${info.disk}% || Uptime: ${info.time}`;
            try {
                var tr = document.getElementById(server.id);
                var td = tr.getElementsByTagName('td');
                if ( ((i+1)+'') != td[0].innerText) {
                    td[0].style.color = 'blue';
                    setTimeout(() => {
                        td[0].style.color = 'black';
                    },1000);
                    td[0].innerText = (i+1)+'';
                }

                if (info.os_name != td[1].innerText) {
                    td[1].style.color = 'blue';
                    setTimeout(() => {
                        td[1].style.color = 'black';
                    },1000);
                    td[1].innerText = info.os_name;
                }

                if (infoStr != td[2].innerText) {
                    td[2].style.color = 'blue';
                    setTimeout(() => {
                        td[2].style.color = 'black';
                    },1000);
                    td[2].innerText = infoStr;
                }

                if (server.currentWork != td[3].innerText) {   
                    td[3].style.color = 'blue';
                    setTimeout(() => {
                        td[3].style.color = 'black';
                    },1000);
                    td[3].innerText = server.currentWork;
                }

                if (server.lastModifyDate != td[4].innerText) {
                    td[4].style.color = 'blue';
                    setTimeout(() => {
                        td[4].style.color = 'black';
                    },1000);
                    td[4].innerText = server.lastModifyDate;
                }

                if (
                    (server.isRunning == 1 ?'ON' : 'OFF') != td[5].innerText) {
                    td[5].style.color = 'blue';
                    setTimeout(() => {
                        td[5].style.color = 'black';
                    },1000);
                    td[5].innerText = server.isRunning == 1 ? 'ON' : 'OFF';
                }


            } catch {
                listServers.innerHTML += `
                <tr id="${server.id}">
                <td>${i+1}</td>
                <td>${info.os_name}</td>
                <td>${infoStr}</td>
                <td>${server.currentWork}</td>
                <td>${server.lastModifyDate}</td>
                <td>${server.isRunning == 1 ? 'ON' : 'OFF'}</td>
                <td>
                    <button name="viewInfoServer${server.id}" data-function_server="viewInfoServer" class="btn btn-light" data-toggle="modal" data-target="#modalViewInfoServer" >InfoRL<box-icon name='info-square' type='solid' ></box-icon></button>
                    <button name="offServer${server.id}" data-function_server="offServer" class="btn btn-light" data-toggle="modal" data-target="#modalOffServer" >Off<box-icon name='power-off' ></box-icon></button>
                    <button name="runServer${server.id}" data-function_server="runServer" class="btn btn-light" data-toggle="modal" data-target="#modalRunServer" >Run <box-icon name='run' ></box-icon></button>
                </td>
            </tr>
            `;
            }
        }
    } else {
        objProgressPage.logout();
    }
}

async function firstLoadServerData () {
    const listServers = document.getElementById('listServers');
    // listServers.hidden = true;
    // setTimeout(() => {
    //     listServers.hidden = false;
    // }, 2000);
    var res = await objSelfRequest.api('getAllServers.php', systemAPI = true);
    
    if (res.status === 'success') {
        listServers.innerHTML = '';
        for (let i = 0; i < res.data.length; i++) {
            let server = res.data[i];
            var info = JSON.parse(atob(server.info));
            var infoStr = `CPU: ${info.cpu}% || RAM: ${info.ram}% || Disk: ${info.disk}% || Uptime: ${info.time}`;
            listServers.innerHTML += `
                <tr id="${server.id}">
                <td>${i+1}</td>
                <td>${info.os_name}</td>
                <td>${infoStr}</td>
                <td>${server.currentWork}</td>
                <td>${server.lastModifyDate}</td>
                <td>${server.isRunning == 1 ? 'ON' : 'OFF'}</td>
                <td>
                    <button name="viewInfoServer${server.id}" data-function_server="viewInfoServer" class="btn btn-light" data-toggle="modal" data-target="#modalViewInfoServer" >InfoRL<box-icon name='info-square' type='solid' ></box-icon></button>
                    <button name="offServer${server.id}" data-function_server="offServer" class="btn btn-light" data-toggle="modal" data-target="#modalOffServer" >Off<box-icon name='power-off' ></box-icon></button>
                    <button name="runServer${server.id}" data-function_server="runServer" class="btn btn-light" data-toggle="modal" data-target="#modalRunServer" >Run <box-icon name='run' ></box-icon></button>
                </td>
            </tr>
            `;
        }
        listServers.innerHTML += `
        <div class="modal fade" id="modalViewInfoServer" tabindex="-1" role="dialog" aria-labelledby="modalViewInfoServer" aria-hidden="true">
            <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">View infomation server [REALTIME MODE] <box-icon type='solid' name='server'></box-icon></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body" id="messageInfoServer">
                ${await loading_style.createContentWaitLoad('Loading data...', 'https://i.pinimg.com/originals/63/d0/b7/63d0b791c8bb9c473e822b380d153c8d.gif', noContainer = true)}
                </div>

       
                <div class="modal-footer">
                <button name="closemodal_server" type="button" class="btn btn-secondary" data-function_server="closemodal" data-dismiss="modal">Close</button>
               
                </div>
            </div>
            </div>
        </div>
        
        `;
      

        listServers.innerHTML += `
        <div class="modal fade" id="modalRunServer" tabindex="-1" role="dialog" aria-labelledby="modalRunServer" aria-hidden="true">
            <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Select coin to run <code id="serverIdSelect">NO SERVER</code></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body" id="selectBoxRunTargetServer">
                ${await loading_style.createContentWaitLoad('Loading data...', 'https://i.pinimg.com/originals/63/d0/b7/63d0b791c8bb9c473e822b380d153c8d.gif', noContainer = true)}
                </div>

                <conta
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" saveEventName="saveChoiceCoin"   data-dismiss="modal" class="btn btn-primary" >Save changes</button>
                </div>
            </div>
            </div>
        </div>
        `;

        // listServers.innerHTML += `
        // <div class="modal fade" id="modalOffServer" tabindex="-1" role="dialog" aria-labelledby="modalOffServer" aria-hidden="true">
        //     <div class="modal-dialog" role="document">
        //     <div class="modal-content">
        //         <div class="modal-header">
        //         <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        //         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        //             <span aria-hidden="true">&times;</span>
        //         </button>
        //         </div>
        //         <div class="modal-body">
        //         Null data [off server]
        //         </div>
        //         <div class="modal-footer">
        //         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        //         <button type="button" class="btn btn-primary">Save changes</button>
        //         </div>
        //     </div>
        //     </div>
        // </div>
        // `;
        openAutoUpdateServer();
    } else {
        objProgressPage.logout();
    }

    
}

async function openAutoUpdateServer () {
    var delay = await getSetting('delay_cron_server');
    delay = Number.parseInt(delay);
    await updateServerData();
    var AutoSetInterval = setInterval(async () => {
        var hash = window.location.hash;
        if (hash != '#server')
        {
            console.log('>> Stop auto update server data');
            clearInterval(AutoSetInterval);
            return
        }
        console.log('>> Update server data')
        await updateServerData();
    }, delay);
    
}