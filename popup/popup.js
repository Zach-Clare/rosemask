let maskCheckbox = document.getElementById("toggleMask");

document.body.onload = function() {
    chrome.storage.sync.get("maskActive", function(items) {
        if (!chrome.runtime.error) {
            console.log(items.maskActive);
            if (items.maskActive == true) {
                document.getElementById("toggleMask").checked = true;
                let toggle_label = document.getElementById("mask-toggle-label")
                toggle_label.classList.add("mask-on");
            }
        }
    });
    chrome.storage.sync.get("maskSize", function(items) {
        if (!chrome.runtime.error) {
            console.log(items.maskSize);
            document.getElementById("mask-size-input").value = items.maskSize;
        }
    });
}

maskCheckbox.addEventListener("click", async() => {
    // if checkbox is clicked
    
    if (maskCheckbox.checked == true) {
        // turn preferance on in chrome storage
        chrome.storage.sync.set({ "maskActive" : true });
        let toggle_label = document.getElementById("mask-toggle-label");
        toggle_label.classList.add("mask-on");
    } else {
        // turn off
        chrome.storage.sync.set({ "maskActive" : false });
        // remove overlay divs!
        let toggle_label = document.getElementById("mask-toggle-label");
        toggle_label.classList.remove("mask-on");
    }
});

let mask_size_input = document.getElementById("mask-size-input");
mask_size_input.addEventListener("change", async() => {
    // if checkbox is checked
    if (!isNaN(mask_size_input.value)) {
        chrome.storage.sync.set({ "maskSize" : mask_size_input.value });
    }
});


