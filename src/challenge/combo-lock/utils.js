(function () {
  window.renderLock = function () {
    window.lockState.wheels.forEach((value, index) => {
      const wheel = document.querySelector(`input[index="${index}"]`)
      wheel.value = value
    })

    const indicator = document.querySelector('.indicator')
    if (!window.lockState.locked) {
      indicator.classList.add('indicator--unlocked')
    } else {
      indicator.classList.remove('indicator--unlocked')
    }
  }

  window.redirect = function (internName) {
    console.log("testttt")
    setTimeout(() => {
      if (!window.lockState.locked) {
        console.log("testttt")
        window.location = `../interns/${internName}/index.html`
      }
    }, 15)
  }
})()
