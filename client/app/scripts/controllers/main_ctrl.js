'use strict';

//////////////////////////////////////
// Top-level controller for the app //
//////////////////////////////////////
angular.module('myApp.controllers')
  .controller('MainCtrl', ['configuration', function(config) {
    this.config = config;
  }]);