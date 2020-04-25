// Generate random int values. Max and min includes
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default getRandomInt;
