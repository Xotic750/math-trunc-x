import toNumber from 'to-number-x';
var ceil = Math.ceil,
    floor = Math.floor;
/**
 * The trunc() function returns the integer part of a number by removing any fractional digits.
 *
 * @param {number} value - A number.
 * @returns {number} - The integer part of the given number.
 */

var trunc = function trunc(value) {
  var number = toNumber(value);
  return number < 0 ? ceil(number) : floor(number);
};

export default trunc;

//# sourceMappingURL=math-trunc-x.esm.js.map