// Fatorial
// const fatorial = (num) => {
//   if (num <= 1) {
//     return 1;
//   } else {
//     return num * fatorial(num - 1);
//   }
// };
// Fatorial
// const fatorial = (num) => num <= 1 ? 1 : num * fatorial(num - 1);
// console.log(fatorial(6));

// Maior palavra
// function longestWord(frase) {
//   let arr = frase.split(' ');
//   let count = 0;
//   for (let index = 1; index < arr.length; index++) {
//     if (arr[index].length > arr[index - 1].length) {
//       count = index;
//     }
//   }
//   return arr[count];
// };
// Maior palavra
// const longestWord = (frase) => frase.split(' ').sort((a, b) => b.length - a.length)[0];
// console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

// Botão de contador
// const count = document.getElementById('count');
// const totalConts = document.getElementById('total-conts');
// count.addEventListener('click', () => totalConts.innerText = Number(totalConts.innerText) + 1);

// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"
// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .

// const arr = ['HTML', 'CSS', 'JS', 'Lógica', 'C'];
// const string = 'Tales';
// const removeX = string => `Tryber ${string} aqui!`;

// const mySkylls = () => `${removeX(string)}\n${arr.sort().join(';\n')};\n#goTrybe `;
// console.log(mySkylls());

const longestWord = (string) => Math.max(string.split(' ').map((e,i,a) => a[i].length));

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
