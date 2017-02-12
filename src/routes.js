(function() {
'use strict';

angular.module('lowfodmap')
.config(routeConfig);

routeConfig.$inject = ['$stateProvider'];
function routeConfig($stateProvider) {
  $stateProvider
    .state('home', {
      url:'/',
      templateUrl: 'src/home.html',
      controller: 'UserProfileController',
      controllerAs: 'ctrl'
    })
    .state('userprofile', {
      url: '/registrer',
      templateUrl: 'src/user-profile/user-profile.html',
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
      controllerAs: 'ctrl'
    })
    .state('soegning.visning', {
      url:'/{foedevare}',
      templateUrl: 'src/visning/visning.html',
      controller: 'VisningController',
      controllerAs: 'ctrl',
      resolve: {
        foedevare: ['$stateParams', function($stateParams) {
          return $stateParams.foedevare;
        }]
      }
    });
  }
})();
