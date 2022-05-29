// Manipulando arrays
let animals = ['bee', 'shell', 'eagle', 'goose'];
console.log(animals);

// Adiciona item no final do array
animals.push('snack');
console.log(animals);

// Adiciona item no começo do array
animals.unshift('cat');
console.log(animals);

animals.push('dog');

// Removendo item do fim
console.log(animals);
animals.pop();
console.log(animals);

// Removendo item do começo
animals.shift();
console.log(animals);

// Pegar somente alguns elementos do array
// Não modificar o array
console.log(animals.slice(0, 3));

// Remover 1 ou mais itens do array
console.log(animals);
// animals.splice(1, 3);
// console.log(animals);

// Encontrar a posição do array
let index = animals.indexOf('eagle');
console.log(index);


