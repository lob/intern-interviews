const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

function changeDialValue (index, incrementBy) {
  // clicking the up arrow
  if(incrementBy == 1){
    // if 9 go to 0
    if(lockState.wheels[index] == 9){
      lockState.wheels[index] = 0
    }
    // otherwise increment by 1
    else{
      lockState.wheels[index] += 1
    }
  }
  // clicking the down arrow
  else{
    // if 0 go to 9
    if(lockState.wheels[index] == 0){
      lockState.wheels[index] = 9
    }
    // otherwise decrement by 1
    else{
      lockState.wheels[index] -= 1
    }
  }

  // CHECKING IF CODE MATCH
  if(lockState.wheels[0] == SECRET_COMBO[0] & lockState.wheels[1] == SECRET_COMBO[1] & lockState.wheels[2] == SECRET_COMBO[2] & lockState.wheels[3] == SECRET_COMBO[3]){
    lockState.locked = false
    redirect('cooper-vos')
  }
}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
