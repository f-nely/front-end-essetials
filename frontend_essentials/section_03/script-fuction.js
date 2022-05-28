function myFirstFunction() {
    console.log('Olhaaaa a função!!');
}

myFirstFunction();

function sum(number1, number2) {
    return number1 + number2;
}

console.log(sum(32, 24));

// Arrow function
const multiplication = (n1, n2) => {
    return n1 * n2;
}

console.log(multiplication(11, 6));

// Função anônima
(function () {
    console.log('Paylivre S2');
})();

setTimeout(function() {
    console.log('Vou levar 3 segundo para ser executado!');
}, 3000);