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

function followMouse() {
    let mask = document.getElementById("mask");

    const mouseMove = (e) => {
        mask.style.top = e.pageY + 'px';
    }

    document.addEventListener('mousemove', mouseMove);
}

// make thing follow mouse first, make it a blue box that tracks the y position.
// Then when that works, you can make two more boxes that do it, plus and minus some arbritary value
// Then make those plus/minus offsets editable by the user and viola!


