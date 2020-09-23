/* Question 4
 *
 *  Implement the 'stdev' function defined below
 *
 * STDEV  - the square root of the average of the squared deviations of the values from their average value
 *        - The formula is:
 *
 *          stdev = sqrt(sum((x - populationMean)^2)/numberOfValues)
 *
 *        - you are allowed to look at Wikipedia's example calculation to help you understand the formula
 *        - Keep in mind, we are using 'Population Standard Deviation' as opposed to 'Sample Standard Deviation' for this test
 *            https://en.wikipedia.org/wiki/Standard_deviation#Population_standard_deviation_of_grades_of_eight_students
 *
 *        - use the provided 'round' function before returning your final value
 *        - you can take a square root using `Math.sqrt(number)`
 *
 * For example:
 *
 *    stdev([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    2.67
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

// This function is to be used by stdev. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

const stdev = function(arr) {
  // stdev = sqrt(sum((x - populationMean)^2)/numberOfValues)
  const numberOfValues = arr.length;
  const populationMean = sum(arr) / numberOfValues;

  // create an array to hold deviations
  const deviations = [];

  // iterate through arr
  for (const num of arr) {
    // calculate deviation and push into deviations array
    const intermediate = num - populationMean;
    const deviation = Math.pow(intermediate, 2);
    deviations.push(deviation);
  }
  // console.log(deviations);

  const sumDeviations = sum(deviations);
  // console.log(sumDeviations);

  // stdev = sqrt(sumDeviations/numberOfValues)
  const averageDeviation = sumDeviations / numberOfValues;
  const answer = Math.sqrt(averageDeviation);

  // console.log(answer);
  return round(answer);
};

// Don't change below:
module.exports = { stdev };
