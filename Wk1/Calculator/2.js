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
    $(".buttons, #btclr").click(function() {
        var st1 = this.innerHTML;
        st2 = st2 + st1;
        var myDisplay = document.getElementById("result");
        myDisplay.innerHTML = st2;
        switch(st1) {
            case "Clear":
                myDisplay.innerHTML = "#";
                break;
            case "=":
                var arr0 = st2.split("=");
                var st3 = arr0[0];
                if (st3.indexOf("+") !== -1) {
                    var arr1 = st3.split("+");
                    myDisplay.innerHTML = add(parseFloat(arr1[0]), parseFloat(arr1[1]));
                    break;
                }
                else if (st3.indexOf("-") !==-1) {
                    var arr2 = st3.split("-");
                    subtract(parseFloat(arr2[0]), parseFloat(arr2[1]));
                    break;
                }
                else if (st3.indexOf("*")) {
                    var arr3 = st3.split("*");
                    multiply(parseFloat(arr3[0]), parseFloat(arr3[1]));
                    break;
                }
                else {
                    var arr4 = st3.split("/");
                    divide(parseFloat(arr4[0]), parseFloat(arr4[1]));
                    break;
                }
        }
    });
});