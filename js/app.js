var a = angular.module('index', ['ui.router', 'DATA', 'DIRECTIVE', 'FACTORY', 'flash', 'ngAnimate']);
a.controller('idpasseval', ['$scope', 'EvaluatorFactory', '$state', 'evalService', 'Flash', function ($scope, EvaluatorFactory, $state, evalService, Flash) {
    $scope.param = {};
    $scope.eval = function () {
        evalService.evalFunction($scope.param.id, $scope.param.password).then(function (msg) {
            $state.go('one');
        }, function (msg) {
            Flash.create('danger', msg, 'custom-class');
        });
    }
    $scope.signup = function () {
        $state.go('signup');
    }
            }]);


a.controller('signupcontroller', ['$scope', '$state','$http', function ($scope, $state,$http) {
    $scope.param = {};
    $scope.home = function () {
        $state.go('index');
    }
}]);

a.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: './applications/login.html'
        })
        .state('one', {
            url: '/one',
            templateUrl: './applications/one.html'
        })
        .state('signup', {
            url: '/signup',
            templateUrl: './applications/signup.html'
        })


}]);

a.service('evalService', function ($q) {
    return {
        evalFunction: function (id, pass) {
            var promise = $q(function (resolve, reject) {
                if (id == "sai" && pass == "sai")
                    resolve("ok cool");
                else
                    reject("WRONG CREDENTIALS");
            });
            return promise;
        }
    }
});