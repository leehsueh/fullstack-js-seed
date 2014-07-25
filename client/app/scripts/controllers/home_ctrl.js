'use strict';

angular.module('myApp.controllers')
  .controller('HomeCtrl', ['api', function (api) {
    var self = this;
    this.sampleRequest = function(name) {
      api.greetName(name)
        .then(function(data) {
          self.response = data;
        })
    }
  }]);