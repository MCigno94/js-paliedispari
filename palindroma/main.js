/* 
Palindroma
Chiedere all’utente di inserire una parola,
Creare una funzione per capire se la parola inserita è palindroma
 */



function palindroma(word) {
    let text = '';
    let backwardsText = '';

    for (let i = 0; i < word.length; i++) {
        text += word[i]
        backwardsText += word[word.length - i - 1];
    }
    console.log(`Parola letta da sx verso dx: ${text}`);
    console.log(`Parola letta al contrario: ${backwardsText}`);

    if (text == backwardsText) {
        console.log(`La parola "${word}" è palindroma`);
    } else {
        console.log(`La parola "${word}" non è palindroma`);
    }
}

let text = prompt('Inserisci una parola');
palindroma(text);