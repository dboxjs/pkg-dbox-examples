(function() {
  'use strict';

  angular
    .module('dbox')
    .controller('TreemapController', TreemapController);

  /** @ngInject */
  function TreemapController($timeout) {
    var vm = this;

    var config = {
      'bindTo': '#chart',
      'size':{
        'width':960,
        'height':500,
        'margin':{top: 20, right: 20, bottom: 30, left: 40},
      },
      'xAxis':{
        'enabled' : false
      },
      'yAxis': {
        'enabled' : false
      }
    }

    var chart = dbox.chart(config)
                  .data({'tsv':'app/d4pkg-dbox/data/data.tsv'})
                .layer(dbox.treemap)
                  .nestBy('species')
                  .size('sepalLength')
                .end()
                  .draw();




  }
})();

