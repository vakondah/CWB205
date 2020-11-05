// Aliaksandra Hrechka
// 09/27/2020
// CWB 205
function check() {
    let input = document.getElementById("input").value;
    let output = document.getElementById("output");
    let sum = 0;

    if (input.length == 10) {

        let index = 10;

    for (var n = 0; n < input.length; n++) {
        
        sum += parseInt(input[n]) * (index);
        index--;
        }
        
        if (sum % 11 == 0) {

            output.innerHTML = "<p id='valid'>ISBN-10 number " + input +
                " is valid!</p>";
        }
        else {

            output.innerHTML = "<p id='danger'>ISBN-10 number " + input +
                " is invalid. Please, enter different ISBN number.</p>";
        }
    }

    else if (input.length == 13) {
        //alert("You entered 13-digits ISBN number.");
        for (var i = 0; i < input.length - 1; i++) {
            if (i % 2 == 0) {
                sum += parseInt(input[i]) * 1;
            }
            else {
                sum += parseInt(input[i]) * 3;
            }
        }

        let modulo10 = 10 - (sum % 10);
        
        if ((sum % 10) == 0 || modulo10 == input[12]) {
            
            output.innerHTML = "<p id='valid'>ISBN-13 number " + input +
                "  is valid!</p>";
        }
        else {
            output.innerHTML = "<p id='danger'>ISBN-13 number " + input +
                " is invalid. Please, enter different ISBN number.</p>";
        }
    }

    else {
        alert("ISBN number must be 10 or 13 digits.");
  }
}

