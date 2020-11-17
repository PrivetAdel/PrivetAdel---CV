'use strict';

const nav = document.querySelector(`.top-bar`);
const toggle = nav.querySelector(`.top-bar__toggle`);

nav.classList.remove(`top-bar__nojs`);

function onToggleClick() {
  nav.classList.toggle(`top-bar__opened`);
}

toggle.addEventListener(`click`, onToggleClick);