const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

function isEqual(a, b) {
  for(let i = 0; i < a.length; i++) {
    if(a[i] != b[i])  {
      return false;
    }
  }
  return true
}

function changeDialValue (index, incrementBy) {
  lockState.wheels[index] += incrementBy
  let lockCompare = isEqual(lockState.wheels, SECRET_COMBO)
  if (lockCompare) {
    lockState.locked = false
    redirect('Christopher-Lee')
  }
}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
