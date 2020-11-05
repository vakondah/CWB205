// first, I am creating the function called "report" that will be called by clicking "Go" button.
function report() {

    var element = document.getElementById("cities"); /*Here I created a variable "element" 
     * that references the selection list with Id "cities".*/
    var choice = element.selectedIndex; /*Here I created a variable "choice" that indicates
     the index of the selected option*/


    var output = document.getElementById("output"); /*Here I created a variable "output"
     that references the div element with id "output"*/
    output.innerHTML = "<p>User's selection was: " + element.options[choice].label + "</p>"; /*Here I am 
     creating an output string that prints which selection was made by user. options is an array that contains 
     all options, choise - the index of the chosen option, and label is text that this option contains.
     Additionaly, using innerHTML property I created the new paragraph for output.*/
}