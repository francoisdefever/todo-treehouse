angular.module('todoListApp')
.directive('helloWorld', function() {
    return {
        template: "This is the Hello World directive!",
        restrict: "E"
    };
});
