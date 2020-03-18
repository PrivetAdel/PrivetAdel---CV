const sectionTopBar = document.querySelector(`.section-top-bar`);
const navMain = sectionTopBar.querySelector(`.section-top-bar__nav`);
const navToggle = sectionTopBar.querySelector(`.section-top-bar__nav--toggle`);

sectionTopBar.classList.remove(`section-top-bar__nojs`);
navMain.classList.remove(`section-top-bar__nav--opened`);
navMain.classList.add(`section-top-bar__nav--closed`);

navToggle.addEventListener(`click`, function() {
  if (navMain.classList.contains(`section-top-bar__nav--closed`)) {
    navMain.classList.remove(`section-top-bar__nav--closed`);
    navMain.classList.add(`section-top-bar__nav--opened`);
  } else {
    navMain.classList.add(`section-top-bar__nav--closed`);
    navMain.classList.remove(`section-top-bar__nav--opened`);
  }
});
