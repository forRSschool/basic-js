const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  const arr = n.toString().split('');
  arr
    .sort((a, b) => b - a)
    .pop();
  const res = Number(arr.join(''))
  
  return res;
}


module.exports = {
  deleteDigit
};
