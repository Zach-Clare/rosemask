let maskCheckbox = document.getElementById("toggleMask");

document.body.onload = function() {
    chrome.storage.sync.get("maskActive", function(items) {
        if (!chrome.runtime.error) {
            console.log(items.maskActive);
            if (items.maskActive == true) {
                document.getElementById("toggleMask").checked = true;
                let toggle_label = document.getElementById("mask-toggle-label")
                toggle_label.innerHTML = "Deactivate Mask";
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
        toggle_label.innerHTML = "Deactivate Mask";
        toggle_label.classList.add("mask-on");
    } else {
        // turn off
        chrome.storage.sync.set({ "maskActive" : false });
        // remove overlay divs!
        let toggle_label = document.getElementById("mask-toggle-label");
        toggle_label.innerHTML = "Activate Mask";
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

let option_button = document.getElementById("citation");
option_button.addEventListener("click", function(){
    chrome.tabs.create({url: "/citation.html"});
});

// make thing follow mouse first, make it a blue box that tracks the y position.
// Then when that works, you can make two more boxes that do it, plus and minus some arbritary value
// Then make those plus/minus offsets editable by the user and viola!


