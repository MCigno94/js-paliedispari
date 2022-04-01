/* 
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
 */

let evenOdd = prompt('Scegli Pari o Dispari');

let numberUser = parseInt(prompt('Inserisci un numero da 1 a 5'));
let numberComputer = randomNumber(1, 5);
console.log('la tua scelta: ' + evenOdd);
console.log('il tuo numero: ' + numberUser);
console.log('il numero del PC: ' + numberComputer);

evenOddFunction(evenOdd, numberUser, numberComputer);

function evenOddFunction(evenOdd, num1, num2) {
    let sum = num1 + num2;
    let result = '';
    if (sum % 2 == 0) {
        result = 'Pari';
    } else {
        result = 'Dispari';
    }
    console.log(`La somma è: ${sum} | ${result}`);
    if (evenOdd.toLocaleLowerCase() == result.toLocaleLowerCase()) {
        console.log('Hai vinto!');
    } else {
        console.log('Hai perso!');
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}