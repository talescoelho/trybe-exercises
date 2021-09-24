const exerciseOne = require('./exercise1');

const generateRandomNumber = () => (
  Math.floor(Math.random() * 100)
)

const randomNumbers = Array.from({ length: 3 }, generateRandomNumber)

async function exercise3() {
  try {
    const resolve = await exerciseOne(...randomNumbers)
    console.log('async/await');
    console.log(resolve)
  } catch (error) {
    console.log(error.message)
  }
}

exercise3();
