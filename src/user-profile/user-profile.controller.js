(function() {
  "use strict";

  angular.module('lowfodmap')
  .controller('UserProfileController', UserProfileController);

  UserProfileController.$inject = ['DataService'];
  function UserProfileController(DataService) {
    var ctrl = this;

    ctrl.taalerJegfruktose = function() {
      var result = true;
      var i=0
      while(result == true && i < DataService.intoleranceData.length) {
        if(DataService.intoleranceData[i].sukkerstof.toLowerCase() == 'fruktose') {
          result = DataService.intoleranceData[i].intolerance != true;
        }
        i++;
      }
      return result;
    }

    ctrl.intolerance = DataService.getIntolerance();

  }
})();
