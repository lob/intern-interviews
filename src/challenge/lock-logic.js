const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})
// This part is missing some code
// This function is automatically called when the user clicks on a chevron
// it will be called with a wheel index and an amount to change the value by
// for example, if a user clicks on the "up" arrow for wheel 0
// this will be called with arguments (0, 1) indicating we should raise the first dial's value by one
// for example, if the user clicked the "down" arrow for the last wheel
// this will be called with arguments (3, -1).
// to change the state of the lock, simply make a call like
// lockState.locked = false
// or lockState.wheels[1] = 2
// the lock will re-render itself when the value changes
// When the lock is set to match the secretCombo
// call the redirect() function with your name
// eg: redirect('larry-lobster')
// the redirect function will only redirect if the lockState is unlocked
function changeDialValue (index, incrementBy) {
  // increment/decrement
  const current = lockState.wheels[index]
  lockState.wheels[index] = trueMod((current + incrementBy), 10)
  // check lock
  const hasCracked = lockState.wheels.every((element, index) => element === SECRET_COMBO[index])
  if (hasCracked) {
    lockState.locked = false
    redirect('erik-awwad')
  }
}
// Parameters
// toMod: int
// modulus: int
// Returns true modulus of toMod % modulus
// Modulus cannot be 0
// see: https://web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm
function trueMod (toMod, modulus) {
  return ((toMod % modulus) + modulus) % modulus
}
// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
