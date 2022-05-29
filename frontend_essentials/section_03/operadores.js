// Operador de incremento e decremento
let incrementNumber = 4;
console.log(incrementNumber);
incrementNumber++;
console.log(incrementNumber);

let decrementNumber = 50;
decrementNumber--;
console.log(decrementNumber);

// Operadores Aritméticos
// + - / * %
let nota1 = 10;
let nota2 = 7.5;
let nota3 = 5.5;
let nota4 = 3.5;
let avg = (nota1 + nota2 + nota3 + nota4) / 4;
console.log(parseFloat(avg.toFixed(2)));

// Operadores relacionais e igualdade
// < > == === != !== >= <=
console.log(20 != 40); // != diferente no valor
console.log(20 !== 40); // !== diferente no valor ou diferente no tipo
console.log('20' == 20); // == igual no valor
console.log('20' === 20); // === igual no valor ou no tipo

// Operador de atribuição
let newNumber = 20;
newNumber += 40;
console.log(newNumber);

// Operadores condicionais (ternários)
let value = 24;
let value2 = 32;

const newCondition = value >= value2 ? 'Isso é verdade' : 'Isso é uma mentira';
console.log(newCondition);