jQuery(document).ready(function ($) {

  

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


  if (window.screen.width <= 768) {

    $('.solution-wrap-left').slick({
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
      variableWidth: true,
      focusOnSelect: true
    });
    
  }
  if (window.screen.width <= 578) {

    $('.news-wrap').slick({
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
      variableWidth: true,
      focusOnSelect: true
    });

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

  
  
  if (window.screen.width <= 992) {

    


    const solItemVideo = document.querySelectorAll('.solution-wrap-left-item video source');

      if(solItemVideo.length > 0) {
        solItemVideo.forEach((elem) => {
          elem.src = elem.dataset.src;
          elem.parentElement.load();
        });
      }

      const presentItem = document.querySelectorAll('.present-wrap-item ');

      if (presentItem.length > 0) {
        presentItem[1].remove();
      }
    

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

    const about = document.querySelector('.about');

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
          about.classList.add('about-active');
        } else {
          // Если элемент не видно, то запускаем этот код
          about.classList.remove('about-active');
        };
      };

      // Запускаем функцию при прокрутке страницы
    window.addEventListener('scroll', function() {
      VisibleAb (about);
    });
  
    // А также запустим функцию сразу. А то вдруг, элемент изначально видно
    VisibleAb (about);


  } else {
    $('li.menu-item-has-children').hover(function(){
      $(this).addClass('menu-active');
    }, function(){
      $(this).removeClass('menu-active');
    });

    new WOW().init();

    const solItem = document.querySelectorAll('.solution-wrap-left-item'),
          solMenu = document.querySelectorAll('.solution-wrap-right-item');

    if (solItem.length > 0) {
      const solItemVideo = document.querySelectorAll('.solution-wrap-left-item video source');

      solItemVideo.forEach((elem) => {
        elem.src = elem.dataset.src;
        elem.parentElement.load();
      });
      solMenu.forEach((elem, i) => {
        elem.addEventListener('click', () => {
          solMenu.forEach((e) => {
            e.classList.remove('solution-wrap-right-item-active');
          });
          elem.classList.add('solution-wrap-right-item-active');

          solItem.forEach((e) => {
            e.classList.remove('solution-wrap-left-item-active');
          });

          solItem[i].classList.add('solution-wrap-left-item-active');
        });
      });
      
    }

    const offer = document.querySelector('.offer');
    const present = document.querySelector('.present');
    const about = document.querySelector('.about');
  
    // Получаем нужный элемент
  var element = document.querySelector('.present-wrap');
  
  var Visible = function (target) {
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
        element.classList.add('present-active');
      } else {
        // Если элемент не видно, то запускаем этот код
        element.classList.remove('present-active');
      };
    };
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
        about.classList.add('about-active');
      } else {
        // Если элемент не видно, то запускаем этот код
        about.classList.remove('about-active');
      };
    };
  
    // Запускаем функцию при прокрутке страницы
    window.addEventListener('scroll', function() {
      Visible (element);
      VisibleAb (about);
    });
  
    // А также запустим функцию сразу. А то вдруг, элемент изначально видно
    Visible (element);
    VisibleAb (about);
  }

});