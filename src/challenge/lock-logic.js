const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

function changeDialValue (index, incrementBy) {
  // Value of respective wheel is incremented/decremented
  lockState.wheels[index] += incrementBy; 
  console.log("Lock function called");
  // Checks if the code pattern is matched
  checkIfCodeMatched();
  // If unlocked, redirect the page
  checkifUnlocked();
  
}

const checkIfCodeMatched = () => {
  if(lockState.wheels[0] == SECRET_COMBO[0] && lockState.wheels[1] == SECRET_COMBO[1] &&
    lockState.wheels[2] == SECRET_COMBO[2]  && lockState.wheels[3] == SECRET_COMBO[3]){
      lockState.locked = false;
    }
}

const redirect_new = () => {
  console.log("Redirect function called");
  location.href = "../manoj-ponagandla/index.html";
}

const checkifUnlocked = () => {
  if(lockState.locked == false){
    redirect("manoj-ponagandla");
  }
}
// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
window.redirect = "../manoj-ponagandla/index.html"