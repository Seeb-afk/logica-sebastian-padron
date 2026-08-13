/*

Crea un programa que el cual me permita ingresar una palabra y me devuelva la palabra
invertida

*/

let palabra = "hola";
let palabra2 = "adios";
let palabra3 = 43;

/**
 * Verifica si el valor ingresado es un string
 * 
 * @param {undefined} text - Valor a comprobar
 * @returns {boolean} 
 */
function isString(text) {
  return text.constructor === String;
}

/**
 * Devuelve una palabra invertida, desde la ultima letra hasta la primera
 * 
 * @param {string} text - Texto ingresado
 * @param {Function} validator - funcion que verifica si el valor ingresado es un string
 * @returns {string} Un nuevo texto invertido
 */
function revertString(text, validator) {

  if ( !(validator(text)) ) {
    
    return "Esto no es una cadena de texto.";
  }

  let lista = []

  for (x of text) {
    lista.push(x);
  }

  let invertida = lista.toReversed();
  invertida = invertida.join("");

  return invertida
}

let resultado = revertString(palabra, isString);
let resultado2 = revertString(palabra2, isString);
let resultado3 = revertString(palabra3, isString);

console.log(resultado);
console.log(resultado2);
console.log(resultado3);

