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
  if (index === 0 && incrementBy === 1) {
    lockState.wheels[0] += 1
  } else if (index === 1 && incrementBy === 1) {
    lockState.wheels[1] += 1
  } else if (index === 2 && incrementBy === 1) {
    lockState.wheels[2] += 1
  } else if (index === 2 && incrementBy === 1) {
    lockState.wheels[3] += 1
  } else if (index === 0 && incrementBy === -1) {
    lockState.wheels[0] -= 1
  } else if (index === 1 && incrementBy === -1) {
    lockState.wheels[1] -= 1
  } else if (index === 2 && incrementBy === -1) {
    lockState.wheels[2] = -1
  } else if (index === 3 && incrementBy === -1) {
    lockState.wheels[3] -= 1
  }

  if (lockState.wheels === SECRET_COMBO) {
    lockState.locked = false
  } else {
    lockState.locked = true
  }
  if (lockState.locked) {
    redirect('Nishant Sapkota')
  }
}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
