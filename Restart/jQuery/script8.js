// fade away without event handler;
/* $(document).ready(function() {
    $('div').fadeOut('fast');
}); */

// with event handler;
/* $(document).ready(function() {
    $('div').click(function() {
        $(this).fadeOut('fast');
    });
}); */

// Make it explod!
$(document).ready(function() {
    $('div').click(function() {
        $(this).fadeOut('fast');
    });
    $('div').hover(function(){
        $('div').addClass('red');
    });
});

// Other event handlers includes: dblClick();