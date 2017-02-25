(function() {
  'use strict';

  angular
    .module('dbox')
    .controller('TreemapController', TreemapController);

  /** @ngInject */
  function TreemapController($timeout) {
    var vm = this;
    
    var colors = ['#562B4F','#742C6A','#B23733','#DC8933'];

    var config = {
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
    };

    dbox.chart(config)
          .bindTo('#chart1')
          .data({'tsv':'app/pkg-dbox-examples/data/test.tsv'})
        .layer(dbox.treemap)
          .nestBy(['variable','category','subcategory'])
          .size('number')
        .end()
          .draw();
      
    dbox.chart(config)
        .bindTo('#chart2')
        .data({'tsv':'app/pkg-dbox-examples/data/test.tsv'})
      .layer(dbox.treemap)
        .nestBy(['variable','category'])
        .size('number')
        .colorScale(colors)
      .end()
        .draw();
    
    dbox.chart(config)
        .bindTo('#chart3')
        .data({'tsv':'app/pkg-dbox-examples/data/test.tsv'})
    .layer(dbox.treemap)
      .nestBy(['variable'])
      .size('number')
    .end()
      .draw();
  }
})();

