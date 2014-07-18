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


// Object Creation:

/*
// instea of using variables such as below:
var playerName ="Smith", playerScore=1000, playerRank=1;
// We can now create a object and use internal properties:
var player = new object();                      // Create an empty container and call it 'player';
player.name="Smith"; player.score=1000; player.rank=1;          // add things into the container for both name/label and values;
// Also can do it using shorthand way as below:
var player = {name: "Smith", score:1000, rank:1};                    // Object use {} and name:value peer;  Array use [] and just value ==> This is important!
 */

// Object Method, Association, and Call:

/*
var player1 = {name: "Smith", score:1000, rank:1}, player2 = {name:"Fred",score:800,rank:5};    // define objects, which also looks like rows of a table?

function playerDetails() {                                                                                                                   // use function to define methods, common way to use objects;
    console.log(this.name + " has a rank of: " + this.rank + "; and has a score of: " + this.score);    // use 'this' because the object is not defined or passed in here;
}

player1.showDetails = playerDetails;        // because there is no '()' at the end, it is not a call of the object yet; just 'associate' the object 'player1' to the method
player2.showDetails = playerDetails;        // just 'associate' the object 'player2' to the function/method

player1.showDetails();                              // Call the method for the object 'player1', using '()' next to the object's property or associate
// result: "Smith has a rank of: 1; and has a score of: 1000"
player2.showDetails();                              // Call for 'player2' details
// result: "Fred has a rank of: 5; and has a score of: 800"

// It appears quite loose when using OO in Javascript here, because it is enough to get most things done for simple scripting.
// and it is adequate to do most important task of JS here: work with the window object and the document object.
 */


// DOM: The Single Most Important skill for Javascript programmer is to understand DOM, and how to use JS to do things inside DOM.

/*
// Document Object Model (DOM) can be considered as a tree structured objects (could also be called nodes), an idea or an agreed-upon terminalogy
                                    HTML (document)
                                    /                        \
                            HEAD                        BODY
                                |                           /    |    \
                            TITLE                      h1  p    ul
                                                                     /  |  \
                                                                   li   li   li
*/

// Nodes and elements: Officially there are 12 node types available: https://developer.mozilla.org/en-US/docs/Web/API/Node
// JS focus on the first 3 node types: Element, Attribute, Text,

/*
<ul id="optionList">
    <li>This is the first option</li>
    <li>This is the second option</li>
    <li>This is the third option</li>
</ul>

Element nodes: 'ul', 'li';          // All Tags, but it does not contain texts. BTW, the whole section can also be treated as one element node.
Attribute node: 'id="optionList"';
Text nodes: 'This is ...'
*/


// Working with DOM: Make sure the element is unique

//Example 1:    document.getElementById("someId");              // The most commonly used method of DOM;  --> pay attention to 'Id'
var myElement = document.getElementById("optionList");
// This will lead me to <ul id="optionList"> tag, that I can then navigate upwards or downwards, CRUD things from that handle point on.

// Example 2: document.getElementsByTagName("a");         // Second most commonly used one;  --> pay attention to 'Elements'
var myOptionList = document.getElementsByTagName("li");
// This will create an Array of my option lists. Again that I can start to CRUD things from these handle points
// if "li" was replaced by "a": because "a" tag does not exist here, an empty Array will be created instead.
// But no handle point and therefore nothing can be done inside the document.

// Example 3:
// Method .getAttribute("name") will show you the value of that attribute name is.
// Method .setAttribute("name","value") will update the value of that name; and if that name doesn't exist yet, it will create its name &. value.
/*  var mainContent = document.getElememtById("mainContent"); mainContent.setAttribute("align","right");     */
// It would make mainContent's internal HTML to align to right side on webpage (when user's browser presenting it). Usual habit is to align to left by default

