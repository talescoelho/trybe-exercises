const sumNumbers = (num) => {
  return new Promise((resolve, reject) => {
    if (typeof num !== 'number') {
      throw new Error("Informe apenas números")
    }
    const result = Array.from({ length: num }, (_, index) => index)
      .reduce((acc, val) => acc + val, 0);
    console.log(result)
  });
}

const showNumber = (num) => {
  console.log(num);
};


async function testeAsync() {
  try {
    const number = 6;
    sumNumbers(number);
    showNumber(number);
  } catch (error) {
    
  }
}

testeAsync();
