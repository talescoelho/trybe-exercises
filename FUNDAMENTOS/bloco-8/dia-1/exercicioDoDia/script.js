// Crie uma função de primeira classe que retorna um objeto { nomeCompleto, email } de uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respctivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .
// const newEmployees = () => {
//   const employees = {
//     id1: // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
//     id2: // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
//     id3: // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
//   }
//   return employees;
// };

function hiredPerson(nomeCompleto) {
  return { nomeCompleto, email: `${nomeCompleto.split(' ').join('_')}@trybe.com` };
}

const newEmployees = () => {
  const employees = {
    id1: hiredPerson('Pedro Guerra'),
    id2: hiredPerson('Luiza Drumond'),
    id3: hiredPerson('Carla Paiva'),
  };
  return employees;
};

const persons = newEmployees();

// console.log(persons);

// Desenvolva uma HOF que retorna o resultado de um sorteio. 
// Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado
// e uma função que checa se o número apostado é igual ao número sorteado. 
// O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const fiveRandomNumber = () => Math.ceil(Math.random() * 5);

function ramdomSort(num, randNum) {
  if (num === randNum) {
    return 'Parabéns você ganhou';
  }
  return 'Tente novamente';
}

// console.log(ramdomSort(2, fiveRandomNumber()));