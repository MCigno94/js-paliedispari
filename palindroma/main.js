/* 
Palindroma
Chiedere all’utente di inserire una parola,
Creare una funzione per capire se la parola inserita è palindroma
 */



function palindroma(word) {
    let backwardsText = '';

    for (let i = 0; i < word.length; i++) {
        backwardsText += word[word.length - i - 1];
    }
    console.log(`Parola letta da sx verso dx: ${word}`);
    console.log(`Parola letta al contrario: ${backwardsText}`);

    if (word == backwardsText) {
        console.log(`La parola "${word}" è palindroma`);
    } else {
        console.log(`La parola "${word}" non è palindroma`);
    }
}

let text = prompt('Inserisci una parola');
palindroma(text);