const { getListAnimals } = require('../exercicioDoDia/animals');

describe('Quando o tipo do animal, existe', () => {
  test('Retorne a lista de animais', () => {
    getListAnimals('Dog').then(listDogs => {
      expect(listDogs[0].name).toEqual('Dorminhoco');
      expect(listDogs[1].name).toEqual('Soneca');
    });
  });
});