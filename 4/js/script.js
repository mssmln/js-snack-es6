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
    peso : 1,
  },
  {
    nome : 'bici5',
    peso : 9,
  },
];

// const peso = bici[0]['peso'];
// console.log(peso); // valore 5
const [peso] = bici // stessa cosa ma con destructuring mode
// console.log(peso.peso); // valore 5

for (let i = 1; i < bici.length; i++) {
  if (peso.peso < bici[i].peso) {
    console.log(peso.peso);
  } else {
    console.log(bici[i].peso);
  }
}
