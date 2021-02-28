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

  // or lockState.wheels[1] = 2
  // the lock will re-render itself when the value changes
  lockState.wheels[index] += incrementBy

  // When the lock is set to match the secretCombo
  // call the redirect() function with your name
  if (lockState.wheels[0] === SECRET_COMBO[0] && lockState.wheels[1] === SECRET_COMBO[1] && lockState.wheels[2] === SECRET_COMBO[2] && lockState.wheels[3] === SECRET_COMBO[3]) {
    lockState.locked = false
    redirect('arjun-rajani')
  }

  // the redirect function will only redirect if the lockState is unlocked
}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
