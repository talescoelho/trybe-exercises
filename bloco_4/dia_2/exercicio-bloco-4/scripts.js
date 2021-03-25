let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for (let imprimir of numbers) {
  console.log(imprimir);
}

// 2 - Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
let soma = 0;
for (let i = 0; i < numbers.length; i++) {
  soma += numbers[i];
}
console.log('Soma de todos os valores = ' + soma);

// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
console.log('Média aritimética = ' + soma/numbers.length)

// 4 - Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (soma/numbers.length > 20){
  console.log('valor maior que 20');
}
else {
  console.log('valor menor ou igual a 20');
}

// 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maior = numbers[0];
for (let i of numbers){
  if (maior < i) {
    maior = i;
  }
}
console.log('O maior número do array é = ' + maior);

// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let impares = 0;
for (let impar of numbers){
  if (impar%2 !== 0){
    impares++;
  }
}
if(impares === 0) {
  console.log('nenhum valor ímpar encontrado');
}
else{
  console.log('Foram encontrados ' + impares + ' valores Ímpares')
}

// 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let menor = numbers[0];
for (let i of numbers){
  if (menor > i) {
    menor = i;
  }
}
console.log('O menor número do array é = ' + menor);

// 8 - Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;
let muitosNumeros = [];
for (let i = 1; i<=25; i++){
  muitosNumeros[i] = i;
}
console.log(muitosNumeros)

// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
for (let divisao of muitosNumeros) {
  console.log(divisao/2);
}