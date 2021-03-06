const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');


// Copie esse arquivo e edite apenas ele;
// Crie uma função que adicione a classe 'tech' ao elemento selecionado;
const container = document.querySelector('.container');

function insertClassTech(element) {
  let container = document.querySelector('.container');
  for (let index = 0; index < container.childElementCount; index += 1) {
    container.querySelectorAll('div')[index].className = '';
  }
  element.target.className = 'tech';
}
//1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
container.addEventListener('click', insertClassTech);

// Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
function changeTextTechClass() {
  tech = document.querySelectorAll('.tech');
  for (const key in tech) {
    tech[key].innerText = input.value;
  }
}
input.addEventListener('keyup', changeTextTechClass)
// Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
//1. Que tal redirecionar para seu portifólio?
function doubleClickRedirect(event) {
  window.open("https://talescoelho.github.io/");
}
mySpotrybefy.addEventListener('dblclick', doubleClickRedirect);

//Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
//a cor do mesmo;
function alertColor(event) {
  let fontColor = ['white', 'green', 'red', 'blue'];
  event.target.style.color = fontColor[Math.ceil(Math.random()*3)];
}
mySpotrybefy.addEventListener('mouseover', alertColor);

//Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.