$(document).ready(function() {
       $('div').mouseenter(function() {                 // mouseenter: mouse touched the block;
           $(this).animate({                                    // animate: height + 10px; next one - 10px;
               height: '+=10px'
           });
       });
       $('div').mouseleave(function() {                 // mouseleave: mouse left the area of the block;
           $(this).animate({
               height: '-=10px'
           });
       });
       $('div').click(function() {                          // if user click;
           $(this).toggle(1000);                            // toggle: if exists, disappear;
       });                                                           // it could also use '.fadeOut(1000)' to show its slow disappearance;
    });