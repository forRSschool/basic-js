const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  const transformed = [...arr];
  const controlSequences = ["--discard-next", "--discard-prev", "--double-next", "--double-prev"];

  transformed.forEach((el, i) => {
    if (el === controlSequences[0] && transformed[i + 1]) transformed.splice(i, 2);
    if (el === controlSequences[1] && transformed[i - 1]) transformed.splice(i - 1, 2);
    if (el === controlSequences[2] && transformed[i + 1]) transformed.splice(i, 1, transformed[i + 1]);
    if (el === controlSequences[3] && transformed[i - 1]) transformed.splice(i, 1, transformed[i - 1]);
  });

  return transformed.filter((el) => !controlSequences.includes(el));
}

module.exports = {
  transform
};
