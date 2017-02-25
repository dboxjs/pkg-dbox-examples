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

    chart = dbox.chart(config)
        .data({'csv':'app/pkg-dbox-examples/data/heatmap.csv'})
      .layer(dbox.heatmap)
      .end()
        .draw();




  }
})();

