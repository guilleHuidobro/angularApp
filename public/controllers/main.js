angular.module('MyApp')
  .controller('MainCtrl', function($scope,$http,Contact) {
    $scope.alphabet = ['0-9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
      'Y', 'Z'];

    $scope.headingTitle = 'Top 10';

    $scope.contactlist = Contact.query();

    $scope.filterByAlphabet = function(char) {
      console.log("$$$$$$$$$ "+ char +" $$$$$$$$$$$$");
      debugger;
      $scope.contactlist = Contact.query({ alphabet: char });
      $scope.headingTitle = char;
    };

    $http.get('/home').success(function(response) {
      console.log("en el controller");
    $scope.contactlist = response;
    $scope.contact = "";
  });

  });