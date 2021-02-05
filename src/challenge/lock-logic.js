const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

function checkSecretCombo () { //Checks the combo
  /* This could check for length, null properties, etc. However since we know the types of each array this should always work. */
  for (let i = 0; i < SECRET_COMBO.length; ++i) {
    if (SECRET_COMBO[i] !== lockState.wheels[i]) return false;
  }
  return true;
}

function changeDialValue (index, incrementBy) {
  if (lockState.wheels[index] + incrementBy >= 0 && lockState.wheels[index] + incrementBy <= 9 ) {
    /*  The HTML min and max values on the inputs dont work, so this validates the logic of the lock.
        I'm interested in why it doesn't work, presumably theres a disconnect between the JS and HTML.
        Tested on Firefox.
     */
    lockState.wheels[index] = lockState.wheels[index] + incrementBy;
  }

  if (checkSecretCombo() === true) {
    lockState.locked = false
    redirect('alex-rose')
  }
}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
