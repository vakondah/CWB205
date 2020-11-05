// Aliaksandra Hrechka
// CWB 205
// October 29, 2020
//Intro to jQuery
//Descriptionn: This program is a small shopping list
// that allows to add new list item, remove the old one by double clicking
// on the element, and toggle between two colors of the element by clicking on it.

$(document).ready(function () {


    // This function creates a new list item:
    $("#add").click(function () {
        $("#list").add("<p id='new'><input type='text' class='item' placeholder='New Item'/></p>")
            .appendTo(document.getElementById("list")
        );
    });

    // Toggling between two colors:
    $(".item").click(function () {
        $(this).toggleClass('yellow');
        
    });

    // TODO: toggling on dynamically added elements:
    //$("#list").on("click", ".item", function () {
    //    $(this).toggleClass('yellow');
    //});

       
    // This function removes hardcoded items from the list:
    $("p").dblclick( function () {
        $(this).slideUp();
        
    });

    // Removes new items from the list:
    $("#list").on("dblclick", "#new", function () {
        $(this).slideUp();
    });
});