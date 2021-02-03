const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

function changeDialValue (index, incrementBy) {
  if (!(lockState.wheels[index] === 0 && incrementBy < 0)) { // make sure you cannot have negative lock combo
    lockState.wheels[index] += incrementBy
  }

  if (isCorrectCombo(lockState.wheels, SECRET_COMBO)) {
    lockState.locked = false
    redirect('kenny-song')
  }
}

function isCorrectCombo (currentCombo, lockCombo) {
  for (let i = 0; i < currentCombo.length; i++) {
    if (currentCombo[i] !== lockCombo[i]) return false
  }
  return true
}
// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
