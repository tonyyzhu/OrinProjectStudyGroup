$(document).ready(function() {
    $('body').append("<p>I'm a paragraph!</p>");
});

/*
// Below is the same as above statement; which is to add () content to be the last child of parent element;

$(document).ready(function() {
    $("<p>I'm a paragraph!</p>").appendTo('body');
});
 */

// Also ".prepend()" and ".prependTo()" function, that would add the content to be the first child of the parent element;

$(document).ready(function() {
    $('body').after("<p>This is another inserted paragraph!</p>");
});

// '.before()' has same usage: just add tags inside (), no need to use '.append()' etc anymore.
