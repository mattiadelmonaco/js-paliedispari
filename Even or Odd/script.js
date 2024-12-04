// PROBLEM:

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// STEPS:

// 1. L'utente sceglie pari o dispari (prompt dove inserire "pari" o "dispari")
//    - Creare variabili con "pari" e "dispari"
//    - SE la parola inserita è diversa dalla parola "pari" o "dispari" 
//      alert per avvisare dell'errore e torna alla scelta iniziale
// 2. L'utente inserisce un numero tra 1 e 5 (prompt con inserimento numero 1 >= 5)
//    - SE il numero inserito non è compreso tra 1 e 5 oppure è una parola 
//      alert per avvisare dell'errore e torna alla scelta iniziale
// 3. Creare funzione per generare un numero tra 1 e 5 per il computer
// 4. Somma dei due numeri (numero scelto utente + nome funzione)
// 5. Creare funzione per stabilire se il risultato è pari (true) o dispari (false)
// 6. Alert per indicare se ha vinto l'utente oppure il computer

// CODE: 

// alert(`Stai per giocare a 🟩 "Pari o dispari" 🟥 contro il computer!`)

// // 1. 
// let userChoice = (prompt(`Scegli "Pari" oppure "Dispari" scrivendolo qui! ⬇`)).toUpperCase()

// const even = "PARI"
// const odd = "DISPARI"

// while(userChoice !== even && userChoice !== odd) {
//      alert(`🔥 Hai inserito "${userChoice}" il quale non è valido. Riprova scrivendo "PARI" oppure "DISPARI" 🔥`)
//      userChoice = (prompt(`Scegli "Pari" oppure "Dispari" scrivendolo qui! ⬇`)).toUpperCase()
// }

// if (userChoice === even) {
//     alert("🟩 Hai scelto PARI! 🟩")
// } else if (userChoice === odd) {
//     alert("🟥 Hai scelto DISPARI! 🟥")
// }

// console.log(`L'utente ha scelto: ${userChoice}`)

// // 2.
// let userNumber = parseFloat(prompt("🔢 Scegli un numero compreso tra 1 e 5! ⬇"))

// while(isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
//     alert(`🔥 Hai inserito "${userNumber}" il quale non è valido. Riprova inserendo un numero compreso tra 1 e 5! 🔥`)
//     userNumber = parseFloat(prompt("🔢 Scegli un numero compreso tra 1 e 5! ⬇"))
// }

// alert(`Hai scelto 🔢 ${userNumber} 🔢`)

// console.log(`L'utente ha scelto: ${userNumber}`)

// 3. 
function getRandomNumber(min, max) {
let randomNumber = (Math.floor((Math.random()) * (max - min + 1) + min))
return randomNumber
}

const computerNumber = getRandomNumber(1, 5) 

alert(`Il numero estratto per il computer è: 🔢 ${computerNumber} 🔢`)

console.log(`Il numero estratto per il computer è: ${computerNumber}`)

