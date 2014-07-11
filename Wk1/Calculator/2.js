/* Build an on-screen calculator */
// Step 1: Building a function add()

function add(a,b) {
    result = a + b;
    return result;
};

//Step 2: Build multiply, divide and subtract function

function multiply(a, b) {
    result = a * b;
    return result;
};

function divide(a,b) {
    if (b != 0) {
            result = a/b;
            return result;
    }
    else{
            alert ("numbers can not be divided by zero!");
    }
};

function subtract(a,b) {
    result = a - b;
    return result;
};

// Test above functions
alert(divide(3,0));   // All 4 functions work as expected!