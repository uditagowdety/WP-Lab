// Select the text element
const textElement = document.getElementById("text-display");

// Function to animate the text size
let fontSize = 10; // initial font size in pt
let increasing = true; // Flag to track the direction (increasing or decreasing)

// Function to handle font size changes
function animateFontSize() {
    if (increasing) {
        // Increase font size and change color to red
        fontSize += 2;
        textElement.style.fontSize = fontSize + 'pt';
        textElement.style.color = 'red';

        if (fontSize >= 40) {
            increasing = false;  // Switch to decreasing when font size reaches 40
            textElement.innerText = "FONT---";  // Change the text
        }
    } else {
        // Decrease font size and change color to blue
        fontSize -= 2;
        textElement.style.fontSize = fontSize + 'pt';
        textElement.style.color = 'blue';

        if (fontSize <= 5) {
            increasing = true;  // Switch to increasing when font size reaches 5
            textElement.innerText = "FONT+++";
        }
    }
}

// Call the animateFontSize function every 200ms
setInterval(animateFontSize, 200);
