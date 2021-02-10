const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

function changeDialValue (index, incrementBy) {
  //we assume that the index belongs to this range of values: [0, 1, 2, 3]
  const updatedValue = lockState.wheels[index] + incrementBy;
  
  //we will create a roll over/under if the wheel is at 0 or 9
  if(updatedValue > 9){
    //since we were already at 9, we should roll over to a 0 as we are trying to implement a wheel
    lockState.wheels[index] = 0;
  }else if(updatedValue < 0){
    //since we were already at 0, we should roll under to a 9 as we are trying to implement a wheel
    lockState.wheels[index] = 9;
  }else{
    //this is the general case where we can assign the updated value directly to the wheels
    lockState.wheels[index] = updatedValue;
  }

  //now we check whether our wheels array is permisible
  //we should only check all values if the value at the current updated index matches the value in the SECRET_COMBO
  if(lockState.wheels[index] === SECRET_COMBO[index]){
    //we loop through all values
    //we assume that the lock should be unlocked
    let isSame = true;

    for(let i = 0;i < lockState.wheels.length;i++){
      if(lockState.wheels[i] !== SECRET_COMBO[i]){
        //since this is the only time we alter the value of the locked variable in the loop
        //the lockState is never unlocked if there is a value that doesn't match the SECRET_COMBO
        isSame = false;
      }
    }

    //we will check if the lock is unlocked
    if(isSame){
      lockState.locked = false;
      redirect('pulkit-arya');
    }
  }
}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
