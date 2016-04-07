angular.module("todoListApp", [])
.controller('mainCtrl', function($scope, dataService) {
    $scope.helloConsole = dataService.helloConsole;
    $scope.learningNgChange = function() {
        console.log("An input Changed");
    };

    $scope.todos = [
        {"name": "clean the house"},
        {"name": "eat"},
        {"name": "swim"},
        {"name": "learn"},
        {"name": "dance"},
        {"name": "sleep"},
    ];

})

.service('dataService', function() {

    this.helloConsole = function() {
        console.log("This is the hello console service");
    };
});
