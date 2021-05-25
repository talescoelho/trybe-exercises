const { upperCase } = require('../exercicioDoDia/upperCase')

it(`uppercase 'test' to equal 'TEST'`, (done) => {
  upperCase('test', (str) => {
    expect(str).toBe('TEST');
    done();
  });
});

const { getUserName } = require('../exercicioDoDia/getUserName');
// O código a seguir simula uma chamada ao banco de dados para buscar usuários. O resultado dessa busca é uma Promise , que é utilizada pelo método getUserName
it(`teste Id válido`, () => {
  expect.assertions(1);
  return getUserName('4').then((response) => {
    expect(response).toBe('Mark');
  });
});

it(`teste Id inválido`, () => {
  expect.assertions(1);
  let id = '1';
  return getUserName(id).catch((erro) => {
    expect(erro).toEqual({ error: 'User with ' + id + ' not found.' });
  });
});

// Exercício 3... fazer o mesmo do 2 com async/await
it(`teste Id válido`, async () => {
  const userName = await getUserName('4')
  expect(userName).toBe('Mark');
});

it(`teste Id inválido`, async () => {
  let id = '1';
  try {
    await getUserName(id);
  } catch (error) {
    expect(error).toEqual({ error: 'User with ' + id + ' not found.' });
  }
});

// Exercício 4
const { getRepos } = require('../exercicioDoDia/gitFetch');

it(`Teste Requisição válida git`, async () => {
  const gitRepositoriesTodoList = await getRepos('https://api.github.com/orgs/tryber/repos');
  expect(gitRepositoriesTodoList).toContain('sd-01-week4-5-project-todo-list')
  expect(gitRepositoriesTodoList).toContain('sd-01-week4-5-project-meme-generator')
})

// Exercício 6
const { getAnimal, getAnimalAge } = require('../exercicioDoDia/findAnimalByName')

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimalAge(1).then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimalAge(3).catch(error =>
        expect(error).toEqual('Nenhum animal com essa Idade!')
      );
    });
  });
});