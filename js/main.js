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

//SLIDER
const slides = document.querySelectorAll('.slider__box');
const slider = document.querySelector('slider__box');
const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');

curSlide = 0;
maxSlide = slides.length;
//refactor function
const goToSlide = (slide) => {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
}
goToSlide(0)

btnRight.addEventListener('click', () => {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  
});

btnLeft.addEventListener('click', () => {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }

  goToSlide(curSlide);
});




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
