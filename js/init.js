let objSelfRequest = new selfRequest();
let objprogressPage = new progressPage();
let settingPage = null;
(async () => {
    await objprogressPage.setMessage(messagebox.createMessage('No notification.', 'info'))
})();


async function getSetting (key) {
    for (let i = 0; i < settingPage.length; i++) {
        if (settingPage[i].name === key) return settingPage[i].value;
    }
}