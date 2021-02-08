const redirect = window.redirect;

const SECRET_COMBO = [1, 3, 5, 1];
const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0],
});

//1. Assume that this function is automatically called when the user clicks on a chevron.
function changeDialValue(index, incrementBy) {
  const wheelIndex = lockState.wheels[index];
  const total = wheelIndex + incrementBy;
  lockState.wheels[index] = total % 10;
  const check =
    parseInt(SECRET_COMBO.join("")) ===
    parseInt(this.lockState.wheels.join(""));
  if (check) {
    lockState.locked = false;
    redirect("jiseon");
  } else {
    lockState.locked = true;
  }
}

// 2. Assume that there is no changeDialValue function.
// const increment = function (wheel) {
//   if (this.lockState.wheels[wheel] === 9) {
//     this.lockState.wheels[wheel] = 0;
//   } else {
//     this.lockState.wheels[wheel]++;
//   }
// };

// const decrement = function (wheel) {
//   if (this.lockState.wheels[wheel] === 0) {
//     this.lockState.wheels[wheel] = 9;
//   } else {
//     this.lockState.wheels[wheel]--;
//   }
// };

// const check = function () {
//   if (
//     parseInt(SECRET_COMBO.join("")) === parseInt(this.lockState.wheels.join(""))
//   ) {
//     this.lockState.locked = false;
//   } else {
//     this.lockState.locked = true;
//   }
// };

// const spin = function () {
//   for (i = 0; i < 4; i++) {
//     this.lockState.wheels[i] = getRandomInt(10, -1);
//   }
// };

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const increments = document.getElementsByClassName("increment");

// for (var i = 0; i < increments.length; i++) {
//   increments[i].addEventListener("click", function () {
//     const wheelIndex = parseInt(this.getAttribute("index"));
//     increment(wheelIndex);
//     document.querySelectorAll(".digit")[wheelIndex].value =
//       lockState.wheels[wheelIndex];
//     checkLock();
//   });
// }

// const decrements = document.getElementsByClassName("decrement");

// for (var i = 0; i < decrements.length; i++) {
//   decrements[i].addEventListener("click", function () {
//     const wheelIndex = parseInt(this.getAttribute("index"));
//     decrement(wheelIndex);

//     document.querySelectorAll(".digit")[wheelIndex].value =
//       lockState.wheels[wheelIndex];
//     checkLock();
//   });
// }

// const wheels = document.getElementsByClassName("digit");

// for (var i = 0; i < wheels.length; i++) {
//   wheels[i].addEventListener("keyup", function (e) {
//     if (e.which === 38) {
//       const wheelIndex = parseInt(this.getAttribute("index"));
//       increment(wheelIndex);
//       document.querySelectorAll(".digit")[wheelIndex].value =
//         lockState.wheels[wheelIndex];
//       checkLock();
//     }
//     if (e.which === 40) {
//       const wheelIndex = parseInt(this.getAttribute("index"));
//       decrement(wheelIndex);
//       document.querySelectAll(".digit")[wheelIndex].value =
//         lockState.wheels[wheelIndex];
//       checkLock();
//     }
//     if (e.which > 47 && e.which < 58) {
//       const wheelIndex = parseInt(this.getAttribute("index"));
//       lockState.wheels[wheelIndex] = parseInt(
//         document.querySelectorAll(".digit")[wheelIndex].value
//       );
//       checkLock();
//     }
//     if (this.value.length > 1) {
//       this.value = 0;
//     }
//     if (this.value.length < 1) {
//       this.value = 0;
//     }
//   });
// }
// function checkLock() {
//   check();
//   if (lockState.locked === false) {
//     document.querySelector("#indicator").classList.remove("locked-svg");
//     document.querySelector("#indicator").classList.add("unlocked-svg");
//     redirect("jiseon");
//   } else {
//     document.querySelector("#indicator").classList.add("locked-svg");
//     document.querySelector("#indicator").classList.remove("unlocked-svg");
//   }
// }

// let our other modules find our functions
window.lockState = lockState;
window.changeDialValue = changeDialValue;
