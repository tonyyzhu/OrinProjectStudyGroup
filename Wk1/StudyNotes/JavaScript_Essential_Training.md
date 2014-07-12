Core Concepts:
Scripting Language that only works inside a Web Browser.
    It runs inside a web page, which is inside Web Browser, which is inside OS.
    If user disable JavaScript inside a browser, it will be sent to the browser but won't be executed.
It can't access local files (file system), hardware(or USB etc), or database via direct access.
It is a client-side language, that is pushed from server to end-user's Web Browser and then running there.
Program runs on the server is called Server-side language, or Back-end language, like PHP, RoR, ASP.Net etc.
It now also runs in Application side such as Adobe Acrobat or PhotoShop, or Server-side such as Node.js or Google Apps Script.

History:
It was developed in 1995 called LiveScript, then renamed as JavaScript in 1996 (implemented inside NetScape2).
IE3 did JScript (M$ version). In 1997, Netscape submitted it to ECMA and becomes ECMAScript as standard.
1999 EcMAScript 3 published has been universally supported, and becomes the web standard everyone uses even now.
2009 ECMAScript 5 published but still not fully supported by various browsers, and still backwards compatible with 3.
But People always call it JavaScript instead of ECMAScript.

Tools:
Just Text Editor is enough; such as  Sublime Text Editor I am using.
Aptana Studio 3.4 recommended and installed by me, but has TouchPad Right Botton issue appear and disappear.
It is free and available on all kind of platforms. Including debug feature, Git feature, and Publish to Web Server feature.
Also installed Firebug to latest Firefox Browser, as one of two major tools used here, for debuging and stepping tools.
It also can allow user to directly execute JavaScript programs without using a web page. (Enable Console Panel &. Command Editor Panel)

Structure:
JavaScript is Case Sensitive!
Each JavaScript should be ended by ";",
and one statement one line(to make it readable, but people could intentionally doing it oppositely).
It is a forgiving language (same as HTML, that you can forget </p> and it still works. But, it is open to different browsers to inteprete to different meanings)
If you forgot ";" it still works, but sometimes it could go wrong.
It is whitespace insensitive, you could even put one statement into many lines to increase readability.
Comments can be used by add "//", or "/* whatever inside*/"(mostly used for testing, to comment out large chunk of code to narrow issue down)

Where to place the JavaScript:
It is better to separate JavaScript from HTML, not to use inline codes. Otherwise it is hard to read and maintain, as well as duplication when reused.
It is better to place it at the bottom of the body (before </body>), so that it won't stop loading the webpage due to "alert" etc.
<script src="myScript.js" type="text/javascript"></script>  -- But: type can be omit - HTML5 default to javascript.
The type also can be used by change 'javascript' to be 'ecmascript', or change 'text' to 'application'.
Best Practice: Stylesheet at the top, JavaScript at the bottom of the page.

Variables:
    var date, year=2014, month=July, day=11;
