console.log('(01)', '1' == 1) // comparação de valor
console.log('(02)', '1' === 1) // comparação de valor e tipo
console.log('(03)', '3' != 3) // comparação de valor
console.log('(04)', '3' !== 3) // comparação de valor e tipo
console.log('(05)', 3 > 2)
console.log('(06)', 3 >= 2)
console.log('(07)', 3 < 2)
console.log('(08)', 3 <= 2)


const d1 = new Date(0) // 01/01/1970
const d2 = new Date(0)

console.log('(09)', d1 == d2) // comparação de referência
console.log('(10)', d1 === d2) // comparação de referência
console.log('(11)', d1.getTime() === d2.getTime()) // comparação de valor

console.log('(12)', undefined == null) // comparação de valor
console.log('(13)', undefined === null) // comparação de valor e tipo
