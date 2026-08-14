/*

Crea un programa que me permita ingresar un string y me devuelva la cantidad de
vocales que tiene el string, la cantidad de palabras que tiene, y la cantidad de caracteres que tiene.

*/

alert("Este programa muestra la cantidad de vocales, de palabras y caracteres que coloques.")
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

/**
 * @function vocalCounter
 * 
 * @description Cuenta la cantidad de vocales en un texto
 * @param {string} text - texto a evaluar si contiene vocales 
 * 
 * @returns {number}
 */
function vocalCounter(text, validator) {
  
  if ( !(validator(text)) ) {
    return "El valor no es un string."
  }

  let contadorVocales = 0;
  let vocales = ["a", "e", "i", "o", "u"];

  for (let letra of text) {
    if (vocales.includes(letra)) {
      contadorVocales++;
    }
  }

  return contadorVocales;
}

/**
 * @function characterCounter
 * 
 * @description - Verifica cuantos caracteres contiene un string
 * @param {string} text - texto a evaluar si contiene caracteres
 * 
 * @returns {number}
 */
function characterCounter(text, validator) {
  
  if ( !(validator(text)) ) {
    return "El valor no es un string."
  }

  text = text.replaceAll(" ", "");

  let contadorCaracteres = text.length;
  
  return contadorCaracteres;
}

/**
 * @function wordCounter
 * 
 * @description Cuenta la cantidad de palabras en un String
 * @param {string} text - Texto a evaluar la cantidad de palabras
 *   
 * @returns {number} 
 */
function wordCounter(text, validator) {
  
  if ( !(validator(text)) ) {
    return "El valor no es un string."
  }

  let listaPalabras = text.trim().split(" ")
  let contadorPalabras = listaPalabras.length;

  return contadorPalabras
}

let resultadoVocales = vocalCounter(palabra, isString);
let resultadoCaracteres = characterCounter(palabra, isString);
let resultadoPalabra = wordCounter(palabra, isString)

alert(`La palabra(s) tiene:
  \nVocales: ${resultadoVocales}
  \nCaracteres: ${resultadoCaracteres}
  \nPalabra(s): ${resultadoPalabra}`)