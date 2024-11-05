"use strict"

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
let word = prompt("Inserisci una parola:");

/**
 * Funzione per capire se la parola e palindroma 
 * 
 * @param {string} parola La parola da rovesciare e controllare
 * 
 * @returns {boolean} true se e' palindorma, false viceversa
 */
function palindroma(word) {
    let wordInvertita = word.split('').reverse().join('');
    return word === wordInvertita;
}

if (palindroma(word)) {
    console.log("La parola è palindroma");
} else {
    console.log("La parola non è palindroma");
}

// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //

// Secondo esercizio

// far scegliere all'utente se vuole pari o dispari
let evenOdd = prompt("Scegli se pari o dispari:").toLocaleLowerCase();
console.log(evenOdd);


// far scegliere un numero all'utente tra 1 e 5
let username = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(username);

// generiamo un numero per il computer tra 1 e 5
const miniNumber = 1; 

const maxNumber = 6;

const numeroRandomPc = generaNumeroRandom(miniNumber,maxNumber);

// sommiamo i due numeri
let som = username + numeroRandomPc;
console.log("la somma dei due numeri é :" + som);

/**
 * Vediamo se la somma e pari o dispari
 * 
 * @param {*} som
 * 
 * @returns 
 */
function evenOrOdd(som) {
    return som % 2 === 0 ? "pari" : "dispari";
}

let sommTotal = evenOrOdd(som);
console.log("La somma è: " + sommTotal);

// diciamo chi ha vinto 
if (sommTotal === evenOdd) {
    console.log("Hai vinto!");
} else {
    console.log("Hai perso!");
}


