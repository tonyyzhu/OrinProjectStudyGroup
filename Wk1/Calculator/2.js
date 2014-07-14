/* Build an on-screen calculator */
// Step 1: Building a function add()

function add(a,b) {
    return a + b;
};

//Step 2: Build multiply, divide and subtract function

function multiply(a, b) {
    return a * b;
};

function divide(a,b) {
    if (b != 0) {
            return a/b;
    }
    else{
            alert ("numbers can not be divided by zero!");
    }
};

function subtract(a,b) {
    return a - b;
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
                st2 = "";
                break;          // Return to initial status and then break out;
            case "=":
                var arr0 = st2.split("=");
                var st3 = arr0[0];
                if (st3.indexOf("+") !== -1) {
                    var arr1 = st3.split("+");
                    myDisplay.innerHTML = add(parseFloat(arr1[0]), parseFloat(arr1[1]));
                }
                else if (st3.indexOf("-") !==-1) {
                    var arr1 = st3.split("-");
                    myDisplay.innerHTML = subtract(parseFloat(arr1[0]), parseFloat(arr1[1]));
                }
                else if (st3.indexOf("*") !==-1) {
                    var arr1 = st3.split("*");
                    myDisplay.innerHTML = multiply(parseFloat(arr1[0]), parseFloat(arr1[1]));
                }
                else if (st3.indexOf("/") !==-1) {
                    var arr1 = st3.split("/");
                    myDisplay.innerHTML = divide(parseFloat(arr1[0]), parseFloat(arr1[1]));
                }
                else {
                    alert("nothing here!");
                }
                st2 = "";
                arr0 = [];
                arr1 = [];
                break;         // Return to initial status and then break out;
        }
    });
});