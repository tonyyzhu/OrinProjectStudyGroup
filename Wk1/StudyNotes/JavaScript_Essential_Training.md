Core Concepts:
=========
Scripting Language that only works inside a Web Browser.
    It runs inside a web page, which is inside Web Browser, which is inside OS.
    If user disable JavaScript inside a browser, it will be sent to the browser but won't be executed.
It can't access local files (file system), hardware(or USB etc), or database via direct access.
It is a client-side language, that is pushed from server to end-user's Web Browser and then running there.
Program runs on the server is called Server-side language, or Back-end language, like PHP, RoR, ASP.Net etc.
It now also runs in Application side such as Adobe Acrobat or PhotoShop, or Server-side such as Node.js or Google Apps Script.

Languages and their intentions:
Windows Operating System written on C++. Mac OS X Operation System written on C.
M$ created C# for applications working on Windows. Apple created Objective-C for applications working on Mac OS X and IOS.
HTML/CSS/JavaScript are for web pages and web applications working inside a Web Browser. Just like VBA working inside M$ Office System, or Clarity Report working inside MYOB EXONET.

When we talking about learning something for programming, we really talking about is:
<li> A Language </li>
<li> All the frameworks learned with the language </li>
<li> All the patterns learned to be productive and effective </li>
<li> All the tools learned that go along with them </li>

JavaScript was written to support SMALL SNIPPETS of code to modify the DOM state,
in express tiny little event handlers. It does that very, very well. But, outside of this scope,
it is not type safe(barely knows about types), horribly easy of hijack code,
and even accidentally make functions vanish. It has minimal error reporting.


History:
It was developed in 1995 called LiveScript, then renamed as JavaScript in 1996 (implemented inside NetScape2).
IE3 did JScript (M$ version). In 1997, Netscape submitted it to ECMA and becomes ECMAScript as standard.
1999 EcMAScript 3 published has been universally supported, and becomes the web standard everyone uses even now.
2009 ECMAScript 5 published but still not fully supported by various browsers, and still backwards compatible with 3.
But People always call it JavaScript instead of ECMAScript.

It was initially created for server-side scripting, not client-side scripting as now. But Netscape Server is not popular at all,
and no one actually used it that way at all, so this purpose was soon forgotten, but still remains active inside Mozilla's codebase;
just buried there without many people know about the features. Until Node.js and Common.js comes out. On the other hand,
client-side scripting was booming and developed quickly, as well as hugely popular and successful, which becomes its trade mark.


Tools:
Just Text Editor is enough; such as  Sublime Text Editor I am using.
Aptana Studio 3.4 recommended and installed by me, but has TouchPad Right Botton issue appear and disappear.
It is free and available on all kind of platforms. Including debug feature, Git feature, and Publish to Web Server feature.
Also installed Firebug to latest Firefox Browser, as one of two major tools used here, for debuging and stepping tools.
It also can allow user to directly execute JavaScript programs without using a web page. (Enable Console Panel &. Command Editor Panel)


// Authoritive Reference Guide: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
==========================================================
// These guys @ Mozilla 'owns' the language...
-------------------------------------------------------------------


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


// Type of Variables:

<li> Arrays using [], which is zero-based index </li>
var multipleValues1 = []; // Most common way to define an Array, but not the only way.
multipleValues1[0] = 50; multipleValues1[2] = 60; multipleValues1[3] = "Mouse"; // Assign values to the Array.
var multipleValues2 = [50,60,"Mouse"]; // Define the Array with value of slots included. But the length of the Array is still dymatic by default.
var multipleValues3 = new Array();  // initialize the variable as an object, which is an Array;
var multipleValues4 = Array();  // This is also OK. The slots inside Array are dymatic , as much or little as you want them to be.
var multipleValues5 = Array(5); // Defined that only 5 slots inside the Array. No more no less. The value of a slot would be 'undefined' before assignment.

console.log(multipleValues5.length); // the result would be 5;   // The highest index number is 4, because it is zero-based.

// Array also has methods (as usual object do), like .reverse(), .join(), .sort(), etc;
/* Examples:
var multipleValues2 = [50,60,"Mouse"];                  // Assignment of [50,60,"Mouse"];
var reverseValue = multipleValues2.reverse();      // Reversed the slot positions;
console.warn(reverseValue);                                 // ["Mouse",60,50]
console.info(multipleValues2);                              // ["Mouse",60,50]
var joinValue = multipleValues2.join();                 // Join function is to join all the strings together;
console.log(joinValue);                                         // Mouse,60,50
console.info(multipleValues2);                             // ["Mouse",60,50]
var sortValue = multipleValues2.sort();                 // sorting:
console.log(sortValue);                                         // [50,60,"Mouse"]
console.info(multipleValues2);                              // [50,60,"Mouse"]
*/

/* Arrays are everywhere and you can't escape it.
var myArrayOf Links = webPage.getElementsByTagName("a");
// return all links of <a href= ...> inside the Array;
*/

// Type of Numbers: All JavaScript numbers are internally stored as 64-bit floating point numbers,
// so you don't have to diffenciate between the type of numbers like in other language (such as int, float, ...,  etc).
// However it could cause issues using floating in financial calculations, but in reality no one would use it to do client-side large financial calculations.
// So it is safe to use it for usual average calculations. {As long as it is not too funcy..}

