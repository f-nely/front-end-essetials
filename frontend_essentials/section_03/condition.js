// if and else
let num = 10;

if (num > 5) {
    console.log('Sou maior que 5');
} else {
    console.log('Sou maior que 5');
}

// switch
let myExpression = 'x';

switch (myExpression) {
    case 'a':
        console.log('Apertou o A');
        break;
    case 'b':
        console.log('Apertou o B');
        break;
    case 'c':
        console.log('Apertou o C');
        break;
    default:
        console.log('Você apertou outra tecla', myExpression);
        break;
}

console.log('');

// throw and try catch
function myAge(age) {
    if (!age) {
        throw 'Você precisa colocar a idade!';
    }

    console.log('Eu executei depois do erro!');
}

try {
    myAge();
    console.log('Já tratei e deu certo.');
} catch (error) {
    console.log(error);
}