function sum() {
    let sum = 0;
    for (i in arguments) {
        sum += arguments[i]; // arguments é um objeto array-like que contém os argumentos passados para a função.
    }
    return sum;
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15
console.log(sum(10, 20)); // Output: 30
console.log(sum(5)); // Output: 5
console.log(sum()); // Output: 0
