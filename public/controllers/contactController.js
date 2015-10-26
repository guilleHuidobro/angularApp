angular.module('MyApp')
  .controller('ContactController', function($scope,$alert) {

    $scope.contacts = {name: 'misko', email: 'male', phone:'35454'};

    $scope.saveContact = function(){
              $alert({
                title: 'save',
                content: 'You have successfully save.',
                animation: 'fadeZoomFadeDown',
                type: 'material',
                duration: 3
              });
    };

  });