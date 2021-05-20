const { getListAnimals } = require('../exercicioDeFixacao/findAnimalsByType');

// describe('Quando o tipo do animal, existe', () => {
//   test('Retorne a lista de animais', () => {
//     expect.assertions(2);
//     return getListAnimals('Dog').then(listDogs => {
//       expect(listDogs[0].name).toEqual('Dorminhoco');
//       expect(listDogs[1].name).toEqual('Soneca');
//     });
//   });
// });
// Mesmo teste utilizando o async
test('Testando com async/await', async () => {
  const listDogs = await getListAnimals('Dog');
  expect(listDogs[0].name).toEqual('Dorminhoco');
  expect(listDogs[1].name).toEqual('Soneca');
});

// fazendo o teste verificando se o erro está dando certo
test('Testando com async/await, testando o reject', async () => {
  try {
    await getListAnimals('Lion');
  } catch (error) {
    expect(error).toEqual({ error: "Não possui esse tipo de animal." })
  }
});
