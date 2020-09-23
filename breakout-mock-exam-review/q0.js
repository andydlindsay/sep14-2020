/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of items in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
const count = function(arr) {
  // const length = arr.length;
  // return length;

  return arr.length;
};

/* ===========================================================================
 * SUM - the sum of the numbers in a list
       - safe to assume that all items are numbers already
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */
const sum = function(arr) {
  // initialize a variable to hold the total
  let total = 0;

  // iterate through the array
  for (const num of arr) {
    // adding each element of the array to the total
    total += num;
  }

  // return the total
  return total;
};

// To be used by mean. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};


/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *      - if empty array, return null to indicate that mean cannot be calculated
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */
const mean = function(arr) {
  // check our preconditions
  // if empty array, return null
  if (arr.length === 0) {
    return null;
  }

  // average = sum of the array / the length of the array
  const arrSum = sum(arr);
  const arrLength = count(arr);
  const average = arrSum / arrLength;

  return round(average);
};

// Don't change below:
module.exports = { count, sum, mean };
