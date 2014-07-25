'use strict';

angular.module('myApp', [
  'ui.router',
  'ngSanitize',
  'ui.bootstrap',
  'myApp.config',
  'myApp.controllers',
  'myApp.services'
]).
config(['$stateProvider', '$urlRouterProvider', 'configuration', function($stateProvider, $urlRouterProvider, configuration) {

  /////////////////////////////
  // Redirects and Otherwise //
  /////////////////////////////
  $urlRouterProvider
    .when('/home', '/')
    .otherwise('/');

  //////////////////////////
  // State Configurations //
  //////////////////////////
  $stateProvider
    .state('home', {
      url: '/',
      controller: 'HomeCtrl as home',
      templateUrl: 'partials/home.html',
    });
}]);