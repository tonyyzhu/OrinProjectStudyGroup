// This is my study notes going through Javascript 101 Assignment 1, going through Codecademy's Javascript Section 1-5.
// 12/8/14: There are really something interesting here, that I never came across before.

Treat Text as Array
-------------------------------

- Check out the following example: treat a string like an array of characters:
    /*
    var myArray = ['hello', 'world'];
    myArray[0];    // equals 'hello'

    var myName = 'Eric';
    myName[0];      // equals 'E'
     */
    


FOR Loop: used when there is a clear start point and clear stop point, with a clear step number
--------------

for (var i = start; i < end; i++) {
    // do something;
};      // could be i--, or i+=x, or i-=x;

/*
var myName = 'Eric';
for (var i=0; i < myName.length; i++) {
    console.log(myName[i]);
 };
 */

WHILE Loop: used when you don't know in advance when to stop looping
----------

while (condition) {
    // do something!
};     

/*
var a = 1;
while (a) {
    console.log("Looped Once using while loop!");
    a--;
};
*/

- As long as condition is 'true' (or '1' if using number), the loop will continue to run. When 'false' or '0' loop will stop/end.
- Make sure condition would be changed, to stop infinite looping! Always include a way to change the condition inside the while loop.
- Make sure to set up condition as 'true' or '1' outside of the while loop (before the while loop actually)
- I actually found that '1' == 'true' & '0' == 'false' are new & interesting! Use i=1 and then i-- inside loop is much easier than boolean value assignments!
- The loop could be never run due to condition pre-setup is 'false'.

Do..While Loop: the loop will run at least once before checking the condition
---------------------

/*
var loopCondition = false;

do {
    console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");    
} while (loopCondition);
 */

/*
var getToDaChoppa = function(){
  var a = 0;
  do {
      console.log ("This loop will run at least once, because condition is checked after first looping!!!");
  } while (a);
};

getToDaChoppa();
 */

Examples of three looping statements
--------
/*
for (var i=1; i<3; i++) {console.log("Using for loop to print twice...")};
var a = 1; while (a) {console.log("Using while loop to print only once here..."); a--;};
do {console.log("Using do-while loop to print before even checking condition as false!")} while (a);
 */

The following statements allow one string occupy multi lines, using '\'
------------------------------------------------------------------------------------------------

/*jshint multistr:true */


