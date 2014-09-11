(function(){
  'use strict';

  angular.module('quiktask')
  .controller('HomeCtrl', ['$scope', '$interval', 'Home', function($scope, $interval, Home){
    $scope.title = 'Home';

  }]);
})();

