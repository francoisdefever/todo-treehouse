angular.module("todoListApp", [])

.controller('mainCtrl', function($scope, dataService) {
    $scope.learningNgChange = function() {
        console.log("An input Changed");
    };

    $scope.helloWorld = dataService.helloWorld;

    dataService.getTodos(function(response) {
        console.log(response.data);
        $scope.todos = response.data;
    });
    $scope.deleteTodo = function(todo, $index) {
        dataService.deleteTodo(todo);
    };
})

.service('dataService', function($http) {
    this.helloWorld = function() {
        console.log("This is the hello console service");
    };

    this.getTodos = function(callback) {
    $http.get('mock/todos.json')
    .then(callback);
};

    this.deleteTodo = function(todo) {
        console.log("The " + todo.name + " has been deleted!");
        //other logic
    };

    this.saveTodo = function(todo) {
        console.log("The " + todo.name + " has been saved!");
        //other logic
    };
});
