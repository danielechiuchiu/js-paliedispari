var input = prompt('Inserisci una parola');
var risultato = 'Ritenta';


if (input == verifica(input)){
  risultato = 'L hai trovata';
}

document.getElementById('esercizio').innerHTML = risultato;

function verifica(palindromo) {
    var controllo = '';
    for (var i = palindromo.length - 1; i >= 0; i--) {
        controllo = controllo + palindromo[i];
    }
    return controllo;
    console.log('palindromo')
}