// Create DOM Content:
<li>Create the Element</li>
<li>Add it to the Document</li>
/*
<ul id="optionList">
    <li>This is the first option</li>
    <li>This is the second option</li>
    <li>This is the third option</li>
</ul>
var myList = document.getElementById("optionList");             // define myList as the <ul>, so that I can add one more <li> under it, appended as last option

var myNewElement = document.createElement("li");                // create object 'myNewElement' as a <li> object
myList.appendChild(myNewElement);                          // append it under <ul> as <li> object. Now this tag has been added into the DOM tree under <ul>
myNewElement.innerHTML = "This is new option";        // Add text into the <li></li> tag. --> pay attention to 'innerHTML'  :: JS is case-sensitive;
// Optional: another way to assign innerHTML is to create TextNode instead:
var myText = document.createTextNode("This is new option");
myNewElement.appendChild(myText);                       // It reachs the same result as using innerHTML method;

// Alternative method: .insertBefore(newElement,existingElement);           // so that provide more flexibility of where the new element will be added;
var myNewElement = document.createElement("li");
var secondItem = document.getElementsByTagName("li")[1];            // This turns identify the second option list item, because array starts from 0;
myList.insertBefore(myNewElement,secondItem);                       // Insert before second item, so that it becomes 2nd item itself.
// next step is as usual, add text into this <li> object; using one of two methods above.
 */


// Working With Events:
// Events are things happening at client-side. You just need to decide what event you care about,
// and then programing the action for them, or called 'handle' or 'listen' to that event you care.
// So these methods typically have names like: onclick, onmouseover, onblur, onload, onfocus, etc.

/*
// Handling Event Method 1 of 3:    Simpliest and Ugliest way:
<button onclick="alert('Hello, World!');">
    // Run some JS code here;
</button>               // In very old days of webpage has internal JS code this is the way. You can't re-use it and hard to read/find

// 2nd Method:    Anomymous function method, which is most popular method in use for handling events
// start with element.event, such as:   window.onload, ...,
myElement.onclick = function() {
    // your event handling code here;
};                                                              // pay attention to ';'  --> beginner's error of missing it. Because it is sth=sth;

// 3rd Method:
document.addEventListener('click', myFunction, false);

// But, IE 8 and previous version ==> using different function as below:
document.attachEvent('onclick', myFunction);
// This causes trouble that programmer now have to determine user browser version so that to make code usable cross-browser;
// Or, to have a small block of code to determine which function exists inside current user browser. Example below:

function addCrossBrowserEventListener (elementName, eventName, functionName) {
    // does the addEventListener function exist?
    if (elementName.addEventListener) {
        // yes - use it
        elementName.addEventListener(eventName, functionName, false);
        return true;
    } else{
        // otherwise use attachEvent
        elementName.attachEvent("on" + eventName, functionName);
        return true;
    }
}

// Further development: JQuery(or other third-party JS Library) provides excellent cross-browser support,
// So you don't have to write any of your own cross browser support code anymore.

 */


// Click Load issue and solution without using JQuery ===> Well, everyone uses JQuery now...
// If you put <script src="javascript.js" type="text/javascript"></script> in the <head></head> section,
// some function won't work (because element does not exist when browser reading it).
// Solution is to create an 'window.onload' function that contains all those event handlers inside,
// because 'window' is the top element of DOM, even before 'document'.

/*
function prepareEventHandlers() {
    // place all those Event Handlers below;
    var myImage = document.getElementById("mainImage");
    myImage.onclick = function() {
        alert("You clicked the image");
    }
}

window.onload = function() {
    // only one window.onload funtion can exist inside one document;
    // invoke the Handlers;
    prepareEventHandlers();
}
*/

Week2:  15/7/2014 Continue...
-------------------------------------------

// On Focus and On Blue effects for forms filling(such as email required field).
// Also can use regular expression to match the patterns to examine if the email address left is valid or not, but not in this paragraph.

/*

// Part one: HTML file:  Below is just small block of code that is related to the issue
<form id="frmSupport" name="frmSupport" method="post" action="support_process.htm">
    <fieldset id="quickSupport">
        <p>
            <label for="email">Email:</label>
            <input type="text" value="your email" name="email" id="email" tabindex="20" />
        </p>                    // Pre-set value="your email", so to remind user to put in email address when check this field;
    </fieldset>                 // It is always 'value' field, not 'innerHTML' field.

// Part two: js file

var emailField = document.getElementById("email");

emailField.onfocus = function() {
    if (emailField.value == "your email") {
        emailField.value = "";                  // When user click this field (called 'onfocus'), take pre-set value away
    }                                                       // to allow user key in their own address. Watch out for 'onfocus' all lowercase;
};          // Watch out for ';' --> because '=' so it is not a single function() call.

emailField.onblur = function() {
    if (emailField.value == "") {               // When user left this field (called 'onblur'), but not key in anything;
        emailField.value = "your email";    // Put in pre-set value again, to remind him/her for the task. Watch out lowercase 'onblur'.
    }
};         // Watch out for ';' --> because '=' so it is not a single function() call.

 */

