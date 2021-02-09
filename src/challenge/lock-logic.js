const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

function changeDialValue (index, incrementBy) {
  lockState.wheels[index] += incrementBy;


  //I originally just had it be lockState.wheels === SECRET_COMBO but it 
  //looks like that doesn't quite work because of some extra data that gets 
  //added.
  if(lockState.wheels[0] === SECRET_COMBO[0] && 
    lockState.wheels[1] === SECRET_COMBO[1] && 
    lockState.wheels[2] === SECRET_COMBO[2] && 
    lockState.wheels[3] === SECRET_COMBO[3]){
    lockState.locked = false;
    redirect('Kitt-Oster');
  }
}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
