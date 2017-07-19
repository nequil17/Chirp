var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/list", {
        templateUrl : "/views/list.html"
    })
    .when("/add", {
        templateUrl : "/views/add.html"
    })
    .when("/single", {
        templateUrl : "/views/single.html"
    });
    
    app.controller('control', function() {

    });

    app.controller('myCtrl', function($scope, $http) {
    $http.get("welcome.htm")
    .then(function(response) {
        $scope.myWelcome = response.data;
    });
});
});