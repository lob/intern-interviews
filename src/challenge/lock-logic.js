const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

function changeDialValue(index, incrementBy) {

  //Find value at the selected Index, then add incremeneted value to it
  let selectedIndexValue = lockState.wheels[index];
  let newValue = selectedIndexValue += incrementBy;
  // Remove old value at the selected index, and replace it with our new value
  lockState.wheels.splice(index, 1, newValue);

  //Compare our current wheels array values to our secret combo, returning a new array with 'true' in that index if the values match
  let compareToSecretCombo = lockState.wheels.map((value, index) => { if (value === SECRET_COMBO[index]) { return true } })

  //Once every value in our new array from our .map method, set locked state to false and redirect to our intern page
  if (compareToSecretCombo.every((value) => (value === true))) {
    lockState.locked = false;
    redirect('kathy-morawski')
  }
}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
