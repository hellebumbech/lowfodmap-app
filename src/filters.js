(function() {
  'use strict';

  angular.module('lowfodmap')
  .filter('capitalize', capitalize);


  capitalize.$inject = [];
  function capitalize() {
      return function(input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
      }
    }
})();
