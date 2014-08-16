/*
// This one works;
$(document).ready(function() {
    $('div#one').after("<p>This is inserted paragraph!</p>");
});

// below does not work - trying to move the paragraph from behind #1 to #2;
var $para = $(".container p");
document.write($para);
$('div#two').after($para);
*/

// correct answer!
// Then remove it -- It could also use '.empty()', but it is different if using on lists.
$(document).ready(function() {
    $('div#one').after("<p>This is inserted paragraph!</p>");
    $('div#two').after($('p'));
    $('p').remove();
    $('div#one').addClass('highlighted');
    // $('div#one').removeClass('highlighted');
});

// '.addClass()' and '.removeClass()' -- To take advantage of CSS definition for class 'highlighted';
// Also 'toggleClass()' has the same usage pattern;

