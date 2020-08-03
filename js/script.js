
var nome = prompt("Qual è il tuo nome?");
nome = parseInt(nome);
var cognome = prompt ("E il tuo cognome?");
cognome = parseInt(cognome);
var colore = prompt ("Qual è il tuo colore perferito?");
colore = parseInt(colore);

var somma = nome + cognome + colore;
somma = parseInt(somma);

document.getElementById('totale').innerHTML = somma;
