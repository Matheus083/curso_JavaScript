const product_One = {}; // Representa um objeto.
product_One.name = "Ford";
product_One.price = 80.725;
product_One['Cool Discount'] = 0.15; // Evitar atributos com espaaços.

console.log(product_One);

const product_Two = {
    name: 'Chevrolet',
    price: 90.500,
    informations: {
        weight: '1.200kg',
        color: 'Red',
        model: {
            year: 2020,
            version: 'LTZ'
        }
    }
}

console.log(product_Two);
