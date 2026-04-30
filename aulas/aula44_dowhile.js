function getRandomInt(min, max) {
    const value = Math.random() * (max - min) + min;
    return Math.floor(value);
}

let option = 0;

do {
    option = getRandomInt(-1, 10);
    console.log(`Option chosen: ${option}.`);
} while (option != 1);

console.log('You got it!');
