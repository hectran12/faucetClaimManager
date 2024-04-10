


class loading_style {


    static createContentWaitLoad (reason, customGifLink = 'https://i.pinimg.com/originals/d9/7b/75/d97b75bf8e8d7f44c119925809768e26.gif', noContainer = false) {
        var css = `
            .center {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

        `;

        var html = '';

        if (noContainer) {
            html = `
         
                <div class="text-center">
                <img src="${customGifLink}">
                    <h3>${reason}</h3>
                </div>
      
        
            `;
        } else {
            html = `  <div class="container">
            <div class="text-center">
            <img src="${customGifLink}" class="center">
                <h3>${reason}</h3>
            </div>
        </div>`;
        }

        var combine = `
        <style>
            ${css}
        </style>
        ${html}
        `;

        return combine;
    }
}


class pageDOM {
    static setContent(id, content) {
        document.getElementById(id).innerHTML = content;
    }
}

class messagebox {
    static createMessage (message, type = 'info') {
        switch (type) {
            case 'success':
                return `
                <div class="alert alert-success">
                    <strong>Success!</strong> ${message}
                </div>
                `;
                break;
            case 'warning':
                return `
                <div class="alert alert-warning">
                    <strong>Warning!</strong> ${message}
                </div>
                `;
                break;
            case 'danger':
                return `
                <div class="alert alert-danger">
                    <strong>Danger!</strong> ${message}
                </div>
                `;
                break;
            default:
                return `
                <div class="alert alert-info">
                    <strong>Info!</strong> ${message}
                </div>
                `;
                break;
        }

        return combine;
    }
}