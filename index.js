

$("#navBar img").on("hover", function(){
    if ($(this).hasClass("default")){
        $("img").replace("img", "images/logo with name sienna.png")
    }
    else if ($(this).hasClass("blue")){
        $("#theme").attr("href", "css/blue.css")
    }
});




$(function() {
    $("img")
        .mouseover(function() { 
            var src = $(this).attr("src").hasClass("default") + "images/logo with name sienna.png";
            $(this).attr("src", src);
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace("images/logo with name sienna.png", "logo with name.png");
            $(this).attr("src", src);
        });

});