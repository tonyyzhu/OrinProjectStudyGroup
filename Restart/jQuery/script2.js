$(document).ready(function() {
    $('div').mouseenter(function() {
        $('div').fadeTo('fast', 1);
    });

    $('div').mouseleave(function() {
        $('div').fadeTo('fast', 0.5);
    });
});

// So the mouse over the button, it increases to 100% opacity, mouse leave will return it to its original 50% opacity. Clever and Attention-seeking!
// fadeTo also can use 0.25 (25% of its original opacity, or whatever % you like) for appearance of another end;
// or use hide() that requires no parameters, (but worst appearance or UX).