const redirect = window.redirect;

const SECRET_COMBO = [1, 3, 5, 1];

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0],
});

function changeDialValue(index, incrementBy) {
  var temp = "myText" + index;
  var num =
    parseInt(document.getElementById(temp).value) + parseInt(incrementBy);
  document.getElementById(temp).value =
    parseInt(document.getElementById(temp).value) + parseInt(incrementBy);

  lockState.wheels[index] = num;
  console.log(typeof lockState.wheels, typeof SECRET_COMBO);
  if (JSON.stringify(lockState.wheels) == JSON.stringify(SECRET_COMBO)) {
    console.log("yes");
    lockState.locked = false;
  }

  redirect("Mayank-bazari");
}

window.lockState = lockState;
window.changeDialValue = changeDialValue;
