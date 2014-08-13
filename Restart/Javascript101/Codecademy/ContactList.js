// Below is the version 1, or original official version. My version is after commented out section below.
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

// Below is my version, rebuild, but I did check out original one before I started building up this one.
var friends = {};
friends.bill = new Object();
friends.steve = new Object();

friends.bill = {
    firstName: "Bill",
    lastName: "Gates",
    number: "(206) 555-5555"
};

friends.steve = {
    firstName: "Steve",
    lastName: "Jobs",
    number: "(408) 555-5555"
};

friends.bill.address = ['One Microsoft Way','Redmond','WA','98052'];
friends.steve.address = ['1 Infinite Loop','Cupertino','CA','95014'];

var list = function(addressBook) {
    for (var person in addressBook) {
        console.log(person);
    };
};

var search = function(name) {
    for (var person in friends) {
        if (friends[person].firstName === name) {
          console.log(friends[person]);
          return friends[person];
        }
    };
}

list(friends);
search('Steve');