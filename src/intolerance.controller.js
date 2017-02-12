(function() {
  "use strict";

  angular.module('lowfodmap')
  .controller('IntoleranceController', IntoleranceController);

  IntoleranceController.$inject = ['DataService', 'kulhydrattyper'];
  function IntoleranceController(DataService, kulhydrattyper) {
    var ctrl = this;

    ctrl.kulhydrattyper = kulhydrattyper;

    ctrl.submit = function(kulhydrattyper) {
      DataService.gemIntoleranceData(kulhydrattyper);
    }
  }
})();
