// Javascript 101 Assignment 4.2, 14/08/2014

var fibonacciSequenceList = [1,2];
var last = 1;

console.log(fibonacciSequenceList[last-1]);
console.log(fibonacciSequenceList[last]);

var buildList = function(number) {
    while (fibonacciSequenceList[last] < number) {
        var newNO = fibonacciSequenceList[last] + fibonacciSequenceList[last-1];
        if (newNO < number) {
            console.log(newNO);
            last = last + 1;
            fibonacciSequenceList[last] = newNO;
        } else {break;}
    }
}

var summ = function() {
    var sum=0;
    for (var i=0; i < fibonacciSequenceList.length; i++) {
        if (fibonacciSequenceList[i] % 2 === 0) {
            sum += fibonacciSequenceList[i];
        }
    };
    return sum;
}

/*  Test first 10 terms, works!
buildList(90);
summ();
*/

buildList(4000000);
summ();
// Result: 4613732;  It works!!!