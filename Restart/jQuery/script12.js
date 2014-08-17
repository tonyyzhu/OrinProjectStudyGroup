$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
            // Left arrow key pressed
            case 37:
                $('img').animate({left: "-=10px"}, 'fast');
                break;
            // Up Arrow Pressed
            case 38:
                $('img').animate({top: "-=10px"}, 'fast');
                break;
            // Right Arrow Pressed
            case 39:
                $('img').animate({left: "+=10px"}, 'fast');
                break;
            // Down Array Pressed
            case 40:
                $('img').animate({top: "+=10px"}, 'fast');
                break;
        }
    });
});

/*
// Alternatively, use jQuery-UI library and try explode effect:
$(document).ready(function() {
        $('head').append('<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>');
        $('div').click(function() {
            $(this).effect('explode');
        });
 });

 // Change effect to bounces 3 times in 500 milliseconds or half of a second, just replace:
            $(this).effect('bounce', {times:3}, 500);
// Change to slide:
            $(this).effect('slide');
 */