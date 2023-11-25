import './style.scss'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'


new Glide('.glide',{
  type: 'carousel',
  autoplay: 4000,
perView: 1,
focusAt:'1',
// startAt:'',

breakpoints: {
  1024: {
    perView: 1
  },
  600: {
    perView: 1
  }
}
}).mount()


const mobileNavElements = document.querySelector('.mobile-nav-dropdown');
const menuBarIcon = document.querySelector('#menuToggle');
const closeIcon = document.querySelector('.close-icon');

menuBarIcon.addEventListener('click', function () {
  mobileNavElements.classList.toggle('active');
});

closeIcon.addEventListener('click', function () {
  mobileNavElements.classList.remove('active');
});

document.addEventListener('DOMContentLoaded', function () {
  const buyerBtn = document.getElementById('buyerBtn');
  const sellerBtn = document.getElementById('sellerBtn');

  buyerBtn.addEventListener('click', function () {
    buyerBtn.classList.add('active');
    sellerBtn.classList.remove('active');
  });

  sellerBtn.addEventListener('click', function () {
    sellerBtn.classList.add('active');
    buyerBtn.classList.remove('active');
  });
});