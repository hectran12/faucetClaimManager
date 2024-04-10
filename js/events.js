let realTimeInfoServer = null;
let realTimeUpdateOffServerToChoiceCoin = null;

document.body.addEventListener('click', async (e) => {

    // base info element
    var tag = e.target.tagName;
    var id = e.target.id;
    var name = e.target.name;
    try {
        await changePage(tag, id, e);
    } catch {
        console.log('>> ERR CHANGE PAGE')
    }
    
    try{
    await funcTokenProgress(e); } catch { console.log('>> ERR funcTokenProgress') }

    try{
    await funcWalletProgress(e); } catch { console.log('>> ERR funcWalletProgress')}

    try {
    await funcSettingProgress(e); } catch { console.log('>> ERR funcSettingProgress')}

    try {
    await funcViewInfoServerRealTime(e); } catch { console.log('>> ERR funcViewInfoServerRealTime')}

    try {
    await funcSubAction(e); } catch { console.log('>> ERR funcSubAction ')}

    try {
    await saveEvent(e); } catch { console.log('>> ERR saveEvent')}
    try {
    await funcSiteClaim(e); 
    } catch { console.log('>> ERR funcSiteClaim')}

    
});




async function funcSiteClaim (e) {
    var data_function_site_claim = e.target.getAttribute('data-function-site-claim');

    if (data_function_site_claim == null) return;


    if(data_function_site_claim === 'addNewSite') {
        const urlSite = document.getElementById('urlSite');
        const siteName = document.getElementById('siteName');
        const coinClaim = document.getElementById('coinClaim');
        const statusProgressTool = document.getElementById('statusProgressTool');
        if (urlSite.value == '' || siteName.value == '' || coinClaim.value == '' || statusProgressTool.value == '') return;
        var res=  await objSelfRequest.api_post('addNewSite.php', 'site_name=' + siteName.value + '&site_address=' + urlSite.value + '&coin_claim=' + coinClaim.value + '&status=' + statusProgressTool.value,
        systemAPI=true);
        if(res.status === 'success') {
            await objprogressPage.setMessage(messagebox.createMessage(res.message, 'success'));
        } else {
            await objprogressPage.setMessage(messagebox.createMessage(res.message, 'danger'));
        }   
        await loadSiteClaimPageData();

    }



    if(data_function_site_claim === 'editSite') {
        const data_select_id_edit = e.target.getAttribute('data-select-id-edit');
        if (data_select_id_edit == null) return;
        var selectElement = document.getElementById(`selectSite_id_${data_select_id_edit}`);
        var allTagTD = selectElement.getElementsByTagName('td');
        var id_tool = `<input type="text" class="form-control" value="${allTagTD[1].textContent}" id="id_tool_${data_select_id_edit}">`;
        var site_name = `<input type="text" class="form-control" value="${allTagTD[2].textContent}" id="site_name_${data_select_id_edit}">`;
        var site_url = `<input type="text" class="form-control" value="${allTagTD[3].textContent}" id="site_url_${data_select_id_edit}">`;
        var coin_claim = `<input type="text" class="form-control" value="${allTagTD[4].textContent}" id="coin_claim_${data_select_id_edit}">`;
        var status = `<input type="text" class="form-control" value="${allTagTD[5].textContent}" id="status_${data_select_id_edit}">`;
        var button = `<button class="btn btn-success" data-function-site-claim="saveEditSite" data-select-id-save="${data_select_id_edit}">Save</button>`;
        var button2 = `<button class="btn btn-danger" data-function-site-claim="cancelEditSite" data-select-id-cancel="${data_select_id_edit}">Cancel</button>`;
        allTagTD[1].innerHTML = id_tool;
        allTagTD[2].innerHTML = site_name;
        allTagTD[3].innerHTML = site_url;
        allTagTD[4].innerHTML = coin_claim;
        allTagTD[5].innerHTML = status;
        allTagTD[6].innerHTML = `<div class="input-group-append">${button} ${button2}</div>`;

    }
    

    if(data_function_site_claim === 'cancelEditSite') {
        var data_select_id_cancel = e.target.getAttribute('data-select-id-cancel');
        if (data_select_id_cancel == null) return;
        var selectElement = document.getElementById(`selectSite_id_${data_select_id_cancel}`);
        var allTagTD = selectElement.getElementsByTagName('td');
        var id_tool = document.getElementById(`id_tool_${data_select_id_cancel}`).value;
        var site_name = document.getElementById(`site_name_${data_select_id_cancel}`).value;
        var site_url = document.getElementById(`site_url_${data_select_id_cancel}`).value;
        var coin_claim = document.getElementById(`coin_claim_${data_select_id_cancel}`).value;
        var status = document.getElementById(`status_${data_select_id_cancel}`).value;
        allTagTD[1].innerText = id_tool;
        allTagTD[2].innerText = site_name;
        allTagTD[3].innerText = site_url;
        allTagTD[4].innerText = coin_claim;
        allTagTD[5].innerText = status;
        var btn = `
            <button class="btn btn-info" type="button" data-function-site-claim="editSite" data-select-id-edit="${data_select_id_cancel}">Edit</button>
            <button class="btn btn-danger" type="button" data-function-site-claim="removeSite" data-select-id-remove="${data_select_id_cancel}">Remove</button>
        `;
        allTagTD[6].innerHTML = `<div class="input-group-append">${btn}</div>`;

        
        
        
    }

    if(data_function_site_claim === 'saveEditSite') {
        var data_select_id_save = e.target.getAttribute('data-select-id-save');
        if (data_select_id_save == null) return;
        var id_tool = document.getElementById(`id_tool_${data_select_id_save}`)
        var site_name = document.getElementById(`site_name_${data_select_id_save}`)
        var site_url = document.getElementById(`site_url_${data_select_id_save}`)
        var coin_claim = document.getElementById(`coin_claim_${data_select_id_save}`)
        var status = document.getElementById(`status_${data_select_id_save}`)
        var res = await objSelfRequest.api_post('editSite.php', 'id=' + data_select_id_save + '&id_tool=' + id_tool
        .value + '&site_name=' + site_name
        .value + '&site_address=' + site_url
        .value + '&coin_claim=' + coin_claim
        .value + '&status=' + status.value, systemAPI=true);
        if(res.status === 'success') {
            await objprogressPage.setMessage(messagebox.createMessage(res.message, 'success'));
        } else {
            await objprogressPage.setMessage(messagebox.createMessage(res.message, 'danger'));
        }

        var selectElement = document.getElementById(`selectSite_id_${data_select_id_save}`);
        var allTagTD = selectElement.getElementsByTagName('td');
        allTagTD[1].innerText = id_tool.value;
        allTagTD[2].innerText = site_name.value;
        allTagTD[3].innerText = site_url.value;
        allTagTD[4].innerText = coin_claim.value;
        allTagTD[5].innerText = status.value;
        var btn = `
            <button class="btn btn-info" type="button" data-function-site-claim="editSite" data-select-id-edit="${data_select_id_save}">Edit</button>
            <button class="btn btn-danger" type="button" data-function-site-claim="removeSite" data-select-id-remove="${data_select_id_save}">Remove</button>
        `;
        allTagTD[6].innerHTML = `<div class="input-group-append">${btn}</div>`;

        

    }


    if(data_function_site_claim === 'removeSite') {
        var id = e.target.getAttribute('data-select-id-remove');
        if (id == null) return;
        var res = await objSelfRequest.api('deleteSiteById.php?id=' + id, systemAPI=true);
        if(res.status === 'success') {
            await objprogressPage.setMessage(messagebox.createMessage(res.message, 'success'));
        } else {
            await objprogressPage.setMessage(messagebox.createMessage(res.message, 'danger'));
        }
        await loadSiteClaimPageData();
    }
}

