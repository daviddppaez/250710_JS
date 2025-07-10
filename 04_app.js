// Librerias necesarias
const prompt = require("prompt-sync")();

// Primer ejercicio, contar números hasta límite indicado.
// Solicitud de información
let genNum1 = prompt("Escriba un número y cuento hasta dicho límite: ");
let genStart = 1;

// Impresión de resultado
while (genStart <= genNum1) {
    console.log(genStart);
    genStart++;
}

// Segundo ejercicio, contraseña correcta.
let getPass = prompt("Ahora ingrese la contraseña del sistema: ");

// Impresión de resultado
while (getPass != "1234") {
    console.log("La contraseña es incorrecta");
    getPass = prompt("Ingresela nuevamente: ");
}

console.log("Contraseña correcta");