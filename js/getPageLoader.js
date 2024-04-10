

// add new if folder page has file
let menu = [
    'captcha',
    'server',
    'setting',
    'site_claim',
    'statistics',
    'wallet',
    'introduction'
];


let pageSource = {};
pageSource['captcha'] = '';
pageSource['server'] = '';
pageSource['setting'] = '';
pageSource['site_claim'] = '';
pageSource['statistics'] = '';
pageSource['wallet'] = '';
pageSource['introduction'] = '';



async function loadDataPage () {
    await firstLoadPage();
}


async function viewContainer (contentName) {
    await pageDOM.setContent('renderContent', pageSource[contentName]);
    await loadFunctionPage(contentName);

}


async function loadFunctionPage (contentName) {
    switch (contentName) {
        case 'captcha':
            await loadListToken();
            break;
        case 'wallet':
            await loadListWallet();
            break;
        case 'setting':
            await loadListSetting();
            break;
        case 'server':
            await firstLoadServerData();
            break;
        case 'site_claim':
            await loadSiteClaimPageData();
            break;

    }
}

async function firstLoadPage () {

    await objprogressPage.offPage(loading_style.createContentWaitLoad('Loading page and initializing data...'));
    for (let i = 0; i < menu.length; i++) {
        let response = await objSelfRequest.post(`pages/${menu[i]}.php`);
        pageSource[menu[i]] = response;
    }
    
    for (let i = 0; i < menu.length; i++) {

        var content = pageSource[menu[i]];
        var contentFirstLine = content.split('\n')[0];
        try {
            var parseResult = JSON.parse(contentFirstLine);       
            if(parseResult.status === 'success') {
                pageSource[menu[i]] = content.replace(contentFirstLine, '');
            } else {
                await objprogressPage.offPage(loading_style.createContentWaitLoad('Đã xảy ra lỗi khi tải trang có thể admin đã hết hạn!'));
                setTimeout(()=>{
                    window.location.href = '/';
                    
                },2000);
            }
        } catch {
            setTimeout(() => {
                localStorage.clear();
                window.location.href = '/';
            },1000);
        }
        
    }

    setTimeout(async () => {
        await objprogressPage.onPage();
        await viewContainer('introduction')
    },1000);
    

   
}



