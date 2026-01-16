// console.log(typeof Object); 

// class Product {}
// console.log(typeof Product);

// function printSum(a, b) {
//     console.log(a + b);
// }

// printSum(2, 3);

// // Function with return
// function sum(a, b = 0) {
//     return a + b;
// }

// console.log(sum(2, 3));
// console.log(sum(2));

const printSum = function(a, b)  {
    console.log(a + b);
}

printSum(2, 3);

// Armazenando uma funçaõ arrow em uma variável.
const sum = (a, b) => a + b;

console.log(sum(2, 3));
