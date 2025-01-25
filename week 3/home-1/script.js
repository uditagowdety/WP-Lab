const textElement = document.getElementById("text-display");

let fontSize = 10; 
let increasing = true; 

function animateFontSize() {
    if (increasing) {
        fontSize += 2;
        textElement.style.fontSize = fontSize + 'pt';
        textElement.style.color = 'red';

        if (fontSize >= 40) {
            increasing = false;  
            textElement.innerText = "FONT---";  
        }
    } else {
        fontSize -= 2;
        textElement.style.fontSize = fontSize + 'pt';
        textElement.style.color = 'blue';

        if (fontSize <= 5) {
            increasing = true;  
            textElement.innerText = "FONT+++";
        }
    }
}

setInterval(animateFontSize, 200);
