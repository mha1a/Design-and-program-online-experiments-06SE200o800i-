/*
 Scenario: You have recorded time for 10 trials, as recordedTimes. However, recordedTimes includes not only the reaction time, but also a stimuli presentation time 200 ms.
 */

 const recordedTimes = [550, 490, 510, 890, 1450, 470, 940, 620, 930, 360];
        
 /* exercise 5.2.1 */
 
 // Using a for loop, to get the data only stores your reaction time
 // console.log each iterate index and each reactionTime value accordingly in the loop

//  let reactionTimes = []; //muss leer sein
// for (let i = 0; i < recordedTimes.length; i++) {//.length will be next sess, but regarding whole array of RTs
//     reactionTimes[i] = recordedTimes[i] - 200; //bro hat iwie push benutzt but we haven't had that yet hmmm und sonst iwie mit index
//  console.log("reactionTimes: ",reactionTimes); // gibt auch index method
// }

// what this does: Take an array of “recorded times” (reaction times before adjustment).
// Subtract 200 milliseconds from each to get adjusted reaction times.
// Store the adjusted times in reactionTimes.
// Print each step as it goes, then print the final array.

 /* # Plus 1: can you think of more than one way of doing it? */ 
 //von solutions. let ist zwingend vor i
 
 let reactionTimes = [];
 for(let i = 0; i < 10; i++){
    reactionTimes[i] = recordedTimes [i] -200;
    console.log("iterate:", i);
    console.log("recordedTime:", reactionTimes[i]);
 }
 console.log("reactionTimes: ",reactionTimes);
  
 
 /* exercise 5.2.2 */
 
 //Using a while loop: when the total reaction time exceeds a certain threshold (e.g., 2000 milliseconds), console.log the thisTrial. thisTrial will start from 1.
 //von solutions aber okokok

let totalTime = 0;
let thisTrial;
let j = 0

while (totalTime < 2000) {
    totalTime = totalTime + reactionTimes [j];
    thisTrial = j + 1;
    j ++;
}
console.log(`Cumulative reaction time exceeded 2000 ms at trial ${thisTrial}.`);

