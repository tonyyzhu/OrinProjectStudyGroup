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
- Object contains 'property:value' pair. Property like variables, just a placeholder to store the value there for further usage later on.
- Object can be created in either of three methods below:
    + object liternal notation method:
        /* var myObj = {type: 'fancy', dispositon: 'sunny'}; var emptyObj = {}; */
    + object constructor method:
        /* vary myObj = new Object(); */
    + Also customizing constructor method later on. Well, it is actually 'Class' in OOP method. 'Class' is just another type, as object, array, ...
    + Use one of two ways to add keys, after the object created:
        /* myObj["name"] = 'Charlie'; or: myObj.name = 'Charlie'; */
    + The value of a property can be assigned to a global variable or local variable:
        /* var name1 = myObj.name;   // assign 'Charlie' to variable name1; */
        /* var name2 = myObj["name"];    // Last statement use "dot notation" method; this one using "bracket notation" method.   */*

        /*       Be careful on second statement: it is not a list, but a way to define and add property of an object and its value into that object !!!
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

- keyword 'this' can be used inside a method, that 'this' is just a placeholder (that will refer to whichever object called that method, when the method is actually used). So that we can re-use the same method for differenet objects! 
- Also, you can assign a method to an object without invoke it (before give it '()' and parameters). Example below:
  /*
    // here we define our method using "this", before we even introduce bob
    var setAge = function (newAge) {
      this.age = newAge;                // when define methods inside an object, use ';' after each statements;
    };                                              // instead of using ',' to separate each 'property:value' pairs when using literal method to construct an object.
    // now we make bob
    var bob = new Object();
    bob.age = 30;
    bob.setAge = setAge;
      
    // make susan here, and first give her an age of 25
    var susan = new Object();
    susan.age = 25;
    susan.setAge = setAge;
    // here, update Susan's age to 35 using the method
    susan.setAge(35);
    console.log(susan.age);
       */
      
      /*
      function Person(name,age) {
          this.name = name;
          this.age = age;
        }

        // Let's make bob and susan again, using our constructor
        var bob = new Person("Bob Smith", 30);
        var susan = new Person("Susan Jordan", 25);
        // help us make george, whose name is "George Washington" and age is 275
        var george = new Person("George Washington", 275);
        console.log(george);
       */
      
- Object is just another 'type', like: string, number, boolean, array. So, we can make an array of objects.
  /*
    // Our Person constructor
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }

    // Now we can make an array of people
        var family = [];
        var alice = new Person("alice", 40);
        family.push(alice);
        var bob = new Person("bob", 42);
        family.push(bob);
        var michelle = new Person("michelle", 8);
        family.push(michelle);
        var timmy = new Person("timmy", 6);
        family.push(timmy);
    // loop through our new array
        for (var i=0; i < family.length; i++) {
            console.log(family[i].name);
        }
   */
  
   /*
   // Our person constructor
    function Person (name, age) {
        this.name = name;
        this.age = age;
    }

    // We can make a function which takes persons as arguments
    // This one computes the difference in ages between two people
    var ageDifference = function(person1, person2) {
        return person1.age - person2.age;
    };

    // Make a new function, olderAge, to return the age of
    // the older of two people
    var olderAge = function(person1, person2) {
        if (person1.age > person2.age){
            return person1.age;
        } else {
            return person2.age;
        }
    };

    // Let's bring back alice and billy to test our new function
    var alice = new Person("Alice", 30);
    var billy = new Person("Billy", 25);

    console.log("The older person is " + olderAge(alice, billy));

    */

- review 2 methods of making an object:  
   /*
   // object1 using Liternal Notation method;
   var spencer = {
      age: 22,
      country: "United States"
    };

    // make spencer2 here with constructor notation and the Object constructor;
    var spencer2 = new Object();
    spencer2.age = 22;
    spencer2.country = "United States";
    console.log(spencer2);

    // obviously the third method is to use a custom constructor;
    function Person(age, country) {
        this.age = age;
        this.country = country;
    }

    var spencer3 = new Person(22, "United States");
    */

