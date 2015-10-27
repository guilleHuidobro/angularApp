angular.module('MyApp')
  .controller('ContactController', function($scope,$alert) {

    $scope.contacts = [];
    var id = 1;

    $scope.saveContact = function(){
      if($scope.newcontact.id == null){
        $scope.newcontact.id = id++;
        $scope.contacts.push($scope.newcontact)
      }else{
        angular.forEach($scope.contacts, function (value) {
        if(value.id == $scope.newcontact.id) {
          var i = $scope.contacts.indexOf(value);
          $scope.contacts[i] = $scope.newcontact;
        }
                return;
        });

      }
      $scope.newcontact = {};

      $alert({
        title: 'save',
        content: 'You have successfully save.',
        animation: 'fadeZoomFadeDown',
        type: 'material',
        duration: 3
      });

    };

    $scope.edit = function(id){
      angular.forEach($scope.contacts, function (value) {
        if(value.id == id) {
          $scope.newcontact = angular.copy(value);
        }
        return;
      });
      $alert({
        title: 'edit',
        content: 'You have successfully edit.',
        animation: 'fadeZoomFadeDown',
        type: 'material',
        duration: 3
      });
    };

    $scope.delete = function(id){
      angular.forEach($scope.contacts, function (value) {
          if(value.id == id) {
              var i = $scope.contacts.indexOf(value);
              $scope.contacts.splice(i,1);
              $scope.newcontact = {};
          return;
          }
      });
      $alert({
        title: 'delete',
        content: 'You have successfully delete.',
        animation: 'fadeZoomFadeDown',
        type: 'material',
        duration: 3
      });
    };
});