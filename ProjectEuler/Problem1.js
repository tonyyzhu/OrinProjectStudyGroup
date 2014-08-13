// Assignment 4.1 for Javascript 101, under /Web Dev 101/Front End/JavaScript Basics
// 14/08/2014: multiples of 3 & 5.

var list =[];

var findNum = function(limit) {
  for (var i=1; i<limit; i++) {
    if ((i%3 === 0) || (i%5 === 0)) {
      list.push(i);
      console.log(i);
    }
  }
};

var summ = function() {
  var sum = 0;
  for (var j=0;j<list.length; j++) {
    sum += list[j];
  };
  return sum;
};

// findNum(10);             // result: 3, 5, 6, 9;
// summ();                      // result: 23;

findNum(1000);
summ();                         // result: 233168. Success !!!