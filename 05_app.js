// Librerias necesarias
const prompt = require("prompt-sync")();

// Único ejercicio, tablas de multiplicar
// Solicitud de información
let genNum = prompt("Dime un número y te doy la tabla de multiplicar: ");

// Impresión de resultado
for (let genMul = 1; genMul <= 10; genMul++) {
    let genRes = parseInt(genNum) * parseInt(genMul)
    console.log(genNum, " X ", genMul, " = ", genRes)
}