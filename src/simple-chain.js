const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    if (arguments.length === 0) {
      this.arr.push(`( )`);
    }

    if (typeof value !== "string") {
      value = String(value);
    }

    this.arr.push(`( ${value.toString()} )`);

    return this;
  },

  removeLink(position) {
    if (
      isNaN(position) ||
      isNaN(parseInt(position)) ||
      !position ||
      position < 0 ||
      position > this.getLength()
    ) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
  
    this.arr.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },

  finishChain() {
    const str = this.arr.join("~~");
    this.arr = [];
    return str;
  },
};

module.exports = {
  chainMaker,
};
