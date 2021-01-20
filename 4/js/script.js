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
    peso : 8,
  },
  {
    nome : 'bici5',
    peso : 9,
  },
];

// const peso = bici[0]['peso'];
// console.log(peso); // valore 5
const [peso] = bici // stessa cosa ma con destructuring mode
console.log(peso.peso); // valore 5
