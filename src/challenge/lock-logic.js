const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

function changeDialValue (index, incrementBy) {
  // increments the wheel (mod 10)
  lockState.wheels[index] = (lockState.wheels[index] + incrementBy) % 10

  // Ensures that decrementing below zero results in descending from 9
  if (lockState.wheels[index] < 0) {
    lockState.wheels[index] += 10
  }

  // unlocks the lock if all the wheels contain the correct values
  for (let i = 0; i < SECRET_COMBO.length; i++) {
    if (lockState.wheels[i] !== SECRET_COMBO[i]) {
      lockState.locked = true
      return null
    }
  }

  lockState.locked = false
  redirect('Joseph')
}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
