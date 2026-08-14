/*

Crea un programa que me permita verifica si dos palabras son palindromo, es decir, 
que se leen de igual forma de izquierda a derecha o de derecha a izquierda.

*/

alert("Este programa detecta palíndromos.")
let palindromo = prompt("Ingresa una palabra: ").toLowerCase();


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
  invertida = invertida.replaceAll(" ", "")

  return invertida
}

/**
 * @function isPalindrome
 * 
 * @description Verifica si la palabra y su versión invertida son iguales
 * @param {string} text - texto original
 * @returns {string} devuelve si es palindromo
 */
function isPalindrome(text, revert, validator) {
  
  let reversedText = revert(text, validator)
  
  if (text == reversedText) {
    
    return "Es palíndromo."
  } else {
    
    return "No es palíndromo."
  }
}

let resultado = isPalindrome(palindromo, revertString, isString);

alert(`La palabra ingresada es: ${palindromo}
  \n${resultado}`)
