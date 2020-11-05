"use strict";
function getScores() {
    
    let score = 0;
    let num = 0;
    let arr = [];
    let avg;
    while (score !== "-1") {
        
        score = prompt("Enter score or -1 to quit:");
        arr.push(score);
        num++;
    }

    var element = document.getElementById("num");
    var element2 = document.getElementById("num2");

    for (var i = 0; i < arr.length - 1; i++) {
        
        element.innerHTML += arr[i] + " ";
    }

    element2.innerHTML = "You have entered " + (num - 1) + " scores.";


    
    
}
