const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

function changeDialValue(index, incrementBy) {

  // Increments or decrements the index by 1 and checks if it overflows
  lockState.wheels[index] += incrementBy;
  if (lockState.wheels[index] == 10) {
    lockState.wheels[index] = 0;
  }
  else if (lockState.wheels[index] == -1) {
    lockState.wheels[index] = 9
  }

  // If statement checks if all the wheels match the secret combo
  // Redirects the page to the user about page
  if (lockState.wheels[0] == SECRET_COMBO[0] &&
    lockState.wheels[1] == SECRET_COMBO[1] &&
    lockState.wheels[2] == SECRET_COMBO[2] &&
    lockState.wheels[3] == SECRET_COMBO[3]
  ) {
    lockState.locked = false;
  }
  redirect('wayland-li')
}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
