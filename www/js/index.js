document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    window.open = cordova.InAppBrowser.open('https://www.tabnews.com.br/', '_blank', 'location=yes,zoom=no,hideurlbar=yes,toolbar=no,toolbarposition=top,location=no,hidenavigationbuttons=yes,toolbar=false,fullscreen=no');
    

    // Set the default language
    var language = window.navigator.userLanguage || window.navigator.language;
    if (language.indexOf("pt-BT") > -1) {
        language = "pt-BR";
    }

}