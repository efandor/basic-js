const CustomError = require("../extensions/custom-error");
module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach( arrayEl => { arrayEl.forEach(subArrayEl => { if (subArrayEl === '^^') {count++;}}) } );
  return count;
};
