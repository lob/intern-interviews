(function () {
  const chevronUps = Array.from(document.querySelectorAll('.chevron-up'))
  const chevronDowns = Array.from(document.querySelectorAll('.chevron-down'))
  // window.changeDialValue(index, 1) and window.changeDialValue(index, -1) causes lock value to increment twice
  // as they are incremented now on changeDialValue function in lock-logic.js
  // hence modified it here to only increment by one.
  chevronUps.forEach(chevron => {
    const index = chevron.parentNode.getAttribute('index')
    chevron.addEventListener('click', () => window.changeDialValue(index, 0))
  })

  chevronDowns.forEach(chevron => {
    const index = chevron.parentNode.getAttribute('index')
    chevron.addEventListener('click', () => window.changeDialValue(index, 0))
  })

  window.mobx.autorun(() => {
    // our lock will render itself any time the values of the lock state are changed
    window.renderLock()
  })
})()
