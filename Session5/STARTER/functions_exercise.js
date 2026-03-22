/* exercise 5.2.3 */

//complete following named function called isFasterThanThreshold 
// that takes the reaction time (responseTime) as an input parameter.
// It should return "too fast" if the reaction time is faster than the threshold, otherwise "valid".
  // Write logic to check if the reaction time is faster than the threshold

  //von solutiions. had it right but result has to be a const to be able to return
const threshold = 300; 
function isFasterThanThreshold(responseTime) {
    const result = responseTime < threshold? "too fast":"valid"; 
    return result;
  }
  
// Call the function with different inputs
console.log(`Expected output: ${isFasterThanThreshold(200)}`)
// Expected output: "too fast"
console.log(`Expected output: ${isFasterThanThreshold(400)}`)
// Expected output: "valid"
  
/* exercise 5.2.4 */

// Write a function that calculates the average reaction time from an array of six response times. 
// call the function e.g., calculateAverageRT(responseTimes); .
//i eif counter variable, von da start eif. for..of eif art von loop
function calculateAverageRT(responseTimes){
  let totalTime = 0;
  let i = 0
  for(time of responseTimes){
    totalTime += time;
    i ++; 
  }
  return totalTime/i;
}
  
  // Example input
  let responseTimes = [100, 200, 300, 400, 500,600];
  const avgTime = calculateAverageRT(responseTimes); 
  console.log("Expected avgTime:",avgTime );
  // Expected avgTime: 350

   /* # Plus 2 */

/*  1. Write an arrow function to a variable called getPerformanceFeedback that takes a reaction time as input and returns:
      "Excellent" if the reaction time is below 200ms.
      "Good" if the reaction time is between 200ms and 500ms.
      "Needs Improvement" if the reaction time is above 500ms.
    2. The console.log statement prints out the feedback for each response time in the array

*/

