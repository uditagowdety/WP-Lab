// Function to calculate the grade based on average marks
function calculateGrade() {
    // Get the marks entered by the user
    const subject1 = parseFloat(document.getElementById("subject1").value);
    const subject2 = parseFloat(document.getElementById("subject2").value);
    const subject3 = parseFloat(document.getElementById("subject3").value);
    const subject4 = parseFloat(document.getElementById("subject4").value);

    // Check if all fields are filled in
    if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3) || isNaN(subject4)) {
        alert("Please enter valid marks for all subjects.");
        return;
    }

    // Calculate the average marks
    const average = (subject1 + subject2 + subject3 + subject4) / 4;

    // Display the average marks
    document.getElementById("average").innerText = "Average Marks: " + average.toFixed(2);

    // Determine the grade based on the average
    let grade = "";

    if (average > 90) {
        grade = "Grade: A";
    } else if (average > 80) {
        grade = "Grade: B";
    } else if (average > 70) {
        grade = "Grade: C";
    } else if (average > 60) {
        grade = "Grade: D";
    } else {
        grade = "Grade: F";
    }

    // Display the grade
    document.getElementById("result").innerText = grade;
}