async function funcViewInfoServerRealTime (e) {
    var name = e.target.getAttribute('name');
    var data_function = e.target.getAttribute('data-function_server');
    if (name == null || data_function == null) return;

    if(data_function === 'viewInfoServer') {
        name = name.split('viewInfoServer')[1];
        realTimeInfoServer = setInterval(async () => {
            await showInfoServer(name);
            console.log('>> UPDATE POPUP INFO SERVER')
        }, Number.parseInt(await getSetting('delay_real_time_info')));
    }

    if(data_function === "closemodal") {
        if(realTimeInfoServer != null) {
            console.log('>> Stop real time info server');
            clearInterval(realTimeInfoServer);
        }
    }

    if (data_function === 'offServer') {
        name = name.split('offServer')[1];
        var res = await objSelfRequest.api(`addNewTask.php?serverId=${name}&taskInfo=offServer`, systemAPI=true);
        if(res.status === 'success') {
            await objprogressPage.setMessage(messagebox.createMessage(res.message, 'success'));
        } else {
            await objprogressPage.setMessage(messagebox.createMessage(res.message, 'danger'));
        }
    }


    if (data_function === 'runServer') {
        name = name.split('runServer')[1];
        await runServer(name);

    }


    // if (data_function === 'saverun') {
    //     const optionsChoiceCoin = document.getElementById('optionsChoiceCoin');
    //     var coin = optionsChoiceCoin.value;
    //     var serverId = document.getElementById('serverIdSelect').textContent;
    //     var res = await objSelfRequest.api(`addNewTask.php?serverId=${serverId}&taskInfo=runServer_coin_${coin}`, systemAPI=true);
    //     if(res.status === 'success') {
    //         await objprogressPage.setMessage(messagebox.createMessage(res.message, 'success'));
    //     } else {
    //         await objprogressPage.setMessage(messagebox.createMessage(res.message, 'danger'));
    //     }
    // }

}

