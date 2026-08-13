/*

Crea un programa que me permita verifica si dos palabras son palindromo, es decir, 
que se leen de igual forma de izquierda a derecha o de derecha a izquierda.

*/

let palindromo = "reconocer";
let palindromo2 = "radar"
let noPalindromo = "adios";
let noPalindromo2 = "hola";

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
 * Verifica si la palabra y su versión invertida son iguales
 * 
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

console.log(`La palabra ingresada es: ${palindromo}`)
console.log(`${resultado}\n`)

let resultado2 = isPalindrome(palindromo2, revertString, isString);

console.log(`La palabra ingresada es: ${palindromo2}`)
console.log(`${resultado2}\n`)

let resultado3 = isPalindrome(noPalindromo, revertString, isString);

console.log(`La palabra ingresada es: ${noPalindromo}`)
console.log(`${resultado3}\n`)

let resultado4 = isPalindrome(noPalindromo2, revertString, isString);

console.log(`La palabra ingresada es: ${noPalindromo2}`)
console.log(`${resultado4}\n`)