const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const insertTurn = (lesson, turn, chave) => lesson[turn] = chave;
insertTurn(lesson2, 'turno', 'manhã');
console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const objKeys = obj => console.log(Object.keys(obj));
objKeys(lesson2);

// Crie uma função para mostrar o tamanho de um objeto.
const objKeysLength = obj => console.log(Object.keys(obj).length);
objKeysLength(lesson1);

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const objValues = obj => console.log(Object.values(obj));
objValues(lesson2);

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
const allLessons = {};
Object.assign(allLessons, {lesson1, lesson2, lesson3});
console.table(allLessons);

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const objAllStudents = Object.keys(allLessons).map(a => allLessons[a].numeroEstudantes).reduce((a,b)=>a+b);
console.log(objAllStudents);

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
const getValueByNumber = (lesson, value) => allLessons[Object.keys(allLessons)[value]].materia;
console.log(getValueByNumber(lesson1, 2));
