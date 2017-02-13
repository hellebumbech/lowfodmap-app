(function() {
  "use strict";

  angular.module('lowfodmap')
  .service('VisningService', VisningService);

  VisningService.$inject = ['DataService', 'IntoleranceNiveau'];
  function VisningService(DataService, IntoleranceNiveau) {
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
      var i = 0;
      var result = IntoleranceNiveau[1];
      while(i < intoleranceData.length && result == IntoleranceNiveau[1]) {
        if(kulhydraterIFoedevare.indexOf(intoleranceData[i]) !== -1) {
          if(foedevareData.begraensning != null) {
            result = IntoleranceNiveau[3];
          }
          else {
            result = IntoleranceNiveau[2];
          }
        }
        i++;
      }
      return result;
    }

  }
})();
