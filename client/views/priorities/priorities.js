(function(){
  'use strict';

  angular.module('quiktask')
  .controller('PrioritiesCtrl', ['$scope', 'Priority', function($scope, Priority){
    $scope.title = 'Create A Priority:';
    $scope.sort = 'name';
    $scope.priority = {color:'#ff6c20'};

    Priority.all().then(function(res){
      $scope.priorities = res.data;
    });

    $scope.createPriority = function(){
      // console.log($scope.priority);
      Priority.create($scope.priority).then(function(res){
        // debugger;
        $scope.priorities = $scope.priorities || [];
        $scope.priorities.push(res.data);
        $scope.priority = {color:'#ff6c20'};
      });
    };

  }]);
})();

