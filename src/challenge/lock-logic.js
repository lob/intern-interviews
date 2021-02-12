const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

function changeDialValue(index, incrementBy) {
  // if the value of incrementBy is greater than 0, add 1 to the index
  if (incrementBy > 0) {
    lockState.wheels[index] = lockState.wheels[index] + 1
  } else {
    // subtract 1 from the index
    lockState.wheels[index] = lockState.wheels[index] - 1
  }

  // initialize an empty array for the lock
  let wheelCombo = []
  // loop through each wheel and get it's value
  lockState.wheels.forEach(wheel => {
    // push the value to the wheelCombo array
    wheelCombo.push(wheel)
    // console.log(wheelCombo, SECRET_COMBO)
    // check if wheelCombo array is equal to the SECRET_COMBO array
    if (JSON.stringify(wheelCombo) == JSON.stringify(SECRET_COMBO)) {
      // console.log("FOUND THE COMBO")
      // If the two arrays match, unlock the lock
      lockState.locked = false
      // redirect
      redirect('david-schawel')
    }
  })
  // This part is missing some code
  // This function is automatically called when the user clicks on a chevron
  // it will be called with a wheel index and an amount to change the value by
  // for example, if a user clicks on the "up" arrow for wheel 0
  // this will be called with arguments (0, 1) indicating we should raise the first dial's value by one
  // for example, if the user clicked the "down" arrow for the last wheel
  // this will be called with arguments (3, -1).

  // to change the state of the lock, simply make a call like
  // lockState.locked = false
  // or lockState.wheels[1] = 2
  // the lock will re-render itself when the value changes

  // When the lock is set to match the secretCombo
  // call the redirect() function with your name
  // eg: redirect('larry-lobster')
  // the redirect function will only redirect if the lockState is unlocked
}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
