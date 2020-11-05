$(document).ready(function () {

    $("#breeds img").each((index, link) => {
        const image = new Image();
        image.src = link.src;

        $("#breeds img").click(function (event) {
            link = event.currentTarget;
        
            $("#large").attr("src", link.src);
            
            var ttl = $(this).attr("title");
            $("#headerTitle").text(ttl);
        });
    });
});