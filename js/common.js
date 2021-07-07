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

  new fullpage('#fullpage', {
    navigation: true,
    responsiveWidth: 700,
    anchors: ['home', 'about-us', 'contact'],
    parallax: true,
    onLeave: function(origin, destination, direction){
      presItem[2].classList.remove('present-wrap-item-active');
       
    },
    afterLoad: function(origin, destination, direction){
        
        console.log(destination.index)

        if (destination.index == 2 && !presWrap.classList.contains('slick-slider')) {
         
        const presItem = document.querySelectorAll('.present-wrap-item'); 
        presItem[2].classList.remove('present-wrap-item-active');


        presItem[0].classList.add('present-wrap-item-active');

        setTimeout(() => {
        presItem[0].classList.remove('present-wrap-item-active');
        presItem[1].classList.add('present-wrap-item-active');
        }, 1500);
        setTimeout(() => {
        presItem[1].classList.remove('present-wrap-item-active');
        presItem[2].classList.add('present-wrap-item-active');
        }, 4000);
        }
    }
  });

  

  
  new WOW().init();

  


});