angular.module("todoListApp", [])

.controller('mainCtrl', function($scope, dataService) {
    $scope.learningNgChange = function() {
        console.log("An input Changed");
    };

    $scope.helloWorld = dataService.helloWorld;

    $scope.todos = dataService.getTodos;
})

.service('dataService', function($http) {
    this.helloWorld = function() {
        console.log("This is the hello console service");
    };

    this.getTodos = $http.get('mock/todos.json')
    .then(function(response) {
        console.log(response.data);
        return response.data;
    });
});
