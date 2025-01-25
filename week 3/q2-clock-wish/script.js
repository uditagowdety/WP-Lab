// Function to get the current hour and display an appropriate greeting
function getGreeting() {
    const currentHour = new Date().getHours();
    let greetingMessage;

    if (currentHour >= 5 && currentHour < 12) {
        greetingMessage = "Good Morning!";
    } else if (currentHour >= 12 && currentHour < 17) {
        greetingMessage = "Good Afternoon!";
    } else if (currentHour >= 17 && currentHour < 21) {
        greetingMessage = "Good Evening!";
    } else {
        greetingMessage = "Good Night!";
    }

    // Display greeting in the <h1> element
    document.getElementById("greeting").innerText = greetingMessage;

    // Show a dialog box with the greeting message
    alert(greetingMessage);
}

// Function to update the clock every second
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").innerText = timeString;
}

// Call the getGreeting function when the page loads
getGreeting();

// Update the clock every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);
