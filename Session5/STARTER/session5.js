// let ageGroup;
// let age = 10; 
// // age = 25;
// if(age < 18){
//     ageGroup = "Child";
// }else{
//     ageGroup = "Adults";
// }
// console.log("the ageGroup in if-else: " ,ageGroup );
// //if I test now (put in ageGroup in COnsole in inspect) child will pop up

// age = 18
// ageGroup = age < 18? "child":"adult";
// console.log("the ageGroup in operator: " ,ageGroup );
// //zaehlt als adult


const trial = { id: 1, responseTime: 350, correct: true };
console.log(trial.id);
console.log(trial["id"]);
for (const key in trial){
    console.log(`${key}: ${trial[key]}`);
}
//idk which excercise this is from atp
