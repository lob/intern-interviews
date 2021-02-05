const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

function changeDialValue (index, incrementBy) {
  lockState.wheels[index] += incrementBy
  let match = 0
  for (let i = 0; i < lockState.wheels.length; i++) {
    if (lockState.wheels[i] === SECRET_COMBO[i]) {
      match++
      if (match === SECRET_COMBO.length) {
        lockState.locked = false
        redirect('pakshingkan')
      }
    } else {
      match = 0
      lockState.locked = true
    }
  }
}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
