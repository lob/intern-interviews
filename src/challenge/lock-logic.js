const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

function changeDialValue (index, incrementBy) {

  dialValue = parseInt(document.getElementsByClassName("digit")[index].value)

  if (incrementBy === 1 && dialValue < 9) {
    newIndexValue = document.getElementsByClassName("digit")[index].value = dialValue + incrementBy
    lockState.wheels[index] = newIndexValue
  }
  
  if (incrementBy === -1 && dialValue > 0) {
    document.getElementsByClassName("digit")[index].value = dialValue + incrementBy
    lockState.wheels[index] = newIndexValue
  }

 console.log(lockState.wheels)
 console.log(lockState.wheels === SECRET_COMBO)

 if (lockState.wheels[0] === SECRET_COMBO[0] && lockState.wheels[1] === SECRET_COMBO[1] && lockState.wheels[3] === SECRET_COMBO[3] && lockState.wheels[3] === SECRET_COMBO[3]) {
  lockState.locked = false
  redirect('osha-groetz')
 }

}

window.lockState = lockState
window.changeDialValue = changeDialValue
