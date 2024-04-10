





(async () => {
    try {
        await passwordCheckLoader();
    } catch {
        localStorage.clear();
        window.location.href = '/';
    }

})();
async function passwordCheckLoader () {
    var password = localStorage.getItem('password');
    window.history.pushState({}, '', '#password')
    if (!password) {
        await objprogressPage.setPage(`<div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <form>
                    <div class="form-group">
                        <label for="password">Nhập mật khẩu:</label>
                        <input type="password" class="form-control" id="password" placeholder="Enter password">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>`);

        document.querySelector('form').addEventListener('submit', async (e) => {
            e.preventDefault();
            var password = document.querySelector('#password').value;
            await checkVaildPassword(password);

        });
    } else {
        await checkVaildPassword(password, false);
    }
    
    


}


async function checkVaildPassword (password, submit=true) {
    await objSelfRequest.setPass(password);
    let response = await objSelfRequest.post('pages/isAdmin.php');

    var result = JSON.parse(response);

    if(result.status === "success") {

        if (submit) {   
            localStorage.setItem('password', password);
            var form = document.createElement('form');
            form.method = 'post';
            form.action = '/pages/setAuth.php';
            var input = document.createElement('input');
            input.type = 'hidden';
            input.name = 'password';
            input.value = password;
            form.appendChild(input);
            document.body.appendChild(form);
            form.submit();
        }
        
        window.history.pushState({}, '', '#admin');
        (async () => {
            settingPage = await objSelfRequest.api('getSettings.php', systemAPI = false);
            if (settingPage.status === 'success') {
                settingPage = settingPage.message;
            } else {
                objprogressPage.logout();
            }
           
        })();
        await loadDataPage();
    } else {
        localStorage.removeItem('password');
        await objprogressPage.setPage(messagebox.createMessage('Mật khẩu không đúng', 'danger'));
        setTimeout(() => {
            main();
        }, 2000);
    }

}

