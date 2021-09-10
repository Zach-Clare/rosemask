let maskCheckbox = document.getElementById("toggleMask");

document.body.onload = function() {
    chrome.storage.sync.get("maskActive", function(items) {
        if (!chrome.runtime.error) {
            console.log(items.maskActive);
            if (items.maskActive == true) {
                document.getElementById("toggleMask").checked = true;
            }
        }
    });
    chrome.storage.sync.get("maskSize", function(items) {
        if (!chrome.runtime.error) {
            console.log(items.maskSize);
            document.getElementById("maskSizeInput").value = items.maskSize;
        }
    });
}

maskCheckbox.addEventListener("click", async() => {
    // if checkbox is checked
    if (maskCheckbox.checked == true) {
        // turn preferance on in chrome storage
        chrome.storage.sync.set({ "maskActive" : true });
    } else {
        // turn off
        chrome.storage.sync.set({ "maskActive" : false });
        // remove overlay divs!
    }
});

let maskSizeInput = document.getElementById("maskSizeInput");
maskSizeInput.addEventListener("keyup", async() => {
    // if checkbox is checked
    if (!isNaN(maskSizeInput.value)) {
        chrome.storage.sync.set({ "maskSize" : maskSizeInput.value });
    }
});

// make thing follow mouse first, make it a blue box that tracks the y position.
// Then when that works, you can make two more boxes that do it, plus and minus some arbritary value
// Then make those plus/minus offsets editable by the user and viola!


