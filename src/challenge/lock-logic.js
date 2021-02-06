const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

// Function for verifying if the correct password has been entered
function isCorrectPassword (combo, wheels) {
  for (let i = 0; i < combo.length; i++) {
    if (combo[i] !== wheels[i]) {
      return false
    } else {
      continue
    }
  }
  return true
}

// Switches on the index parameter to determine which wheel should be incremented
function changeDialValue (index, incrementBy) {
  switch (index) {
    case '0':
      lockState.wheels[0] += incrementBy
      break
    case '1':
      lockState.wheels[1] += incrementBy
      break
    case '2':
      lockState.wheels[2] += incrementBy
      break
    case '3':
      lockState.wheels[3] += incrementBy
      break
    default:
      break
  }

  // Checks to see if the lock has been unlocked by the correct combo and, if so, redirects to Cam
  if (isCorrectPassword(SECRET_COMBO, lockState.wheels)) {
    lockState.locked = false
    redirect('Cam')
  }
}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
