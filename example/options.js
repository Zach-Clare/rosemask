let page = document.getElementById("buttonDiv");
let selectedClassName = "current";
const presetButtonColours = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"];

//reacts to a button click by marking the selected buttona dn saving the selection
function handleButtonClick(event) {
    // remove styling from the previously selected colour
    let current = event.target.parentElement.querySelector(
        `.${selectedClassName}`
    );
    if (current && current !== event.target) {
        current.classList.remove(selectedClassName);
    }

    // Mark the button as selected
    let colour = event.target.dataset.colour;
    event.target.classList.add(selectedClassName);
    chrome.storage.sync.set({ colour });
}

function constructOptions(buttonColours) {
    chrome.storage.sync.get("colour", (data) => {
        let currentColour = data.colour;
        // For each colour we were provided...
        for (let buttonColour of buttonColours) {
            // create a button with that colour
            let button = document.createElement("button");
            button.dataset.colour = buttonColour;
            button.style.backgroundColour = buttonColour;

            // mark the currently selected colour
            if (buttonColour === currentColour) {
                button.classList.add(selectedClassName);
            }

            //and register a listener for when that button is clicked
            button.addEventListener("click", handleButtonClick);
            page.appendChild(button);
        }
    });
}

// init the page by constructing the colour options
constructOptions(presetButtonColours);