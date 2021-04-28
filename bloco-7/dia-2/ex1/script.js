const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

function showSkills(obj) {
  for (let index in obj) {
    console.log(`${index}, Nível: ${obj[index]}`);
  }
}

showSkills(student2);

let string = 12345;
