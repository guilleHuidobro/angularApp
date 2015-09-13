angular.module('MyApp')
  .controller('MainCtrl', function($scope,$http) {
    $scope.alphabet = ['0-9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
      'Y', 'Z'];
    $scope.headingTitle = 'Top 12 Shows';
    $scope.filterByAlphabet = function(char) {
      $scope.headingTitle = char;
    };

    $http.get('/add').success(function(response) {
    	console.log(response);
    $scope.contactlist = response;
    $scope.contact = "";
  });

  });