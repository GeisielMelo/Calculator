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
//                       Action on Button pressed                            //
///////////////////////////////////////////////////////////////////////////////

// Select case.
function selectCase(value) {
    switch (value) {
        case "+":
            inputSignal(value);
            break;
        case "-":
            inputSignal(value);
            break;
        case "*":
            inputSignal(value);
            break;
        case "/":
            inputSignal(value);
            break;
        case "(":
            writeOnScreen(value);
            writeExpressionOnVar(value);
            break;
        case ")":
            writeOnScreen(value);
            writeExpressionOnVar(value);
            break;
        case "%":
            inputSignal(value);
            break;
        case ".":
            inputSignal(value);
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
            inputNumber(value)
            break;
        case "2":
            inputNumber(value)
            break;
        case "3":
            inputNumber(value)
            break;
        case "4":
            inputNumber(value)
            break;
        case "5":
            inputNumber(value)
            break;
        case "6":
            inputNumber(value)
            break;
        case "7":
            inputNumber(value)
            break;
        case "8":
            inputNumber(value)
            break;
        case "9":
            inputNumber(value)
            break;


        case "TAM":
            text = getTextOnScreen();
            calc = evalTAN(text);
            setNumber(calc);
            writeExpressionOnVar(calc);
            break;
        case "SIN":
            text = getTextOnScreen();
            calc = evalSIN(text);
            setNumber(calc);
            writeExpressionOnVar(calc);
            break;
        case "COS":
            text = getTextOnScreen();
            calc = evalCOS(text);
            setNumber(calc);
            writeExpressionOnVar(calc);
            break;
        case "SQRT":
            text = getTextOnScreen();
            calc = evalSQRT(text);
            setNumber(calc);
            writeExpressionOnVar(calc);
            break;
        case "LOG":
            text = getTextOnScreen();
            calc = evalLOG(text);
            setNumber(calc);
            writeExpressionOnVar(calc);
            break;
        case "LOG10":
            text = getTextOnScreen();
            calc = evalLOG10(text);
            setNumber(calc);
            writeExpressionOnVar(calc);
            break;
        case "RAD":
            text = getTextOnScreen();
            calc = evalRAD(text);
            setNumber(calc);
            writeExpressionOnVar(calc);
            break;
        case "E":
            calc = evalE();
            setNumber(calc);
            writeExpressionOnVar(calc);
            break;
        case "PI":
            calc =  evalPI();
            setNumber(calc);
            writeExpressionOnVar(calc);
            break;
        case "DEL":
                deleteLastChar();
            break;
        default:
            break;
    }
}

///////////////////////////////////////////////////////////////////////////////
//                        Auxiliary Functions                                //
///////////////////////////////////////////////////////////////////////////////

// input signal.
function inputSignal(value) {
    if (isSignalPressed()) {
        setSignal(value);
    return;
    } else {
        writeOnScreen(value);
        writeExpressionOnVar(value);
    }
}

// input number
function  inputNumber(value) {
    if (expression === "0") {
        setNumber(value);
    } else {
        writeOnScreen(value);
    }
    writeExpressionOnVar(value);
}

// Show pressed button on screen.
function writeOnScreen(value) {
    return document.getElementById("screen-bottom").innerHTML += value;
}

// Show last expression.
function showLastExpression(value) {
    return document.getElementById("screen-top").innerHTML = value;
}

// Show Evaluation.
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
    const signals = ["+", "-", "*", "/", ".", "%"];

    if (signals.includes(lastChar)) {
        return true;
    } else  {
        return false;
    }
}

// verify last char is left parenthesis.
function isLeftParenthesis() {
    let lastChar = expression.slice(-1);
    const leftParenthesis = ["("];

    if (leftParenthesis.includes(lastChar)) {
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

// Delete last char.
function deleteLastChar() {
    if (getTextOnScreen() === "NaN" || getTextOnScreen() === "-Infinity") {
        expression = "0";
    } else if (expression.length === 1) {
        expression = "0";
    } else if (expression.length > 1) {
        expression = expression.slice(0, -1);
    }
    document.getElementById("screen-bottom").innerHTML = expression;
}


// Show alert error.
function showError() {
    alert("Invalid Operation!");
    resetExpression();
    resetLastExpression();
    clearScreen();
}

// Get text on screen
function getTextOnScreen() {
    const element = document.getElementById("screen-bottom");
    return element.textContent;
}
///////////////////////////////////////////////////////////////////////////////
//                        Scientific Eval Functions                          //
///////////////////////////////////////////////////////////////////////////////
// TAN
function evalTAN(value) {
    const radians = value * (Math.PI/180);
    return Math.tan(radians);
}   

// SIN
function evalSIN(value){
    return Math.sin(value);
}

// COS
function evalCOS(value){
    let radians = value * Math.PI / 180;
    return Math.cos(radians);   
}

// SQRT
function evalSQRT(value){
    return Math.sqrt(value);
}
// LOG
function evalLOG(value){
    return Math.log(value);
}

// LOG10
function evalLOG10(value){
    return Math.log10(value);
}

// RAD
function evalRAD(value){
    return value * (Math.PI/180);
}

// E
function evalE(){
    return Math.E;
}

// PI
function evalPI(){
    return Math.PI;
}
