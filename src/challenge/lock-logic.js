const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

function changeDialValue (index, incrementBy) {
  if (lockState.locked === true) { // First check if lock is locked
    lockState.wheels[index] += incrementBy // Increment lock wheel by incrementBy

    if (lockState.wheels[index] === -1) // Account for decrement at 0 by setting equal to 9
    { lockState.wheels[index] = 9 } else if (lockState.wheels[index] === 10) // Account for increment at 9 by setting equal to 0
    { lockState.wheels[index] = 0 }

    if (JSON.stringify(lockState.wheels) === JSON.stringify(SECRET_COMBO)) // Comparing both arrays using stringify
    {
      lockState.locked = false // Setting locked state to unlocked
      redirect('Jose-Gonzalez') // call redirect function with my name
    }
  }
}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
