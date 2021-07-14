jQuery(document).ready(function ($) {
  $.jqplot.config.enablePlugins = true;

  var s1 = [1, 6, 7, 10];
  var ticks = [
  [1, "12:00"], 
  [2, "10:00"], 
  [3, "08:00"], 
  [4, "06:00"], 
  [5, "04:00"],
  [6, "02:00"], 
  [7, "00:00"], 
  [8, "22:00"], 
  [9, "20:00"], 
  [10, "18:00"],
  [11, "16:00"], 
  [12, "14:00"], 
  [13, "12:00"]];
  var botTicks = [
  [1, "Янв."], 
  [2, "Фев."], 
  [3, "Март"], 
  [4, "Апр."], 
  [5, "Май"],
  [6, "Июнь"], 
  [7, "Июль"], 
  [8, "Авг."], 
  [9, "Сент."], 
  [10, "Окт."],
  [11, "Но."], 
  [12, "Дек."]];
  var labels = ["Восход", "Закат", "Полночь"]
  /* 
  [xstart, ystart], [cp1x, cp1y], [cp2x, cp2y], [xend, yend] 
  [xstart, ystart], [cp1x, cp1y, cp2x, cp2y, xend, yend]
  */
  var line1 = [
    [1, 10], [9, 7, 8, 8, 12, 10]
  ];
  var line2 = [
    [1, 3], [4, 6, 8, 8, 12, 3]
  ];
  var none = [0, 0];
 

  plot1 = $.jqplot("chart1", [none, none], {
    animate: true,
    // Will animate plot on calls to plot1.replot({resetAxes:true})
    animateReplot: true,
    title:'Восход / Закат',
    fillBetween: {
      // series1: Required, if missing won't fill.
      series1: [1, 2],
      // series2: Required, if  missing won't fill.
      // color: Optional, defaults to fillColor of series1.
      color: "rgba(227, 167, 111, 0.7)",
      // baseSeries:  Optional.  Put fill on a layer below this series
      // index.  Defaults to 0 (first series).  If an index higher than 0 is
      // used, fill will hide series below it.
      baseSeries: 0,
      // fill:  Optional, defaults to true.  False to turn off fill.
      fill: true
    },
    axesDefaults: {
      labelRenderer: $.jqplot.CanvasAxisLabelRenderer
    },
    seriesDefaults: {renderer:$.jqplot.BezierCurveRenderer},
    legend: {show: true, labels: labels},
    axes:{
      xaxis:{
        ticks: botTicks
      },
      yaxis:{
        ticks: ticks
      }
    },
    renderer:$.jqplot.CanvasAxisTickRenderer, 
    rendererOptions: {
      // set to true to replot when toggling series on/off
      // set to an options object to pass in replot options.
      seriesToggle: 'normal',
      seriesToggleReplot: {resetAxes: true}
  }
         
  });

  const chart1Select = document.querySelector('.calc-city-wrap-input-select select');

  $('.js-select2').on('select2:select', () => {
    $('#chart1 table.jqplot-table-legend').remove();
    $('#chart1 canvas').remove();
    $('#chart1 .jqplot-axis').remove();
    
    plot1 = $.jqplot("chart1", [line1, line2], {
      animate: true,
      // Will animate plot on calls to plot1.replot({resetAxes:true})
      animateReplot: true,
      title:'Восход / Закат',
      fillBetween: {
        // series1: Required, if missing won't fill.
        series1: [1, 2],
        // series2: Required, if  missing won't fill.
        // color: Optional, defaults to fillColor of series1.
        color: "rgba(227, 167, 111, 0.7)",
        // baseSeries:  Optional.  Put fill on a layer below this series
        // index.  Defaults to 0 (first series).  If an index higher than 0 is
        // used, fill will hide series below it.
        baseSeries: 0,
        // fill:  Optional, defaults to true.  False to turn off fill.
        fill: true
      },
      axesDefaults: {
        labelRenderer: $.jqplot.CanvasAxisLabelRenderer
      },
      seriesDefaults: {renderer:$.jqplot.BezierCurveRenderer},
      legend: {show: true, labels: labels},
      axes:{
        xaxis:{
          ticks: botTicks
        },
        yaxis:{
          ticks: ticks
        }
      },
      renderer:$.jqplot.CanvasAxisTickRenderer, 
      rendererOptions: {
        // set to true to replot when toggling series on/off
        // set to an options object to pass in replot options.
        seriesToggle: 'normal',
        seriesToggleReplot: {resetAxes: true}
    }
           
    });
  });

  var blocks = [
    ['01', 5.5],
    ['02', 5.5],
    ['03', 5.5],
    ['04', 5],
    ['05', 4.5],
    ['06', 4.5],
    ['07', 4.5],
    ['08', 4],
    ['09', 1],
    ['10', 1],
    ['11', 1],
    ['12', 1],
    ['13', 2],
    ['14', 4.5],
    ['15', 4.5],
    ['16', 4.5],
    ['17', 4.5]
  ];



  var dimInputs = $('.calc-dim-table-wrap input');


  $(dimInputs).on('change', function() {
    

    var val = $(this).val();

    if (val == 0) {
      blocks[$(dimInputs).index(this)][1] = 0;
    } else if (val != 0 && val <= 10) {
      $(this).val('10');
      blocks[$(dimInputs).index(this)][1] = 1;
    } else if (val >= 11 && val <= 20) {
      $(this).val('20');
      blocks[$(dimInputs).index(this)][1] = 1.5;
    } else if (val >= 21 && val <= 30) {
      $(this).val('30');
      blocks[$(dimInputs).index(this)][1] = 2;
    } else if (val >= 31 && val <= 40) {
      $(this).val('40');
      blocks[$(dimInputs).index(this)][1] = 2.5;
    } else if (val >= 41 && val <= 50) {
      $(this).val('50');
      blocks[$(dimInputs).index(this)][1] = 3;
    } else if (val >= 51 && val <= 60) {
      $(this).val('60');
      blocks[$(dimInputs).index(this)][1] = 3.5;
    } else if (val >= 61 && val <= 70) {
      $(this).val('70');
      blocks[$(dimInputs).index(this)][1] = 4;
    } else if (val >= 71 && val <= 80) {
      $(this).val('80');
      blocks[$(dimInputs).index(this)][1] = 4.5;
    } else if (val >= 81 && val <= 90) {
      $(this).val('90');
      blocks[$(dimInputs).index(this)][1] = 5;
    } else if (val >= 91 && val <= 100) {
      $(this).val('100');
      blocks[$(dimInputs).index(this)][1] = 5.5;
    } 



    $('#chart2 canvas').remove();
      $('#chart2 .jqplot-axis').remove();
      var blockFunc = $('#chart2').jqplot([blocks], {
        animate: true,
        // Will animate plot on calls to plot1.replot({resetAxes:true})
        animateReplot: true,
        title:'Димирование',
        seriesDefaults:{
            renderer:$.jqplot.BarRenderer,
            rendererOptions: {
              smooth: true
          }
        },
        legend: {show: false},
        seriesColors:['#74CADB'],
        axes:{
          xaxis:{
            renderer: $.jqplot.CategoryAxisRenderer,
            ticks: botTicks2,
            pad: 1,
            maxPad: 0
          },
          yaxis:{
            renderer: $.jqplot.CategoryAxisRenderer,
            ticks: ticks2,
            tickOptions: {
              suffix: '%'
            },
            pad: 0,
            maxPad: 0
          }
        },
        highlighter: { show: false }
    });
  });

  var ticks2 = [
    ["20%"], 
    ["40%"],
    ["60%"], 
    ["80%"], 
    ["100%"],];
    var botTicks2 = [
    ["Закат"], 
    ["17"], 
    ["18"], 
    ["19"], 
    ["20"],
    ["21"], 
    ["22"], 
    ["23"], 
    ["00"], 
    [ "01"],
    [ "02"], 
    [ "03"], 
    [ "04"], 
    [ "05"], 
    [ "06"], 
    [ "07"], 
    [ "08"]
  ];

  var blockNone = [0, 0];

  
 
  var blockFunc = $('#chart2').jqplot([blockNone], {
        animate: true,
        // Will animate plot on calls to plot1.replot({resetAxes:true})
        animateReplot: true,
        title:'Димирование',
        seriesDefaults:{
            renderer:$.jqplot.BarRenderer,
            rendererOptions: {
              smooth: true
          }
        },
        legend: {show: false},
        seriesColors:['#74CADB'],
        axes:{
          xaxis:{
            renderer: $.jqplot.CategoryAxisRenderer,
            ticks: botTicks2,
            pad: 1,
            maxPad: 0
          },
          yaxis:{
            renderer: $.jqplot.CategoryAxisRenderer,
            min: 0,
            max: 100,
            ticks: ticks2,
            tickOptions: {
              showGridline: false,
              suffix: '%'
            },
            pad: 0,
            maxPad: 0
          }
        },
        highlighter: { show: false }
    });

    const blockSelect = document.querySelector('.calc-dim-profile select');

    blockSelect.addEventListener('change', () => {

      blocks2 = [
        ['01', 5.5],
        ['02', 5.5],
        ['03', 5.5],
        ['04', 5],
        ['05', 4.5],
        ['06', 4.5],
        ['07', 4.5],
        ['08', 4],
        ['09', 1],
        ['10', 1],
        ['11', 1],
        ['12', 1],
        ['13', 2],
        ['14', 4.5],
        ['15', 4.5],
        ['16', 4.5],
        ['17', 4.5]
      ];


      $('#chart2 canvas').remove();
      $('#chart2 .jqplot-axis').remove();
      var blockFunc2 = $('#chart2').jqplot([blocks2], {
        animate: true,
        // Will animate plot on calls to plot1.replot({resetAxes:true})
        animateReplot: true,
        title:'Димирование',
        seriesDefaults:{
            renderer:$.jqplot.BarRenderer,
            rendererOptions: {
              smooth: true
          }
        },
        legend: {show: false},
        seriesColors:['#74CADB'],
        axes:{
          xaxis:{
            renderer: $.jqplot.CategoryAxisRenderer,
            ticks: botTicks2,
            pad: 1,
            maxPad: 0
          },
          yaxis:{
            renderer: $.jqplot.CategoryAxisRenderer,
            min: 0,
            max: 100,
            ticks: ticks2,
            tickOptions: {
              showGridline: false,
              suffix: '%'
            },
            pad: 0,
            maxPad: 0
          }
        },
        highlighter: { show: false }
      });
    
    });



  $('.add').on('click', function() {
    let newRow = document.createElement('div');
    const rowWrap = document.querySelector('.section-one');

    newRow.classList.add('calc-form-row');
    newRow.innerHTML = `
      <div class="calc-form-row-item">
        <label for="">Тип лампы:</label>
        <div>
          <select name="" id="">
            <option value="1" selected>Светодиодная</option>
            <option value="2">Светодиодная 0-10V</option>
            <option value="3">Светодиодная DALI</option>
          </select>
        </div>
      </div>
      <div class="calc-form-row-item">
        <label for="">Кол-во:</label>
        <div>
          <input type="text" value="1">
        </div>
      </div>
      <div class="calc-form-row-item">
        <label for="">Мощность W:</label>
        <div>
          <input type="text" value="100">
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


  









  

});