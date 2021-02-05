const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

// updates the value of the lock wheels according to the given increment
function changeDialValue (index, incrementBy) {
  const currValue = lockState.wheels[index]
  // increment the wheel, then mod 10 for overflow (with adjustments for negative mods)
  lockState.wheels[index] = (((currValue + incrementBy) % 10) + 10) % 10

  // check the JSON.stringify versions, which should be fine since we're dealing with ints
  if (JSON.stringify(lockState.wheels) === JSON.stringify(SECRET_COMBO)) {
    redirect('justin-bao')
    lockState.locked = false
  }
}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
