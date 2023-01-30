// Input Vars
const generateButton = document.getElementById('generate_button');

// Output Vars
const errorMessage = document.getElementById('error_message');
const resultGeneratedNumber = document.getElementById('generated_num_result');

generateButton.addEventListener('click', function () {

    // Chiedo all'utente il valore minimo
    let userMinNumber = parseInt(document.getElementById('min_number').value);

    // Chiedo all'utente il valore massimo
    let userMaxNumber = parseInt(document.getElementById('max_number').value);

    // Se non sono stati inseriti i valori stampo messaggio di errore
    if (isNaN(userMinNumber) || isNaN(userMaxNumber)) {
        errorMessage.innerHTML = 'Errore. Inserire i valori corretti';
        resultGeneratedNumber.innerHTML = '';
    }
    // Altrimenti tolgo il messaggio di errore e stampo il numero random tra il range
    else {
        errorMessage.innerHTML = '';
        resultGeneratedNumber.innerHTML = `Il valore generato è: ${Math.floor(Math.random() * (userMaxNumber - userMinNumber + 1)) + userMinNumber}`;
    }

})