// // Exemplo: calcular a raiz quadrada de 25
// var resultado = Math.sqrt("25");
// console.log(resultado); // Imprime 5

// // Exemplo: calcular o seno de 45 graus
// var graus = 45;
// var radianos = Math.PI / 180 * graus;
// var resultado = Math.sin(radianos);
// console.log(resultado); // Imprime 0.7071067811865475

expression = "1222)";



function isSignalPressed() {
    let lastChar = expression.slice(-1);
    const signals = ["+", "-", "*", "/", ".", "%", "(",  ")"];

    if (signals.includes(lastChar)) {
        return true;
    } else  {
        return false;
    }
}

if (isSignalPressed()) {
    console.log("sim");
} else {
    console.log("não");
}