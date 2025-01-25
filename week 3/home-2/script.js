function calculate(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    let result;

    switch (operation) {
        case 'sum':
            result = num1 + num2;
            break;
        case 'difference':
            result = num1 - num2;
            break;
        case 'product':
            result = num1 * num2;
            break;
        case 'quotient':
            if (num2 === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation.");
            return;
    }

    document.getElementById("result").innerText = "Result: " + result;
}
