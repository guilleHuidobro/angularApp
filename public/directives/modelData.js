angular.module('MyApp')
.directive('dataModal', function ($http,$compile) {
 return {
        restrict: 'A',
        transclude: true,
        scope:{
            ngModel: '='
        },
        template: '',
        link: function(scope, el, attrs){
            scope.modalId = attrs.modalId;
            scope.title = attrs.modalTitle;
            $http.jsonp(attrs.modalSrc);
        
            getContents = function(data){
                $compile(data.contents)(scope, function(compliledElement, scope){
                    el.append(compliledElement);
                });
            };
    }
}});