let person = 'Taylor Otwell';

console.log(typeof(person));

let human = {
    name: 'Luan',
    age: 30,
    weight: 80,
    isAdmin: false,
    isAMan: true
}

console.log(human);
console.log(typeof(human));
console.log(`O humano ${human.name} tem o peso ${human.weight} kg.`);

let humans = [
    human
];

console.log(humans);
console.log(humans[0].age);


let student = {
    name: 'Arthur',
    age: 16,
    city: 'Araraquara'
}

let students = [
    student
];

console.log(students[0].city);
