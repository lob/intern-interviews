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

  if (lockState.wheels[index] === 0 && incrementBy === -1) {
    lockState.wheels[index] = 9
  } else if (lockState.wheels[index] === 9 && incrementBy === 1) {
    lockState.wheels[index] = 0
  } else if (incrementBy === 1) {
    lockState.wheels[index] = lockState.wheels[index] + 1
  } else if (incrementBy === -1) {
    lockState.wheels[index] = lockState.wheels[index] - 1
  }

  if (isEqual(SECRET_COMBO, lockState.wheels)) {
    lockState.locked = false
    redirect('Jesus-Martinez')
  }
}

// checking if ech value of array 'a' is equal to the corresponding value of array 'b'
function isEqual (a, b) {
  return Array.isArray(a) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
