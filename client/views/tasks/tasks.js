(function(){
  'use strict';

  angular.module('quiktask')
  .controller('TasksCtrl', ['$scope', 'Priority', 'Task', function($scope, Priority, Task){
    $scope.title = 'Create A Task:';
    $scope.sort = 'due';

    Priority.all().then(function(res){
      $scope.priorities = res.data;
    });

    Task.all().then(function(res){
      $scope.tasks = res.data;
    });

    $scope.createTask = function(){
      // console.log($scope.priority);
      Task.create($scope.task).then(function(res){
        // debugger;
        $scope.tasks = $scope.tasks || [];
        $scope.tasks.push(res.data);
        $scope.task = {};
      });
    };

    $scope.toggleComplete = function(taskId){
      console.log(taskId);
    };

  }]);
})();