// Timer:  'setTimeout(functionname, interval in ms (so 5000 = 5 seconds))' :: call a function after x ms.
/*
function simpleMessage() {
    alert("Just a pop-up message here!");
}

setTimeout(simpleMessage, 5000);
*/
// It also has its evil twins: clearTimeout(functionname, interval), which is stop this postpone action.

// Another similar special effort function: most commonly used to rotate images on the webpage for certain inteval

/*  example 1: simple and straight forward one
setInterval(simpleMessage, 5000);
*/


/* example 2: rotate image, and stop rotating when user clicked on an image:

var myImage = document.getElementById("mainImage");
var imageArray = ["_images/overkook.jpg", "_image/winery_sign.jpg", "_image/lunch.jpg",
                                "_image/bigSur.jpg", "_image/flag_photo.jpg", "_image/mission_look.jpg"];
var imageIndex = 0;

function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);            // set source of image to the array;
    imageIndex++;                                                                         // go through images from first one to last one;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;                                                                     // if last one, re-start from first one again;
    }                                     // NOTICE: There is no loop here !!!
}                                        // step++, but wait for repeated call again to show next image... Very Clever!

// setInterval(changeImage, 5000);           // calling function every 5 seconds, instead of loop statement !!

// Comment out above solution for a MORE Clever solution:
var intervalHandle = setInterval(changeImage, 5000);
myImage.onclick = function() {
    clearInterval(intervalHandle);          // Manual step++ 5s each, until click to stop it -- clear 'setInterval()' --
};

// Another clever way to do it, is to use windows.onload function to get it auto rotate once the page is loaded:
windows.onload = function() {
    setInterval(changeImage, 3000);
};

// I should use this techeque in Jin's School Web Page !!!
====================================
 */


// Common mistakes and debugging: Using firebug & Firefox. Check spelling/grammer in details !!!
-------------------------------------------------------------------------------------------------------------------------------------

// Syntax error: forgot to close () {} [] "" '', or ; etc.
// call myfunction() and get 'undefined' error, when real one is 'myFunction()': case-sensitive;
// similar ones like '.getElementById' (not 'D') or 'getElementsByTagName' (forgot 's');
// or spelling issue like 'myArray.revers()' (missing 'e' in 'reverse');
// or: forgot those systems that are zero-based, such as Array.length is 3, but you're calling Array[3]...

// next level: call function before the element becomes part of DOM yet,  gives you 'undefined' error -- use window.onload function or jQuery;
// Assignment instead of equal: if (a = b) {//action;}  --> should be '==' instead of '=';  BTW, technically it is not an error ?!
/*    Missing a parameter in a function that may not reported by firebug as an error, but result expectable:

function calculateSum(a, b, c) { return a+b+c; }
var result = calculateSum(500,1000);   console.log(result);
// result:  NaN   (because 'c' is taking default value of 'undefined'; and it is not technically an error)

 */

// Use firebug or similar tool will give you runtime document, which is more reliable than source code;
// or you right-click on webpage and then 'view page source';
// because javascript could dynamically change the source HTML file on-the-fly...
// Also you could right click on one element to check its DOM attributes (of course you could start from DOM tab as well)
// There are far more DOM nodes than you could realize, even on a simplest web page...

// For the same token, the 'Script' Tab will give you all .js files, as well as those inline scripts buried inside HTML file in runtime.

// Common firebug usage below. Further/other details check out getfirebug.com.
// Or: google "firebug tutorial", and then check out those videos and websites.

