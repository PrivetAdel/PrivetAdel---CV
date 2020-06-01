const sectionTopBar = document.querySelector(`.section-top-bar`);
const navMain = sectionTopBar.querySelector(`.section-top-bar__nav`);
const navToggle = sectionTopBar.querySelector(`.section-top-bar__nav--toggle`);
const navLinks = sectionTopBar.querySelectorAll(`.site-list__link`);

sectionTopBar.classList.remove(`section-top-bar__nojs`);
navMainClose();

function navMainClose() {
  navMain.classList.remove(`section-top-bar__nav--opened`);
  navMain.classList.add(`section-top-bar__nav--closed`);
}

function navMainOpen() {
  navMain.classList.remove(`section-top-bar__nav--closed`);
  navMain.classList.add(`section-top-bar__nav--opened`);
}

navToggle.addEventListener(`click`, function() {
  if (navMain.classList.contains(`section-top-bar__nav--closed`)) {
    navMainOpen();
    navLinks.forEach(navLink => navLink.addEventListener(`click`, navMainClose));
  } else {
    navMainClose();
  }
});
