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

    //al click mostra questo blocco
    document.querySelector('.ticket').innerHTML = `    
    <div class="container bg-white py-3">
        <h3 class="fw-bold">DETTAGLIO PASSEGGERI</h3>
        <table class="table table-borderless border-top border-bottom text-black">
            <thead>
                <tr>
                    <th class="w-25 fs-4 bg_my_secondary pt-3 ps-3 pb-0">NOME PASSEGGERO</th>
                    <th>Offerta</th>
                    <th>Carrozza</th>
                    <th>Codice CP</th>
                    <th>Costo biglietto</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="user_data fs-5 fw-bold bg_my_secondary pt-0 ps-3"></td>
                    <td class="type_ticket pt-4"></td>
                    <td class="user_cabin pt-4"></td>
                    <td class="user_code pt-4"></td>
                    <td class="price_ticket pt-4"></td>
                </tr>
            </tbody>
        </table>
    </div>`

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

    document.querySelector('.ticket').innerHTML = ""
});