/*        firebug troubleshooting: HTML, CSS, JS: after live-editing works,
            apply them as source code or 'custom code' if using WordPress or its themes.

After Setting up Break Point on darker lines (JS statements only), then there are 4 tools that you can use:
1. Right-click on the break point, you can put in conditions for that break point to stop. This is particularly helpful when debugging loops.
The program will only stop when the condition is meet. Then you can check the result/status at the 'watch' tab of the right panel.
2. Triangle point to right icon is 'Continue(F8)'. Click on it is to continue previous run from this break point onwards, until reach another break point.
Then watch the 'Watch' tab on the lower right panel to see the changes.
3. Next to 'Continue' is 'Step into(F11)', which is to line-by-line running of the program, one line per step & stop.
4. The middle one is 'Step Over(F10)' -- It would go over a function as breakpoint without getting into its internals.
It is not a skip a function, but execute the function and get the result of that function, and move on to next statement. No 'Step into' that function, so save time.
5. The last one is 'Step Out(Shift+F11)' -- It will return you to where you made the call into the current function. Or one step back out of the current encapulation.
When you are in a loop or a function, use this icon to get out of it.

As long as you watch the right panel carefully, or move the cursor over the variables in the left panel,
Do it step by step without jumping, it would be 'easy' to find out what went wrong.

"It is gurrenteed that all HTML/CSS/JavaScript issue can be solved by using this tool."

 */

Week Two 17/5/14  &. 18/5/14  Continue:
-----------------------------------------

// Form has the following properties and events:
/*
<form id="frmContact" name="frmContact" method="post" action="thanks.htm">
    <fieldset id="personalInfo">
        <legend><strong>Personal Information</strong></legend>
        <p>
            <label for="name">Name</label>
            <input name="name" type="text" class="text" id="name" tabindex="100">
        </p>
        <p>
            <label for="email">Email</label>
            <input name="email" type="text" class="text" id="email" tabindex="110">
        </p>
    </fieldset>
 */

// Field values
- document.forms.formid;
- document.forms.formid.formname;
- email.value;

// Form events
- onfocus:      go into the field
- onblue:       leave the field
- onchange:   chnge into or out of the field
- onkeypress
- onkeydown
- onkeyup

// Checkbox
- Value: myCheckBox.checked:       true or false
- Event: onclick; onchange; --> you can use either

// Field has selection list, instead of single value:
/* main properties: mySelect.type == select-one, or: select-multiple
    if select-one, mySelect.selectedIndex (first one would be '0', next one '1', and go upwards for the list)
    if select-multiple: mySelect.options[x].selected == true or false

    main events to trigger above:       .onchange;
*/

// for the form itself, main event is .onsubmit. You can use 'return false' to do sth else before it be submitted to the server:
- check/validate input,
- stop submit, and other things
// so that those tasks can be done on the client end, before request round trip info from server and do calculations on server.

/*
// handle the form submit event, to prevent email field be empty:
function prepareEventHandlers() {
    if (document.getElementById("email").value == "") {
        document.getElementById("errorMessage").innerHTML = "Please provide at least an email address!";
        return false;           // Stop form from submitting -- force user to enter email field value first;
    }
    else {
        document.getElementById("errorMessage").innerHTML = "";         // no error message;
        return true;        // allow form submit to server!
    }
};

// when the document loads
window.onload = function() {
    prepareEventHandlers();
}
*/

// example of hide a section, but enabled by click a box:
/*     Show or Hide sections of a form
function preparePage() {                                                                    // this Event Handler is also in window.onload list;
    document.getElementById("brochures").onclick = function() {         // if you click on the field with ID of "brochures";
        document.getElementById("brochures").checked() {                    // 'true'
            // use CSS Style to show it
            document.getElementById("tourSelection").style.display = "block";       // .style.display to "block" value is the default way to show the hidden section;
        }
        else {                                                                                            // 'false'
            // hide the div with id="tourSelection" inside the HTML file, which is the whole section that to be hide or show, controlled by box with ID of "brochures";
            document.getElementById("tourSelection").style.display = "none";        // to "none" is the default way of hide the section;
        }
    };
    // now hide it on the initial page load;
    document.getElementById("tourSelection").style.display = "none";                // It is called 'progressive enhancement', just in case someone has JS disabled;
    // If JS disabled, everything still works as it is. But if JS enabled, the enhancement wil make things better.
}
*/

// Use JS to make CSS dymanic:

