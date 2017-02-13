(function() {
  "use strict";

  angular.module('lowfodmap')
  .service('VisningService', VisningService);

  VisningService.$inject = ['DataService'];
  function VisningService(DataService) {
    var service = this;

    service.getKulhydraterIFoedevare = function(foedevareData) {
      var result = [];
      angular.forEach(foedevareData, function(value, key) {
        if(value === true) {
          result.push(key);
        }
      });
      return result;
    }

    service.getIntoleranceNiveau = function(foedevareData) {
      var intoleranceData = DataService.intoleranceData;
      var kulhydraterIFoedevare = service.getKulhydraterIFoedevare(foedevareData);
      var i=0;
      var result = true;
      while(i < intoleranceData.length && result === true) {
        if(kulhydraterIFoedevare.indexOf(intoleranceData[i]) !== -1) {
            result = false;
        }
      }
      return result;
    }

  }
})();
