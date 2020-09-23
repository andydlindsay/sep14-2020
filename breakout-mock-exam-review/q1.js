/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
const min = function(arr) {
  // Math.min(...arr);
  // Math.min.apply(null, arr);

  // set up a variable to hold the lowest value
  // let lowest = arr[0];
  let lowest = Infinity;

  // iterate through the array
  for (const num of arr) {
    // compare each element against the lowest value
    if (num < lowest) {
      // if it's lower (than the lowest value), replace the lowest value with the element
      lowest = num;
    }
  }

  // return the lowest value
  return lowest;
};


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function(arr) {
  let highest = -Infinity;

  for (const num of arr) {
    if (num > highest) {
      highest = num;
    }
  }

  return highest;
};

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function(arr) {
  const highest = max(arr);
  const lowest = min(arr);
  const result = highest - lowest;
  return result;

  // return max(arr) - min(arr);
};

// Don't change below:

module.exports = { min, max, range };
