/** This program is used to change the dials on the webpage and unlock if it matches the SECRET_COMBO.
 * Author: Delzad Bamji
 */
const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

/**
 * This function is used to change the dials on the webpage and unlock if it matches the SECRET_COMBO.
 * @param {number} index - index of the wheel
 * @param {number} incrementBy - value to increase or decrease the dial number
 */

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
  if (incrementBy < 0) {
    lockState.wheels[index] === 0
      ? (lockState.wheels[index] = 9)
      : (lockState.wheels[index] += incrementBy)
  } else {
    lockState.wheels[index] = (lockState.wheels[index] + incrementBy) % 10
  }
  lockState.locked = false
  // check for a match with the secret key
  lockState.wheels.forEach((element, position) => {
    if (element !== SECRET_COMBO[position]) {
      lockState.locked = true
    }
  })
  if (lockState.locked === false) {
    redirect('DelzadBamji')
  }
}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
