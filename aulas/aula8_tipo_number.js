const weight = 1.0;
const wheight2 = Number('2.0');

console.log(weight, wheight2);  
console.log(Number.isInteger(weight));
console.log(Number.isInteger(wheight2));

const assesment =  7.5730;
const assesment2 = 9.0;

const total = assesment * weight + assesment2 * wheight2;
const average = total / (weight + wheight2);

console.log(average.toFixed(2)); 
console.log(average.toString(2)); // Representation in binary. 
console.log(typeof average);
console.log(typeof Number);
