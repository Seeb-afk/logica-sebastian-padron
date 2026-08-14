/*

Crea un programa que el cual me permita ingresar una palabra y me devuelva la palabra
invertida

*/

alert("Este programa devuelve una palabra invertida.");
let palabra = prompt("Ingresa una palabra:").toLowerCase();


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


/**
 * @function revertString
 * 
 * @description Devuelve una palabra invertida, desde la ultima letra hasta la primera
 * @param {string} text - Texto ingresado
 * @param {function} validator - Verifica si el valor ingresado es un string
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

  return invertida;
}


let resultado = revertString(palabra, isString);

alert(`La palabra ingrsada es: ${palabra}
  \ny su inverso es: ${resultado}`)

