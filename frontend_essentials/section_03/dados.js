// Convertendo String para número e número para String
console.log(Number('9') + 24);
console.log(typeof String(6) + ' Converteuu diacho!!');

// Contar caracteres
let oneWord = 'Taylor';
console.log(oneWord.length);

// Maiúsculas e minúsculas
let phrase = 'Olha o bonde passando!';
console.log(phrase.toUpperCase());
console.log(phrase.toLowerCase());

// Convertendo para inteiro
let decimalNumber = 32.8;
console.log(parseInt(decimalNumber));

// Trabalhar com casas decimais
let niceNumber = 24.988834;
console.log(parseFloat(niceNumber.toFixed(3)));
console.log(parseFloat(niceNumber.toFixed(3).replace('.', ',')));

// Precisão numérica
let otherNumber = 137/51;
console.log(otherNumber);
console.log(parseFloat(otherNumber.toPrecision()));




