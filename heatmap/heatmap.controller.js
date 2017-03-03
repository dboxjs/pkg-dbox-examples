(function() {
  'use strict';

  angular
    .module('dbox')
    .controller('HeatmapController', HeatmapController);

  /** @ngInject */
  function HeatmapController($timeout) {
    var vm = this;
    var config,chart;

    config = {
      'bindTo': '#chart',
      'size':{
        'width':960,
        'height':500,
        'margin':{top: 20, right: 20, bottom: 30, left: 40},
      },
      'xAxis':{
        'enabled':false
      },
      'yAxis':{
        'enabled':false
      }
    }

    console.log(["12", "13", "14", "15", "16", "17"].reverse())

    chart = dbox.chart(config)
        .data({'csv':'app/components/heatmap/heatmap.csv'})
      .layer(dbox.heatmap)
        .x(["12", "13", "14", "15", "16", "17", "18","19","20","21","22","23","24","25","26+"])
        .y(["12", "13", "14", "15", "16", "17"].reverse())
        .colors(['#e2b136','#d79435', '#b03735','#7f2e60','#622b59'])
      .end()
        .draw();




  }
})();

