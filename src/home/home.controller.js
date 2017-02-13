(function() {
  "use strict";

  angular.module('lowfodmap')
  .controller('HomeController', HomeController);

  HomeController.$inject = ['DataService'];
  function HomeController(DataService) {
    var ctrl = this;

    ctrl.intolerance = DataService.getIntolerance();

  }
})();
