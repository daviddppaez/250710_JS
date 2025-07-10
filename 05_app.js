// Librerias necesarias
const prompt = require("prompt-sync")();

//Primer ejercicio, contar con "for"
// Mera impresión de resultado
for (let genCont = 1; genCont <= 10; genCont++){
    console.log(genCont)
}

// Segundo ejercicio, tablas de multiplicar
// Solicitud de información
let genNum = prompt("Dime un número y te doy la tabla de multiplicar: ");

// Impresión de resultado
for (let genMul = 1; genMul <= 10; genMul++) {
    let genRes = parseInt(genNum) * parseInt(genMul)
    console.log(genNum, " X ", genMul, " = ", genRes)
}