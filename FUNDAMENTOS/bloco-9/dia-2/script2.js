const createMyPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    let arrRandNumber = [];
    for (let index = 0; index < 10; index++) {
      let randNumber = Math.round(Math.random() * 50);
      arrRandNumber.push(randNumber ** 2);
    }
    const sum = arrRandNumber.reduce((acc, value) => acc + value);
    (sum < 8000) ? resolve(sum) : reject();
  });
  myPromise
    .then((sum) => [2, 3, 5, 10].map((value) => sum / value))
    .then((arrNumber) => console.log(arrNumber.reduce((acc, value) => acc + value)))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
}

createMyPromise();