// Using inline style:      myElement.style.color ="#ff0000"; myElement.style.left = "40px"; myElement.style.backgroundColor = "white";
// in CSS, you use background-color, or font-weight as lable( or name, using hyphens to connect two words to form a string).
// in JS, it got to be changed using camelCase, like .fontWeight, or .backgroundColor. Just different syntax but with same meaning. <'-' is JS means 'minus' or 'subtract' as reserved world>

// Setting the class:       myElement.className = "someCSSclass";       // 'class' is a reserved word, so use 'className' instead. Or, clear it by =""; (empty string)
/*
// prevent a form from submitting
this function is also in window.onload
function preparePage() {
    document.getElementById("mainContent").onclick = function() {                                       // if user clicks on the page
        if (doucment.getElementById("mainContent").className == "example") {
            doucment.getElementById("mainContent").className = "";                                       // if it already use "example" class in CSS, reset it to be none;
        }
        else {
            doucment.getElementById("mainContent").className = "example";                           // if not, set CSS class to example, which is right-align, white title line, different font family and size.
        }                                                                                                                                       // so that the click on the page would change its presentation style.
    };
}
 */

/*        This example will put an animated box 'section of<div id="join" ...>' across user's screen for the web page, to push people sign up for the newspaper.
// How does that work?
- window.onload will call main program of set animation 5 seconds after user opened this page;
- main program beginAnimate() will call program animateBox every one of 20th second (TV is 30 frames/second. Here is 20 frames/second, which is good enough);
- Program animateBox will move the box for 5 px from left to right each time. And if reached 900px (out of webpage frame), stop 20 frame/second animation.
- Very clever idea, only people who worked in digital media could come up with this idea...

var currentPos = 0;
var intervalHandle;

function beginAnimate() {
    document.getElementById("join").style.position = "absolute";
    document.getElementById("join").style.left = "0px";
    document.getElementById("join").style.top = "100px";
    // cause the animateBox function to be called
    intervalHandle = setInterval(animateBox,50);
}

function animateBox() {
    //set new position
    currentPos+=5;
    document.getElementById("join").style.left = currentPos + "px";
    //
    if (currentPos > 900) {
        //clear interval
        clearInterval(intervalHandle);
        // reset custom inline styles
        document.getElementById("join").style.position = "";
        document.getElementById("join").style.left = "";
        document.getElementById("join").style.top = "";
    }
}

window.onload = function() {
    setTimeout(beginAnimate,5000);
}
 */


// Style guide, to make your code readable, consistent, accepted best practices.
// Javascript is 'published' on the web, that everyone visit your webpage get it, and can read it in plain text if they want to. It is most publically viewable code in the world.

- Naming conventions: <letters, numbers, $, _> form a name of variable or function, but it is best to make it meaningful in camelCase.
- Uppercase First Letter for an Object.
- Brace style:              // using traditional C style, not PASCAL style or other styles;         // Always use braces, even when there is only one line inside;
/*
if (x) {
    // ...
} else {
    //...
}
 */

// The best practice is to define a function before calling it, although it can be defined later inside the program.
// Always use var to define variables
// Always use ";" to end a statement
// search for "javascript style guidelines" on the web, to get more formal guides from Yahoo, Google, or Mazilla.

// Javascript Minification: compact code -- get rid of comments, rename variables/function to one letter ones, put everything onto one line.
// Only Human needs meaningful names, white space and comments. Browser does not need them. JQuery Example: readable file size 559KB, minified 23KB.
// Minification to reduce file size to make it transfer faster/load faster. It does not 'compile' or obfuscation.
// Many tools available, such as JSMin, YUI Compressor (Yahoo UI Compressor), Google Closure Compiler;
// You can download one of them or just use them online. But common practice is to use Google one online, which also has warning or error reminders.
// Keep an copy of original one for later reading/maintanence.

// jslint.com: The best JavaScript code checker. It supposed to be very picky.
// It produces huge number of issues even when you put in a perfect working JS program. Don't panic: it is making your code perfect, 'better'.
// You can also dismiss/tolerate some options or define what environment it would be used.
// It has its own 'perfect' presentation style: such as having a space here and there, to make it more readable. (You don't have to)
// BTW, my thoughts: Don't put minified code into this check...





