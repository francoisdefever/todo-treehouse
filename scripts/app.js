angular.module("todoListApp", [])
.controller('mainCtrl', function($scope) {
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

});
