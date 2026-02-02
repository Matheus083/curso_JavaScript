console.log(typeof Object); // function
console.log(typeof new Object); // object

const Customer = function() {};
console.log(typeof Customer);
console.log(typeof new Customer);

class Product {}
console.log(typeof Product);
console.log(typeof new Product);
