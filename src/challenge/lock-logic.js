const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

function changeDialValue(index, incrementBy) {

  let currentVal = lockState.wheels[index];

  if (currentVal === 0 && incrementBy === -1) {
    currentVal = 9;
  } else if (incrementBy === -1) {
    currentVal--;
  } else if (currentVal === 9 && incrementBy === 1) {
    currentVal = 0;
  } else if (incrementBy === 1) {
    currentVal++;
  }

  lockState.wheels[index] = currentVal;

  function checkIfMatchingCombo(arr1, arr2) {
    let correct = true;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        correct = false;
        break;
      }
    }
    if (correct) {
      lockState.locked = false;
      redirect('adam-levitz');
    }
  }

  checkIfMatchingCombo(SECRET_COMBO, lockState.wheels);

}

window.lockState = lockState
window.changeDialValue = changeDialValue
