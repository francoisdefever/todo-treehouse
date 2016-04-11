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
})

.service('dataService', function($http) {
    this.helloWorld = function() {
        console.log("This is the hello console service");
    };

    this.getTodos = function(callback) {
    $http.get('mock/todos.json')
    .then(callback);
};

    this.deleteTodo = function(todo){
        console.log("The " + todo.name + " has been deleted!" );
        //order logic
    };
});
