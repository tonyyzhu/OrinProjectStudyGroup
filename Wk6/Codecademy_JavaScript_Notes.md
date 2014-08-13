// This is my study notes going through Javascript 101 Assignment 1, going through Codecademy's Javascript Section 1-5.
// 12/8/14: There are really something interesting here, that I never came across before.

Treat Text as Array: it is allowed!
-------------------------------

- Check out the following example: treat a string like an array of characters:
    /*
    var myArray = ['hello', 'world'];
    myArray[0];    // equals 'hello'

    var myName = 'Eric';
    myName[0];      // equals 'E'
     */

- Both Array and String has a property called '.length' , and works exactly the same way here.
- But, object is different, which use '{}' instead of Array of '[]'; and have 'key:value' pair instead of just value inside lists..


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


Random number generation and its usage
-------------------------------

- Example 1: generate 0 or 1 ('false' or 'true'):
/*
var youHit = Math.floor(Math.random() * 2);
 */

- Example 2: generate 1 to 5 (range inclusive):
/*
var damageThisRound = Math.floor(Math.random() * 5 + 1);
 */


Case Statement: first time to see 'default' option here similar to 'catch all' kind of thing, except other 'cases'
-----------------

/*
var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}
 */


Logical Operators: and(&&), or(||), not(!)
-----------------------------------------------------------

- &&: only 'true' if both are 'true', otherwise return 'false'.
- ||: only 'false' if both are 'false', otherwise return 'true'.
- !: only 'true' when original is 'false', and vice-versa.

/*
var iLoveJavaScript = true;
var iLoveLearning = true;

if(iLoveJavaScript && iLoveLearning) {
  // if iLoveJavaScript AND iLoveLearning:
  console.log("Awesome! Let's keep learning!");
} else if(!(iLoveJavaScript || iLoveLearning)) {                // Pay attention to '!' and then '||';
  // if NOT iLoveJavaScript OR iLoveLearning:
  console.log("Let's see if we can change your mind.");
} else {
  console.log("You only like one but not the other? We'll work on it.");
}
 */


 Get user input and turn it into upper case or lower case
 -------------------------------
- use prompt() to get user's answer, and then use a variable to store that user input
- use .toUpperCase() to turn all user's answer into all upper case, before storing into the variable. 
- use .toLowerCase() the same way to make it all lowercase
- The reason to above two, is to get a standard answer or value from various combinations of user input, so that 'Yes', 'yes', 'yEs', 'yeS', and others, are all standardized to be 'YES' or 'yes'; to make it easier to do comparison of the value, to make further programming decisions.
 
 /*
 var userDined = prompt("Are you hungry?").toUpperCase();
  */
 

Arrays can have dimensions (level of nested arrays/lists), and Jagged Arrays
---------------------------


Object
-----------
- Object can be created in either of two methods below:
    + object liternal notation method:
        /* var myObj = {type: 'fancy', dispositon: 'sunny'}; var emptyObj = {}; */
    + object constructor method:
        /* vary myObj = new Object(); */
    + Use one of two ways to add keys, after the object created:
        /* myObj["name"] = 'Charlie'; or: myObj.name = 'Charlie'; */

        /*       Becareful on second statement: it is not a list, but a way to define and add property of an object and its value into that object !!!
        var me = new Object();
        me["name"] = "Tony";
        me.age = 48;
         */
        
        /*
        var object1 = {};
        var object2 = new Object();
        var object3 = {
            name: 'tony',
            age: 48                                     // Pay attention here: last emelent: no ',' here !!!
        };

        object1["name"] = 'peter';
        object1["age"] = 48;

        object2.name = 'Jane';
        object2.age = 38;
        */
       
       /*       A true heterogeneous array:
       var myArray = [1, true, 'real', {name:'Tony', age:48}, 68];
        */

        /*        A multidimensional array that is jagged!
        var newArray = [[1,2,{height:8,width:4,length:4}], [2,true]];
         */

         /*        It can also be an object that cantains list inside!
         var myObject = {
          name: 'Eduardo',
          type: 'Most excellent',
          interests: ['reading', 'traveling', 'eat']
          };
          */

- Object inside Object example below.
- Also, pay attention to for loop statement: 
    for (var prop in obj) {         // prop is the placeholder here;
        console.log(prop);          // This is to log the object itself, which is the second level object inside first level of object;
        console.log(obj[prop]);     // This is to log the details inside the second level object, which is different to first log statement!
    };

    /*
    var friends = {};
    friends.bill = {
      firstName: "Bill",
      lastName: "Gates",
      number: "(206) 555-5555",
      address: ['One Microsoft Way','Redmond','WA','98052']
    };
    friends.steve = {
      firstName: "Steve",
      lastName: "Jobs",
      number: "(408) 555-5555",
      address: ['1 Infinite Loop','Cupertino','CA','95014']
    };

    var list = function(obj) {
      for(var prop in obj) {
        console.log(prop);
      }
    };

    var search = function(name) {
      for(var prop in friends) {
        if(friends[prop].firstName === name) {
          console.log(friends[prop]);
          return friends[prop];
        }
      }
    };

    list(friends);
    search("Steve");
     */

