document.addEventListener("DOMContentLoaded", () => {

    $("#red").addEventListener("click", changeColor);
    $("#blue").addEventListener("click", changeColor);

});

function $(selector) {
    return document.querySelector(selector);
}

const changeColor = (e) => {

    // Add if caller in not null
    var caller = e.target.id;
    var stateColor = $("#state");
    if (caller == "red") {
        stateColor.className = "changeRed";
    }
    else {
        stateColor.className = "changeBlue";
    }
};







//const red = () => {
//    var color = $("#state");
//    color.id = "red";
//};

//const blue = () => {
//    var color = $("#state");
//    color.id = "blue";
//};