const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

function changeDialValue (index, incrementBy) {
  lockState.wheels[index] += incrementBy
  // Warning users to enter valid value from the acceptable range
  if (lockState.wheels[index] > 9 || lockState.wheels[index] < 0) {
    window.alert('The key is in the range from 0 -> 9. Please enter again and thank you')
    // reset to 0
    lockState.wheels[index] = 0
  }

  // If it is the last index they will enter in the lock
  if (index === (SECRET_COMBO.length - 1)) {
    // Check for the string values of both array if they are the same
    if (JSON.stringify(lockState.wheels) === JSON.stringify(SECRET_COMBO)) {
      lockState.locked = false
    }
    // Open the lock if the key entered is correct
    if (!lockState.locked) { redirect('duong-nguyen') }
  }
}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
