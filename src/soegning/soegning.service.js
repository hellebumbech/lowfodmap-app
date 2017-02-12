(function() {
  "use strict";

  angular.module('lowfodmap')
  .service('SoegningService', SoegningService);

  SoegningService.$inject = ['DataService'];
  function SoegningService(DataService) {
    var service = this;

    var soegeresultat = []

    service.getMatchedFoedevarer = function (soegetekst) {
        service.sletListe();
        return DataService.getFoedevareData().then(function(response) {
          var foedevarer = response;
          for(var vare in foedevarer) {
            var navn = foedevarer[vare].navn;
            if(navn.indexOf(soegetekst) != -1) {
              soegeresultat.push(foedevarer[vare]);
            }
        }
        return soegeresultat;
      })
    }

    service.sletListe = function () {
      soegeresultat = [];
    }
  }
})();
