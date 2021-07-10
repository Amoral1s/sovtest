jQuery(document).ready(function ($) {

  $('.hars-left-wrap-item').on('click', function(e, index) {

    $('.hars-left-wrap-item').removeClass('hars-left-wrap-item-active');
    $(this).addClass('hars-left-wrap-item-active');

    const tab = document.querySelectorAll('.tab');

    if (tab.length > 0) {
      tab.forEach((elem) => {
        elem.style.display = 'none';
      });
      myFadeInFlex(tab[$(this).index()]);
      
    }

    console.log( )
  

  });

  //FADE JS
  function myFadeOut(el) {
    var opacity = 1;
    var timer = setInterval(function() {
      if(opacity <= 0.1) {
        clearInterval(timer);
        el.style.display = "none";
      }
      el.style.opacity = opacity;
      opacity -= opacity * 0.1;
    }, 10);
  }

  function myFadeInFlex(el) {
    var opacity = 0.01;
    el.style.display = "block";
    var timer = setInterval(function() {
      if(opacity >= 1) {
        clearInterval(timer);
      }
      el.style.opacity = opacity;
      opacity += opacity * 0.1;
    }, 10);
  }

  const videos = document.querySelectorAll('video source');


  const productLeft = document.querySelector('.product-left');

  if (window.screen.width <= 578) {

    $('.footer-brands').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      arrows: false,
      adaptiveHeight: true
    });
    
  }


  if (productLeft) {
    if (window.screen.width >= 1367) {
      $('.product-left').fotorama({
        width: '100%',
        maxwidth: '100%',
        ratio: 16/9,
        allowfullscreen: true,
        nav: 'thumbs',
        fit: 'contain',
        arrows: false,
        thumbwidth: 150,
        thumbheight: 150
      });
    } else if (window.screen.width <= 1366 && window.screen.width >= 993) {
      $('.product-left').fotorama({
        width: '100%',
        maxwidth: '100%',
        allowfullscreen: false,
        nav: 'thumbs',
        fit: 'contain',
        arrows: false,
        thumbwidth: 100,
        thumbheight: 100
      });
    } else if (window.screen.width <= 992) {
      $('.product-left').fotorama({
        width: '100%',
        maxwidth: '100%',
        ratio: 4/3,
        allowfullscreen: false,
        nav: 'thumbs',
        fit: 'contain',
        arrows: false,
        thumbwidth: 85,
        thumbheight: 85
      });
    }
    
  }
  

  if (window.screen.width >= 1600) {
    window.addEventListener('scroll', function() {
      if (this.window.pageYOffset > 1700 && this.window.pageYOffset < 2800) {
        $('.lot').addClass('lot-active');
      } else {
        $('.lot').removeClass('lot-active');
      }
    });
  } else if (window.screen.width <= 1599 && window.screen.width >= 1201) {
    window.addEventListener('scroll', function() {
      if (this.window.pageYOffset > 900 && this.window.pageYOffset < 2200) {
        $('.lot').addClass('lot-active');
      } else {
        $('.lot').removeClass('lot-active');
      }
    });
  } else if (window.screen.width <= 1200 && window.screen.width >= 993) {
    window.addEventListener('scroll', function() {
      if (this.window.pageYOffset > 600 && this.window.pageYOffset < 1900) {
        $('.lot').addClass('lot-active');
      } else {
        $('.lot').removeClass('lot-active');
      }
    });
  } else if (window.screen.width <= 992 && window.screen.width >= 769) {
    window.addEventListener('scroll', function() {
      if (this.window.pageYOffset > 600 && this.window.pageYOffset < 2200) {
        $('.lot').addClass('lot-active');
      } else {
        $('.lot').removeClass('lot-active');
      }
    });
  } else if (window.screen.width <= 768 && window.screen.width >= 579) {
    window.addEventListener('scroll', function() {
      if (this.window.pageYOffset > 900 && this.window.pageYOffset < 1900) {
        $('.lot').addClass('lot-active');
      } else {
        $('.lot').removeClass('lot-active');
      }
    });
  }
  


  videos.forEach((elem) => {
    elem.src = elem.dataset.src;
    elem.parentElement.load();
  });

  const slides = document.querySelector('.slides');

    var VisibleAb = function (target) {
      // Все позиции элемента
      var targetPosition = {
          top: window.pageYOffset + target.getBoundingClientRect().top,
          left: window.pageXOffset + target.getBoundingClientRect().left,
          right: window.pageXOffset + target.getBoundingClientRect().right,
          bottom: window.pageYOffset + target.getBoundingClientRect().bottom
        },
        // Получаем позиции окна
        windowPosition = {
          top: window.pageYOffset,
          left: window.pageXOffset,
          right: window.pageXOffset + document.documentElement.clientWidth,
          bottom: window.pageYOffset + document.documentElement.clientHeight
        };
    
        if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
          targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
          targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
          targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
          // Если элемент полностью видно, то запускаем следующий код
          slides.classList.add('slides-active');
        } else {
          // Если элемент не видно, то запускаем этот код
          slides.classList.remove('slides-active');
        };
      };

      // Запускаем функцию при прокрутке страницы
    window.addEventListener('scroll', function() {
      if (slides) {
        VisibleAb (slides);
      }
    });
  
    // А также запустим функцию сразу. А то вдруг, элемент изначально видно
    if (slides) {
      VisibleAb (slides);
    }
  
  $('.features-wrap-item').on('click', function() {
    $(this).toggleClass('features-wrap-item-active');
    $(this).children('.features-wrap-item-content').slideToggle(200);
  })
  

  $('.call-callback').on('click', function() {
    $('.overlay').fadeIn(200);
    $('.popup-callback').fadeIn(200);
  });
  $('.close').on('click', function() {
    $('.overlay').fadeOut(200);
    $('.popup').fadeOut(200);
  });
  $('.overlay').on('click', function() {
    $('.overlay').fadeOut(200);
    $('.popup').fadeOut(200);
  });

  
  if (window.screen.width <= 578) { 
    $('.products .woocommerce ul.products').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      centerMode: true,
      centerPadding: '0',
      speed: 300,
      dots: false,
      arrows: false,
      adaptiveHeight: true,
      focusOnSelect: true
    });

  }
  
  if (window.screen.width <= 992) {

    $(window).scroll(function() { 
      if ($(window).scrollTop() > 100) {
        
        $('.mob-header').addClass('mob-header-active');
      } else {
        if ($('.burger').hasClass('burger-active')) {
          $('.mob-header').addClass('mob-header-active');
        } else {
          $('.mob-header').removeClass('mob-header-active');
        }
        
      }
     });

    $('.burger').on('click', function() {

      if ($(window).scrollTop() < 100 && $(this).hasClass('burger-active')) {
        $(this).toggleClass('burger-active');
        $('.mob-header').removeClass('mob-header-active');
        $('.mob-menu').slideToggle(200);
      } else {
        $(this).toggleClass('burger-active');
        $('.mob-header').addClass('mob-header-active');
        $('.mob-menu').slideToggle(200);
      }
      
    });
     
     $('li.menu-item-has-children').hover(function(){
      $(this).addClass('open-ul');
      $(this).children('ul').slideDown(200);
    }, function(){
      $(this).children('ul').slideUp(200);
    });

  } else {
    $('li.menu-item-has-children').hover(function(){
      $(this).addClass('menu-active');
    }, function(){
      $(this).removeClass('menu-active');
    });

    new WOW().init();

      
    }


});