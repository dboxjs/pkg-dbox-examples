(function() {
  'use strict';

  angular
    .module('dbox')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('dbox', {
        url: '/dbox',
        templateUrl: 'app/d4pkg-dbox/index.html',
      })
      .state('dbox.bar', {
        url: '/bar',
        templateUrl: 'app/d4pkg-dbox/bar/bar.html',
        controller: 'BarController',
        controllerAs: 'vm'
      })
      .state('dbox.scatter', {
        url: '/scatter',
        templateUrl: 'app/d4pkg-dbox/scatter/scatter.html',
        controller: 'ScatterController',
        controllerAs: 'vm'
      })
      .state('dbox.timeline', {
        url: '/timeline',
        templateUrl: 'app/d4pkg-dbox/timeline/timeline.html',
        controller: 'TimelineController',
        controllerAs: 'vm'
      })
      .state('dbox.heatmap', {
        url: '/heatmap',
        templateUrl: 'app/d4pkg-dbox/heatmap/heatmap.html',
        controller: 'HeatmapController',
        controllerAs: 'vm'
      });


  }

})();
