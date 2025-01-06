const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options.separator) options.separator = "+";
  if (!options.additionSeparator) options.additionSeparator = "|";
  if (typeof options.addition === "undefined") {
    options.addition = "";
    options.additionSeparator = "";
  }

  let chunk = String(str) + Array.from({ length: options.additionRepeatTimes || 1 }, () => String(options.addition)).join(options.additionSeparator);
  return Array.from({ length: options.repeatTimes || 1 }, () => chunk).join(options.separator);
}

module.exports = {
  repeater,
};
