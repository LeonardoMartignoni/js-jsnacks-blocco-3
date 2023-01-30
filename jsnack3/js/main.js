// Fai inserire un numero, che chiameremo N, all'utente.
// Genera N array, ognuno formato da 10 numeri casuali da 1 a 100.
// Ogni volta che ne crei uno, stampalo.

// Input Var
const genButton = document.getElementById('gen_button');

// Output Var
const genResult = document.getElementById('generated_array');

genButton.addEventListener('click', function () {

    genResult.innerHTML = (``);

    // Chiedo all'utente un numero
    const userN = document.getElementById('array_num').value;

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
        genResult.innerHTML += (`${i + 1} Array: ${userArray} <br>`);

        // Resetto l'array
        userArray = [];

        i++;
    }
})

