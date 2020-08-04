//1. chiedi all'utene il nome//
var nome = prompt("Qual è il tuo nome?");

//2. chiedi all'utente il suo cognome//
var cognome = prompt ("E il tuo cognome?");

//3. chiedi all'utente il suo colore preferito//
var colore = prompt ("Qual è il tuo colore perferito?");

var password = nome + cognome + colore + 19;
//4.stampo il risultato a video//
document.getElementById('password').innerHTML=password;
