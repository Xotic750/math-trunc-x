import toNumber from 'to-number-x';

const {ceil, floor} = Math;

/**
 * The trunc() function returns the integer part of a number by removing any fractional digits.
 *
 * @param {number} value - A number.
 * @returns {number} - The integer part of the given number.
 */
const trunc = function trunc(value) {
  const number = toNumber(value);

  return number < 0 ? ceil(number) : floor(number);
};

export default trunc;
