(function() {
  'use strict';

  angular
    .module('dbox')
    .controller('ScatterController', ScatterController);

  /** @ngInject */
  function ScatterController($timeout) {
    var vm = this;


    var config = {
      'bindTo': '#chart',
      'size':{
        'width':960,
        'height':500,
        'margin':{top: 20, right: 20, bottom: 30, left: 40},
      },
      /*'data':{
        'tsv':'app/dbox/data/data.tsv',
        'cartodb':{
          //'raw':dataFromCartoDB,
          'query':'SELECT * FROM d4_total_remitances WHERE '
        },
        'parser':function(d) {
          var n = {};
          n.x = +d.sepalWidth;
          n.y = +d.sepalLength;
          n.color = d.species;
          //n.tooltip = {};
          //n.legend = {};
          return n;
        },
        'mouseover':function(d,i){
          //console.log(d,i)
        }
      }*/
    }

    /*var scatter = dbox.scatter(config);
    scatter.drawAxes = function(){
      var vm = this;

      vm._chart._svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + vm._chart._height + ")")
          .call(vm._axes.x)
        .append("text")
          .attr("class", "label")
          .attr("x", vm._chart._width)
          .attr("y", -6)
          .style("text-anchor", "end")
          .style("fill", "black")
          .text("Sepal Width (cm)");
    };

    scatter.generate();*/



    var config = {
      'bindTo': '#chart',
      'size':{
        'width':960,
        'height':500,
        'margin':{top: 20, right: 20, bottom: 30, left: 40},
      }
    }

    var chart = dbox.chart(config)
                  .data({'tsv':'app/d4pkg-dbox/data/data.tsv'})
                .layer(dbox.scatter)
                  .x('sepalWidth')
                  .y('sepalLength')
                  .color('species')
                .end()
                  .draw();




  }
})();

