const person = {
    name: 'Alice',
    age: 30,
    address: {
        city: 'Wonderland',
        zip: '12345'
    }
}

const { name, age } = person;
console.log(name);
console.log(age);

const {name:n , age:a } = person;
console.log(n);
console.log(a);

const { familyName, goodNatured = true } = person;
console.log(familyName, goodNatured);

const { address: {city, zip, cep}} = person;
console.log(city, zip, cep);

