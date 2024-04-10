

async function loadSiteClaimPageData () {
    await loadSelectBoxStatusProgressTool();
    await loadAllSite();


}


async function loadAllSite () {
    const allSites = document.getElementById('allSites');
    var res = await objSelfRequest.api('getAllSite.php', true);
    if (res === false) return;
    allSites.innerHTML = '';
    var data_sites = res.message;
    if(res.status != 'success') return;
    var html = '';
    for(var i = 0; i < data_sites.length; i++) {
        
        var site = data_sites[i];
        var id = site.id;
        var id_tool = site.id_tool;
        var site_name = site.site_name;
        var site_url = site.site_address;
        var status = site.status;
        var can_claim = site.coin_claim;
        html += `<tr id="selectSite_id_${id}">`;
        html += `<td>${i}</td>`;
        html += `<td>${id_tool}</td>`;
        html += `<td>${site_name}</td>`;
        html += `<td>${site_url}</td>`;
        html += `<td>${can_claim}</td>`;
        html += `<td>${status}</td>`;
        html += `<td>
            <div class="input-group-append">
                <button class="btn btn-info" type="button" data-function-site-claim="editSite" data-select-id-edit="${id}">Edit</button>
                <button class="btn btn-danger" type="button" data-function-site-claim="removeSite" data-select-id-remove="${id}">Remove</button>
            </div>
        </td>`;
        html += '</tr>';

        
    }

    allSites.innerHTML = html;

}


async function loadSelectBoxStatusProgressTool () {
    const statusProgressTool = document.getElementById('statusProgressTool');
    var getProgressText = await getSetting('progress_tool');
    var listProgressText= getProgressText.split(',');
    listProgressText = listProgressText.filter(item => item !== '');

    statusProgressTool.innerHTML = '';


    var html = '';
    for (var i = 0; i < listProgressText.length; i++) {
        html += `<option value="${listProgressText[i]}">${listProgressText[i]}</option>`;
    }

    statusProgressTool.innerHTML = html;

}