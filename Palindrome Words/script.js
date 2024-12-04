// PROBLEM:

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// STEPS:

// 1. Inserire prompt per far inserire all'utente una parola
// 1.5 Creare variabile per contenere la parola invertita
// 2. Creare e utilizzare una funzione per capire se è palindroma o no 
//    - SE la parola inserita è === a quella parola con reverse (da fare passo passo e non con il metodo ".reverse") è true
//      - quindi alert con scritto "è palindroma"
//    - ALTRIMENTI SE la parola inserita è !== a quella parola con reverse è false
//      - quindi alert con scritto "non è palindroma"

// CODE:

// 1.
// (spostato dopo la funzione per avere maggior chiarezza)

// 1.5.
// (variabile adesso spostata nella funzione)

// - Ciclo per invertire lettere parole -

// for (i = word.length -1; i >= 0; i--) {
//     reversedWord = reversedWord + word[i]
// }



// 2.
// Funzione per capire se una parola è palindroma oppure no
function isPalindrome(word) {
    let reversedWord = ""
    for (i = word.length -1; i >= 0; i--) {
        reversedWord = reversedWord + word[i]
    } if (reversedWord === word) {
        alert(`✔ La parola inserita (${word}) È palindroma! ✔`)
    } else {
        alert(`❌ La parola inserita (${word}) NON è palindroma! ❌`)
    }
    console.log (`La parola invertita è: ${reversedWord}`)
}

// 1.
let word = (prompt("Vuoi sapere se una parola è palindroma? Inseriscila qui! ⬇")).toLowerCase()

// Check.
while (Number(word)) {
    alert("🔥 Hai inserito un numero, riprova scrivendo una parola! 🔥")
    word = (prompt("Vuoi sapere se una parola è palindroma? Inseriscila qui! ⬇")).toLowerCase()
}

// console.log per tenere traccia della parola inserita e funzione in uso
console.log (`La parola inserita è: ${word}`)
isPalindrome(word)
