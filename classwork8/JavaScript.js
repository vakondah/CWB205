function $(selector) {
    return document.querySelector(selector);
}



const calculate = () => {
    var grossPay;
    wage = $("#wage").value;
    hours = $("#hours").value;
    grossPay = wage * hours;
    alert(grossPay);
};

