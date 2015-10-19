angular.module('MyApp')
  .factory('Contact', ['$resource', function($resource) {
    return $resource('/add/:_id');
  }]);