const notes = [9.2, 10, 8.1, 7.7, 4.4, 1.0, 8,8, 9.5, 6.3];

for(let i in notes) {
    console.log(`The note is ${notes[i]}`);
};

const person = {
    name: 'John',
    age: 30,
    city: 'New York',
    weight: 80.5,
};

console.log();

for(let atr in person) {
    console.log(`${atr} = ${person[atr]}`);
};
