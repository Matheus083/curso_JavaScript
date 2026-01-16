const a = { name: 'Test' };

console.log(a.name); // Output: Test

const b = a;

console.log(b.name); // Output: Test

b.name = 'Changed';

console.log(a.name); // Output: Changed
console.log(b.name); // Output: Changed

let value; // Não inicializada, valor padrão é undefined.

console.log(value); // Output: undefined

value = null; // Ausencia  de valor.

console.log(value); // Output: null
// console.log(value.toString()); // Erro: Cannot read property 'toString' of null

const product = {};

console.log(product.price); // Output: undefined
console.log(product); // Output: {}

product.price = 3.50;

console.log(product.price); // Output: 3.5

product.price = undefined; // Evitar fazer isso.

console.log(!!product.price);
console.log(product); // Output: { price: undefined }
