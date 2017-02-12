(function() {
  "use strict";

  angular.module('lowfodmap')
  .service('VisningService', VisningService);

  VisningService.$inject = ['DataService'];
  function VisningService(DataService) {
    var service = this;
  }
})();
