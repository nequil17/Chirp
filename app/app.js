var mainApp = angular.module("mainApp", ["ngRoute", "controllers"]);
mainApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: '../views/home.html'
    })
    .when("/list", {
        templateUrl : '../views/list.html',
        controller : 'listController'
    })
    .when("/add", {
        templateUrl : '../views/add.html',
        controller : 'addController'
    })
    .when("/single", {
        templateUrl : '../views/single.html',
        controller : 'singleController'
    });
});

 
    angular.module('controllers', [])
    .controller('singleController', ['$scope', function() {
        console.log('inside single controller')
    }])
    .controller('listController', ['$scope', function() {
        console.log('inside list controller')
    }])
    .controller('addController', ['$scope', function() {
        console.log('inside add controller')
    }]);
//     // // app.controller('myCtrl', function($scope, $http) {
//     // // $http.get("welcome.htm")
//     // // .then(function(response) {
//     // //     $scope.myWelcome = response.data;
//     // });
// });