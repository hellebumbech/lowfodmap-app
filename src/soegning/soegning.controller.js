(function() {
  'use strict';

  angular.module('lowfodmap')
  .controller('SoegningController', SoegningController);

  SoegningController.$inject = ['SoegningService'];
  function SoegningController(SoegningService) {
    var ctrl = this;

    ctrl.soeg = function() {
      if(ctrl.soegetekst === undefined || ctrl.soegetekst == "") {
        SoegningService.sletListe();
        ctrl.soegeresultat = []
      }
      else {
        SoegningService.getMatchedFoedevarer(ctrl.soegetekst).then(function(response) {
          ctrl.soegeresultat = response;
        });
      }
    }
  }
})();
