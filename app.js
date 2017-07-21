var mainApp = angular.module("mainApp", ["ngRoute", "controllers", ]);

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
    .when("/single/:id", {
        templateUrl : '../views/single.html',
        controller : 'singleController'
    });
});

 
    angular.module('controllers', [])
    .controller('singleController', ['$scope', function() {
        
    }])
    .controller('listController', ['$scope', function() {
        
    }])
    .controller('addController', ['$scope', function() {
        
    }]);

    mainApp.controller('getRequest', function($http, $scope, $location) {
        $http.get('http://localhost:3000/api/chirps')
        .then(function(response) { 
            $scope.postList = response.data;
        });
        $scope.getId=function(id) {
            $location.path('/single/' + id);
        }
        $scope.deleteData = function(id){
       $http.delete("/api/chirps/" + id)
           .success(function(response){
               $http.get('/api/chirps')
               .then(function (response) {
               console.log(response);
               $scope.postList = response.data;
           });
       });    
   }
    });

    mainApp.controller('addController', function($scope, $http, $location) {
        $scope.insertData = function() {
          $http.post('/api/chirps', {'user' : $scope.user, 'message' : $scope.message})
          .then(function(response) {
            $scope.postList = response.data;
            $scope.user = '';
            $scope.message = '';  
            });     
        }  
    });

    mainApp.controller('singleController', function($scope, $routeParams, $http, $location) {
        var currentId = $routeParams.id;
        $http.get('http://localhost:3000/api/chirps/' + currentId)
        .then(function(response) {
            $scope.postList = response.data;
        });
    
    
    $scope.deleteData = function(id){
       $http.delete("/api/chirps/" + id)
           .success(function(response){
               $http.get('/api/chirps')
               .then(function (response) {
               console.log(response);
               $scope.postList = response.data;
               $location.path('/list/');
           });
       });    
   }

        });