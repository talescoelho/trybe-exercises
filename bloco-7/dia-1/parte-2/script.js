// const fatorial = (num) => {
//   if (num <= 1) {
//     return 1;
//   } else {
//     return num * fatorial(num - 1);
//   }
// };

const fatorial = (num) => num <= 1 ? 1 : num * fatorial(num - 1);

console.log(fatorial(6));