// Use JS and jQuery to add content to Web Page
$("#content").prepend("<h1>Welcome to Seafood Restaurant!</h1>");
$("h1").css("text-align", "center");
$("dish").click(function() {
    $("img.#dish").toggle('slow');
});
$("table").onfocus = function() {
    $("#image").append("<img src="./img/location2.jpg" align="absbottom" />");
};
//


//$("li").css("border", "3px, solid, yellow");
/*
$("#content").append();
$("#content").append();
*/