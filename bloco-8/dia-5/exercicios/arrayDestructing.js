const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

console.log(saudacoes[1](saudacoes[0])); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [el1, el2] = saudacoes;

console.log(el2(el1));