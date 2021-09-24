// Crie um script que mostre na tela o conteúdo de um arquivo escolhido pela pessoa usuária:
// Pergunte à pessoa usuária qual arquivo ela deseja ler.
// Leia o arquivo indicado.
// Caso o arquivo não exista, exiba na tela "Arquivo inexistente" e encerre a execução do script.
// Caso o arquivo exista, escreva seu conteúdo na tela.

const fs = require('fs').promises;
const readline = require('readline-sync');

async function receiveFileName() {
  try {
    const file = readline.question('Qual arquivo voce quer ler? ');
    const data = await fs.readFile(file, 'utf8');
    console.log(data)
  } catch (err) {
    console.error("Arquivo inexistente")
  }
}

receiveFileName();
