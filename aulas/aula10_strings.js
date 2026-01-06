const school = "Mendeleev";

console.log(school.charAt(4)); // Retorna o caractere na posição 4 (índice começa em 0)
console.log(school.charCodeAt(4)); // Retorna o código Unicode do caractere na posição 4
console.log(school.indexOf("e")); // Retorna o índice da primeira ocorrência de "e"
console.log(school.substring(1)); // Retorna a substring a partir do índice 1 até o final
console.log(school.substring(1, 4));
console.log('School: '.concat(school).concat('!')); // Concatena strings
console.log(school.replace("Mendeleev", "Lomonosov")); // Substitui "Mendeleev" por "Lomonosov"
console.log('Ana, João, Maria'.split(',')); // Divide a string em um array usando vírgula como separador

