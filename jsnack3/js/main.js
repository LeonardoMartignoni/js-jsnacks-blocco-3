// Fai inserire un numero, che chiameremo N, all'utente.
// Genera N array, ognuno formato da 10 numeri casuali da 1 a 100.
// Ogni volta che ne crei uno, stampalo.

// Chiedo all'utente un numero
const userN = parseInt(prompt('Inserisci il numero degli array'))


// Creo un array vuoto
let userArray = [];

// Inizializzo l'indice
let i = 0;

// Creo N array
while (i < userN) {

    for (x = 0; x < 10; x++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        userArray.push(randomNumber);
    }

    // Stampo l'array
    console.log(userArray);

    // Resetto l'array
    userArray = [];

    i++;
}
