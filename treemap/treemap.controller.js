(function() {
  'use strict';

  angular
    .module('dbox')
    .controller('TreemapController', TreemapController);

  /** @ngInject */
  function TreemapController($timeout) {
    var vm = this;

    var config1 = {
      'bindTo': '#chart1',
      'size':{
        'width':600,
        'height':600,
        'margin':{top: 0, right: 0, bottom: 0, left: 0},
      },
      'xAxis':{
        'enabled' : false
      },
      'yAxis': {
        'enabled' : false
      }
    }

    var chart1 = dbox.chart(config1)
        .data({'tsv':'app/d4pkg-dbox/data/test.tsv'})
      .layer(dbox.treemap)
        .nestBy(['variable','category','subcategory'])
        .size('number')
      .end()
      .draw();
      
    var config2 = {
      'bindTo': '#chart2',
      'size':{
        'width':600,
        'height':600,
        'margin':{top: 0, right: 0, bottom: 0, left: 0},
      },
      'xAxis':{
        'enabled' : false
      },
      'yAxis': {
        'enabled' : false
      }
    }
      
    var chart2 = dbox.chart(config2)
        .data({'tsv':'app/d4pkg-dbox/data/test.tsv'})
      .layer(dbox.treemap)
        .nestBy(['variable','category'])
        .size('number')
      .end()
      .draw();
      
    var config3 = {
      'bindTo': '#chart3',
      'size':{
        'width':600,
        'height':600,
        'margin':{top: 0, right: 0, bottom: 0, left: 0},
      },
      'xAxis':{
        'enabled' : false
      },
      'yAxis': {
        'enabled' : false
      }
    }
    
    var chart3 = dbox.chart(config3)
        .data({'tsv':'app/d4pkg-dbox/data/test.tsv'})
      .layer(dbox.treemap)
        .nestBy(['variable'])
        .size('number')
      .end()
      .draw();
  }
})();

