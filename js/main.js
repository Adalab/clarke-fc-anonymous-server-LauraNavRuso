'use strict';

const nav = document.querySelector('.nav');
const navTrigger = document.querySelector('.nav-trigger');
const navClose = document.querySelector('.nav-close');

navTrigger.innerHTML = "";
navClose.innerHTML = "";

function openNav() {
  nav.classList.add('nav-visible');
};

function closeNav() {
	nav.classList.remove('nav-visible');
};

navTrigger.addEventListener('click', openNav);
navClose.addEventListener('click', closeNav);
