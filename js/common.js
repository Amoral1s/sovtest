jQuery(document).ready(function ($) {
  
  const solItem = document.querySelectorAll('.solution-wrap-left-item'),
        solMenu = document.querySelectorAll('.solution-wrap-right-item');

  if (solItem.length > 0) {
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

  const presWrap = document.querySelector('.present-wrap');

  new fullpage('#fullpage', {
    navigation: true,
    responsiveWidth: 700,
    anchors: ['home', 'about-us', 'contact'],
    parallax: true,
    onLeave: function(origin, destination, direction){
       
    },
    afterLoad: function(origin, destination, direction){
        
        console.log(destination.index)

        if (destination.index == 2 && !presWrap.classList.contains('slick-slider')) {
          $('.present-wrap').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 2000,
            infinite: false,
            rtl: false,
            focusOnSelect: false,
            pauseOnFocus: false,
            fade: true,
            cssEase: 'linear'
        }, { once: true });
        }
    }
  });

  

  


});