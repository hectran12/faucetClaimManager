

async function loadListWallet () {
    const currentWallet = document.getElementById('currentWallet');
    const refWallet = document.getElementById('refWallet');

    var result = await objSelfRequest.api('getWallets.php');
    
    if(result.status === 'success') {
        currentWallet.innerHTML = '';
        refWallet.innerHTML = '';
        var walletData = result.message;
        for (var item = 0; item < walletData.length; item++) {
            var infoWallet = walletData[item];
            if (infoWallet.type_current == 0) {
                currentWallet.innerHTML += `
                <div class="col-md-6">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Name" id="currentWallet_Name_${infoWallet.id}" value="${infoWallet.name}">
                        <input type="text" class="form-control" placeholder="Value" id="currentWallet_Value_${infoWallet.id}" value="${infoWallet.value}">
                        <div class="input-group-append">
                            <button class="btn btn-danger" type="button" data-id-wallet="${infoWallet.id}" data-type-wallet="remove-wallet">Xóa</button>
                            <button class="btn btn-primary" type="button" data-id-wallet="${infoWallet.id}" data-type-wallet="edit-wallet">Sửa</button>
                        </div>
                    </div>
                </div>
                
                `;
            } else {
                refWallet.innerHTML += `
                <div class="col-md-6">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Name" id="currentWallet_Name_${infoWallet.id}" value="${infoWallet.name}">
                        <input type="text" class="form-control" placeholder="Value" id="currentWallet_Value_${infoWallet.id}" value="${infoWallet.value}">
                        <div class="input-group-append">
                            <button class="btn btn-danger" type="button" data-id-wallet="${infoWallet.id}" data-type-wallet="remove-wallet">Xóa</button>
                            <button class="btn btn-primary" type="button" data-id-wallet="${infoWallet.id}" data-type-wallet="edit-wallet">Sửa</button>
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


