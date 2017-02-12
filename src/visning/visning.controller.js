(function() {
  "use strict";

  angular.module('lowfodmap')
  .controller('VisningController', VisningController);

  VisningController.$inject = ['VisningService', 'foedevare'];
  function VisningController(VisningService, foedevare) {
    var ctrl = this;
  }
})();
