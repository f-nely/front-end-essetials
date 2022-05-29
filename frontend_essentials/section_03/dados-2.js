// Manipulando String e array
let newPhrase = 'This is a yellow submarine';
console.log(newPhrase);

let phraseToArray = newPhrase.split(' ');
console.log(phraseToArray);

let phraseModify = phraseToArray.join(' ');
console.log(phraseModify);

let words = 'Taylor, Anne, Luan';
let wordsArray = words.split(',');
console.log(wordsArray);
let wordsModify = wordsArray.join(',');
console.log(wordsModify);

let stringInclude = "You're all clear, kid. Now blow this thing and go home!";
console.log(stringInclude.includes('home'));

// Objetos
let arrayInclude = [
    'submarine',
    'child',
    'color',
    'afternoon'
];
console.log(arrayInclude.includes('blue'));

// String startWith
console.log(stringInclude.startsWith('You'));

// String endsWith
console.log(stringInclude.endsWith('and'));

// Transformando um array em caracteres
let wordToArray = 'That is a casual black t-shirt.';
console.log(Array.from(wordToArray));