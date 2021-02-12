const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})
function changeDialValue (index, incrementBy) {
  lockState.wheels[index] += incrementBy
  if (compare(0) && compare(1) && compare(2) && compare(3)) {
    lockState.locked = false
    redirect('Biyao_Li')
  } else {
    lockState.lockState = true
  }
}

function compare (index) {
  return lockState.wheels[index] === SECRET_COMBO[index]
}
window.lockState = lockState
window.changeDialValue = changeDialValue