async function funcSubAction (e) {
    const subFunctionOn = e.target.getAttribute('sub-function-on');
    const subFunctionAction = e.target.getAttribute('sub-function-action');

    if (subFunctionOn == null || subFunctionAction == null) return;


    if (subFunctionOn === 'runServer' && subFunctionAction === 'offServer') {
        document.getElementById('selectBoxRunTargetServer').innerHTML += `Approve to off server`;
        realTimeUpdateOffServerToChoiceCoin = setInterval(async () => {
            await runServer(document.getElementById('serverIdSelect').textContent);
            console.log('>> UPDATE OFF SERVER TO CHOICE COIN');
            if (realTimeUpdateOffServerToChoiceCoin == null) return;
            document.getElementById('selectBoxRunTargetServer').innerHTML = `Wait for off server...`;
        }, Number.parseInt(await getSetting('delay_update_subaction')));
    }
}


async function saveEvent (e) {
    const saveEventName = e.target.getAttribute('saveEventName');
    if (saveEventName == null) return;

    if(saveEventName === 'saveChoiceCoin') {
        const optionsChoiceCoin = document.getElementById('optionsChoiceCoin');
        var coin = optionsChoiceCoin.value;
        var serverId = document.getElementById('serverIdSelect').textContent;
        var res = await objSelfRequest.api(`addNewTask.php?serverId=${serverId}&taskInfo=runServer_coin_${coin}`, systemAPI=true);
        if(res.status === 'success') {
            await objprogressPage.setMessage(messagebox.createMessage(res.message, 'success'));
        } else {
            await objprogressPage.setMessage(messagebox.createMessage(res.message, 'danger'));
        }
    }
}

async function runServer (id) {
    const serverIdSelect = document.getElementById('serverIdSelect');
    const selectBoxRunTargetServer = document.getElementById('selectBoxRunTargetServer');
    serverIdSelect.textContent = id;
    var res = await objSelfRequest.api('getAllServers.php', systemAPI = true);
    if (res.status === 'success') {
        var server1 = res.data.find(server1 => server1.id == id);
        if (server1.isRunning == 1) {
            
            selectBoxRunTargetServer.innerHTML = `${loading_style.createContentWaitLoad('Can not run server, server is running!'
                ,  'https://i.ibb.co/gv68PBp/vl9E6VXl.jpg', true
            )}`

            selectBoxRunTargetServer.innerHTML += `
                <button name="offServer${id}" sub-function-on="runServer" sub-function-action="offServer" data-function_server="offServer" class="btn btn-light" data-toggle="modal" data-target="#modalOffServer" >Click to off server<box-icon name='power-off' ></box-icon></button>
            `;
        } else {
            if (realTimeUpdateOffServerToChoiceCoin != null) clearInterval(realTimeUpdateOffServerToChoiceCoin);
            realTimeUpdateOffServerToChoiceCoin = null;
            console.log('>> SELECT COIN');
            selectBoxRunTargetServer.innerHTML = `
            <h3>Choose coin to run server</h3>
            <select class="form-select" aria-label="" id="optionsChoiceCoin">
                <option selected>Select coin</option>
            </select>
            `;
            await showCoinToChoice();
        }


    } else {
        objProgressPage.logout();
    }
}


