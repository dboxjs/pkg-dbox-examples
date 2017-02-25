(function() {
  'use strict';

  angular
    .module('dbox')
    .controller('TimelineController', TimelineController);

  /** @ngInject */
  function TimelineController($timeout) {
    var vm = this;

    var config = {
      'bindTo': '#chart',
      'size':{
        'width':960,
        'height':500,
        'margin':{top: 20, right: 20, bottom: 30, left: 40},
      },
      'xAxis':{
        'scale':'time'
      }
    }

    var chart = dbox.chart(config)
                  .data({'tsv':'app/pkg-dbox-examples/data/airbus_data.tsv'})
                .layer(dbox.timeline)
                  .x('date')
                  .series(['Airbus', 'Boeing'])
                  .color('species')
                .end()
                  .draw();




  }
})();

