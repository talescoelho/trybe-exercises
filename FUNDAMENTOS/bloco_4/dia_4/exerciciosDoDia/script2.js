// Parte II - Funções
// Agora vamos fazer um exercício que vai deixar claro como funções com responsabilidades bem definidas deixam o código mais bem escrito.
// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false
function ehPalindromo (word) {
  for (let index = 0; index < word.length; index += 1) {
    if (word[word.length-1-index] === word[index]) {

    }
    else {
      return false;
    }
  }
  return true;
}

console.log(ehPalindromo('subinoonibus'));

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .
function bigIndice(arr) {
  big = arr[0]
  position = 0;
  for (let index in arr) {
    if (big <= arr[index]) {
      big = arr[index];
      position = index;
    }
  }
  return position;
}

let arr = [2, 3, 6, 7, 10, 1];
console.log('O maior indice do array é o: ' + bigIndice(arr));

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .
function smalIndice(arr) {
  smal = arr[0]
  position = 0;
  for (let index in arr) {
    if (smal >= arr[index]) {
      big = arr[index];
      position = index;
    }
  }
  return position;
}

arr = [2, 4, 6, 7, 10, 0, -3];
console.log('O menor indice do array é o: ' + smalIndice(arr));


// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .
function maiorNome(arrName) {
  big = arrName[0].length;
  position = 0;
  for(let index = 0; index < arrName.length; index += 1) {
    if(big < arrName[index].length) {
      big = arrName[index].length;
      position = index;
    }
  }
  return arrName[position]
}

let arrName = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(maiorNome(arrName))


// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .
function maisRepete(arrNum) {
  let quant = 1;
  let newQuant = 0;
  let maisRepete = 0;
  for(let index = 0; index < arrNum.length; index += 1) {
    newQuant = 0;
    for(let newIndex = 0; newIndex < arrNum.length; newIndex += 1) {
      if (arrNum[index] === arrNum[newIndex]) {
        newQuant += 1;
      }
      if (newQuant >= quant) {
        quant += 1;
        maisRepete = arrNum[index];
      }
    }
  }
  return maisRepete;
}
let arrNum = [2, 3, 2, 5, 8, 2, 3];
console.log(maisRepete(arrNum));
// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

function somaTodosAteN (n) {
  let total = 0;
  for (let index = 0; index <= n; index += 1) {
    total += index;
  }
  return total;
}

let n = 5;
console.log(somaTodosAteN(n));

// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false
function verificaPalavraFinal (str1, str2) {
  tamanho = str1.length;
  for (let index = 0; index < tamanho; index +=1) {
    if (str2.length-1 === index) {
      return true;
    }
    else if (str1[tamanho-1] === str2[str2.length-1]) {

    }
    else {
      return false;
    }
  }
}

let strings = ['trybe', 'be']
console.log(verificaPalavraFinal(strings[0], strings[1]));
strings = ['joaofernando', 'fernan']
console.log(verificaPalavraFinal(strings[0], strings[1]));