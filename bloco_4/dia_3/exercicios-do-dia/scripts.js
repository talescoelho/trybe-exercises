// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
// n = 5
// *****
// *****
// *****
// *****
// *****
let n = 5;
let square = '';

for (let index = 0; index < n; index += 1){
  square = square+'*';
}
for (let imprimeIndex = 0; imprimeIndex < n; imprimeIndex += 1){
  console.log(square);
}


// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// n = 5
// *
// **
// ***
// ****
// *****
let pyramid = '';
for (let index = 0; index < n; index += 1){
  pyramid = pyramid+'*';
  console.log(pyramid);
}


// 3- Agora inverta o lado do triângulo. Por exemplo:
// n = 5
//     *
//    **
//   ***
//  ****
// *****
// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.
let invertedPyramid = '';
let teste = '';
for (let index = 0; index < n-1; index += 1){
  invertedPyramid = invertedPyramid+' ';
}
for (let invertedIndex = 0; invertedIndex < n; invertedIndex += 1){
  teste = teste+'*';
  invertedPyramid;
  console.log(invertedPyramid.substr(invertedIndex) + teste)
}



// 4- Depois, faça uma pirâmide com n asteriscos de base:
// n = 5
//   *
//  ***
// *****
let normalPyramid = [];
for (let index = 0; index < Math.ceil(n/2); index += 1) {
  normalPyramid[index] = ' ';
}
for (let showIndex = 0; showIndex < Math.ceil(n/2); showIndex += 1) {
  if (n%2 != 0) {
    normalPyramid[Math.ceil(n/2)-showIndex-1] = '*';
    normalPyramid[Math.ceil(n/2)+showIndex-1] = '*';
    console.log(normalPyramid.join(''));
  }
  else {
    normalPyramid[Math.ceil(n/2)-showIndex-1] = '*';
    normalPyramid[Math.ceil(n/2)+showIndex] = '*';
    console.log(normalPyramid.join(''));
  }
}


// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7
//    *
//   * *
//  *   *
// *******
let oPyramid = [];
for (let index = 0; index < Math.ceil(n/2); index += 1) {
  oPyramid[index] = ' ';
}
for (let showIndex = 0; showIndex < Math.ceil(n/2); showIndex += 1) {
  oPyramid[Math.ceil(n/2)-showIndex-1] = '*';
  oPyramid[Math.ceil(n/2)+showIndex-1] = '*';
  if (showIndex+1 == Math.ceil(n/2)) {
    for (let lastIndex = 0; lastIndex < n; lastIndex += 1) {
      oPyramid[lastIndex] = '*';
    }
    console.log(oPyramid.join(''));
    break;
  }
  console.log(oPyramid.join(''));
  oPyramid[Math.ceil(n/2)-showIndex-1] = ' ';
  oPyramid[Math.ceil(n/2)+showIndex-1] = ' ';
}

// 6- Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

let primo = Math.ceil(Math.random()*9999);
let count = 0;
for (let index = 2; index < primo; index += 1){
  if (primo % index === 0) {
    count += 1;
    break;
  }
}
if (count >= 1) {
  console.log('O número ' + primo + ' não é primo!!');
}
else {
  console.log('O número ' + primo + ' é primo!!');
}
