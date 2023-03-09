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
const name = document.getElementById('name');
const distance = document.getElementById('distance');
const age = document.getElementById('age');


//reagisco al click del button
document.getElementById('generate').addEventListener('click', function () {
    console.log(age.value);
    console.log(distance.value);

    let totalPrice = unitPrice * distance.value;

    /*     va applicato uno sconto del 20% per i minorenni
        va applicato uno sconto del 40% per gli over 65 */
    if (age.value == 'under') {
        const discount = totalPrice * discountUnder
        const discountAmount = totalPrice - discount
        console.log(discountAmount)
        document.querySelector('.price_ticket').innerHTML = `${discountAmount} €`;
    } else if (age.value == 'over') {
        const discount = totalPrice * discountOver
        const discountAmount = totalPrice - discount
        console.log(discountAmount)
        document.querySelector('.price_ticket').innerHTML = `${discountAmount} €`;
    } else {
        let totalPrice = unitPrice * distance.value;
        console.log(totalPrice)
        document.querySelector('.price_ticket').innerHTML = `${totalPrice} €`;
    };

    document.querySelector('.user_data').innerHTML = name.value;
    document.querySelector('.type_ticket').innerHTML = 'Biglietto Standard';
    //genera valore intero tra 1 e 200
    document.querySelector('.user_cabin').innerHTML = Math.floor(Math.random() * (200 - 1) + 1);
    //genera valore intero tra 99999 e 100000
    document.querySelector('.user_code').innerHTML = Math.floor(Math.random() * (99999 - 10000) + 10000);
});

//svuota campi
document.getElementById('erase').addEventListener('click', function () {
    name.value = "";
    distance.value = "";
    age.value = "";

    document.querySelector('.user_data').innerHTML = "";
    document.querySelector('.type_ticket').innerHTML = '';
    document.querySelector('.user_cabin').innerHTML = "";
    document.querySelector('.user_code').innerHTML = "";
    document.querySelector('.price_ticket').innerHTML = ``;
});