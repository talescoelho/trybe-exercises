// Faça uma lista com as suas frutas favoritas
const specialFruit = ['presunto', 'baccon', 'queijo'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['creme de alho', 'tomate', 'requeijão'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));