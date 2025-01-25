function checkAnswer() {
    const feedbackElement = document.getElementById('feedback');
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    
    if (selectedAnswer) {
        const answer = selectedAnswer.value;
        
        if (answer === "milky way") {
            feedbackElement.textContent = "Correct! The name of our galaxy is the Milky Way.";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.textContent = "Incorrect! Try again.";
            feedbackElement.style.color = "red";
        }
    } else {
        feedbackElement.textContent = "Please select an answer.";
        feedbackElement.style.color = "orange";
    }
}
