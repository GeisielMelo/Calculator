// Get button pressed.
const numberOfButtons = document.querySelectorAll(".btn-pressed").length;
for (let i=0; i<numberOfButtons; i++) {
    document.querySelectorAll(".btn-pressed")[i].addEventListener("click", function () {
        var buttonText = this.innerHTML;
        selectCase(buttonText);
    });
}

// Variables.
var expression = "0";
var lastExpression = "";

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

// Select case.
function selectCase(value) {
    switch (value) {
        case "+":
            if (isSignalPressed()) {
                    setSignal(value);
                return;
            } else {
                writeOnScreen(value);
                writeExpressionOnVar(value);
            }
            break;
        case "-":
            if (isSignalPressed()) {
                    setSignal(value);
                return;
            } else {
                writeOnScreen(value);
                writeExpressionOnVar(value);
            }
            break;
        case "*":
            if (isSignalPressed()) {
                    setSignal(value);
                return;
            } else {
                writeOnScreen(value);
                writeExpressionOnVar(value);
            }
            break;
        case "/":
            if (isSignalPressed()) {
                    setSignal(value);
                return;
            } else {
                writeOnScreen(value);
                writeExpressionOnVar(value);
            }
            break;
        case "(":
            if (isSignalPressed()) {
                    setSignal(value);
                return;
            } else {
                writeOnScreen(value);
                writeExpressionOnVar(value);
            }
            break;
        case ")":
            if (isSignalPressed()) {
                    setSignal(value);
                return;
            } else {
                writeOnScreen(value);
                writeExpressionOnVar(value);
            }
            break;
        case "%":
            if (isSignalPressed()) {
                    setSignal(value);
                return;
            } else {
                writeOnScreen(value);
                writeExpressionOnVar(value);
            }
            break;
        case ".":
            if (isSignalPressed()) {
                    setSignal(value);
                return;
            } else {
                writeOnScreen(value);
                writeExpressionOnVar(value);
            }
            break;


        case "=":
            try {
                writeLastExpression(expression);
                showEvaluation();
                showLastExpression(lastExpression);
            } catch (error) {
                showError();
            }
            break;
        case "C":
            resetExpression();
            resetLastExpression();
            clearScreen();
            break;


        case "0":
            writeOnScreen(value);
            writeExpressionOnVar(value);
            break;
        case "1":
            if (expression == "0") {
                setNumber(value);
            } else {
                writeOnScreen(value);
            }
            writeExpressionOnVar(value);
            break;
        case "2":
            if (expression == "0") {
                setNumber(value);
            } else {
                writeOnScreen(value);
            }
            writeExpressionOnVar(value);
            break;
        case "3":
            if (expression == "0") {
                setNumber(value);
            } else {
                writeOnScreen(value);
            }
            writeExpressionOnVar(value);
            break;
        case "4":
            if (expression == "0") {
                setNumber(value);
            } else {
                writeOnScreen(value);
            }
            writeExpressionOnVar(value);
            break;
        case "5":
            if (expression == "0") {
                setNumber(value);
            } else {
                writeOnScreen(value);
            }
            writeExpressionOnVar(value);
            break;
        case "6":
            if (expression == "0") {
                setNumber(value);
            } else {
                writeOnScreen(value);
            }
            writeExpressionOnVar(value);
            break;
        case "7":
            if (expression == "0") {
                setNumber(value);
            } else {
                writeOnScreen(value);
            }
            writeExpressionOnVar(value);
            break;
        case "8":
            if (expression == "0") {
                setNumber(value);
            } else {
                writeOnScreen(value);
            }
            writeExpressionOnVar(value);
            break;
        case "9":
            if (expression == "0") {
                setNumber(value);
            } else {
                writeOnScreen(value);
            }
            writeExpressionOnVar(value);
    }
}

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

// Show pressed button on screen.
function writeOnScreen(value) {
    return document.getElementById("screen-bottom").innerHTML += value;
}


// Show last expression.
function showLastExpression(value) {
    return document.getElementById("screen-top").innerHTML = value;
}

//Show Evaluation.
function  showEvaluation() {
    return document.getElementById("screen-bottom").innerHTML = evalExpression();
}

// Set signal
function setSignal(value) {
    expression = expression.slice(0, -1).concat(value);
    document.getElementById("screen-bottom").innerHTML = expression;
    return;
}

// Set Number 1~9 if expression is 0.
function setNumber(value) {
    expression = "";
    document.getElementById("screen-bottom").innerHTML = value;
}


// Sets last expression.
function writeLastExpression(value) {
    return lastExpression = value;
}

// Get expression.
function writeExpressionOnVar(value) {  
    return expression += value;
}

// Eval the expression.
function evalExpression() {
    return eval(expression);
}


// verify if signal was pressed.
function isSignalPressed() {
    let lastChar = expression.slice(-1);
    const signals = ["+", "-", "*", "/", ".", "%", "(",  ")"];

    if (signals.includes(lastChar)) {
        return true;
    } else  {
        return false;
    }
}

// Reset expressions.
function resetExpression() {
    return expression = "0";
}
function resetLastExpression() {
    return lastExpression = "0";
}

//Clear screen.
function  clearScreen() {
    document.getElementById("screen-top").innerHTML = expression;
    document.getElementById("screen-bottom").innerHTML = lastExpression;
}

function showError() {
    alert("Invalid Operation!");
    resetExpression();
    resetLastExpression();
    clearScreen();
}

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
///////////////////////////////////////////////////////////////////////////////