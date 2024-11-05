"use String"


// Palidroma

// Chiedere all’utente di inserire una parola

// Creare una funzione per capire se la parola inserita è palindroma

// Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

// Sommiamo i due numeri

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

// Dichiariamo chi ha vinto.


// chiediamo di inserire una parola 
let parola = prompt("Inserisci una parola:");

// funzione per capire se la parola e palindroma 
function palindroma(parola) {
    let parolaInvertita = parola.split('').reverse().join('');
    return parola === parolaInvertita;
}

if (palindroma(parola)) {
    console.log("La parola è palindroma");
} else {
    console.log("La parola non è palindroma");
}

// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //

// Secondo esercizio 

// far scegliere all'utente se vuole pari o dispari
let pariDispari = prompt("Scegli se pari o dispari:").toLocaleLowerCase();
console.log(pariDispari);


// far scegliere un numero all'utente tra 1 e 5
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(numeroUtente);

// generiamo un numero per il computer tra 1 e 5
const numeroMinimo = 1;
const numeroMassimo = 6;

const numeroRandomPc = generaNumeroRandom(numeroMinimo,numeroMassimo);

// sommiamo i due numeri
let somma = numeroUtente + numeroRandomPc;
console.log("la somma dei due numeri é :" + somma);

// vediamo se la somma e pari o dispari
function pariODispari(somma) {
    return somma % 2 === 0 ? "pari" : "dispari";
}

let risultatoSomma = pariODispari(somma);
console.log("La somma è: " + risultatoSomma);

// diciamo chi ha vinto 
if (risultatoSomma === pariDispari) {
    console.log("Hai vinto!");
} else {
    console.log("Hai perso!");
}

