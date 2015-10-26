angular.module('MyApp')
  .controller('ContactController', function($scope,$alert) {

    $scope.contacts = [{name: 'misko', email: 'male', phone:'35454'}];

    $scope.saveContact = function(){

      console.log($scope.newcontact.name);
      console.log($scope.newcontact.email);
      console.log($scope.newcontact.phone);
      console.log($scope.newcontact.id);

      

              $alert({
                title: 'save',
                content: 'You have successfully save.',
                animation: 'fadeZoomFadeDown',
                type: 'material',
                duration: 3
              });
    };

  });