const values = [10, 20, 30, 40, 50];

console.log(values[0], values[2], values[4]); // Outputs: 10 30 50
console.log(values[5]);

values[5] = 60;

console.log(values[5]); // Outputs: 60
console.log(values.length); // Outputs: 6

values.push({id: 3}, false, null, 'teste');

console.log(values);
console.log(values.pop())

delete values[0];

console.log(values);
console.log(typeof values);
