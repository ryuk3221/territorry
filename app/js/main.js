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
  if (x === false) {
    document.querySelector('.nav').style.transform = 'translateY(0)';
    document.querySelector('.header__burger-img').setAttribute('src', 'images/close-burger.svg');
    x = true;
  }
  else {
    document.querySelector('.nav').style.transform = 'translateY(-100%)';
    document.querySelector('.header__burger-img').setAttribute('src', 'images/burger.svg')
    x = false;
  }
}

new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 3,
  spaceBetween: 60,
});

// const aboutLink = document.querySelector('.about__link');
// aboutLink.onclick = modalAboutShow;

function modalAboutShow() {
  document.querySelector('#modal-about').classList.add('modal-show');
}

// const modalClose = document.querySelector('.modal-about__close');
// modalClose.onclick = modalAboutClose;
// const modalBtnCLose = document.querySelector('.modal-about__btn');
// modalBtnCLose.onclick = modalAboutClose

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