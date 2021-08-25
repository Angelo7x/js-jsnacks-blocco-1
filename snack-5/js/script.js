//creo array vuota
var listaNumeri = [];
//creo ciclo con la possibilità di inserire numeri
for (var i = 0 ; i < 6 ; i++) {
    var numeroUtente = parseInt(prompt("Inserisci un numero")) ;
    if ( numeroUtente %2 != 0) {
        var numeroAggiunto = listaNumeri.push(numeroUtente)
    }
}
console.log(listaNumeri)



//verifico che i numeri siano pari o dispari
//i dispari vanno inseriti


