'use strict';

const faqItems = document.querySelectorAll('.fag__item');

faqItems.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('fag__item--opened');
  })
});