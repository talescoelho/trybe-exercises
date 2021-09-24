const exerciseOne = require('./exercise1');

const generateRandomNumber = () => (
  Math.floor(Math.random() * 100)
)

const randomNumbers = Array.from({ length: 3 }, generateRandomNumber)

exerciseOne(...randomNumbers)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message));
