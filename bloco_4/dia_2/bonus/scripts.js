// Bônus
// Para os próximos dois exercícios leia este artigo e tente entender o que está acontencedo no código abaixo:
// for (let index = 1; index < array.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < i; secondIndex += 1) {
//     if (array[index] < array[secondIndex]) {
//       let position = array[index];
//       array[index] = array[secondIndex];
//       array[secondIndex] = position;
//     }
//   }
// }

//1 - Ordene o array numbers em ordem crescente e imprima seus valores;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let crescente = numbers.slice();
for(let i = 1; i < crescente.length; i++){
  for(let j = 0; j < i; j++){
    if (crescente[i] < crescente[j]){
      let position = crescente[i];
      crescente[i] = crescente[j];
      crescente[j] = position;
    }
  }
}
console.log(numbers);

//2 - Ordene o array numbers em ordem decrescente e imprima seus valores;
let decrescente = numbers.slice();
for(let i = 1; i < decrescente.length; i++){
  for(let j = 0; j < i; j++){
    if (decrescente[i] > decrescente[j]){
      let position = decrescente[i];
      decrescente[i] = decrescente[j];
      decrescente[j] = position;
    }
  }
}
console.log(decrescente);

//3 - Agora você irá criar um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:
// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
let multiplicaAnterior = [];
for(let i = 0; i < numbers.length; i++){
  if (numbers[i+1] <= 0 || numbers[i+1] > 0) {
    multiplicaAnterior.push(numbers[i]*numbers[i+1]);
  }
  else {
    multiplicaAnterior.push(numbers[i]*2);
  }
}
console.log(multiplicaAnterior);