/* Addition vs. Concatenation

// Example 1: All numbers:
var foo = 5, bar = 5; console.log(foo + bar);                   // result: 10

// Example 2: All strings:
var foo = "5", bar = "5"; console.log(foo + bar);             // result: 55

// Example 3: Mixed types:
var foo = 5, bar = "5"; console.log(foo + bar);                // result: 55 -- If one is string, both are treated as strings

// Example 4: Mixed types but multiply:
var foo = 5, bar = "5"; console.log(foo * bar);           // result: NaN (Special meaning of "Not an Number")
// In this case, bar could also be "abc" or sth else.

// Example 5: Call method Number() to turn a string to be a number.
var foo = "55", bar = "abc";
var myNumber1 = Number(foo); console.log(myNumber1);            // result: 55
var myNumber2 = Number(bar); console.log(myNumber2);            // result: NaN

if (isNaN(myNumber2)) {
    console.info("It is not an number!");
}

if (!isNaN(myNumber1)) {
    console.info("It is an number! And I use double negative to make this condition to be TRUE !!!");
}
// because there was no much function as 'isNumber', so we have to get creative to use 'if not not a number' or  '!isNaN' to do the checking

// Example 6: Use Math Object and its many Methods:
var a = 200.6, b = 300.1, c = 400;
var x = Math.round(a); console.log(x);          // result: 201
var y = Math.round(b); console.info(y);         // result: 300
var biggest = Math.max(a,b,c); console.info(biggest);           // result: 400
var smallest = Math.min(a,b,c); console.log(smallest);          // result: 200.6
// Also other Methods like: Math.PI; Math.random(); Math.sqrt(); Math.log(); etc. Check out "http://www.w3schools.com/jsref/jsref_obj_math.asp"
*/


// String Type:

var myString1 = "Don't mix up single quote and double quote, and don't cause confusion. Use each sign only is fine";
var myString2 = "In case you have to say: \"I have to use double quotes here. \" You have to add '\' in front of double quote to avoid confusion.";

// String is an object and has properties and methods:

console.log(myString1.length);                          // result: 97
console.info(myString1.toUpperCase());              // all letters converted to upper case;         // Also: toLowerCase() method as well;
var myString3 = "This is a single phrase."
var x = myString3.split(" ");                               // Split by space as " ";
console.warn(x);                                                // result: ["This","is","a","single","phrase."]
console.info(myString1.split(" "));                     // Same type of result as above, and "Don't" are treated as single word inside the array.
console.info(myString1.indexOf("single"));      // result: 13

// What if can't be find from that string at all? It would return: -1
if (myString1.indexOf("trible") == -1) {
    console.warn("This word does not exist in that phrase !");
}

// There is also a method of .lastIndexOf(), when a word occur multiple times inside a phrase.

// Other methods like .subStr, .subString, .slice():            <The Teacher is wrong. Research on .slice(beginning position, ending position); and get it right>
console.warn(myString3.indexOf("single"));              //result: 10
var x = myString3.slice(10,17);                                 // Start: 10, end: 17, all positions inclusive.
console.info(x);                                                          // result: single
console.warn(myString3.substr(10,6));                     // result: single         // (begining position, length)
console.error(myString3.substring(10,17));              // result: single         // (start, end)   ==> same as .slice(), but default condition checking etc are different

// String Comparison
var st1 = "Hello", st2 = "hello";  // st1 != st2;
if (st1.toLowerCase() == st2.toLowerCase()) {
    console.info("They are for same meaning, or 'equal' if that's what you mean!");
}

// when comparing 2 strings, it just compares the first letter by ASCII value. so 'A' <'Z' < 'a' <'b'. st2 > st1.


// Type Date as well as Object Date, with its methods etc:
var today = new Date();             // current date and time;
var y2k = new Date(2000, 0,1);          // result:  1/1/2000        : Notice that month is zero-based; date returns 1~31.
var y2k = new Date(2000,0,1,0,0,0);         // result:   Date {Sat Jan 01 2000 00:00:00 GMT+1100 (EST)}  ==> (year, month, date, hour, minute, second)
console.log(today.getMonth(), today.getFullYear(), today.getDate());            // result: 6 2014 13  (mth, yr, day) --> [Today is 13/7/14] -- mth is 0-based..
console.error(today.getYear());                 // result: 114  ---> This one is should not be used, because under certain case it would return wrong results.
console.info(today.getDay());                   // result: 0  (as Sunday. It is 0 ~ 6, which is from 'Sunday' to 'Saturday')
console.info(today.getHours());                 // result: 19 (Now is 19:16. BTW, getHours() returns 0~23, another zero-based one)
console.info(today.getTime());                  // result: 1405242934878    ===> Which is the milliseconds since 1/1/1970 00:00:00.
// .getTime() is the most useful one in this catalogue. It is the best way to compare time.

today.setDate(14);                          // set Day of month is 14;
today.setFullYear(2000);                 // set year to 2000;
today.setDay(0);                             // set Day of week to Sunday;

// consider how to compare dates here: They are objects, and different objects have same value are still different objects!
var date1 = new Date(2000,0,1);
var date2 = new Date(2000,0,1);
if (date1 == date 2 ) {...}             // always FALSE !!! --> THEY ARE DIFFERENT OBJECTS!
if (date1.getTime() == date2.getTime()) {...}           // always TRUE --> getTime() returns a value, which are the same here;