async function showCoinToChoice () {
    const optionsChoiceCoin = document.getElementById('optionsChoiceCoin');
    var allCoins = await getSetting('list_coin_can_claim');
    allCoins = allCoins.split(',');
    for (var i = 0; i < allCoins.length; i++) {
        optionsChoiceCoin.innerHTML += `<option value="${allCoins[i]}">${allCoins[i]}</option>`;
    }
}


async function showInfoServer (id) {
    var res = await objSelfRequest.api('getAllServers.php', systemAPI = true);
    if (res.status === 'success') {
        var server = res.data.find(server => server.id == id);
        var info = JSON.parse(atob(server.info));
        var modalViewInfoServer = document.getElementById('messageInfoServer');
        modalViewInfoServer.innerHTML = '';
        modalViewInfoServer.innerHTML += `<strong>ID Server: </strong> ${server.id} <br>`;
        modalViewInfoServer.innerHTML += `<strong>IP: </strong> ${server.serverIP} <br>`;
        modalViewInfoServer.innerHTML += `<strong>CPU: </strong> ${info.cpu}% <br>`;
        modalViewInfoServer.innerHTML += `<strong>RAM: </strong> ${info.ram}% <br>`;
        modalViewInfoServer.innerHTML += `<strong>Disk: </strong> ${info.disk}% <br>`;
        modalViewInfoServer.innerHTML += `<strong>Uptime: </strong> ${info.time} <br>`;
        modalViewInfoServer.innerHTML += `<strong>OS: </strong> ${info.os_name} <br>`;
        modalViewInfoServer.innerHTML += `<strong>Current Work: </strong> ${server.currentWork} <br>`;
        modalViewInfoServer.innerHTML += `<strong>Last Modify: </strong> ${server.lastModifyDate} <br>`;
        modalViewInfoServer.innerHTML += `<strong>Status: </strong> ${server.isRunning == 1 ? 'ON' : 'OFF'} <br>`;
        

    } else {
        objProgressPage.logout();
    }
    

}
async function funcSettingProgress (e) {
    var id = e.target.getAttribute('data-id-setting');
    var data_type = e.target.getAttribute('data-type-setting');
    if (id == null || data_type == null) return;

    if(data_type === 'remove-setting') {
        var res = await objSelfRequest.api_post('removeSetting.php', 'id=' + id);
        if(res.status === 'success') {
            await objprogressPage.setMessage(messagebox.createMessage(res.message, 'success'));
        } else {
            await objprogressPage.setMessage(messagebox.createMessage(res.message, 'danger'));
        }
    }

    if(data_type === 'edit-setting') {
        var name = document.getElementById(`settingName_value_${id}`).value;
        var value = document.getElementById(`settingValue_value_${id}`).value;
        var res = await objSelfRequest.api_post('editSetting.php', 'id=' + id + '&name=' + name + '&value=' + value);
        if(res.status === 'success') {
            await objprogressPage.setMessage(messagebox.createMessage(res.message, 'success'));
        } else {
            await objprogressPage.setMessage(messagebox.createMessage(res.message, 'danger'));
        }
    }




    await loadListSetting();
}
async function funcWalletProgress (e) {
    var id = e.target.getAttribute('data-id-wallet');
    var data_type = e.target.getAttribute('data-type-wallet');
    if (id == null || data_type == null) return;



    if (data_type === 'remove-wallet') {
        var res = await objSelfRequest.api_post('removeWallet.php', 'id=' + id);
        if(res.status === 'success') {
            await objprogressPage.setMessage(messagebox.createMessage(res.message, 'success'));
        } else {
            await objprogressPage.setMessage(messagebox.createMessage(res.message, 'danger'));
        }
    }


    if(data_type === 'edit-wallet') {
        var name = document.getElementById(`currentWallet_Name_${id}`).value;
        var value = document.getElementById(`currentWallet_Value_${id}`).value;
        var res = await objSelfRequest.api_post('editValueWallet.php', 'id=' + id + '&name=' + name + '&value=' + value);
        if(res.status === 'success') {
            await objprogressPage.setMessage(messagebox.createMessage(res.message, 'success'));
        } else {
            await objprogressPage.setMessage(messagebox.createMessage(res.message, 'danger'));
        }
    }
    await loadListWallet();
}


