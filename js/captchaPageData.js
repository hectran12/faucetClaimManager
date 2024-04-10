





async function loadListToken () {
    const listToken = document.getElementById('listToken');
    var data = await objSelfRequest.api('getTokenSolveCaptcha.php');
    if (data != false) {
        if(data.status === 'success') {
            listToken.innerHTML = '';
            for (var i = 0; i < data.message.length; i++) {
                var token = data.message[i];
                listToken.innerHTML += `
                <div class="col-md-9">
                    <div class="input-group mb-2">
                        <input type="text" class="form-control" placeholder="Nhập token" value="${token.token}" id="token_value_${token.id}">
                        <div class="input-group-append">
                            <button class="btn btn-danger" type="button" data-id="${token.id}" data-type="remove-token">Xóa</button>
                            <button class="btn btn-info" type="button"  data-id="${token.id}" data-type="edit-token">Sửa</button>
                            <button class="btn btn-success" type="button"  data-id="${token.id}" data-type="check-token">Kiểm tra</button>
                        </div>
                    </div>
                </div>
                `;
            }
        }


    } else {
        objprogressPage.logout();
    }
}
