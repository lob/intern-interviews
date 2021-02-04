const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

function changeDialValue (index, incrementBy) {
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

  // This is used to change the value of each index
  lockState.wheels[index] += incrementBy
  // This checks so that the values can't go above 9 or below 0, like a real lock
  if (lockState.wheels[index] < 0) {
    lockState.wheels[index] = 9
  }
  if (lockState.wheels[index] > 9) {
    lockState.wheels[index] = 0
  }

  // Uses a for loop to compare every number in the wheels array with the SECRET_COMBO array
  // If any value doesn't match, the for loop breaks, prevent false redirects
  // If the for loop is able to get through all 4 numbers without breaking, the redirect will occur
  for (let i = 0; i < SECRET_COMBO.length; i++) {
    if (lockState.wheels[i] !== SECRET_COMBO[i]) {
      break
    }
    if (i === SECRET_COMBO.length - 1) {
      lockState.locked = false
      redirect('tommy-ly')
    }
  }
}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
