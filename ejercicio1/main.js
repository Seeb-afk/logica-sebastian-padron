/*

Crea un programa para jugar piedra papel o tijera, que me permita jugar contra la computadora 
debe tener un contador de victorias para cada jugar, ademas debe de mostrar un historial de las ultimas 5 partidas.

*/

alert("Esto es el juego de piedra, papel y tijeras.");


/**
 * @function play
 * 
 * @description Función para jugar piedra, papel, tijeras
 * @param {number} user - contador de victorias del usuario
 * @param {number} computer - contador de victorias de la computadora  
 */
function play() {
  
  let options = ["piedra", "papel", "tijeras"];

  let playerOption = parseInt(prompt(`Elije tu opción (con un número):
    \n1.- Piedra
    \n2.- Papel
    \n3.- Tijeras`));
  
  let realPlayerOption = options[playerOption - 1]; 
  
  let computerOption = options[Math.floor(Math.random() * 3)];
  
  if (realPlayerOption == "piedra" && computerOption == "tijeras" || realPlayerOption == "papel" && computerOption == "piedra" || realPlayerOption == "tijeras" && computerOption == "papel") {

    alert(`La computadora eligió ${computerOption}`);
    alert(`¡El jugador ganó!`);

    historyShow(realPlayerOption, computerOption);
    victoryCounter("user");
    return;
  } else if (realPlayerOption == "piedra" && computerOption == "papel" || realPlayerOption == "papel" && computerOption == "tijeras" || realPlayerOption == "tijeras" && computerOption == "piedra") {

    alert(`La computadora eligió ${computerOption}`);
    alert(`La computadora ganó.`);

    historyShow(realPlayerOption, computerOption);
    victoryCounter("computer");
    return;
  } else if (realPlayerOption == computerOption) {

    alert(`La computadora eligió ${computerOption}`);
    alert(`Es un empate.`);

    historyShow(realPlayerOption, computerOption);
    victoryCounter("tie");
    return;
  } else {

    alert(`Elección no soportada.`);
    return;
  }
}

/**
 * @function victoryCounter
 * 
 * @description - Evalua al ganador segun la variable result, y le suma una victoria. En caso de ser llamada desde el DO, imprime los resultados
 * @param {string} [result=" "] - Variable que verifica el ganador, o en otro caso muestra los resultados
 */
function victoryCounter(result = " ") {

  if (result == "user") {
    
    userWinCounter++;
  } else if (result == "computer") {
    
    computerWinCounter++;
  } else if (result == "tie") {
    
    tieCounter++;
  } else if (result == " ") {
    
    alert(`Victorias del jugador: ${userWinCounter}
      \nVictorias de la computadora: ${computerWinCounter}
      \nEmpates: ${tieCounter}`);
    
    return;
  } else {
    
    alert(`Operación no soportada.`);
  }
}

function historyShow(user = " ", computer = " ") {


  if (user == " " && computer == " ") {
    
    if (gameHistory.length == 0) {
    
    alert("No se han jugado partidas.")
    return;
    }
    
    for (let [index, element] of gameHistory.entries()) {
      alert(`Esta es la partida ${index + 1}.
        \nEl jugador eligió: ${element.usuario}.
        \nLa computadora eligió: ${element.computadora}.`)
    }
    
    return;
  } else {

    let game = {
      usuario: user,
      computadora: computer,
    };

    gameHistory.push(game);

    if (gameHistory.length > 5) {
      gameHistory.shift();
    }
    return;
  }
}

let userWinCounter = 0;
let computerWinCounter = 0;
let tieCounter = 0;
let gameHistory = []

do {
  
  let election = prompt(`Elije una opcion (con un número):
    \n1.- Jugar
    \n2.- Ver victorias
    \n3.- Historial (últimas 5 partidas)
    \n4.- Salir`)
  
  if (election == 1) {

    play();
  } else if (election == 2) {

    victoryCounter();
  } else if (election == 3) {

  } else if (election == 4) {

    alert("Gracias por jugar.");
    break;
  } else {
    
    alert("Esa no es una opcion válida");
  }

} while (true)