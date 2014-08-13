// The first step is to find out all primary factors below 1000;

var primaryList = [2,3,5,7,11];

var testNO = 12;
var limit = 1000;

while (testNO < limit) {
    var a=1;
    for (i = 0; i < primaryList.length; i++) {
        if (testNO % primaryList[i] === 0) {
            a = 0;
        };
    };

    if (a) {
        primaryList.push(testNO);
    } else {
        if (testNO < limit) {
            testNO += 1;
        }
    }
}

/*      Comment out Testing/Debuging statement with limit to 20, 100, 1000
console.log(testNO);
console.log(primaryList);           // It is a success!
*/

// Testing primary factorisation for a given number;

var result =[];

var test = function(num){
    for (var i=0; i < primaryList.length; i++){
        if (num % primaryList[i] === 0) {
            result.push(primaryList[i]);
        };
        while (num % primaryList[i] === 0) {
            num = num / primaryList[i] ;
        };
    };
    return result;
}

// test(13195); //Success!
/* to have bigger number tested, it needs to do the following:
var limit = 7000;       // at the beginning!
test(600851475143);     // result: 71, 839, 1471, 6557;  // Success !!!
*/
