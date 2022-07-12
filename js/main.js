//BURGER MENU
const menuLink = document.querySelector('.navigation__links');
const menuBtn = document.querySelector('.burger__menu');
const links = document.querySelectorAll('links__link');

//SECTIONS
const work = document.querySelector('.work');
const dishes = document.querySelector('.offers');
const news = document.querySelector('.news');
const popular = document.querySelector('.popular');
const footer = document.querySelector('.footer');
const reservation = document.querySelector('.form');
const vievMenu = document.querySelector('.dishes');

//NAV LINKS
const aboutUs = document.querySelector('#about');
const offers = document.querySelector('#ourMenu');
const popularLink = document.querySelector('#popular');
const blog = document.querySelector('#blog');
const contactUs = document.querySelector('#contactUs');
const reservationBtn = document.querySelector('.info__btn--btn');
const veiwBtn = document.querySelector('.information__btn--btn');
const logoScrollToUp = document.querySelector('.footer__links--img');

//BURGER MENU
menuBtn?.addEventListener('click', e => {
  e.preventDefault();
  menuLink.classList.toggle('active');
  menuBtn.classList.toggle('active');
});

links.forEach(n =>
  n.addEventListener('click', () => {
    if (
      menuLink.classList.contains('active') &&
      menuBtn.classList.contains('active')
    ) {
      menuLink.classList.remove('active');
      menuBtn.classList.remove('active');
    } else {
      menuLink.classList.add('active');
      menuBtn.classList.add('active');
    }
  })
);

//NAV LINKS

aboutUs.addEventListener('click', e => {
  e.preventDefault();
  work.scrollIntoView({ behavior: 'smooth' });
});

offers.addEventListener('click', e => {
  e.preventDefault();
  dishes.scrollIntoView({ behavior: 'smooth' });
});

popularLink.addEventListener('click', e => {
  e.preventDefault();
  popular.scrollIntoView({ behavior: 'smooth' });
});

blog.addEventListener('click', e => {
  e.preventDefault();
  news.scrollIntoView({ behavior: 'smooth' });
});

contactUs.addEventListener('click', e => {
  e.preventDefault();
  footer.scrollIntoView({ behavior: 'smooth' });
});

//Btn reservation

reservationBtn.addEventListener('click', e => {
  e.preventDefault();
  reservation.scrollIntoView({ behavior: 'smooth' });
});

veiwBtn.addEventListener('click', e => {
  e.preventDefault();
  vievMenu.scrollIntoView({ behavior: 'smooth' });
});

//Logo in the footer for scroll to up

logoScrollToUp.addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo(0, 0);
});
