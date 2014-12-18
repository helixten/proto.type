angular.module('app', [ ]);




// AppController.js
angular
      .module('app')
      .controller('AppController' , AppController);

function AppController($scope) {
    $scope.hi = "Hello World"
 }




$(function() {
    cosole.log('Jquery Is Ready')
});
