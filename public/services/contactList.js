angular.module('MyApp')
  .factory('Contact', ['$resource', function($resource) {
    return $resource('/home/:_id');
  }]);