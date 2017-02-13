(function() {
'use strict';

angular.module('lowfodmap')
.config(routeConfig);

routeConfig.$inject = ['$stateProvider'];
function routeConfig($stateProvider) {
  $stateProvider
    .state('home', {
      url:'/',
      templateUrl: 'src/home/home.html',
      controller: 'HomeController',
      controllerAs: 'ctrl'
    })
    .state('intolerance-valg', {
      url: '/registrer',
      templateUrl: 'src/intolerance/intolerance-valg.html',
      controller: 'IntoleranceController',
      controllerAs: 'ctrl',
      resolve: {
        kulhydrattyper: ['DataService', function(DataService) {
          return DataService.getKulhydrattyper();
        }]
      }
    })
    .state('soegning', {
      url:'/soeg',
      templateUrl: 'src/soegning/soegning.html',
      controller: 'SoegningController',
      controllerAs: 'ctrl',
      resolve: {
        foedevareListe: ['DataService', function(DataService) {
          return DataService.getFoedevareData();
        }]
      }
    })
    .state('visning', {
      url:'/{foedevareId}',
      templateUrl: 'src/visning/visning.html',
      controller: 'VisningController',
      controllerAs: 'ctrl',
      resolve: {
        foedevareData: ['$stateParams', 'DataService', function($stateParams, DataService) {
          return DataService.getFoedevareItem($stateParams.foedevareId);
        }]
      }
    });
  }
})();
