var price;
var quantity;
var total;
var name = "Aliaksandra";

var colors = ["black", 'red', "green"];
var cars = new Array("Toyota", "Mazda", "BMW");


// calculations:
price = 5;
quantity = 12;
total = price * quantity;

var element = document.getElementById("price");
element.textContent = "$" + total;

var nameEl = document.getElementById("name");
nameEl.textContent = name;

var elColor = document.getElementById("color");
elColor.textContent = colors[0];

var twoColors = document.getElementById("two");
twoColors.innerHTML = colors.length + " " + colors[2];

var elCars = document.getElementById("car");
elCars.innerHTML = cars[1];