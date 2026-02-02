// function teste() {
//     console.log('a =', a);
//     var a = 2;
//     console.log('a =', a);
// }

// teste();
// console.log('a =', a); // ReferenceError: a is not defined

// Explicação do Hoisting:
// No JavaScript, declarações de variáveis com 'var' são "içadas" (hoisted) para o topo do escopo da função.
// Isso significa que a declaração de 'var a' é movida para o topo da função 'teste', mas a atribuição 'a = 2' permanece no lugar original.
// Portanto, quando 'console.log' é chamado pela primeira vez, 'a' é declarado, mas ainda não foi atribuído um valor, resultando em 'undefined'.

let b = 2;
console.log('b =', b);
