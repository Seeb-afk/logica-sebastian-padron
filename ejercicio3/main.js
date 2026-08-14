/*

Crea un programa que me permita ingresar un string y me indique cuantas veces se repite cada palabra.

*/

alert("Este programa cuenta cuantas veces se repite una palabra.")
let palabra = prompt("Ingresa una palabra: ").toLowerCase();

/**
 * @function isString
 * 
 * @description Verifica si el valor ingresado es un string
 * @param {undefined} text - Valor a comprobar
 * @returns {boolean} 
 */
function isString(text) {
  return text.constructor === String;
}

function wordCounter(text, validator) {
  
  if ( !(validator(text)) ) {
    return "El valor no es un string.";
  }

  let listaPalabra = text.trim().split(" ");
  let obj = {};

  for (x of listaPalabra) {

    if (x in obj) {
      obj[x] += 1;
    }  else {
      obj[x] = 1;
    }
  }

  return obj;
}

let resultado = wordCounter(palabra, isString);

for (let [key, value] of Object.entries(resultado)) {
  alert(`La palabra ${key} se repite ${value} vez/veces.`)
}

