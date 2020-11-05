// Aliaksandra Hrechka
// CWB 205
// 08/18/2020

var score = 0;
var scores = [];

"use strict";
function inputScores() {
   
    while (score !== -1) {

        score = parseInt(prompt("Enter scores or -1 to quit:"));

        // Input restictions (0 - 100):
        if (score < -1 || score > 100) {
            alert("Score must be between 0 and 100");
        }
        else {
            scores.push(score);
        }
    }

    scores.pop();// removes the last element (-1) from array

    var element = document.getElementById("scores");

    // Printing scores:
    for (var i = 0; i < scores.length; i++) {

        element.innerHTML += scores[i] + " ";
    }
}

function calculateGrade() {

    let avg;
    let sum = 0;

    // Calculating average:
    let result = document.getElementById("result");
    for (var i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    avg = sum / (scores.length);

    

    // Letter grade calculation:
    let letterGrade = document.getElementById("letterGrade");
    let letter = "";

    if (avg >= 90) {
        letter = "A";
    }
    else if (avg < 90 && avg >= 80) {
        letter = "B";
    }
    else if (avg < 80 && avg >= 70) {
        letter = "C";
    }
    else if (avg < 70 && avg >= 60) {
        letter = "D";
    }
    else {
        letter = "E";
    }

    
    // Sorting array to find min and max values:
    let min = scores[0];
    let max = scores[0];
    let minScore = document.getElementById("minScore");
    let maxScore = document.getElementById("maxScore");

    for (var m = 1; m < scores.length; m++) {
        if (scores[m] < min) {
            min = scores[m];
        }
    }

    for (var n = 1; n < scores.length; n++) {
        if (scores[n] > max) {
            max = scores[n];
        }
    }

    // Printing results:
    result.innerHTML = "Average score: " + avg.toFixed(2);
    maxScore.innerHTML = "Maximum score: " + max;
    minScore.innerHTML = "Minimum score: " + min;
    letterGrade.innerHTML = "Grade: " + letter;
}


// This function just refreshes the page:
function clearBox() {
    window.location.reload();
}