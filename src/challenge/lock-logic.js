const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

function changeDialValue (index, incrementBy) {
  if (incrementBy === 1) {
    if (lockState.wheels[index] >= 9) {
      lockState.wheels[index] = 0
    } else {
      lockState.wheels[index] += 1
    }
  }
  if (incrementBy === -1) {
    if (lockState.wheels[index] <= 0) {
      lockState.wheels[index] = 9
    } else {
      lockState.wheels[index] -= 1
    }
  }
  if (lockState.wheels.toString() === SECRET_COMBO.toString()) {
    lockState.locked = false
    redirect('anandsurya')
  }
}
// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
