// jsnack 2
// Partendo da un array creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall'utente
// Usiamo i nuovi metodi degli array foreach o filter
// Esempio:
// const myArray = ['Pippo', 'Pluto', 'Paperino', 'Paperone', 'Paperina', 'Paperoga'];
// Se l’utente inserisce 2 numeri: 1,4 allora selezioniamo 'Pluto', 'Paperino', 'Paperone', 'Paperina'


const myArray = ['Pippo', 'Pluto', 'Paperino', 'Paperone', 'Paperina', 'Paperoga'];
let n1 = parseInt(prompt('type down a number'));
let n2 = parseInt(prompt('type down another number'));

// n1 deve sempre essere il più piccolo
if (n1 > n2) {
  const temp = n2;
  n2 = n1; // diamo a n2 il valore più grande
  n1 = temp; // diamo a n1 il valore più piccolo
  console.log(n1);
  console.log(n2);
}

// variante con foreach ******
// const range = [];
// myArray.forEach((item, i) => {
//   if (i >= n1 && i <= n2) {
//     range.push(item);
//   }
// });
// console.log(range);

// variante con filter
const range = myArray.filter((item, i) => i >= n1 && i <= n2 ) ;
console.log(range);
