const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let x in numbers) {
    if(x == 5) {
        break; // Interrompe o loop quando x for igual a 5
    }
    console.log(`${x} = ${numbers[x]}`);
};

console.log('-------');

for(let x in numbers) {
    if(x == 5) {
        continue; // Pula a iteração quando x for igual a 5
    }
    console.log(`${x} = ${numbers[x]}`);
};

console.log('-------');

out: for(a in numbers) {
    for(b in numbers) {
        if(a == 2 && b == 3) break out
        console.log(`Par = ${a}, ${b}`); // Interrompe ambos os loops quando a e b forem iguais a 5.         
}
};
