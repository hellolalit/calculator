"use strict";

document.getElementById("user-input1").value = "";
document.getElementById("user-input2").value = "";

function calculate() {
    let user_input1 = document.getElementById("user-input1").value;
    let user_input2 = document.getElementById("user-input2").value;
    let result = 0;
    console.log(`First User Input = ${user_input1}`);
    console.log(`Second User Input = ${user_input2}`);

    let clear_operation = document.getElementById("clear").value;
    let add = document.getElementById("add").value;
    let sub = document.getElementById("subtract").value;
    let div = document.getElementById("divide").value;
    let mul = document.getElementById("multiply").value;
    if (clear_operation == "") {
        document.getElementById("user-input1").value = "";
        document.getElementById("user-input2").value = "";
    } else if (add == "+") {
        result = user_input1 + user_input2;
        document.getElementById("calculated-result").value = result;
    } // else if (clear_operation == "") {
    //     document.getElementById("user-input1").value = "";
    //     document.getElementById("user-input2").value = "";
    // } else if (clear_operation == "") {
    //     document.getElementById("user-input1").value = "";
    //     document.getElementById("user-input2").value = "";
    // } else if (clear_operation == "") {
    //     document.getElementById("user-input1").value = "";
    //     document.getElementById("user-input2").value = "";
    // } 
    else {
        console.log("It did not worked !");
    }
}
