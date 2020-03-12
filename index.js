// index.js
//     independent functions
//       1) has a function wakeDog
//       2) has a function leashDog
//       3) has a function walkToPark
//       4) has a function throwFrisbee
//       5) has a function walkHome
//       6) has a function unleashDog
//       7) accepts 2 parameters for dogName and dogBreed
//     the array of functions
//       8) has variables for each activity
//       9) has an array called 'routine' that contains each activity
//     the function that runs the array o' functions
//       10) calls into the independent functions

function wakeDog(dogName, dogBreed){
    let result = `Wake ${dogName} the ${dogBreed}`
    console.log(result);
    return result
}
function leashDog(dogName, dogBreed){
    let result = `Leash ${dogName} the ${dogBreed}`;
    console.log(result);
    return result
}
function walkToPark(dogName, dogBreed){
    let result = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(result);
    return result
}
function throwFrisbee(dogName, dogBreed){
    let result = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(result);
    return result
}
function walkHome(dogName, dogBreed){
    let result = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(result);
    return result
}
function unleashDog(dogName, dogBreed){
    let result = `Unleash ${dogName} the ${dogBreed}`;
    console.log(result);
    return result
}

let routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(dogName, dogBreed){
    let returnArray = []
    routine.forEach ( func =>
    {
        let returnValue = func(dogName, dogBreed)
        returnArray.push(returnValue)  
    })
    return returnArray
}

