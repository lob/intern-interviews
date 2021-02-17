(function () {
  const TYPE_TEXT = "Hi! It's Jiaqi here!";
  const TYPE_SPEED = 50;
  const NAV_HEIGHT = 70;
  const OFFSET = Math.sin(2 * Math.PI / 180) * window.innerWidth;
  const NAV_ANGLE = Math.sin(2 * Math.PI / 180) * Math.sin(88 * Math.PI / 180);

  let slideIndex = 0;

  /** Runs once the page has loaded to set up the image slideshow */
  window.addEventListener("load", function() {
    writeText(TYPE_TEXT, $("intro"), 0);

    let ua = navigator.userAgent;
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua) &&
          /Chrome/i.test(ua) || /Firefox/i.test(ua)) {
      initializeScrollNav();
    } else {
      defaultNav();
    }
    initializeSlideShow();
  });

  /**
   * Initializes default nav bar for "lesser" browsers.
   */
  function defaultNav() {
    $("nav-shadow").classList.remove("hidden");
    $("top-nav").classList.add("default-nav");
  }

  /**
   * Initializes image slide show.
   */
  function initializeSlideShow() {
    showDivs(slideIndex);
    let slides = document.getElementsByClassName("slides");

    $("left-btn").onclick = function() {
      plusDivs(-1);
    }
    $("right-btn").onclick = function() {
      plusDivs(1);
    }
  }

  function initializeScrollNav() {
    let sections = document.getElementsByClassName("content");
    updateNavBackground(sections);

    $("nav-background").classList.remove("hidden");
    $("nav-shadow").classList.remove("hidden");

    let last_known_scroll_position = 0;
    let ticking = false;

    window.addEventListener("scroll", () => {
      last_known_scroll_position = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateNavBackground(sections);
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  /**
   * Flips forward/backwards the given "change" amount.
   * @param {number} change - given index change of slider.
   */
  function plusDivs(change) {
    showDivs(slideIndex += change);
  }

  /**
  * Shows slide of given "index".
  * @param {number} index - changes slided to this index.
  */
  function showDivs(index) {
    let slides = document.getElementsByClassName("slides");
    if (index >= slides.length) {
      slideIndex = 0;
    }
    if (index < 0) {
      slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add("invisible");
    }
    slides[slideIndex].classList.remove("invisible");
  }

  /**
  * Changes the color scheme of the nav bar when the nav bar crosses the card of
  * the page.
  * @param {array} sections - array of DOM elements.
  */
  function updateNavBackground(sections) {
    let intersect = false;
    for (section of sections) {
      let box = section.getBoundingClientRect();

      let top = box.top - OFFSET;
      let bottom = box.bottom + OFFSET;
      if (top <= NAV_HEIGHT && bottom >= 0) {
        intersect = true;
        if (top >= -NAV_HEIGHT && top <= NAV_HEIGHT) {
          updateNavStyle(box.top + "px", "",
            Math.max(0, window.innerWidth - (NAV_HEIGHT - top) / NAV_ANGLE) + "px", "");
        } else if (box.bottom <= NAV_HEIGHT && box.bottom >= -NAV_HEIGHT) {
          updateNavStyle("", NAV_HEIGHT * 3 - bottom + "px",
            "", Math.max(0, window.innerWidth - (bottom - NAV_HEIGHT) / NAV_ANGLE) + "px");
        } else {
          updateNavStyle(-NAV_HEIGHT+ "px", "", "0", "");
        }
      }
    }
    if (intersect) {
      $("nav-background").style.display = "";
      $("nav-shadow").style.display = "";
    } else {
      $("nav-background").style.display = "none";
      $("nav-shadow").style.display = "none";
    }
  }

  /**
  * Writes text to page with delay to simulate typeing.
  * @param {string} text - text to write.
  * @param {object} element - DOM element to write to.
  * @param {number} index - index of text currently on.
  */
  function writeText(text, ele, index) {
    if (index < text.length) {
      ele.innerHTML += text.charAt(index);
      setTimeout(writeText, TYPE_SPEED, text, ele, index + 1);
    } else {
      $("cursor").classList.add("blinking-cursor");
    }
  }

  /**
   * Returns the elements that match the given query string.
   * @param {string} id - element query
   * @return {object} DOM object list associated with query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @return {object} DOM object associated with id.
   */
  function $(id) {
    return document.getElementById(id);
  }
})();
