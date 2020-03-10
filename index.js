function wakeDog(dogName, dogBreed) {
    let sentance = `Wake ${dogName} the ${dogBreed}`;
    console.log(sentance)
    return sentance
}

  function leashDog(dogName, dogBreed) {
    let sentance = `Leash ${dogName} the ${dogBreed}`;
    console.log(sentance)
    return sentance
}

  function walkToPark(dogName, dogBreed) {
    let sentance = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(sentance)
    return sentance
}

  function throwFrisbee(dogName, dogBreed) {
    let sentance = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(sentance)
    return sentance
}

  function walkHome(dogName, dogBreed) {
    let sentance = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(sentance)
    return sentance
}

  function unleashDog(dogName, dogBreed) {
    let sentance = `Unleash ${dogName} the ${dogBreed}`;
    console.log(sentance)
    return sentance
}

  let routine =[wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

  function exerciseDog(dogName, dogBreed) {
      let result = []
      routine.forEach(func => result.push(func(dogName, dogBreed)))
      return result
  }