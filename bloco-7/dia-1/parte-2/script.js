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

