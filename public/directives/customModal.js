angular.module('MyApp')
 .directive('customModals', function ($http, $compile) {
 return {
        restrict: 'A',
        require: '?ngModel',
        transclude: true,
        scope:{
            ngModel: '='
        },
        template: '<div id="{{modalId}}" class="modal fade">\
  <div class="modal-dialog">\
    <div class="center-form panel">\
        <div class="panel-body">\
          <h2 class="text-center">Add</h2>\
          <form method="post" ng-submit="login()" name="loginForm">\
            <div class="form-group has-feedback">\
              <input class="form-control input-lg" type="text" name="name" ng-model="contact.name" placeholder="Name" required autofocus>\
              <span class="ion-at form-control-feedback"></span>\
            </div>\
            <div class="form-group has-feedback">\
              <input class="form-control input-lg" type="text" name="email" ng-model="contact.email" placeholder="Email" required>\
              <span class="ion-key form-control-feedback"></span>\
            </div>\
            <div class="form-group has-feedback">\
              <input class="form-control input-lg" type="text" name="number" ng-model="contact.number" placeholder="Number" required>\
              <span class="ion-key form-control-feedback"></span>\
            </div>\
            <br/>\
          <button class="btn btn-primary" ng-disabled="loginForm.$invalid" ng-click="addContact()">Add Contact</button>\
          <button class="btn btn-info" ng-disabled="loginForm.$invalid" ng-click="update()">Update</button>\
          <button class="btn btn-info" ng-click="deselect()">Clear</button>\
          </form>\
        </div>\
    </div>\
  </div>\
</div>',
        link: function(scope, el, attrs, transcludeFn){
            scope.modalId = attrs.modalId;
        }
    };
});