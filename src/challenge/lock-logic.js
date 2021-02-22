const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

function changeDialValue (index, incrementBy) {
  if (incrementBy === 1) {
    lockState.wheels[index] += 1
  }
  if (incrementBy === -1) {
    lockState.wheels[index] -= 1
  }
  if (lockState.wheels === [1, 3, 5, 1]) {
    lockState.locked = false
  }
  unlock()
}

function unlock () {
  if (SECRET_COMBO.toString() === lockState.wheels.toString()) {
    lockState.locked = false
    redirect('kendall-stephens')
  }
}

window.lockState = lockState
window.changeDialValue = changeDialValue
