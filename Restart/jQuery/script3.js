$(document).ready(function() {
    $('div.pull-me').click(function() {
        $('div.panel').slideToggle('slow');
    });
});

// Pay attention to "});" -- each $('whatever').eventHandler() should always have a 'function() {}' inside,
// therefore you always see that "});"  instead of usual "};" here and there !!
// If not, it would report an error message "unexpected tag {", that means:
// You write something like $('whatever').eventHandler() { // so sth; }; which is not right!