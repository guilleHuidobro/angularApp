angular.module('MyApp')
  .controller('LoginCtrl', function($scope, Auth) {
    $scope.login = function() {
      console.log("login carpeta controller");
      Auth.login({ email: $scope.email, password: $scope.password });
    };
    $scope.facebookLogin = function() {
      Auth.facebookLogin();
    };
    $scope.googleLogin = function() {
      Auth.googleLogin();
    };
    $scope.pageClass = 'fadeZoom';
  });