- review: Properties can store values like variables, but can not permanently store them like a database, which the data is stored separately ouside of a program.
  /*
  Properties are like variables that belong to an object, and are used to hold pieces of information. Properties can be accessed in two ways:
    1.  Dot notation, with ObjectName.PropertyName
    2. Bracket notation, with ObjectName["PropertyName"]    // (don't forget the quotes!)
   */
  
   /*               Who's in Your Bracket?
    And finally, let's go over retrieving property values. Throughout this section, we've been using dot notation to get the value of an object's property:
    "someObj.propName"; However, remember that we can also use bracket notation:    'someObj["propName"]';
    
    An advantage of bracket notation is that we are not restricted to just using strings in the brackets. We can also use variables whose values are property names:
        var someObj = {propName: someValue};
        var myProperty = "propName";
        someObj[myProperty];
    The last line is exactly the same as using someObj["propName"];.
    */

- review: Methods are like functions that are associated with a particular object. They are especially helpful when you want to either:
- 1. Update the object properties;
- 2. Calculate something based on an object's properties.
- 3. Methods just like functions, that can also have parameters to pass the value into the code that's running inside the method.
      /*       In the following example, inside the 'sayJob' method, it has to be 'this.job' instead of 'job'. Otherwise error message;
      var james = {
            job: "programmer",
            married: false,
            sayJob: function() {
                console.log("Hi, I work as a " + this.job);
                
            }
        };

        // james' first job
        james.sayJob();

        // change james' job to "super programmer" here
        james.job = "super programmer";

        // james' second job
        james.sayJob();
       */

- Below is an interesting example, that works on Firefox but not on Codecademy for a while, until I refresh Chrome. Reset Code and typing in does not change it...
    /*
    var james = {
        job: "programmer",
        married: false
    };

    // set to the first property name of "james"
    var aProperty = "job";

    // print the value of the first property of "james" 
    // using the variable "aProperty"
    console.log(james[aProperty]);
     */
    
- "typeof" is an useful one, esp. considering JavaScript is a weak-typed language:
    /*
    // complete these definitions so that they will have
    // the appropriate types
    var anObj = { job: "I'm an object!" };
    var aNumber = 42;
    var aString = "I'm a string!";

    console.log(typeof anObj  ); // should print "object"
    console.log(typeof aNumber  ); // should print "number"
    console.log(typeof aString  ); // should print "string"
     */
    
- Baggage: "hasOwnProperty" tells if this object has this property or not: return true or false;
     /*
     var myObj = {
        name: "whatever"
        
    };

    console.log( myObj.hasOwnProperty('name') ); // should print true
    console.log( myObj.hasOwnProperty('nickname') ); // should print false
      */
     
     /*
    var suitcase = {
        shirt: "Hawaiian"
    };

    if (suitcase.hasOwnProperty('shorts')) {
        console.log(suitcase.shorts);
    } else {
        suitcase.shorts = "biniki";
        console.log(suitcase.shorts);
    }
      */

- Print out object names and values:
    /*
    var nyc = {
        fullName: "New York City",
        mayor: "Bill de Blasio",
        population: 8000000,
        boroughs: 5
    };

    // write a for-in loop to print the value of nyc's properties
    for (var ph in nyc) {
        console.log(nyc[ph]);       // Print out values;
        console.log(ph);                // Print out names;
    }
     */
    
- OOP! How exciting here, used in JavaScript!
    /*
    function Dog (breed) {
      this.breed = breed;
    }

    // here we make buddy and teach him how to bark
    var buddy = new Dog("Golden Retriever");
    buddy.bark = function() {
      console.log("Woof");
    };
    buddy.bark();

    // here we make snoopy
    var snoopy = new Dog("Beagle");
    // we need you to teach snoopy how to bark here
    snoopy.bark = function() {
        console.log("Woof Woof!!!");
    };
    // this causes an error, because snoopy doesn't know how to bark! -- Before adding snoopy.bark method;
    snoopy.bark();
     */
    
     /*     Improvement! use 'prototype' to teach all dogs that belongs to 'Dog' Class to bark:
     function Dog (breed) {
      this.breed = breed;
    };

    // here we make buddy and teach him how to bark
    var buddy = new Dog("golden Retriever");
    Dog.prototype.bark = function() {                       // Watch out here: methods not for individual dog, but for the whole CLASS;
      console.log("Woof");
    };
    buddy.bark();

    // here we make snoopy
    var snoopy = new Dog("Beagle");
    /// this time it works!
    snoopy.bark();
      */

