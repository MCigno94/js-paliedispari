/* 
Palindroma
Chiedere all’utente di inserire una parola,
Creare una funzione per capire se la parola inserita è palindroma
 */


/* function palindroma(text) {
    let text = '';
    let verify = false;
    for (let i = 0; i < text.length; i++) {
        if (text[i] == text[text.length - i]) {
            verify = true;
        } else {
            verify;
        }
    }
} */

let text = prompt('Inserisci una parola');
let backwardsText = '';

for (let i = 0; i < text.length; i++) {
    backwardsText += text[text.length - i - 1];
}

if (text === backwardsText) {
    console.log('la parola è palindroma');

} else {
    console.log('la parola NON è palindroma');
}