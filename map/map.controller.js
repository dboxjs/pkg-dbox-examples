(function() {
  'use strict';

  angular
    .module('dbox')
    .controller('MapController', MapController);

  /** @ngInject */
  function MapController($timeout) {
    var vm = this;


    /*d3.csv('app/pkg-dbox-examples/map/map.csv', function(d){
      d.indigenaV = isNaN(d.indigena) ? 0 : +d.indigena;
      d.afroV = isNaN(d.afro) ? 0 : +d.afro;
      d.restoV = isNaN(d.resto) ? 0 : +d.resto;
      d.datumAsArray = [d.indigenaV, d.afroV, d.restoV];
      d.id = d.inegi;
      return d;
    }, function(data){
      vm.data = data;

      var config = {
        'bindTo': '#map',
        'size': {
          'width': angular.element('#map-wrapper')[0].offsetWidth,
          'height': 590,
          'margin': {top: 0, right: 0, bottom: 0, left: 50},
          'translateX': 45,
          'scale': 1.3
        },
        'xAxis': { enabled: false },
        'yAxis': { enabled: false },
        'plotOptions': {
          'map': {
            'geo': 'mexico',
            'geoDivision': 'municipalities'
          }
        },
        'events': {
          'load': function(chart) {

          }
        }
      }

      vm.map = dbox.chart(config)
        .data({ 'raw': vm.data })
        .layer(dbox.map)
          .z('datumAsArray')
          .onclick(function(d, i) {
            console.log(d,i)
            $timeout(function(){

              if(d.datum.restoV <= 10){
                vm.restoValue = 0;
              }else if(d.datum.restoV <= 20){
                vm.restoValue = 10;
              }else if(d.datum.restoV <= 30){
                vm.restoValue = 20;
              }else if(d.datum.restoV <= 40){
                vm.restoValue = 30;
              }else if(d.datum.restoV <= 50){
                vm.restoValue = 40;
              }else if(d.datum.restoV <= 60){
                vm.restoValue = 50;
              }else if(d.datum.restoV <= 70){
                vm.restoValue = 60;
              }else if(d.datum.restoV <= 80){
                vm.restoValue = 70;
              }else if(d.datum.restoV <= 90){
                vm.restoValue = 80;
              }else if(d.datum.restoV <= 100){
                vm.restoValue = 90;
              }
              vm.filteredData = filterData();
              reColorMap();
              generateHeatmap();

              vm.slider.update({from: vm.restoValue});

              $scope.$apply(function(){
                if(vm.selectedMunicipality != d && d.datum){
                  vm.selectedMunicipality = d;
                  vm.map._svg.selectAll("#map path[data-geotype=\"municipalities\"]")
                  .attr('stroke', function(d){
                    if(d.id === vm.selectedMunicipality.id) {
                      d3.select(this).moveToFront();
                      return '#ff0000';
                    }else{
                      d3.select(this).moveToBack();
                      return '#a0a0a0';
                    }
                  });
                }

              });
            },0);
          })
          .tip(function(d) {
            $timeout(function(){
              $scope.$apply(function(){
                if(d.datum){
                  vm.selectedMunicipality = d;
                  vm.map._svg.selectAll("#map path[data-geotype=\"municipalities\"]")
                  .attr('stroke', function(d){
                    if(d.id === vm.selectedMunicipality.id) {
                      d3.select(this).moveToFront();
                      return '#ff0000';
                    }else{
                      d3.select(this).moveToBack();
                      return '#a0a0a0';
                    }
                  })
                }else{
                  vm.selectedMunicipality = undefined;
                }

                vm.selectState();
              });
            });
            var name = d.properties.NOM_MUN;
            return name;
          })
        .end()
        .draw();

    }*/

    d3.select("#code").select("code")
      .each(function(d) {
        var code = d3.select(this);
          d3.text("/app/pkg-dbox-examples/map/map.code.html", function(error, content) {
            if (error) content = "Sorry, an error occurred.";
            code.text(content);
            hljs.highlightBlock(code.node());
          });
        })
    /*d3.select("#data").select("code")
      .each(function(d) {
        var code = d3.select(this);
          d3.text("/app/pkg-dbox-examples/scatter/scatter.data.tsv", function(error, content) {
            if (error) content = "Sorry, an error occurred.";
            code.html(content);
          });
        })
    */


  }
})();

