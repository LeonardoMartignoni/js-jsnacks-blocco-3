// Creo un array vuoto
let userArray = [];

// Creo un sommatore per i numeri
let totalNumber = 0;

// Chiedo all'utente di inserire un numero dentro l'array finchè la somma degli elementi è maggiore di 50
do {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    userArray.push(userNumber);
    totalNumber += userNumber;
    console.log(totalNumber);

} while (totalNumber <= 50);

// Stampo la somma
console.log(`La somma dei numeri è ${totalNumber}.
Hai inserito i seguenti numeri: ${userArray}
`);