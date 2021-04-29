// Compare dois objetos (JSON) para verificar se são idênticos ou não

const assert = require('assert');

// criando um objeto (obj1) com as keys title e description
const obj1 = {
  title: 'My Title',
  description: 'My Description',
};
// criando um objeto (obj2) com as keys description e title com os values iguais ao do (obj1)
const obj2 = {
  description: 'My Description',
  title: 'My Title',
};
// criando um objeto (obj3) com as keys title e description com os values diferentes ao do (obj1)
const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};
// implemente seus testes aqui

// verificando se o obj1 e obj2 são iguais
assert.deepStrictEqual(obj1, obj2);
// verificando se o obj1 e obj3 são diferentes
assert.notDeepStrictEqual(obj1, obj3);
// verificando se o obj2 e obj3 são diferentes
assert.notDeepStrictEqual(obj2, obj3);
// resumindo independente das ordens das keys se os values forem iguais os objetos são iguais
