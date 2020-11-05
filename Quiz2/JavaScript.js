$(document).ready(function () {

    var msg = "";

    $("#get").click(function () {
        $('ul a').each((index, el) => {
        msg += el.href + "<br>"});
    });

});