let changeColour = document.getElementById("changeColour");

chrome.storage.sync.get("colour", ({ colour }) => {
    changeColour.style.backgroundColor = colour;
});

// when the button is clicked, inject setPageBackgroundColor into current page
changeColour.addEventListener("click", async() => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow : true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageBackgroundColour,
    });
});

// The body of this function will be executed as a content script inside the current page
function setPageBackgroundColour() {
    chrome.storage.sync.get("colour", ({ colour }) => {
        document.body.style.backgroundColor = colour;
    });
}

