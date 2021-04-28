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

console.log('Exercício 1----------------------');

// 1 Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const insertTurn = (lesson, turn, chave) => lesson[turn] = chave;
insertTurn(lesson2, 'turno', 'manhã');
console.log(lesson2);

console.log('\nExercício 2----------------------');

// 2 Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const objKeys = obj => console.log(Object.keys(obj));
objKeys(lesson2);

console.log('\nExercício 3----------------------');

// 3 Crie uma função para mostrar o tamanho de um objeto.
const objKeysLength = obj => console.log(Object.keys(obj).length);
objKeysLength(lesson1);

console.log('\nExercício 4----------------------');

// 4 Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const objValues = obj => console.log(Object.values(obj));
objValues(lesson2);

console.log('\nExercício 5----------------------');

// 5 Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.table(allLessons);

console.log('\nExercício 6----------------------');

// 6 Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const objAllStudents = Object.keys(allLessons).map(a => allLessons[a].numeroEstudantes).reduce((a,b)=>a+b);
console.log(`Número de alunos matriculados: ${objAllStudents}`);

console.log('\nExercício 7----------------------');

// 7 Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
const getValueByNumber = (lesson, value) => Object.values(lesson)[value];
console.log(getValueByNumber(lesson1, 0));

console.log('\nExercício 8----------------------');

// 8 Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
const verifyPair = (lesson, key, value) => lesson[key] === value;
// Output: true,
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: false
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

console.log('\nExercício Bônus 1----------------------');

// Bônus
// 1 Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
// allLessons
const studentsMateria = v => Object.values(allLessons).map(a => a.materia === v ? a.numeroEstudantes : 0).reduce((a,b) => a+b);
console.log(studentsMateria('Matemática'));

console.log('\nExercício Bônus 2----------------------');

// 2 Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
function createReport(allLessons, value){
  const prof = Object.keys(allLessons).map(a => allLessons[a].professor === value);
  if (!prof.reduce((a,b) => a+b)) {
    return `Favor verificar o nome do professor`;
  }
  const professorReport = {professor: value,};
  professorReport.aulas = [];
  professorReport.estudantes = 0;
  for (const key in Object.keys(allLessons)) {
    if (prof[key]) {
      professorReport.aulas.push(allLessons[Object.keys(allLessons)[key]].materia);
      professorReport.estudantes += allLessons[Object.keys(allLessons)[key]].numeroEstudantes;
    }
  }
  return professorReport;
};
console.log(createReport(allLessons, 'Maria Clara'));
