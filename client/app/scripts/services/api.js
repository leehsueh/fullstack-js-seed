'use strict';

angular.module('myApp.services')
  .factory('api', ['$http', '$q', 'configuration', function($http, $q, configuration) {
    var apiRoot = configuration.root + '/api';
    return {
      greetName: function(name) {
        var deferred = $q.defer();
        $http.get(apiRoot + '/greet/' + name)
          .success(function(response) {
            deferred.resolve(response);
          })
          .error(function(data, status) {
            deferred.reject('Uh oh');
          });
        return deferred.promise;
      }
    }
  }]);