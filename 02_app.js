// Librerias necesarias
const prompt = require("prompt-sync")();

// Primer ejercicio, saber la edad.
// Solicitud de información
let genYearBirth = prompt("Escriba su año de nacimiento: ");
let genYearNow = 2025;
let genAge = genYearNow - genYearBirth

// Impresión de resultado
console.log("Su edad aproximada es: ", genAge);

// Segundo ejercicio, suma de dos datos.
// Solicitud de información
let genNum1 = prompt("Escriba ahora un número: ");
let genNum2 = prompt("Ahora otro número para sumar: ");
let genSuma = parseInt(genNum1) + parseInt(genNum2);

// Impresión del resultado
console.log("El resultado es: ", genSuma);