// prompt di una parola e variabile risultato
var input = prompt('Inserisci una parola');
var risultato = 'Ritenta';

// richiamo la funzione e sovrascrivo il risultato se si verifica la condizione
if (input == verifica(input)){
  risultato = 'L hai trovata';
}

//stampo il risultato finale
document.getElementById('esercizio').innerHTML = risultato;

// costruisco la funzione di verifica dell' ordine delle lettere delle parole partendo dall' ultima a descrescere
// creo una variabile 'muta' che rimane dentro la funzione e che ci da la parola scritta al contrario
function verifica(palindromo) {
    var controllo = '';
    for (var i = palindromo.length - 1; i >= 0; i--) {
        controllo = controllo + palindromo[i];
    }
    return controllo;
}
