// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Verifique se o array passado por parâmetro não sofreu alterações
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
const assert = require('assert');
// Função para remover um item do array porém o array ainda permanece o mesmo
function myRemove(arr, item) {
  // irei criar um novo array para receber os itens do novo array
  let newArr = [];
  // for para inserir os valores do outro array no meu novo array
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
  // é preciso utilizar este método para inserir os itens em um novo array pois
  // se o "newArr = arr" eles vão está referenciando o mesmo endereço de memória,
  // assim fazendo com que se alterar um o outro também é alterado
}
// implemente seus testes aqui
// verificando se o item de valor 3 foi removido do clone do array
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
// verificando se o array retornado é diferente do array inserido
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
// nesta parte estamos criando um novo array para efetuar o teste de se o array
// vai ser modificado quando utilizarmos ele na chamada da função
let arr = [12, 15, 27, 38];
// fazendo a chamada da função com o nosso novo array
myRemove(arr, 15);
// verificando se nosso novo array teve os itens modificados pela função previamente chamada
assert.deepStrictEqual(arr, [12, 15, 27, 38]);
// verificando como se comporta nossa função se passarmos um item que não tem no array
// e verificando se ele modifica algo
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);