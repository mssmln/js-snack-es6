// jsnack 1
// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.


const bici = [
  {
    nome : 'bici1',
    peso : 5,
  },
  {
    nome : 'bici2',
    peso : 6,
  },
  {
    nome : 'bici3',
    peso : 7,
  },
  {
    nome : 'bici4',
    peso : 2,
  },
  {
    nome : 'bici5',
    peso : 9,
  },
  {
    nome : 'bici6',
    peso : 1,
  },
];

// ****************
// let biciUno = bici[0];
// // let [biciUno] = bici; // stessa cosa ma con destructuring mode
// console.log('valore peso bici uno' , biciUno.peso); // valore 5
//
// // variante for
// for (let i = 1; i < bici.length; i++) {
//   if (bici[i].peso < biciUno.peso) {
//     biciUno = bici[i];
//   }
// }
// console.log(biciUno.nome , 'ha un peso di' , biciUno.peso);
// *****************


// *************
let biciUno = bici[0].peso;
// console.log(biciUno); // valore 5
bici.forEach((item) => {
  const {nome, peso} = item;
  if (peso < biciUno) {
    biciUno = peso;
    console.log(biciUno);
  }
});
