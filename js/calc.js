jQuery(document).ready(function ($) {

  const select = document.querySelector('.calc-city-wrap-input-select select.js-select2'),
        latitude = document.querySelector('.latitude'),
        longitude = document.querySelector('.longitude'),
        textsunset = document.querySelector('.sunset'),
        textsunrise = document.querySelector('.sunrise');
  
  $.ajax({
    /* url: "../city/city.csv", */
    url: "https://amoral1s.github.io/sovtest/city/city.csv",
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
    if (i == 0) {
      let newOption2 = document.createElement('option');
      newOption2.value = 'none val';
      newOption2.classList.add('pointer-events');
      newOption2.dataset.latitude = 0.00;
      newOption2.dataset.longitude = 0.00;
      newOption2.dataset.sunset = elem['timezone'];
      newOption2.textContent = 'Выберите город';
      select.appendChild(newOption2);

      let newOption = document.createElement('option');
      newOption.value = i;
      newOption.dataset.latitude = elem['geo_lat'];
      newOption.dataset.longitude = elem['geo_lon'];
      newOption.dataset.sunset = elem['timezone'];
      newOption.textContent = elem['address'];
      select.appendChild(newOption);


    } else {
      let newOption = document.createElement('option');
      newOption.value = i;
      newOption.dataset.latitude = elem['geo_lat'];
      newOption.dataset.longitude = elem['geo_lon'];
      newOption.dataset.sunset = elem['timezone'];
      newOption.textContent = elem['address'];
      select.appendChild(newOption);
    }
    
  });

  

  $('.js-select2').select2({
		placeholder: "Выберите город",
		maximumSelectionLength: 2,
		language: "ru"
	});

  var chartSun;
  var times = SunCalc.getTimes(new Date());
  var currentdate = new Date();
  var chart_data = {
    "zero": [[currentdate.getFullYear()+"-01-01",0], [currentdate.getFullYear()+"-12-31",0]], 
    "sunset": [[currentdate.getFullYear()+"-01-01", 0], [currentdate.getFullYear()+"-6-31", 0], [currentdate.getFullYear()+"-12-31", 0]], 
    "sunrise": [[currentdate.getFullYear()+"-01-01", 0], [currentdate.getFullYear()+"-6-31", 0], [currentdate.getFullYear()+"-12-31", 0]]
  };
  /* var chart_data = {
    "zero": [[currentdate.getFullYear()+"-01-01",0], [currentdate.getFullYear()+"-12-31",0]], 
    "sunset": [[currentdate.getFullYear()+"-01-01", 500], [currentdate.getFullYear()+"-6-31", 200], [currentdate.getFullYear()+"-12-31", 500]], 
    "sunrise": [[currentdate.getFullYear()+"-01-01", -500], [currentdate.getFullYear()+"-6-31", -200], [currentdate.getFullYear()+"-12-31", -500]]
  }; */
  /*ticks: [
    ['-1200', '12:00'], 
    ['-1100', '11:00'], 
    ['-1000', '10:00'], 
    ['-900', '09:00'], 
    ['-800', '08:00'], 
    ['-700', '07:00'], 
    ['-600', '06:00'], 
    ['-500', '05:00'], 
    ['-400', '04:00'], 
    ['-300', '03:00'], 
    ['-200', '02:00'], 
    ['-100', '01:00'], 
    ['0', '00:00'], 
    ['100', '23:00'], 
    ['200', '22:00'], 
    ['300', '21:00'], 
    ['400', '20:00'], 
    ['500', '19:00'], 
    ['600', '18:00'], 
    ['700', '17:00'], 
    ['800', '16:00'], 
    ['900', '15:00'], 
    ['1000', '14:00'], 
    ['1100', '13:00'], 
    ['1200', '12:00']],*/
  var timesSunrise;
  var timesSunset;
  var sunriseTable;
  var sunsetTable;
  var times;
  let sunrise;
  let sunset;

  $('.js-select2').on('select2:select', () => {

    times = SunCalc.getTimes(new Date(), 
    select.options[select.selectedIndex].dataset.latitude, 
    select.options[select.selectedIndex].dataset.longitude);

    sunrise = times.sunrise.getHours();
    sunset = times.sunset.getHours();

    sunriseTable = -120;

    if (times.sunrise.getHours() == 0) {
      sunriseTable = 0;
    } else if (times.sunrise.getHours() == 1) {
      sunriseTable = -60;
    } else if (times.sunrise.getHours() == 2) {
      sunriseTable = -120;
    } else if (times.sunrise.getHours() == 3) {
      sunriseTable = -180;
    } else if (times.sunrise.getHours() == 4) {
      sunriseTable = -240;
    } else if (times.sunrise.getHours() == 5) {
      sunriseTable = -300;
    } else if (times.sunrise.getHours() == 6) {
      sunriseTable = -360;
    } else if (times.sunrise.getHours() == 7) {
      sunriseTable = -420;
    } else if (times.sunrise.getHours() == 8) {
      sunriseTable = -480;
    } else if (times.sunrise.getHours() == 9) {
      sunriseTable = -540;
    } else if (times.sunrise.getHours() == 10) {
      sunriseTable = -600;
    }
    
    sunsetTable = 120;

    if (times.sunset.getHours() == 0) {
      sunsetTable = 0;
    } else if (times.sunset.getHours() == 23) {
      sunsetTable = 60;
    } else if (times.sunset.getHours() == 22) {
      sunsetTable = 120;
    } else if (times.sunset.getHours() == 21) {
      sunsetTable = 180;
    } else if (times.sunset.getHours() == 20) {
      sunsetTable = 240;
    } else if (times.sunset.getHours() == 19) {
      sunsetTable = 300;
    } else if (times.sunset.getHours() == 18) {
      sunsetTable = 360;
    } else if (times.sunset.getHours() == 17) {
      sunsetTable = 420;
    } else if (times.sunset.getHours() == 16) {
      sunsetTable = 480;
    } else if (times.sunset.getHours() == 15) {
      sunsetTable = 540;
    } else if (times.sunset.getHours() == 14) {
      sunsetTable = 600;
    } else if (times.sunset.getHours() == 13) {
      sunsetTable = 660;
    } else if (times.sunset.getHours() == 12) {
      sunsetTable = 720;
    }

    /* ['-720', '12:00'], ['-600', '10:00'], ['-480', '08:00'], ['-360', '06:00'], ['-240', '04:00'], ['-120', '02:00'], ['0', '00:00'], ['120', '22:00'], ['240', '20:00'], ['360', '18:00'], ['480', '16:00'], ['600', '14:00'], ['720', '12:00'] */

    


    
    chart_data["sunset"] = [
      [currentdate.getFullYear()+"-01-01", +sunsetTable], 
      [currentdate.getFullYear()+"-6-31", +(+sunsetTable / 2)], 
      [currentdate.getFullYear()+"-12-31", +sunsetTable]];

    chart_data["sunrise"] = [
      [currentdate.getFullYear()+"-01-01", +sunriseTable], 
      [currentdate.getFullYear()+"-6-31", +sunriseTable / 2], 
      [currentdate.getFullYear()+"-12-31", +sunriseTable]];

      
   

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
    textsunset.textContent = timesSunset;
    textsunrise.textContent = timesSunrise;

    /* chart_data["sunset"] = +timesSunset;
    chart_data["sunrise"] = +timesSunrise; */
    /* console.log(timesSunset)
    console.log(sunsetTable)
    console.log(timesSunrise)
    console.log(sunriseTable)
    console.log(times.sunrise.getHours()) */
      
    

    
    drawChartSun();
    dimmging();
  });





function drawChartSun()
{
	jQuery(document).ready(function($)
	{
		if (chartSun)
			chartSun.destroy();

		chartSun = $.jqplot('chart1', [chart_data["zero"], chart_data["sunset"], chart_data["sunrise"]], {
			title:'Восход / Закат',
			animate : true,
			seriesDefaults: {
				//color: '#09c',
				showMarker: false,
				//fill: true,
				rendererOptions: {
					smooth: true,
				},
				shadow: false,
				lineWidth: 4
			},

			seriesColors:['#000000', '#6DA4EF', '#FFCC33'],
			series: [
					{lineWidth: 1}
			],

			legend: {
				show: true,
				placement: 'outsideGrid',
				labels: ['Полночь', 'Закат', 'Восход'],
				location: 'ne',
				rowSpacing: '0px'
			},

			grid: {
				borderWidth: 1.0,
				shadow: false,
			},

			fillBetween: {
        // series1: Required, if missing won't fill.
        series1: [1, 2],
        // series2: Required, if  missing won't fill.
        series2: [2, 1],
        // color: Optional, defaults to fillColor of series1.
        color: "#6DA4EF",
        // baseSeries:  Optional.  Put fill on a layer below this series
        // index.  Defaults to 0 (first series).  If an index higher than 0 is
        // used, fill will hide series below it.
        baseSeries: 1,
        // fill:  Optional, defaults to true.  False to turn off fill.
        fill: true
			},

/*			fillBetween: {
				series1: 2,
				series2: 0,
				//color: "rgba(227, 167, 111, 0.7)",
				baseSeries: 0,
				fill: true
			},*/

			axes:{
				xaxis:{
					renderer:$.jqplot.DateAxisRenderer,
					tickOptions:{formatString:'%b'},
					tickInterval:'1 month',
					pad: 0,
					padMin: 0,
					padMax: 0,
				},

				yaxis:{
					//ticks: [['-1200', '12:00'], ['-1100', '11:00'], ['-1000', '10:00'], ['-900', '09:00'], ['-800', '08:00'], ['-700', '07:00'], ['-600', '06:00'], ['-500', '05:00'], ['-400', '04:00'], ['-300', '03:00'], ['-200', '02:00'], ['-100', '01:00'], ['0', '00:00'], ['100', '23:00'], ['200', '22:00'], ['300', '21:00'], ['400', '20:00'], ['500', '19:00'], ['600', '18:00'], ['700', '17:00'], ['800', '16:00'], ['900', '15:00'], ['1000', '14:00'], ['1100', '13:00'], ['1200', '12:00']],
					ticks: [['-720', '12:00'], ['-600', '10:00'], ['-480', '08:00'], ['-360', '06:00'], ['-240', '04:00'], ['-120', '02:00'], ['0', '00:00'], ['120', '22:00'], ['240', '20:00'], ['360', '18:00'], ['480', '16:00'], ['600', '14:00'], ['720', '12:00']],
					pad: 0,
					padMin: 0,
					padMax: 0,
					rendererOptions: { forceTickAt0: true },
					//tickInterval:'1 hour',
					//autoscale: false
				},

			},

/*			canvasOverlay: {
				show: true,
				objects: [
					{horizontalLine: {
						name: 'zero',
						y: 0,
						lineWidth: 1,
						color: 'rgb(0, 0, 0)',
						shadow: false,
						lineCap: 'butt',
						xOffset: 0
					}},
				]
			},*/

//series:[{lineWidth:0.5}]
		});

//console.log(chart_data);
		//plot1.drawSeries();
		//plot1.replot();
	});
}
drawChartSun();


const dimSelect = document.querySelector('select.dim-profile');



var dimm_data = [
  ['00', 100], 
  ['01', 100], 
  ['02', 100], 
  ['03', 90], 
  ['04', 80], 
  ['05', 80], 
  ['06', 60], 
  ['07', 50], 
  ['08', 50], 
  ['09', 90], 
  ['10', 90],
  ['11', 90],
  ['12', 90],
  ['13', 90],
  ['14', 90],
  ['15', 90],
  ['16', 90],
  ['17', 90],
  ['18', 90],
  ['19', 90],
  ['20', 90],
  ['21', 90],
  ['22', 90],
  ['23', 90]
];

dimSelect.addEventListener('change', () => {
  dimmging();
});

const dimInpFor = document.querySelectorAll('.dimming');

  dimInpFor.forEach((elem, i) => {
    dimm_data[i][1] = elem.value;
  });

function dimmging() {
  

  dimm_data[sunrise][0] = 'Рассвет';
  dimm_data[sunset][0] = 'Закат';
  

  for (let i = 0; i < dimm_data.length; i++) {
    
    
    if (i > sunrise && i < sunset) {
      if (i < (sunset - sunrise) / 2) {
        dimm_data[i][1] = 0;
      } 
      
    } 

    if (dimSelect.value == 1) { //Интенсивнй режим
      if (i == sunset) {
        dimm_data[i][1] = 100;
      } 
      if (i == sunset + 1) {
        dimm_data[i][1] = 100;
      }
      if (i == sunset + 2) {
        dimm_data[i][1] = 80;
      }
      if (i == sunset + 3) {
        dimm_data[i][1] = 80;
      }
      if (i == sunset + 4) {
        dimm_data[i][1] = 80;
      }
      if (i == sunrise - 1) {
        dimm_data[i][1] = 100;
      } 
      if (i == sunrise) {
        dimm_data[i][1] = 100;
      }
      if (i == sunrise + 1) {
        dimm_data[i][1] = 0;
      }
      if (i == sunrise - 1) {
        dimm_data[i][1] = 100;
      }
      if (i == sunrise - 2) {
        dimm_data[i][1] = 80;
      }
      if (i == sunrise - 3) {
        dimm_data[i][1] = 80;
      }
      if (i == sunrise - 4) {
        dimm_data[i][1] = 80;
      }
    } 
    else if (dimSelect.value == 2) { //Сбалансированый режим
      if (i == sunset) {
        dimm_data[i][1] = 70;
      } 
      if (i == sunset + 1) {
        dimm_data[i][1] = 80;
      }
      if (i == sunset + 2) {
        dimm_data[i][1] = 100;
      }
      if (i == sunset + 3) {
        dimm_data[i][1] = 100;
      }
      if (i == sunset + 4) {
        dimm_data[i][1] = 100;
      }
      if (i == sunrise - 1) {
        dimm_data[i][1] = 100;
      } 
      if (i == sunrise) {
        dimm_data[i][1] = 100;
      }
      if (i == sunrise + 1) {
        dimm_data[i][1] = 0;
      }
      if (i == sunrise - 1) {
        dimm_data[i][1] = 80;
      }
      if (i == sunrise - 2) {
        dimm_data[i][1] = 50;
      }
      if (i == sunrise - 3) {
        dimm_data[i][1] = 60;
      }
      if (i == sunrise - 4) {
        dimm_data[i][1] = 80;
      }
    }
    else if (dimSelect.value == 3) { //Экономичный режим
      if (i == sunset) {
        dimm_data[i][1] = 50;
      } 
      if (i == sunset + 1) {
        dimm_data[i][1] = 60;
      }
      if (i == sunset + 2) {
        dimm_data[i][1] = 100;
      }
      if (i == sunset + 3) {
        dimm_data[i][1] = 50;
      }
      if (i == sunset + 4) {
        dimm_data[i][1] = 50;
      }
      if (i == sunrise - 1) {
        dimm_data[i][1] = 70;
      } 
      if (i == sunrise) {
        dimm_data[i][1] = 80;
      }
      if (i == sunrise + 1) {
        dimm_data[i][1] = 0;
      }
      if (i == sunrise - 2) {
        dimm_data[i][1] = 70;
      }
      if (i == sunrise - 3) {
        dimm_data[i][1] = 50;
      }
      if (i == sunrise - 4) {
        dimm_data[i][1] = 40;
      }
      if (i == sunrise - 5) {
        dimm_data[i][1] = 40;
      }
    }

  }

  dimInpFor.forEach((elem, i) => {
    elem.value = dimm_data[i][1];
  });

  drawDimmChart();
  /* calculating(); */
}


var chartDimm;



var ticks2 = [
  ["0", 0], 
  ["20", 20], 
  ["40", 40],
  ["60", 60], 
  ["80", 80], 
  ["100", 100]
];

  

var dimInputs = $('.calc-dim-table-wrap input');


  $(dimInputs).on('change', function() {
    

    var val = $(this).val();

    dimm_data[$(dimInputs).index(this)][1] = $(this).val();

    drawDimmChart();
    /* calculating(); */

  });

function drawDimmChart()
{
	jQuery(document).ready(function($)
	{
		//empty results
		$.each($('.saving-result'), function(){
			$(this).html('0');
		})

		//console.log(dimm_data);
		
		if (chartDimm)
			chartDimm.destroy();

		chartDimm = $.jqplot('chart2', [dimm_data], {
			title:'Диммирование',
			/* animate : true, */
			seriesDefaults: {
				rendererOptions: {
					smooth: true,
					barPadding: 0,
					barMargin: 0,

				},
				renderer:$.jqplot.BarRenderer,
			},
      seriesColors:['#74CADB'],
			axes:{
				xaxis:{
					renderer:$.jqplot.CategoryAxisRenderer,
				},

				yaxis:{
          ticks: ticks2,
					max: 100,
					tickOptions:{
						suffix: '%',
					},
				}
			},

		});
	});
}

drawDimmChart();

$('.add').on('click', function() {
  let newRow = document.createElement('div');
  const rowWrap = document.querySelector('.section-one');

  newRow.classList.add('calc-form-row');
  newRow.innerHTML = `
    <div class="calc-form-row-item">
      <label for="">Тип лампы:</label>
      <div>
        <select name="" id="">
          <option value="2" selected>Светодиодная 1-10 V</option>
          <option value="1" >Светодиодная UART</option>
          <option value="3">Светодиодная DALI</option>
        </select>
      </div>
    </div>
    <div class="calc-form-row-item">
      <label for="">Кол-во:</label>
      <div>
        <input type="text" class="lamp-count" value="1">
      </div>
    </div>
    <div class="calc-form-row-item">
      <label for="">Мощность W:</label>
      <div>
        <input type="text" class="lamp-wt" value="100">
      </div>
    </div>
    <div class="calc-form-row-item btn-item">
      <div class="button alt-btn remove">
        Удалить
      </div>
    </div>`

  rowWrap.appendChild(newRow);

  const rowDelete = document.querySelectorAll('.section-one .calc-form-row');

  rowDelete.forEach((elem) => {
    const btn = elem.querySelector('.button');
    btn.addEventListener('click', () => {
      if (!btn.parentElement.parentElement.classList.contains('no-del')) {
        btn.parentElement.parentElement.remove();
      }
    });
  })

});


$('.calc-eco-btn .button').on('click', function () { 
  calculating();
  if ($(this).text() == 'Рассчитать повторно') {
    $('.calc-eco-slide').slideUp(200);
    $('.calc-eco-text').slideUp(200);
    setTimeout(() => {
      $('.calc-eco-slide').slideDown(200);
      $('.calc-eco-text').slideDown(200);
    }, 500);
  } else {
    $(this).text('Рассчитать повторно');
    $('.calc-eco-slide').slideDown(200);
    $('.calc-eco-text').slideDown(200);
  }
  
});

const zadMinus = document.querySelector('.zad-minus'),
zadPlus = document.querySelector('.zad-plus');



zadPlus.addEventListener('change', () => {
if (zadPlus.value == 1) {
sunset += 1;
} else if (zadPlus.value == 2) {
sunset += 2;
} else if (zadPlus.value == 3) {
sunset += 3;
}
dimmging();

});
zadMinus.addEventListener('change', () => {
if (zadMinus.value == 1) {
sunrise += 1;
} else if (zadMinus.value == 2) {
sunrise += 2;
} else if (zadMinus.value == 3) {
sunrise += 3;
}
dimmging();
});



function calculating() { 
  let lampArr = [];
  let lampCounts = 0;
  const lampRow = document.querySelectorAll('.calc-form-row'); // Строка с лампами

  //сбор данных с ламп
  lampRow.forEach((elem) => {
    let lampCount = elem.querySelector('.lamp-count'),
        lampWT = elem.querySelector('.lamp-wt');
    let elemArr = [lampCount.value, lampWT.value];
    lampArr.push(elemArr);
  });

  //ВТ в час ламп без экономии
  let lampArrResult = 0; // все лампы в час ВТ
  for (let i = 0; i < lampArr.length; i ++) {
    lampArrResult += lampArr[i][0] * lampArr[i][1]; // 1 лампа в час ВТ
  }
  //расчет экономии ламп 
  let resultECO24 = 0; // сколько ватт в 24 часа с экономией

  for (let i = 0; i < dimm_data.length; i++) {

    resultECO24 += Math.round(lampArrResult / 100 * dimm_data[i][1]); // 2400 = 100% загрузка одной лампы
    
  }

  let resultLamp24 = Math.round(lampArrResult * 24);

  let resultLamp365 = resultLamp24 * 365 / 1000 / 2;
  let resultECO365 = resultECO24 * 365 / 1000;


  //Вывод значений
  const textWithOut = document.querySelector('.with-st'),
        textWith = document.querySelector('.without-st'),
        textPersent = document.querySelector('.res-persent'),
        textKw = document.querySelector('.res-kw'),
        textMoney = document.querySelector('.res-money'),
        textCO2 = document.querySelector('.res-co'),
        textThree = document.querySelector('.res-three');
  
  const calcKw = document.querySelector('.calc-kw input');

  textWithOut.textContent = Math.round(resultLamp365);
  textWith.textContent = Math.round(resultECO365);
  textPersent.textContent = Math.round((resultLamp365 - resultECO365) / resultLamp365 * 100);
  textKw.textContent =  Math.round(resultLamp365 - resultECO365);
  textMoney.textContent = Math.round(resultECO365 * calcKw.value);
  textCO2.textContent = Math.round(resultECO365 / 1177);
  textThree.textContent = Math.round(resultECO365 / 87);

  

}

	



  

});