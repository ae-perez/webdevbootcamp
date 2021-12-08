//alert("The js file is linked!");
//$("h1").css('color', '#34A87C');

/*$("h1").click(function() {
    $("h1").css("color","purple")
});*/

/*$("button").click(function() {
    $("h1").css("color", "purple")
});*/

/*$("input").keypress(function(event) {
    $("h1").text(event.key);
})*/

$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});