async function funcTokenProgress(e) {
    var id = e.target.getAttribute('data-id');
    var data_type = e.target.getAttribute('data-type');
    if (id == null || data_type == null) return;


    if (data_type === 'remove-token') {
        var res = await objSelfRequest.api(`removeTokenSolveCaptcha.php?id=${id}`);
        if(res.status === 'success') {
            await objprogressPage.setMessage(messagebox.createMessage(res.message, 'success'));
        } else {
            await objprogressPage.setMessage(messagebox.createMessage(res.message, 'danger'));
        }
    }

    if (data_type === 'edit-token') {
        var currentValue = document.getElementById(`token_value_${id}`).value; 
        var res = await objSelfRequest.api_post('editValueTokenSolveCaptcha.php', 'id=' + id + '&token=' + currentValue);
        if(res.status === 'success') {
            await objprogressPage.setMessage(messagebox.createMessage(res.message, 'success'));
        } else {
            await objprogressPage.setMessage(messagebox.createMessage(res.message, 'danger'));
        }
    }


    if (data_type === 'check-token') {
        var tokenValue = document.getElementById(`token_value_${id}`).value;
        var res = await objSelfRequest.api_post('checkTokenSolveCaptcha.php', 'token=' + tokenValue);
        
        if(res.status === 'success') {
           res = res.message;
           var info = `<br>
              <strong>Token: </strong> ${ tokenValue} <br>
              <strong>Balance: </strong> ${res.balance} <br>
           `;
           if(res.packages.length > 0) {
                for (var package_index = 0; package_index < res.packages.length; package_index++) {
                    var infoPackage = res.packages[package_index];
                    info += `
                        <strong>Package id: </strong> ${infoPackage.packageId} <br>
                        <strong>type: </strong> ${infoPackage.type} <br>
                        <strong>numberOfCalls: </strong> ${infoPackage.numberOfCalls} <br>
                        <strong>status: </strong> ${infoPackage.status} <br>
                        <strong>activeTime: </strong> ${new Date(infoPackage.activeTime).toDateString()} <br>
                        <strong>expireTime: </strong> ${new Date(infoPackage.expireTime).toDateString()} 

                    `;
                }
           }
            await objprogressPage.setMessage(messagebox.createMessage(info, 'info'));
        } else {
            await objprogressPage.setMessage(messagebox.createMessage(res.message, 'danger'));
        }
    }

    await loadListToken();
}



async function addNewWallet (type_current) {
    var res = await objSelfRequest.api_post('addNewWallet.php', 'name=&value=&type_current=' + type_current);
    if(res.status === 'success') {
        await objprogressPage.setMessage(messagebox.createMessage(res.message, 'success'));
    } else {
        await objprogressPage.setMessage(messagebox.createMessage(res.message, 'danger'));
    }
    await loadListWallet();
}


async function reloadWallet () {
    await loadListWallet();
}

async function addNewSetting () {
    var res = await objSelfRequest.api_post('addNewSetting.php', 'name=&value=');
    if(res.status === 'success') {
        await objprogressPage.setMessage(messagebox.createMessage(res.message, 'success'));
    } else {
        await objprogressPage.setMessage(messagebox.createMessage(res.message, 'danger'));
    }
    await loadListSetting();
}


async function reloadSetting () {
    await loadListSetting();
}

async function addNewToken () {
    var res = await objSelfRequest.api_post('addNewTokenSolveCaptcha.php', 'token=');
    if(res.status === 'success') {
        await objprogressPage.setMessage(messagebox.createMessage(res.message, 'success'));
    } else {
        await objprogressPage.setMessage(messagebox.createMessage(res.message, 'danger'));
    }

    await loadListToken();

}


async function reloadToken () {
    await loadListToken();


}


async function changePage (tag, id, e) {
    if (tag === 'A' && id === 'navFunction') {
        var content = e.target.getAttribute('data-content');
        console.log('>> CHANGE PAGE: ', content);
        await viewContainer(content);
    }
}