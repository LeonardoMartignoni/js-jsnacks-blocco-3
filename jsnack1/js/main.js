// Chiedo all'utente il valore minimo
let userMinNumber = parseInt(prompt('Inserisci il valore minimo del numero da generare'));

// Chiedo all'utente il valore massimo
let userMaxNumber = parseInt(prompt('Inserisci il valore massimo del numero da generare'));

// Fino a quando non ha inserito un numero, chiedo di nuovo i valori
while (isNaN(userMinNumber) || isNaN(userMaxNumber)) {

    console.log('Valori non corretti. Inserire di nuovo i numeri');
    userMinNumber = parseInt(prompt('Inserisci il valore minimo del numero da generare'));
    userMaxNumber = parseInt(prompt('Inserisci il valore massimo del numero da generare'));

}

// Genero un numero casuale con i valori che mi ha dato l'utente
console.log(Math.floor(Math.random() * (userMaxNumber - userMinNumber + 1)) + userMinNumber);