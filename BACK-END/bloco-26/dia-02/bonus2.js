// Crie um script que substitua uma palavra por outra em um arquivo escolhido pela pessoa usuária:
// Pergunte à pessoa usuária qual arquivo ela deseja utilizar.
// Leia o arquivo.
// Caso o arquivo não exista, exiba um erro na tela e encerre a execução do script.
// Caso o arquivo exista, solicite a palavra a ser substituída.
// Solicite a nova palavra, que substituirá a palavra anterior.
// Imprima na tela o conteúdo do arquivo com as palavras já substituídas.
// Pergunte o nome do arquivo de destino.
// Salve o novo arquivo no caminho de destino.

const fs = require('fs').promises;
const readline = require('readline-sync');

async function receiveFileName() {
  try {
    const file = readline.question('Qual arquivo voce quer ler? ');
    const data = await fs.readFile(file, 'utf8');
    console.log(data)
    const word = readline.question('Qual palavra deseja substituir? ');
    const newWord = readline.question('Qual palavra irá substituir? ');
    const newFile = data.split(' ').map((value) => value === word ? newWord : value).join(' ');
    console.log(newFile);
    const saveNewFile = readline.question('Qual o nome do novo arquivo? ');
    await fs.writeFile(saveNewFile, newFile);
  } catch (err) {
    console.error("Arquivo inexistente")
  }
}

receiveFileName();
