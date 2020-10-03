const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  // https://en.wikipedia.org/wiki/Tower_of_Hanoi
  // Количество перекладываний в зависимости от количества колец вычисляется по формуле 2^n-1
  const turns = Math.pow(2, disksNumber) - 1;
  const seconds = parseInt((turns * 3600) / turnsSpeed);
  return {turns : turns, seconds: seconds};
};