// A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
const assert = require('assert');
// função para remover um item do array enviado
function myRemoveWithoutCopy(arr, item) {
  // fazendo um for para verificar se o item enviado existe no array
  for (let index = 0, len = arr.length; index < len; index += 1) {
    // fazendo a comparação
    if (arr[index] === item) {
      // removendo 1 item a partir da posição index do nosso array
      arr.splice(index, 1);
      // diminuimos o index pois o próximo item do index se torna o atual
      index -= 1;
      // diminuimos também o tamanho total do array
      len -= 1;
    }
  }
  // retornamos o novo array com o item removido
  return arr;
}
// implemente seus testes aqui
// verificando se o item de valor 3 do nosso array foi removido
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
// verificando se o nosso antigo array é diferente do novo array com o item removido
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
// aqui iremos efetuar os testes com um array previamente criada
let arr = [12, 15, 27, 38];
// removeremos o item de valor 15 do nosso array
myRemoveWithoutCopy(arr, 15);
// verificando se o nosso novo array está com o item 15 removido
assert.deepStrictEqual(arr, [12, 27, 38]); 
// verificando se o nosso array está diferente de como ele era originalmente
assert.notDeepStrictEqual(arr, [12, 15, 27, 38]);
