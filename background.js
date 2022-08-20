chrome.runtime.onInstalled.addListener(init());

function init() {
    chrome.storage.sync.set({ "maskActive" : false });
    chrome.storage.sync.set({ "maskSize" : 130 });
}

// if mask turned on
chrome.storage.onChanged.addListener((changes, area) => {
    if (area == "sync" && changes.maskActive.newValue == true) {
        // invoke mask file
        addRoseMaskToCurrentTab();       
    } else if (area == "sync" && changes.maskActive.newValue == false) {
        // invoke mask file
        RemoveRoseMaskFromCurrentTab();       
    }
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.storage.sync.set({ "maskActive" : false });
    // RemoveRoseMaskFromCurrentTab();
});

chrome.commands.onCommand.addListener((command, tab) => {
    chrome.storage.sync.get(["maskActive"], function(result) {
        // (current);
        if (result.maskActive == true) {
            chrome.storage.sync.set({ "maskActive" : false });
        } else {
            chrome.storage.sync.set({ "maskActive" : true });
        }
    });
    
});

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg["requestValue"] == "getmasksize") {
        chrome.storage.sync.get(["maskSize"], function(result) {
            console.log(result);
            sendResponse({ result: result["maskSize"]});
        });
    }
    return true;
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