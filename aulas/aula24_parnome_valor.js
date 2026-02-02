// par nome/ valor
const greeting = 'Hello'; // contexto léxico 1.

function sayHello() {
    const greeting = 'Hi'; // contexto léxico 2.
    return greeting;
};

// Objeto são grupos aninhados de pares nome/valor.
const customer = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        country: 'USA'
    }
};

console.log(greeting); // Output: Hi
console.log(sayHello()); // Output: Hi
console.log(customer);
