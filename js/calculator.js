"use strict";

var display = document.getElementById("display");
var clearButton = document.getElementById("clear");
var addButton = document.getElementById("add");
var subtractButton = document.getElementById("subtract");
var multiplyButton = document.getElementById("multiply");
var divideButton = document.getElementById("divide");

clearButton.addEventListener("click", function () {
    display.value = "";
});

addButton.addEventListener("click", function () {
    var firstNumber = parseFloat(display.value);
    var secondNumber = parseFloat(prompt("Enter the second number:"));
    display.value = firstNumber + secondNumber;
});

subtractButton.addEventListener("click", function () {
    var firstNumber = parseFloat(display.value);
    var secondNumber = parseFloat(prompt("Enter the second number:"));
    display.value = firstNumber - secondNumber;
});

multiplyButton.addEventListener("click", function () {
    var firstNumber = parseFloat(display.value);
    var secondNumber = parseFloat(prompt("Enter the second number:"));
    display.value = firstNumber * secondNumber;
});

divideButton.addEventListener("click", function () {
    var firstNumber = parseFloat(display.value);
    var secondNumber = parseFloat(prompt("Enter the second number:"));
    display.value = firstNumber / secondNumber;
});