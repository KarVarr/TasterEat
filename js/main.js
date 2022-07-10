const menuLink = document.querySelector('.navigation__links');
const menuBtn = document.querySelector('.bar');

menuBtn?.addEventListener('click', e => {
  e.preventDefault();
  menuLink.classList.toggle('active');
  menuBtn.classList.toggle('active');
  
});
