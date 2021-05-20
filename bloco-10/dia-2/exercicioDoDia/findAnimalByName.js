const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.find((animal) => animal.name === name);
      if (arrayAnimals) {
        return resolve(arrayAnimals);
      }
      return reject('Nenhum animal com esse nome!');
    }, 100);
  })
);

const getAnimal = ((name) => findAnimalByName(name));

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.find((animal) => animal.age === age);
      if (arrayAnimals) {
        return resolve(arrayAnimals);
      }
      return reject('Nenhum animal com essa Idade!');
    }, 100);
  })
);

const getAnimalAge = ((age) => findAnimalByAge(age));


// getAnimal('Dorminhoco').then((r) => console.log(r))

module.exports = {
  getAnimal,
  getAnimalAge
}