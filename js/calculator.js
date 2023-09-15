"use strict";

const display = document.getElementById("display");

function handleNumberClick(number) {
    display.value += number;
}

function handleDecimal() {
    display.value += ".";
}

function handleOperatorClick(operator) {
    display.value += operator;
}

function handleEqual() {
    var currentExpression = display.value;

    // Evaluate the current expression.
    var result = eval(currentExpression);

    // Set the display to the result.
    display.value = result;
}

document.addEventListener("click", function (event) {
    var target = event.target;

    // Handle number buttons.
    if (target.classList.contains("btn-number")) {
        handleNumberClick(target.textContent);
    }

    // Handle decimal button.
    else if (target.classList.contains("btn-decimal")) {
        handleDecimal();
    }

    // Handle operator buttons.
    else if (target.classList.contains("btn-operator")) {
        handleOperatorClick(target.textContent);
    }

    // Handle equal button.
    else if (target.classList.contains("btn-equal")) {
        handleEqual();
    }
});
