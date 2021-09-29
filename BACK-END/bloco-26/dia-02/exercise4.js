// Você pode utilizar then e catch , async/await ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.
// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .

const fs = require('fs').promises;

// parte 1
function showAllSimpsons(path) {
  fs.readFile(path, 'utf-8')
    .then((response) => JSON.parse(response))
    .then((resolve) => resolve.forEach((value) => console.log(`${value.id} - ${value.name}`)))
}

// parte 2
function findId(id) {
  return fs.readFile('./BACK-END/bloco-26/dia-02/simpsons.json', 'utf-8')
    .then((response) => JSON.parse(response))
    .then((resolve) => resolve.find((value) => value.id === id) || "id não encontrado")
}

// parte 3
async function filterIds(a, b) {
  try {
    const file = await fs.readFile('./BACK-END/bloco-26/dia-02/simpsons.json', 'utf-8');
    const jsonFile = JSON.parse(file);
    const newFile = jsonFile.filter((value) => value.id !== a && value.id !== b);
    const removed = jsonFile.length - newFile.length;
    const stringiFyFile = JSON.stringify(newFile)
    fs.writeFile('./BACK-END/bloco-26/dia-02/simpsons.json', stringiFyFile);
    console.log(`${removed} simpsons removidos`)
  } catch (error) {
    console.log(error.message)
  }
}

// parte 4
async function simpsonsFamily() {
  try {
    const file = await fs.readFile('./BACK-END/bloco-26/dia-02/simpsons.json', 'utf-8');
    const jsonFile = JSON.parse(file);
    const newFile = jsonFile.filter((_, index) => index + 1 <= 4);
    const stringiFyFile = JSON.stringify(newFile)
    fs.writeFile('./BACK-END/bloco-26/dia-02/simpsonFamily.json', stringiFyFile);
  } catch (error) {
    console.log(error.message)
  }
}

// parte 5
async function addSimpsonsFamily(name) {
  try {
    const file = await fs.readFile('./BACK-END/bloco-26/dia-02/simpsonFamily.json', 'utf-8');
    const jsonFile = JSON.parse(file);
    const newFile = {
      id: jsonFile.length + 1,
      name,
    };
    jsonFile.push(newFile)
    const stringiFyFile = JSON.stringify(jsonFile)
    fs.writeFile('./BACK-END/bloco-26/dia-02/simpsonFamily.json', stringiFyFile);
  } catch (error) {
    console.log(error.message)
  }
}

// parte 6
async function changeSimpson(change, simpsom) {
  try {
    const file = await fs.readFile('./BACK-END/bloco-26/dia-02/simpsonFamily.json', 'utf-8');
    const jsonFile = JSON.parse(file);
    const newFile = jsonFile.map((value) => {
      if (value.name === change) {
        value.name = simpsom;
      }
      return value;
    })
    console.log(`personagem ${change} trocado por ${simpsom}`)
    const stringiFyFile = JSON.stringify(newFile)
    fs.writeFile('./BACK-END/bloco-26/dia-02/simpsonFamily.json', stringiFyFile);
  } catch (error) {
    console.log(error.message)
  }
}


showAllSimpsons('./BACK-END/bloco-26/dia-02/simpsons.json');
findId("2")
  .then((resolve) => console.log(resolve));
filterIds("6", "10")
simpsonsFamily();
addSimpsonsFamily("Nelson Muntz");
changeSimpson("Nelson Muntz", "Maggie Simpson");
