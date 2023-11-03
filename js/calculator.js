"use strict";

document.getElementById("user-input1").value = "";
document.getElementById("user-input2").value = "";

function calculate() {
    let user_input1 = document.getElementById("user-input1").value;
    let user_input2 = document.getElementById("user-input2").value;
    console.log(`First User Input = ${user_input1}`);
    console.log(`Second User Input = ${user_input2}`);

    let clear_operation = document.getElementById("clear").value;
    let add_operation = document.getElementById("add").value;
    let sub_operation = document.getElementById("substract").value;
    let div_operation = document.getElementById("divide").value;
    let mul_operation = document.getElementById("multiply").value;
    if (clear_operation == "") {
        document.getElementById("user-input1").value = "";
        document.getElementById("user-input2").value = "";
    }
}