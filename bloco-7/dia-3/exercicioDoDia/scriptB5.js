// função para verificar o password
const verify = pass => {
  // aqui estamos fazendo a verificação se:
  // o passowrd não está vazio e tem mais de 8 letras
  // existe letra MAIÚSCULA, minúscula e se existe um número
  if (pass.length >= 8 &&
    pass.split('').find(a => a === a.toUpperCase() && a === a.toLowerCase() && !isNaN(a))) {
      // aqui estamos retornando se o password seria aceito
      return 'Ok';
    } else {
      // aqui retornamos se ele não for aceiro
      return 'Not Ok';
    };
};
// Aqui criamos a função que vai efetuar a chamada da função que verifica o password
const passwordVerifier = password => verify(password);
// aqui criamos uma variavel com o valor do password
passwordVerifier('tal3esaT');
// aqui efetuamos a inserção do assert
const assert = require('assert');
// aqui estamos fazendo a verificação se o password informado é valido
assert.deepStrictEqual(passwordVerifier('tal3esaT') , 'Ok');
