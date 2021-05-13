const createMyPromise = () => {
  let arrRandNumber = [];
  for (let index = 0; index < 10; index++) {
    let randNumber = Math.round(Math.random() * 50);
    arrRandNumber.push(randNumber ** 2);
  }
  const sum = arrRandNumber.reduce((acc, value) => acc + value);

  if (sum >= 8000) {
    throw new Error();
  }
  return sum;
}

const sumArrayFromSum = (sum) => [2, 3, 5, 10].map(number => sum / number)
  .reduce((number, acc) => number + acc);

const assyncMyPromise = async () => {
  try {
    const result = await createMyPromise();
    const newArr = await sumArrayFromSum(result);
    console.log(newArr);
  } catch {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}

assyncMyPromise();
