// 3) Utilizzando const e/o let. Dare la possibilità di inserire due parole. Verificare se le due parole hanno la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.


// variante let
// let word1 = prompt('type a word down');
// let word2 = prompt('type another word down');
// let longer = 'longer';
// let theLongest = 'longest';
//
// if (word1.length == word2.length) {
//   document.getElementById('word').innerHTML = `
//     <h3 class="${longer}">
//       ${word1}
//       ${word2}
//     </h3>
//   `
// } else if (word1.length > word2.length){
//   document.getElementById('word').innerHTML = `
//     <h3 class="${theLongest}">
//       ${word1}
//     </h3>
//   `
// } else {
//   document.getElementById('word').innerHTML = `
//     <h3 class="${theLongest}">
//       ${word2}
//     </h3>
//   `
// }



// variante const
const word1 = prompt('type a word down');
const word2 = prompt('type another word down');
const longer = 'longer';
const theLongest = 'longest';

if (word1.length == word2.length) {
  document.getElementById('word').innerHTML = `
    <h3 class="${longer}">
      ${word1}
      ${word2}
    </h3>
  `
} else if (word1.length > word2.length){
  document.getElementById('word').innerHTML = `
    <h3 class="${theLongest}">
      ${word1}
    </h3>
  `
} else {
  document.getElementById('word').innerHTML = `
    <h3 class="${theLongest}">
      ${word2}
    </h3>
  `
}
