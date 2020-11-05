//Aliaksandra Hrechka
//September 10, 2020
//CWB 205
"use strict";
function CalculateFutureValue() {
    let initialAmount = parseFloat(document.getElementById("amount").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let years = parseFloat(document.getElementById("years").value);

    let newAmount = initialAmount;

    
    for (var i = 0; i < years; i++) {
        newAmount += newAmount * rate / 100;
    }

    let result = document.getElementById("output");
    result.textContent = "Your initial investment of  " + initialAmount +
        " after "+ years + " year(s) will be: $ " + newAmount.toFixed(2);
}
