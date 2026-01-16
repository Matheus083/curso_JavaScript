// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log('Valor final de i:', i); // i ainda está acessível aqui devido ao escopo de var

const funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    });
}

funcs[2]();
funcs[8]();