Always use 'var' as best practice, although it could be omitted. (it would automatic create a new variable when the system didn't find a variable has the exact name)
Variable name could be letter, number, $, or '_', without space in between. But, you can't start with a number and then continued with letters.
So 'Number99' is ok, but '99number' is not. Also it is case sensitive, so 'x' is not 'X' (they are two separate variables).
In above statement, value of 'date' is 'undefined'; 'year' is '2014', 'month' is 'July', and 'day' is '11'.
'=' is 'assign a value to an variable'. The type of variable will be assigned when the value is assigned to it.
So '200' would set it to int, 'true' or 'false' set it to boolean, ' "Hello" ' will set it to string.


Conditional statements:

if (condition) {
    //statements here;
} else {
    //another statements here;
}

(  parenttheses )
[ brackets ]
{ braces / curley braces}
'condition' has to be 'true' or 'false'.  (such as b>20, c==30, d===40, e!=10)
'==' or '===' check if they are equal
'!=' check not equal
Inside {} are 'code block', use the braces to group the code statements together, and they can be nested as well.
<Optional: Technically, if you just got one line inside the { }, you don't need {}. But, it is better to have it, even when you don't really need it technically.>
<Common mistake: if (a=b) { // Always true!; }  ==> should be (a==b) instead! >

Operators and Expressions:

Arithmetic Operators: + - * /
Assignment: =
Comparision operator: <, <=, >, =>, == (equality comparision operator), ===(strict equality comparision operator, <not only equal but also identical> <Good habit to always to use ===> )
Shorthand: 'score=score+10' can be write as 'score += 10'; same as '-=', '*=', '/='.

/*  Example of '==' and '===':

var a = 5;
var b = "5";

if (a==b) {
    alert("They are EQUAL");
}
else {
    alert("They are NOT Equal");
}

The result is equal. Change '==' to '===', result is NOT equal.
*/


Logical Operator:
and: &&
or: ||

Modulus:

/*
var year = 2003;
var reminder = year % 4; // reminder = 3
*/

Increase/Decrease:

/*
a = a+1;
a +=1;
a++;  (only increase by 1 each time)
++a;  (also ok as above line)
*/

/* another example is: a--; or --a; all means a = a-1; or a -=1; */
/* prefix / postfix issue:
var a = 5;
alert(++a);   //6: do '++a' before 'alert'; now a === 6;
alert(a++);  //6: do 'alert' before doing 'a++'; so alert is '6'. Then do 'a++' and now a===7; It is very confusing issue that should be avoided.
So usually they are only used inside their own statements by themselves, so that it does not cause bugs etc.

// Better code for testing below, added on later:
var a = 5;
console.warn(++a);   //6: do '++a' before 'alert'; now a === 6;
console.info(a);
console.error(a++);
console.log(a);
*/


Ternary Operator (all above are binary operators, which works on left and right side of the operator only.):

condition ? true : false

/* example:
var PlayerOne = 500, PlayerTwo = 600, HighScore;
HighScore = (PlayerOne > PlayerTwo) ? PlayerOne : PlayerTwo ;

// It equals to:
if (PlayerOne > PlayerTwo) {
    HighScore = PlayerOne;
}
else {
    HighScore = PlayerTwo;
}
*/


Console.log is not part of JavaScript language, but an addon that is accepted by most browsers, as an useful tools to debugger:

/* instead of:
    alert("Hello World");
    alert("This is Tony")
use:
    console.log("Hello World", "This is Tony");
*/

//also can change it to be 'console.info', 'console.warn', 'console.error'; all the same thing as message appearing on console, but becomes different type of message with different icon in front of it.

It has to be seen using JavaScript console, such as Firebug inside Firefox browser. Also be used in IE & Chrome now.


Loop:

// While Loop, just like if() but repeated many times until condition meet:
var a = 1;
while (a<10) {
    console.log(a);
    a++;
}

//Do-While Loop, which will execute the inside statements at least once before checking conditions, which is rarely used:
var a = 1;
do {
    console.log(a);
    a++;
} while (a<10);

// For Loop: for (set up index; checking condition; increment index) {//statements;}:
for (var a=1; a<10; a++) {
    console.log(a);
}

//Break: break jumps out of the loop:
for (var a=1; a<10; a++) {
    console.log(a);
    if (a==5){
    break;
    }
    // could have more statements here to do staff;
}

/*
for (var a=1; a<10; a++) {
    console.log(a);
    if (a==5){
    break;
    }
    console.info("Just passed Break Statement, and doing second console info now");
}
console.warn("All Done");
//result: no console info after 5, then warning message of "All Done".
 */

//Continue: continue jumps back to condition checking again without doing second set of staff:
for (var a=1; a<10; a++) {
    // do first set of staff
    console.log(a);
    if (a==5){
    continue;
    }
    // do second set of staff
   console.info("Just passed Continue Statement");
}

/*
for (var a=1; a<10; a++) {
    console.log(a);
    if (a==5){
    continue;
    }
    console.info("Just passed continue Statement, and doing second console info now");
}
console.warn("All Done");
// result: console info after 5 is not showing, but back to normal from next (6) onwards to 9 - then warning message of "All Done".
 */

//Function Statements: function name(parameters) {statements; even nest if() statement, loop or even another function etc; and/or return statement}.
//Sometime later, name(parameters) will call the function to be executed, which could be repeated calls here and there.
//Function statements won't run unless explicitely called

// Best practice: Define your functions before calling them. You don't have to, but doing so will make them more readable.

/* Common Mistake: Parameter Mismatch
function loanCalculator(amount, month, interestRate, name) {
    //do something here;
}

var interestThisMonth = loanCalculator(100000, 60, 7, "Fred Smith");
//This one is correct example;

console.log (loanCalculator(100000, 60, 7, "Fred Smith", "ExtraParameter"));
//"ExtraParameter" is ignored in JavaScript language here, and function working fine.
//Unlike some other languages that will break the code, it will still works.

console.log (loanCalculator(100000, 60));
//Now both 'interestRate' and 'name' parameters are missing, and just be assign the value of 'undefined';
//If your function can't deal with 'undefined' value, the function code will be broken. Otherwise it will still work as expected.

*/

//Variable Scope: variable defined inside a function is called Local Variable, that only exists inside that function.
//Try to access that variable name outside of the function will return "undefined" value.
//Alternative is to define the variable outside of the function, which is now called Global Variable,
//that can be simply used (quote or assign the value) inside the function, or used outside of the function (passing the value from inside the function to outside).


