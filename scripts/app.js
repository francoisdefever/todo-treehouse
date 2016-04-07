angular.module("todoListApp", [])
.controller('mainCtrl', function($scope, dataService) {
    $scope.learningNgChange = function() {
        console.log("An input Changed");
    };
    
    $scope.helloConsole = dataService.helloConsole;

})

.service('dataService', function() {
    this.helloConsole = function() {
        console.log("This is the hello console service");
    };
});
