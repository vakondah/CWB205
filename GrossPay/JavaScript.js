function getInput() {
    hourlyRate = prompt("Enter rate: ");
    hours = prompt("Enter hours");

    grossPay = grossCalculation(hourlyRate, hours);
    
    var element = document.getElementById("result");
    element.textContent = "Gross Pay is: $" + grossPay;
    alert("Gross Pay is: $" + grossPay);
}

function grossCalculation(rate, hours) {
    return gross = rate * hours;
}

