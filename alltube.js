/*global chrome*/
var getUrl = function (tab, audio) {
    'use strict';
    var url = 'http://alltubedownload.net/api.php?url=' + encodeURI(tab.url);
    if (audio === true) {
        url += '&audio=on';
    }
    chrome.tabs.create({url: url});
};

chrome.contextMenus.create({
    title: "Download video",
    onclick: function (info, tab) {
        'use strict';
        getUrl(tab);
    }
});

chrome.contextMenus.create({
    title: "Download audio",
    onclick: function (info, tab) {
        'use strict';
        getUrl(tab, true);
    }
});

chrome.browserAction.onClicked.addListener(getUrl);
