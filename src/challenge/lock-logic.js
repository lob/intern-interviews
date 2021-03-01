const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

function changeDialValue (index, incrementBy) {
  // Increment value of the wheel
  lockState.wheels[index] += incrementBy

  // Make sure the values don't go out of bounds
  if (lockState.wheels[index] < 0) {
    lockState.wheels[index] = 0
  } else if (lockState.wheels[index] > 9) {
    lockState.wheels[index] = 9
  }

  // Check if the combo is now correct
  if (checkCombo()) {
    // Change the state of the lock
    lockState.locked = false
    // Redirect
    redirect('ian-kolupaev')
  }
}

function checkCombo () {
  for (let i = 0; i < lockState.wheels.length; i++) {
    if (lockState.wheels[i] !== SECRET_COMBO[i]) {
      return false
    }
  }
  return true
}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
