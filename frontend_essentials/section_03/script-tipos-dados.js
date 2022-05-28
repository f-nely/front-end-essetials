// tipos de dados 
// tipo string
console.log(`'Olha' 'eu' 'no' "aspas" 'simples'`);

// tipo number
console.log(12);
console.log(24.5);
console.log(32*2);
console.log(Infinity);
console.log(Math.floor(Math.random() * 20));

// tipo boolean
console.log(42 == 1);

// tipo underined
console.log(typeof(age));

// null
let nome = null;

// tipo object
let car = {
    marca: 'Jeep',
    modelo: 'Jeep Compass',
    motor: 1.3,
    ano: '2022',
    preco: 166.900,
    quilometro: 0, 
    run() {
        console.log('Car is running..');
    }
}

console.log(typeof(car));
console.log(car);

// tipo array
let cars = ['S10', 'Renegade', 'Cronos', 'Amarok'];
cars.forEach(function (car) {
    console.log(car);
});