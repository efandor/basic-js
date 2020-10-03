module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!(Array.isArray(arr))) return 0;
    let a = [1];
    arr.forEach(elem => {if (Array.isArray(elem)) a.push(this.calculateDepth(elem)+1)})
    return Math.max.apply(null, a);
  }}
  //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
