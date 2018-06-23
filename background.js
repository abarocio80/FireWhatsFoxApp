
/*
Open a new tab, and load "my-page.html" into it.
*/
function openWhatsap() {
    console.log("injecting");
    browser.windows.create({
	"url": "https://web.whatsapp.com/",
	"type": "panel"
    });
}


/*
Add openWhatsap() as a listener to clicks on the browser action.
*/
browser.browserAction.onClicked.addListener(openWhatsap);
