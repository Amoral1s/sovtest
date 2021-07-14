jQuery(document).ready(function ($) {
  
  const select = document.querySelector('.calc-city-wrap-input-select select.js-select2'),
        latitude = document.querySelector('.latitude'),
        longitude = document.querySelector('.longitude'),
        sunset = document.querySelector('.sunset'),
        sunrise = document.querySelector('.sunrise');
  
  $.ajax({
    url: "../city/city.csv",
    async: false,
    success: function (csv) {
        data = $.csv.toObjects(csv);
    },
    dataType: "text",
    complete: function () {
        // call a function on complete 
    }
  });


  data.forEach((elem, i) => {
    let newOption = document.createElement('option');
    newOption.value = i;
    newOption.dataset.latitude = elem['geo_lat'];
    newOption.dataset.longitude = elem['geo_lon'];
    newOption.dataset.sunset = elem['timezone'];
    newOption.textContent = elem['address'];
    select.appendChild(newOption);
  });

  

  $('.js-select2').select2({
		placeholder: "Выберите город",
		maximumSelectionLength: 2,
		language: "ru"
	});
  

  $('.js-select2').on('select2:select', () => {
    

    var times = SunCalc.getTimes(new Date(), 
    select.options[select.selectedIndex].dataset.latitude, 
    select.options[select.selectedIndex].dataset.longitude);

    var timesSunrise = (times.sunrise.getHours()<10?'0':'') 
    + times.sunrise.getHours() 
    + ':' + (times.sunrise.getMinutes()<10?'0':'') 
    +  times.sunrise.getMinutes();

    var timesSunset = times.sunset.getHours() 
    + (times.sunset.getHours()<10?'0':'') 
    + ':' + (times.sunset.getMinutes()<10?'0':'') 
    +  times.sunset.getMinutes();

    latitude.textContent = select.options[select.selectedIndex].dataset.latitude;
    longitude.textContent = select.options[select.selectedIndex].dataset.longitude;
    sunset.textContent = timesSunset;
    sunrise.textContent = timesSunrise;

    console.log('select change')

  });


 
  
  

});
