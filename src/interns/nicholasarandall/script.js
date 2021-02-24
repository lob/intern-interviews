// ====================================================
// Author: Nicholas A. Randall
// ====================================================
var eyesclicked = 0;
var btnclickedvalue = 0;
function incrementValueBtn1() {
  btnclickedvalue++;
  if (btnclickedvalue == 9) {
    fadeIn("eyespuzzlecaption", congratsfirstID);
    fadeIn("congratsonfirst");
  }
}
function clickHandlerEyes() {
  eyesclicked++;
  if (eyesclicked == 2) {
    fadeIn("congratsonsecond", congratssecondID);
  }
}

var congratsfirstID = 1;
var congratssecondID = 2;
//fadein code modified from geeksforgeeks
function fadeIn(element, intervalID) {
  setInterval(function () {
    revealElement(element, intervalID);
  }, 50);
}

function revealElement(element, intervalID) {
  var whichelement = document.getElementById(element);
  opacity = Number(whichelement.style.opacity);
  if (opacity < 1) {
    opacity = opacity + 0.025;
    whichelement.style.opacity = opacity;
    console.log("opacity ", opacity);
  } else {
    clearInterval(intervalID);
  }
}
