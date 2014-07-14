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
// alert(divide(3,0));   // All 4 functions work as expected!

var st2 = "";       // String to be displayed on result screen;

$(function() {
    $(".buttons").click(function() {
        var st1 = this.innerHTML;
        st2 = st2 + st1;
        var myDisplay = document.getElementById("result");
        myDisplay.innerHTML = st2;
        console.log(st2);
        switch(st1) {
            case "Clear":
                myDisplay.innerHTML = "#";
                break;
            case "=":
                st2 = st2 - "=";
                if (st2.indexOf("+") !== -1) {
                    var arr1 = st2.split("+");
                    myDisplay.innerHTML = add(arr1[0].toString(), arr1[1].toString());
                }
                else if (st2.indexOf("-") !==-1) {
                    var arr2 = st2.split("-");
                    subtract(arr2[0], arr2[1]);
                }
                else if (st2.indexOf("*")) {
                    var arr3 = st2.split("*");
                    multiply(arr3[0], arr3[1]);
                }
                else {
                    var arr4 = st2.split("/");
                    divide(arr4[0], arr4[1]);
                }
                break;
        }
    });
});