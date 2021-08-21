chrome.runtime.onInstalled.addListener(init());

function init() {
    chrome.storage.sync.set({ "maskActive" : false });
}

// if mask turned on
chrome.storage.onChanged.addListener((changes, area) => {
    if (area == "sync" && changes.maskActive.newValue == true) {
        // invoke mask file
        addRoseMaskToCurrentTab();       
    } else if (area == "sync" && changes.maskActive.newValue == false) {
        // invoke mask file
        addRoseMaskToCurrentTab();       
    }
});

function addRoseMaskToCurrentTab() {
    chrome.tabs.query(
        {currentWindow: true, active: true},
        function(tabArray) {
            let tabId = tabArray[0]["id"];
            console.log(tabId);
            chrome.scripting.executeScript({
                target: {tabId: tabId},
                files: ["rosemask.js"]
            });
        }
    );
}

function RemoveRoseMaskFromCurrentTab() {
    chrome.tabs.query(
        {currentWindow: true, active: true},
        function(tabArray) {
            let tabId = tabArray[0]["id"];
            console.log(tabId);
            chrome.scripting.executeScript({
                target: {tabId: tabId},
                files: ["unrosemask.js"]
            });
        }
    );
}