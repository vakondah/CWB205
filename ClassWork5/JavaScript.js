function report() {
    //var selRef = document.getElementById("cars");
    //var choice = selRef.selectedIndex;
    //alert(selRef.options[choice].label);

    elements = document.getElementsByName("gender");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
            alert("Gender is " + elements[i].value);
        }
    }

    //alert(elements);
}