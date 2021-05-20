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

// https://api.github.com/orgs/tryber/repos