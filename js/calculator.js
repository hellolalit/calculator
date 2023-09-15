"use strict";

var display = document.getElementById("display");
var buttons = document.getElementById("buttons");

var operator = "";
var number1 = "";
var number2 = "";

function buttonClick(event) {
    var button = event.target;
    var text = button.textContent;

    if (text == "Clear") {
        display.textContent = "";
        operator = "";
        number1 = "";
        number2 = "";
    } else if (text == "=") {
        var result = eval(number1 + operator + number2);
        display.textContent = result;
    } else {
        if (operator == "") {
            number1 = number1 + text;
        } else {
            number2 = number2 + text;
        }
    }
}

for (var i = 0; i < buttons.children.length; i++) {
    buttons.children[i].addEventListener("click", buttonClick);
}
