const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]
const MAX_LOCK_INT = 9;
const MIN_LOCK_INT = 0;

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

function arraysAreEqual(array_a, array_b) {
  
  let equalityStatus = array_a.length === array_b.length;
  let i = 0;

  while(equalityStatus && i < array_a.length) {
    if(array_a[i] != array_b[i])  {
      equalityStatus = false;
    }
    i++;
  }

  return equalityStatus
}

function changeDialValue (index, incrementBy) {
  
  canUpdateLockValue = lockState.wheels[index] + incrementBy <= MAX_LOCK_INT && lockState.wheels[index] + incrementBy >= MIN_LOCK_INT; 

  // Assuming Lock values are in range 0-9
  if (canUpdateLockValue) {
    lockState.wheels[index] += incrementBy;
  }

  let lockCombinationIsCorrect = arraysAreEqual(lockState.wheels, SECRET_COMBO)
  if (lockCombinationIsCorrect) {
    lockState.locked = false
    redirect('larry-lobster')
  }
}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
