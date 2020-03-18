function titleSlider() {
  const overlay = document.querySelector(`.section-title__img--overlay`);
  changeImages(overlay);

  function changeImages(img) {
    let clicked = 0;

    const slider = document.createElement(`DIV`);
    slider.classList.add(`slider`);
    img.parentElement.insertBefore(slider, img);
    // slider.style.top = (img.offsetHeight  / 2) - (slider.offsetHeight / 2) + `px`;
    // slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + `px`;
    slider.style.top = (125 / 2) - (20 / 2) + `px`;
    slider.style.left = 125 - (20 / 2) + `px`;

    slider.addEventListener(`mousedown`, slideReady);
    window.addEventListener(`mouseup`, slideFinish);
    slider.addEventListener(`touchstart`, slideReady);
    window.addEventListener(`touchstop`, slideFinish);

    function slideReady(e) {
      e.preventDefault();
      clicked = 1;
      window.addEventListener(`mousemove`, slideMove);
      window.addEventListener(`touchmove`, slideMove);
    }

    function slideFinish() {
      clicked = 0;
    }

    function slideMove(e) {
      if (clicked == 0) return false;
      let cursorXPosition = getCursorPos(e);
      if (cursorXPosition < 0) cursorXPosition = 0;
      if (cursorXPosition > 125) cursorXPosition = 125;
      slide(cursorXPosition);
    }

    function getCursorPos(e) {
      let x = 0;
      e = e || window.event;
      /*get the x positions of the image:*/
      const a = img.getBoundingClientRect();
      /*calculate the cursor`s x coordinate, relative to the image:*/
      x = e.pageX - a.left;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      return x;
    }

    function slide(x) {
      /*resize the image:*/
      img.style.width = x + `px`;
      /*position the slider:*/
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + `px`;
    }
  }
}
titleSlider();
