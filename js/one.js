 var data = angular.module('DATA', ['ui.router']);
 data.controller('controllerone', ['$scope','$state', function ($scope,$state) {

     $scope.name = [{
             name: "saiteja",
             id: "4654"
         },
         {
             name: "ravi",
             id: "4640"
         }
                ];
     
     $scope.logout=function(){
     
     $state.go('index');
     }
     

    }])