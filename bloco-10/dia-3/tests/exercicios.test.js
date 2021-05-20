// #1 Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.
let functionNumber = require('../exercicioDoDia/randNumber');

describe('#Exercício 1, 2 e 3', () => {
  test("#1 Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.", () => {
    const mockRandNumber = jest
      .spyOn(functionNumber, "randNumber")
      .mockReturnValue(10);
      
    mockRandNumber();
    expect(mockRandNumber).toHaveBeenCalled();
    expect(mockRandNumber()).toBe(10);
    expect(mockRandNumber).toHaveBeenCalledTimes(2);
  });
  
  // #2 Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.
  
  test("#2 Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.", () => {
    functionNumber.randNumber.mockClear();
    const mockRandNumber = jest
      .spyOn(functionNumber, "randNumber")
      .mockImplementation((a, b) => a / b);
      
    mockRandNumber();
    expect(mockRandNumber).toHaveBeenCalled();
    expect(mockRandNumber(20, 2)).toBe(10);
    expect(mockRandNumber).toHaveBeenCalledTimes(2);
  });
  
  // #3 Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.
  
  test("#3 Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.", () => {
    functionNumber.randNumber.mockClear();
    let mockRandNumber = jest
      .spyOn(functionNumber, "randNumber")
      .mockImplementation((a, b, c) => a * b * c);
      
    mockRandNumber();
    expect(mockRandNumber).toHaveBeenCalled();
    expect(mockRandNumber(2, 3, 4)).toBe(24);
    expect(mockRandNumber).toHaveBeenCalledTimes(2);
  
    functionNumber.randNumber.mockReset();
    mockRandNumber = jest
      .spyOn(functionNumber, "randNumber")
      .mockImplementation((a) => a * a);
  
    mockRandNumber();
    expect(mockRandNumber).toHaveBeenCalled();
    expect(mockRandNumber(2)).toBe(4);
    expect(mockRandNumber).toHaveBeenCalledTimes(2);
  });
});

let stringFnc = require('../exercicioDoDia/stringTransform');
describe('#Exercício 4', () => {
  // #4 Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.
  test("#4 Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.", () => {
    const mocStringTransform = jest
      .spyOn(stringFnc, "textToUpperCase")
      .mockImplementation((a) => a.toLowerCase());
      
      mocStringTransform('TaLes');
    expect(mocStringTransform).toHaveBeenCalled();
    expect(mocStringTransform('TaLes')).toBe('tales');
    expect(mocStringTransform).toHaveBeenCalledTimes(2);

    const mocStringFirstLength = jest
      .spyOn(stringFnc, "firstLength")
      .mockImplementation((a) => a.split('')[a.length - 1]);
      
      mocStringFirstLength('TaLes');
    expect(mocStringFirstLength).toHaveBeenCalled();
    expect(mocStringFirstLength('TaLes')).toBe('s');
    expect(mocStringFirstLength).toHaveBeenCalledTimes(2);

    const mocStringConcat = jest
      .spyOn(stringFnc, "concatStrings")
      .mockImplementation((a, b, c) => `${a} ${b} ${c}`);
      
      mocStringConcat('Tales', 'Coelho', 'Santos');
    expect(mocStringConcat).toHaveBeenCalled();
    expect(mocStringConcat('Tales', 'Coelho', 'Santos')).toBe('Tales Coelho Santos');
    expect(mocStringConcat).toHaveBeenCalledTimes(2);
  });
  
  // #5 Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.
  
})
// #6 Crie uma função que faça requisição para a api dog pictures . Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário.