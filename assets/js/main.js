/* scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65. */

//preparo le mie costanti
const unitPrice = 0.21;
const discountUnder = 0.20;
const discountOver = 0.40;

//raccolto l'input dell'utente
const age = document.getElementById('age');

const distance = document.getElementById('distance');

//reagisco al click del button
document.querySelector('button').addEventListener('click', function () {
    console.log(age.value);
    console.log(distance.value);

    let totalPrice = unitPrice * distance.value;

    /*     va applicato uno sconto del 20% per i minorenni
        va applicato uno sconto del 40% per gli over 65 */
    if (age.value < 18) {
        const discount = totalPrice * discountUnder
        const discountAmount = totalPrice - discount
        console.log(discountAmount)
    } else if (age.value > 65) {
        const discount = totalPrice * discountOver
        const discountAmount = totalPrice - discount
        console.log(discountAmount)
    } else {
        let totalPrice = unitPrice * distance.value;
        console.log(totalPrice)
    };

    //svuota campi
    age.value = "";
    distance.value = "";
});

