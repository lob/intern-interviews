const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

function changeDialValue (index, incrementBy) {
  lockState.wheels[index] += incrementBy
  // can use loops
  // or can use JSON.stringyfy
  // but for smaller array this is efficient
  lockState.locked = !(
    lockState.wheels[0] === SECRET_COMBO[0] &&
    lockState.wheels[1] === SECRET_COMBO[1] &&
    lockState.wheels[2] === SECRET_COMBO[2] &&
    lockState.wheels[3] === SECRET_COMBO[3]
  )
  // console.log(lockState.locked);
  if (!lockState.locked) {
    // console.log("HELLO");
    redirect('neel-suthar')
  }
}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
