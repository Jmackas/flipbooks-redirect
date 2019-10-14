/*======
Script injection from James 14-Oct-2019
=======*/
// Check if user came from Google
if (document.referrer.indexOf("google.com") != -1) {
    // Check if URL is a FlippingBook
    if (window.location.href.indexOf("html5flipping") != -1) {
        window.location.replace("https://books.idc-online.com");
    }
}

// Check if user came from Bing
if (document.referrer.indexOf("bing.com") != -1) {
	    // Check if URL is a FlippingBook
    if (window.location.href.indexOf("html5flipping") != -1) {
        window.location.replace("https://books.idc-online.com");
    }
}
