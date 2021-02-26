const redirect = window.redirect;

const SECRET_COMBO = [1, 3, 5, 1];

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
});

// Since there are no loops or iterations,
// and no arrays and objects created to use memory,
// Time and Space complexity are constant 0(1)

// We can loop through using SECRET_COMBO using array method every()
// Then Big O will be O(N) where N is the amount of elements in the array

function changeDialValue(index, incrementBy) {
  //When a user clicks on either arrow at any index
  //the wheel of the index the user is trying to change will increment or decrement by 1
  lockState.wheels[index] += incrementBy;

  // Once the value of each index matches the value of the same index of SECRET_COMBO
  // the locked state will be set to false and be redirected
  if (
    lockState.wheels[0] === SECRET_COMBO[0] &&
    lockState.wheels[1] === SECRET_COMBO[1] &&
    lockState.wheels[2] === SECRET_COMBO[2] &&
    lockState.wheels[3] === SECRET_COMBO[3]
  ) {
    lockState.locked = false;
    redirect("jonathan-cordero");
  }
}

// let our other modules find our functions
window.lockState = lockState;
window.changeDialValue = changeDialValue;
