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
  const presItem = document.querySelectorAll('.present-wrap-item'); 
  const abItem = document.querySelectorAll('.about-right-item'); 

  new fullpage('#fullpage', {
    navigation: true,
    scrollBar: true,
    responsiveWidth: 700,
    /* anchors: ['home', 'about-us', 'contact'], */
    parallax: true,
    onLeave: function(origin, destination, direction){
      presItem.forEach((elem) => {
        elem.classList.remove('present-wrap-item-active');
      });
      abItem.forEach((elem) => {
        elem.classList.remove('about-right-item-active');
      });
    },
    afterLoad: function(origin, destination, direction, slideIndex){
      console.log(destination.index)

        if ( destination.index == 3 ) {
          const aboutItem = document.querySelectorAll('.about-right-item'); 
          aboutItem[2].classList.remove('about-right-item-active');


          aboutItem[0].classList.add('about-right-item-active');

          setTimeout(() => {
          aboutItem[0].classList.remove('about-right-item-active');
          aboutItem[1].classList.add('about-right-item-active');
          }, 4000);
          setTimeout(() => {
          aboutItem[1].classList.remove('about-right-item-active');
          aboutItem[2].classList.add('about-right-item-active');
        }, 8000);
          setTimeout(() => {
          aboutItem[2].classList.remove('about-right-item-active');
          aboutItem[3].classList.add('about-right-item-active');
        }, 11000);
          setTimeout(() => {
          aboutItem[3].classList.remove('about-right-item-active');
          aboutItem[4].classList.add('about-right-item-active');
        }, 14000);
        }
        

        if (destination.index == 2) {
          const presItem = document.querySelectorAll('.present-wrap-item'); 
          presItem[2].classList.remove('present-wrap-item-active');


          presItem[0].classList.add('present-wrap-item-active');

          setTimeout(() => {
          presItem[0].classList.remove('present-wrap-item-active');
          presItem[1].classList.add('present-wrap-item-active');
          }, 3000);
          setTimeout(() => {
          presItem[1].classList.remove('present-wrap-item-active');
          presItem[2].classList.add('present-wrap-item-active');
        }, 6000);
        }
        
    }
  });

  
  new WOW().init();

  
  

});