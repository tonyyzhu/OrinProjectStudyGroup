Codecademy JQuery Course
========================

- Example of jQuery new functions: mouseenter &. mouseleave; animate; toggle;
    /*
    // index.html
    <!DOCTYPE html>
    <html>
        <head>
            <link rel="stylesheet" type="text/css" href="stylesheet.css"/>
            <script type="text/javascript" src="script.js"></script>
        </head>
        <body>
            <div id="red"></div>                        // "div" tag has no inline text - red block is defined by CSS;
            <div id="blue"></div>
            <div id="yellow"></div>
            <div id="green"></div>
        </body>
    </html>

    // stylesheet.css
    div {                                           // This defines block of 100px x 100px;
        height:100px;
        width:100px;
        display: inline-block;
    }

    #red {
        background-color:#FF0000;
    }

    #blue {
        background-color:#0000FF;
    }

    #yellow {
        background-color:#E2BE22;
    }
    #green {
            background-color:#008800;
        }

        // script.jsfa
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
     */

- $(document).read():        It is usually a "function() { // do sth }" added into that (), which is called 'Events'
    Next, we'll need to start up our jQuery magic using the $(document).ready(); syntax you've seen. It works like this:

    $() says, "hey, jQuery things are about to happen!"
    Putting document between the parentheses tells us that we're about to work our magic on the HTML document itself.
    .ready(); is a function, or basic action, in jQuery. It says "hey, I'm going to do stuff as soon as the HTML document is ready!"
    Whatever goes in .ready()'s parentheses is the jQuery event that occurs as soon as the HTML document is ready.
    So,

    $(document).ready(something);
    says: "when the HTML document is ready, do something!" (We'll show you how to replace something with an action in the next exercise.)

    Note that .ready(); ends with a semicolon. This tells jQuery that you're done giving it a command.

- A concise way to name a variable: var $p = $('p'); as if saying that variable $p contains a jQuery object 'p'.

- While there is .fadeOut(), there is also a .fadeIn() function that usually works on top of CSS 'display:none;' pair.

- Creating HTML Elements: Google Gchat - each message is actually a new <div> being dynamically added to the page. So, in theory, I should be able to write a IM program now, if I could add the backend messaging part  (using something such as Nodes.js) !!!



















