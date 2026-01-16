// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log('Valor final de i:', i); // Isso causará um erro, pois i não está acessível aqui devido ao escopo de let


const funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    });
}

funcs[2]();
funcs[8]();
