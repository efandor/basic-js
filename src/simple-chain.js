const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === '') this.chain.push('');
    else this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (this.chain[position - 1] === undefined) {
      this.chain = [];
      throw Error;
    } else this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finRes = '';
    for (let element of this.chain) {
      finRes += '( ' + element + ' )~~';
    }
    this.chain = [];
    return finRes.slice(0, -2);;
  }
};
module.exports = chainMaker;