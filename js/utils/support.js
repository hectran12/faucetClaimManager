




class selfRequest {
    constructor() {
        this.baseURL = window.location.origin;
        this.passwordRequest = localStorage.getItem('password');
    }

    async setPass (password) {
        this.passwordRequest = password;
    }

    async post (path) {
        let response = await fetch(`${this.baseURL}/${path}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                
            },
            body: 'password=' + this.passwordRequest
        });

        return await response.text();
    }

    async postData (path, data_urlencoded) {
        let response = await fetch(`${this.baseURL}/${path}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                
            },
            body: 'password=' + this.passwordRequest + '&' + data_urlencoded
        });

        return await response.text();
    }

    async api (path, systemAPI = false) {
        var res = null;

        if (systemAPI) res = await this.post(`api_sys/${path}`);
        else res = await this.post(`api/${path}`);
        var resultInfo = res.split('\n');
        resultInfo = resultInfo.filter(function (el) {
            return el != '' && el != '\r'
        });
        var auth = JSON.parse(resultInfo[0]);
        if(auth.status === 'success') {
            return JSON.parse(res.replace(resultInfo[0], ''));
        } else {
            localStorage.clear();
            window.location.href = '/auth/logout.php';
            return false;
        }
    }


    async api_post (path, data_urlencoded, systemAPI = false) {
        var res= null;
        if (systemAPI) res = await this.postData(`api_sys/${path}`, data_urlencoded);
        else res = await this.postData(`api/${path}`, data_urlencoded);
        var resultInfo = res.split('\n');
        // filter empty element
        resultInfo = resultInfo.filter(function (el) {
            return el != '' && el != '\r';
        });
        console.log(resultInfo )
        var auth = JSON.parse(resultInfo[0]);
        if(auth.status === 'success') {
            return JSON.parse(res.replace(resultInfo[0], ''));
        } else {
            localStorage.clear();
            window.location.href = '/auth/logout.php';
            return false;
        }
    
    }


    
}



class progressPage {
    constructor () {
        this.bodySourceStorage = document.body.innerHTML;
    }


    async setMessage (html_content) {
        document.getElementById('message_result').innerHTML = html_content;
    }

    async setPage (content) {
        document.body.innerHTML = content;
    }


    async offPage (reason) {
        this.bodySourceStorage = document.body.innerHTML;
        document.body.innerHTML = reason;
    }

    async onPage () {
        document.body.innerHTML = this.bodySourceStorage;
    }
    

    async logout () {
        localStorage.clear();
        window.location.href = '/auth/logout.php';
    }


}


