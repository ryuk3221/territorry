document.querySelectorAll('.catalog__item-title').forEach((el) => {
  el.innerHTML = 'зал #10 Территория';
})

$(function(){
  $('.modal-zal__main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.modal-zal__sub-slider',
    draggable: false,
  });
  $('.modal-zal__sub-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.modal-zal__main-slider',
    centerMode: true,
    focusOnSelect: true,
    draggable: false,
  });
});

const menuBtn = document.querySelector('.header__burger');

let x = false;
menuBtn.onclick = function() {
  document.querySelector('.burger-span1').classList.toggle('burger-span1--active');
  document.querySelector('.burger-span3').classList.toggle('burger-span2--active');
  if (x === false) {
    document.querySelector('.nav').classList.toggle('nav--active');
    document.querySelector('.burger-span2').style.width = '0';
    x = true;
  }
  else {
    document.querySelector('.nav').classList.toggle('nav--active');
    document.querySelector('.burger-span2').style.width = '40px';
    x = false;
  }
}

new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 3,
  spaceBetween: 40,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    
  },
});

const aboutLink = document.querySelector('.about__footer-button');
aboutLink.onclick = modalAboutShow;

function modalAboutShow() {
  document.querySelector('#modal-about').classList.add('modal-show');
}

const modalClose = document.querySelector('.modal');
modalClose.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('modal')) {
    document.querySelector('#modal-about').classList.remove('modal-show');
  }
})
const modalBtnCLose = document.querySelector('.modal-about__btn');
modalBtnCLose.onclick = modalAboutClose

function modalAboutClose() {
  document.querySelector('#modal-about').classList.remove('modal-show');
}


function showModalZal() {
  document.querySelector(`[data-zal="${this.id}"]`).classList.add('modal-show');
  
}

function closeModalZal(event) {
  const target = event.target;
  if (target.classList.contains('modal-zal')){
      document.querySelectorAll('[data-zal]').forEach(function(item){
      item.classList.remove('modal-show')
    })
  }
  
}

const myBtns = document.querySelectorAll('.catalog__item-btn');

myBtns.forEach(function(el) {
  el.onclick = showModalZal;
})

const modalZalCloseBtns = document.querySelectorAll('.modal-zal__close-btn');

modalZalCloseBtns.forEach(function(el) {
  el.onclick = function() {
    document.querySelectorAll('[data-zal]').forEach(function(item){
      item.classList.remove('modal-show')
  });
}
})

document.querySelectorAll('.modal-zal').forEach(function(el){
  el.addEventListener('click', closeModalZal);
})

// let lastScroll = 0;
// const header = document.querySelector('.header');

// const scrollPosition = () => window.pageYOffset;
// const containHide = () => header.classList.contains('header--hide');

// window.addEventListener('scroll', () => {
  
//   let top = scrollPosition();
//   if (top > lastScroll && !header.classList.contains('header--hide')) {
//     //scroll down
//     header.classList.add('header--hide');
//   }
//   else if (top < lastScroll && header.classList.contains('header--hide')) {
//     header.classList.remove('header--hide');
//     //scroll up
//   }
//   lastScroll = scrollPosition();
// });