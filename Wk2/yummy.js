// Use JS and jQuery to add content to Web Page
$("#content").prepend("<h1>Welcome to Seafood Restaurant!</h1>");
$("h1").css("text-align", "center");
$("th#dish").onfocus = function() {
    $("img.#dish").toggle("show");
    $("img.#table").toggle("hide");
};

$("th#table").onfocus = function() {
    $("img.#table").toggle("show");
    $("img.#dish").toggle("hide");
};

//$("li").css("border", "3px, solid, yellow");
/*
$("#content").append();
$("#content").append();
*/