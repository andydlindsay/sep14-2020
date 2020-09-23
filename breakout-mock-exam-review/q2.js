/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by median. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */

//  arr.length === 8;
//  0 1 2 3 4 5 6 7
 

const median = function(arr) {
  // sort the array
  arr.sort();

  // figure out if array is even-length or odd-length
  if (arr.length % 2 === 0) {
    // it's even
    const firstIndex = arr.length / 2;
    const secondIndex = firstIndex - 1;

    const valOne = arr[firstIndex];
    const valTwo = arr[secondIndex];

    const total = valOne + valTwo;
    const avg = total / 2;

    return round(avg);
    // return round((arr[firstIndex] + arr[secondIndex]) / 2);
  } else {
    // it's odd
    const middleIndex = Math.floor(arr.length / 2);
    return arr[middleIndex];
  }
};

// Don't change below:
module.exports = { median };
