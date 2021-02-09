const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

function changeDialValue (index, incrementBy) {
  // Adjust the value of wheels at the given index by the amount specified by incrementBy
  lockState.wheels[index] += incrementBy

  let match = true // Whether the wheels match the secret combo
  let i = 0 // Index to check

  // Keep checking the next index of the wheel for equality with the secret combo until a wheel doesn't match
  while (i < SECRET_COMBO.length && match) {
    if (lockState.wheels[i] !== SECRET_COMBO[i]) {
      match = false
    }
    i++
  }

  // If match has not been set to false, then all wheels match secret combo
  if (match) {
    lockState.locked = false // Unlock combo lock and
    redirect('emma-hogan') // Redirect to about me page
  }
}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
