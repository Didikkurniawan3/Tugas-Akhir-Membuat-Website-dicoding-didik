const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
})

let scrollTopBtn = document.querySelector('#scroll-top');

window.onscroll = () => {
  if (window.scrollY > 60) { 
    scrollTopBtn.classList.add('active'); 
  } else {
    scrollTopBtn.classList.remove('active'); 
  }
};
