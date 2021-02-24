const redirect = window.redirect;

const SECRET_COMBO = [1, 3, 5, 1];

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0],
});

function changeDialValue(index, incrementBy) {
  // This part is missing some code
  // This function is automatically called when the user clicks on a chevron
  // it will be called with a wheel index and an amount to change the value by
  // for example, if a user clicks on the "up" arrow for wheel 0
  // this will be called with arguments (0, 1) indicating we should raise the first dial's value by one
  // for example, if the user clicked the "down" arrow for the last wheel
  // this will be called with arguments (3, -1).

  var value = lockState.wheels[index];
  incrementBy == 1 ? value++ : value--;
  if (value >= 0 && value < 10) {
    lockState.wheels[index] = value;
  }
  var currentCombo = lockState.wheels.slice();
  var match =
    currentCombo.length === SECRET_COMBO.length &&
    currentCombo.every(function (value, index) {
      return value === SECRET_COMBO[index];
    });
  if (match) {
    lockState.locked = false;
    redirect("nicholasarandall");
  }

  // When the lock is set to match the secretCombo
  // call the redirect() function with your name
  // eg: redirect('larry-lobster')
  // the redirect function will only redirect if the lockState is unlocked
}

// let our other modules find our functions
window.lockState = lockState;
window.changeDialValue = changeDialValue;