- Inheritance! See example below, just add 'prototype' to make it happen:
    /*
    // the original Animal class and sayName method
    function Animal(name, numLegs) {
        this.name = name;
        this.numLegs = numLegs;
    }
    Animal.prototype.sayName = function() {
        console.log("Hi my name is " + this.name);
    };

    // define a Penguin class
    function Penguin(name) {
        this.name = name;
        this.numLegs = 2;
    }

    // set its prototype to be a new instance of Animal     // HERE IS THE MAGIC:
    Penguin.prototype = new Animal();

    var penguin = new Penguin("Capitan");
    penguin.sayName();                                          // Now it can use the same method in Animal without defineing it!
     */
    
    // BTW, I had issues passing two screens, all due to "numLegs" that I misread the 'L' as 'l'. It was so tiny and really hard to find...
    // It wasted me too much time here and there...
    // BTW, Firebug can't help here at all, when I use 'numlegs' across the board, while website looking for 'numLegs'...

- Inheritance can go up like a chain, all the way up to mighty "Object" class (root class in JavaScript). If it can't find a property or a method in its current object, it would traverse up the inheritance chain to looking for it, until arrived "Object" class.

- all properties of an object are automatically "Public", which means info that class is willing to share outside of the class.

- To define a private property inside a class (That can only be accessed from within the class), use 'var' instead of 'this'. Example below:
    /*
    function Person(first,last,age) {
       this.firstname = first;
       this.lastname = last;
       this.age = age;
       var bankBalance = 7500;
    }

    // create your Person 
    var john = new Person("John", "Trivbodi", 50);

    // try to print his bankBalance
    console.log(john.bankBalance);              // Result: undefined
     */
    
- What if I really want to know that private property? Just add a public method for that class to access that private one.

    /*
    function Person(first,last,age) {
       this.firstname = first;
       this.lastname = last;
       this.age = age;
       var bankBalance = 7500;
      
       this.returnBalance = function() {
          return bankBalance;
       };
     */

- For the same token, we can have private method, and we can add a new public method to return that private method (not the result of that private method, but the private method itself)
    /*
    function Person(first,last,age) {
       this.firstname = first;
       this.lastname = last;
       this.age = age;
       var bankBalance = 7500;                      // Private Property;
      
       var returnBalance = function() {         // change 'this.' to 'var ', make it from public method to private method;
          return bankBalance;
       };
           
       // create the new function here
       this.askTeller = function() {                // Create a Public method to return that invisible private method;  sneaky!
           return returnBalance;
       }
    }

    var john = new Person('John','Smith',30);
    console.log(john.returnBalance);
    var myBalanceMethod = john.askTeller();             // assign this method to be the public method of that class for this person only;
    var myBalance = myBalanceMethod();                  // get result of the method;
    console.log(myBalance); 
     */

- You can also add a password to keep the access limited:
    /*
    function Person(first,last,age) {
       this.firstname = first;
       this.lastname = last;
       this.age = age;
       var bankBalance = 7500;
      
       this.askTeller = function(pass) {
         if (pass == 1234) return bankBalance;
         else return "Wrong password.";
       };
    }

    var john = new Person('John','Smith',30);
    // the variable myBalance should access askTeller() with a password as an argument  
    var myBalance = john.askTeller(1234);
    console.log(myBalance);
     */

- Why baggage?
    /*
    // what is this "Object.prototype" anyway...?
    var prototypeType = typeof Object.prototype;
    console.log(prototypeType);                                                 // Result: object;

    // now let's examine it!
    var hasOwn = Object.prototype.hasOwnProperty('hasOwnProperty');
    console.log(hasOwn);                                                        // Result: true;
     */
    







