(function() {
  "use strict";

  angular.module('lowfodmap')
  .controller('VisningController', VisningController);

  VisningController.$inject = ['VisningService', 'foedevareData'];
  function VisningController(VisningService, foedevareData) {
    var ctrl = this;
    ctrl.foedevare = foedevareData.navn;
    ctrl.kulhydraterIFoedevare = VisningService.getKulhydraterIFoedevare(foedevareData);
    //ctrl.taalerFoedevare = VisningService.getIntoleranceNiveau(foedevareData);
  }
})();
