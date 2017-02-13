(function() {
  'use strict';

  angular.module('lowfodmap')
  .controller('SoegningController', SoegningController);

  SoegningController.$inject = ['foedevareListe'];
  function SoegningController(foedevareListe) {
    var ctrl = this;
    ctrl.foedevareListe = foedevareListe;
  }
})();
