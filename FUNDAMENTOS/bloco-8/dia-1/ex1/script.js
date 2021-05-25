// Crie uma função de primeira classe que tenha o retorno console.log('Acordando!!') ;
// Crie outra função de primeira classe que tenha o retorno console.log('Bora tomar café!!') ;
// Crie mais uma função de primeira classe que tenha o retorno console.log('Partiu dormir!!') ;
// Desenvolva uma HOF chamada doingThings e configure esta função para que retorne a execução das funções de primeira classe que você criou nos exemplos anteriores. Exemplo:
// // Ao chamar a função doingThings:
// doingThings(wakeUp);

// // Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

function wakeUp() {
  console.log('Acordando!!');
}

function coffeTime() {
  console.log('Bora tomar café!!');
}

function goSleep() {
  console.log('Partiu dormir!!');
}

const doingThings = (arg) => arg();

doingThings(wakeUp);
doingThings(coffeTime);
doingThings(goSleep);
