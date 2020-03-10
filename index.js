// wakeDog
// leashDog
// walkToPark
// throwFrisbee
// walkHome
// unleashDog

const wakeDog = function(dogname, dogbreed){
    console.log(`Wake ${dogname} the ${dogbreed}`);
    return `Wake ${dogname} the ${dogbreed}`
}
const leashDog = function(dogname, dogbreed){
    console.log(`Leash ${dogname} the ${dogbreed}`);
    return `Leash ${dogname} the ${dogbreed}`
}
const walkToPark = function(dogname, dogbreed){
    console.log(`Walk to the park with ${dogname} the ${dogbreed}`);
    return `Walk to the park with ${dogname} the ${dogbreed}`
}   
const throwFrisbee = function(dogname, dogbreed){
    console.log(`Throw the frisbee for ${dogname} the ${dogbreed}`);
    return `Throw the frisbee for ${dogname} the ${dogbreed}`
}
const walkHome = function(dogname, dogbreed){
    console.log(`Walk home with ${dogname} the ${dogbreed}`);
    return `Walk home with ${dogname} the ${dogbreed}`
}
const unleashDog = function(dogname, dogbreed){
    console.log(`Unleash ${dogname} the ${dogbreed}`);
    return `Unleash ${dogname} the ${dogbreed}`
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogname, dogbreed) {
    return routine.map(rn => rn(dogname, dogbreed))
  }