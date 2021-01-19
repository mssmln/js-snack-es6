// Non usate jQuery.
// 1) Utilizzando const e/o let. Inserire un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.



// variante con let
let n = parseInt(prompt('key in a number'));
if (n % 2 != 0) {
  n++;
  console.log('stampo il numero successivo: ' + n);
} else {
  console.log('stampo il numero digitato: ' + n);
}


// variante con const non applicabile perchè ci serve incrementare il numero
