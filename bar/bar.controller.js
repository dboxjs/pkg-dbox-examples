(function() {
  'use strict';

  angular
    .module('dbox')
    .controller('BarController', BarController);

  /** @ngInject */
  function BarController($timeout) {
    var vm = this;

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
  }
})();
