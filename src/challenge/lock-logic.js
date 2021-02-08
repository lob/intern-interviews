const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

let lockValue = []

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

  /**
   * Solution is below
   */

  // update the wheel as this function is called
  lockState.wheels[index] = lockState.wheels[index] + incrementBy

  // This line gets the array target from the lockState.wheels proxy and convert it from an object to an array and assign it to the variable lockValue
  lockValue = Object.values(Object.assign({}, lockState.wheels))

  // Check if the combination matches the secret combination
  if (JSON.stringify(lockValue) === JSON.stringify(SECRET_COMBO)) {
    lockState.locked = false
  }

  // Redirect to personal site
  if (!lockState.locked) redirect('Quan-Dinh')
}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
