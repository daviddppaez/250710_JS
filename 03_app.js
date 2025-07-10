// Librerias necesarias
const prompt = require("prompt-sync")();

// Primer ejercicio, saber si es mayor de edad.
// Solicitud de información
let genAge = prompt("Ingrese su edad: ")

// Impresión de resultado
if (genAge < 18) {
    console.log("No puedes entrar");
} else {
    console.log("Puedes entrar")
}

// Segundo ejercicio, positivo/negativo o cero.
// Solicitud de información
let genNum = prompt("Ahora, elige un número: ")

// Impresión de resultado
if (genNum > 0) {
    console.log("Es positivo")
} else if (genNum < 0) {
    console.log("Es negativo")
} else {
    console.log("Es cero")
}