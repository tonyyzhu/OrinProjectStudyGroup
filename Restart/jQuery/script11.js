$(document).ready(function() {
    $(document).keydown(function() {
        $('div').animate({left: '+=10px'}, 500);
    });
});

/*
Here are my notes:
1. Keydown should work on the whole document or the current window, not on individual div
2. Animate needs to check further to understand its usage;
3. '.focus()' event handler only works on elements that can receive focus, such as <textarea>, <input> etc.
 */