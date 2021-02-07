const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

function changeDialValue (index, incrementBy) {
  // just as a side comment, I usually keep all my
  // semicolons in to avoid potential problems
  // with parsing, but the linter wanted me
  // to remove them, so they're gone.
  lockState.wheels[index] += incrementBy
  if (checkArrays()) {
    lockState.locked = false
    redirect('tony-attalla')
  }
}

function checkArrays () {
  for (let i = 0; i < lockState.wheels.length; ++i) {
    if (lockState.wheels[i] !== SECRET_COMBO[i]) {
      return false
    }
  }
  return true
}
// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
