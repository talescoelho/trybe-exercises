// (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
// Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
// Dicas:
// Uma string é um array de caracteres, então cada elemento do array é uma letra.
// O valor de cada numeral romano é:
// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |
// Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
// Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.
let romanNum = 'MCDLXXVII';
romanNum = romanNum.toUpperCase();
let coman = ['I', 1, 'V', 5, 'X', 10, 'L', 50, 'C', 100, 'D', 500, 'M', 1000]
let big = 0;
let convert = [];
let position = 0;
let total = 0;

for (let index = 0; index < romanNum.length; index += 1) {
  for (let count = 0; count < coman.length; count += 1) {
    if (romanNum[index] == coman[count]) {
      convert[index] = coman[count + 1];
      break;
    }
  }
}

for (let count = 0; count < convert.length; count += 1) {
  //Este número é igual a 1?
  if (convert[count] === 1) {
    //O próximo número é igual a 1?
    if (convert[count+1] === 1) { 
      total += 2;
      //O próximo número é igual a 1?
      if (convert[count+2] === 1) {
        total += 1;
        count += 2;
      }
      else if (count+2 === convert.length){
        break;
      }
    }
    else if (count+1 === convert.length) {
      total += 1;
      break;
    }
    else {
      total += convert[count+1] - convert[count];
      count += 1;
    }
  }
  else if (convert[count] < convert[count+1]){
    total += convert[count+1] - convert[count];
    count += 1;
  }
  else {
    total += convert[count];
  }
}

console.log('Romano: ' + romanNum + '\nConvertido: ' + total);


// Para o próximo exercício você irá precisar ter uma conta no CodeWars , para entender como fazê-lo acesse esse o conteúdo que fizemos sobre isso. Após seguir os passos para registro acesse o desafio proposto e então clique em TRAIN , você então será redirecionado para a página onde o desafio deve ser feito. Quando tiver finalizado o exercício clique em TEST para verificar, com testes simples, se sua solução satisfaz o que foi pedido. Passando nesses testes clique em ATTEMPT , ao fazer isso seu código passará por todos os testes existentes para validação da solução. Caso sua solução esteja correta o botão SUBMIT ficará disponível, clique nele para submeter sua resposta, caso contrário volte ao seu código e veja o que ainda não está satisfazendo o que se é pedido, repita esse processo até que sua solução esteja correta.
// Desafio - 16 + 8 = 214 ;
// Esse desafio irá exigir um pouco de conhecimento sobre alguns métodos do JavaScript, para isso pesquise quando for necessário e caso surja alguma dúvida peça ajuda no Slack . Dúvidas em como fazer uma boa pesquisa? Sem problemas! Acesse esse conteúdo sobre como pesquisar como uma pessoa desenvolvedora .


// Desafio - 16 + 8 = 214
// function add(num1, num2) {
//   let resultado = [];
//   let numero1 = num1.toString();
//   let numero2 = num2.toString();
//   if(numero1.length > numero2.length) {
//     for (let i = 0; i < numero1.length; i +=1) {
//       if (numero2.length-i <= 0) {
//         resultado[numero1.length-i-1] = +numero1[numero1.length-i-1];
//       }
//       else {
//         resultado[numero1.length-i-1] = +numero1[numero1.length-i-1] + +numero2[numero2.length-i-1];
//       }
//     }
//   }
//   else {
//     for (let i = 0; i < numero2.length; i +=1) {
//       if (numero1.length-i <= 0) {
//         resultado[numero2.length-i-1] = +numero2[numero2.length-i-1];
//       }
//       else {
//         resultado[numero2.length-i-1] = +numero1[numero1.length-i-1] + +numero2[numero2.length-i-1];
//       }
//     }
//   }
//   return +resultado.join('');