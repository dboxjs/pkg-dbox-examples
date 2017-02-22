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
        templateUrl: 'app/dbox/index.html',
      })
      .state('dbox.bar', {
        url: '/bar',
        templateUrl: 'app/dbox/bar/bar.html',
        controller: 'BarController',
        controllerAs: 'vm'
      })
      .state('dbox.scatter', {
        url: '/scatter',
        templateUrl: 'app/dbox/scatter/scatter.html',
        controller: 'ScatterController',
        controllerAs: 'vm'
      })
      .state('dbox.timeline', {
        url: '/timeline',
        templateUrl: 'app/dbox/timeline/timeline.html',
        controller: 'TimelineController',
        controllerAs: 'vm'
      });


  }

})();
