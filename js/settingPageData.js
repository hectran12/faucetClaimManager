


async function loadListSetting () {
    const currentSettings = document.getElementById('currentSettings');
    var res = await objSelfRequest.api('getSettings.php');
    console.log(res);
    if(res.status === 'success') {
        var data = res.message;
        currentSettings.innerHTML = '';
        for (var i = 0; i < data.length; i++) {
            var setting = data[i];
            currentSettings.innerHTML += `
            <div class="col-md-6">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Name" id="settingName_value_${setting.id}" value="${setting.name}">
                    <input type="text" class="form-control" placeholder="Value" id="settingValue_value_${setting.id}" value="${setting.value}">
                    <div class="input-group-append">
                        <button class="btn btn-danger" data-id-setting="${setting.id}" data-type-setting="remove-setting" type="button" >Xóa</button>
                        <button class="btn btn-primary"  data-id-setting="${setting.id}" data-type-setting="edit-setting"  type="button">Sửa</button>
                    </div>
                </div>
            </div>
            `;
        }



    } else {
        objprogressPage.logout();
    }

}