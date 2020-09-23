/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5,6,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  // sort into piles
  const piles = {};

  // iterate through the arr
  for (const num of arr) {
    // question: have we seen this number before?
    if (piles[num]) {
      // if yes, increment the value in piles
      piles[num] += 1;
    } else {
      // if no, initialize a new key/value pair in piles
      piles[num] = 1;
    }
  }

  console.log(piles);
  // return the pile with the most elements
  let highest = -Infinity;
  let highestKey = null;

  // iterate through piles
  // for..of with everything except Objects because of and object start with 'o'
  for (const key in piles) {
    // compare value to highest
    const value = piles[key];
    if (value > highest) {
      // if higher, replace highest with new value, replace highestKey with key
      highest = value;
      highestKey = key;
    }
  }

  return highestKey;
};

// Don't change below:
module.exports = { mode };
