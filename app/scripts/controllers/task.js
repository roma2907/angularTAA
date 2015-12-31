angular.module('agileApp').controller('AddTaskCtrl', function ($scope, $http,$routeParams,$window) {
    $scope.createTask = function(task){
       $http.post(urlRest+"rest/task/"+$routeParams.idUserStory, task)
                              .success(function(data, status, headers, config) {
                                $window.location.href = "/#/userStory/"+$routeParams.idUserStory;
                              });
    }
    $http.get(urlRest+"rest/developpeur/userstory/"+$routeParams.idUserStory).success(function(response) {
            $scope.developpeurs = response;
          });

    $scope.makeDevelopper = function(developper){
      return developper.firstName + " " + developper.lastName;
    }

  });
angular.module('agileApp').controller('TaskCtrl', function ($scope, $http,$routeParams,$window) {
      $scope.updateTask= function(task){
          $http.put(urlRest+"rest/task", task)
                              .success(function(data, status, headers, config) {
                    });
      }

      $http.get(urlRest+"rest/task/"+$routeParams.idTask).success(function(response) {
        $scope.task = response;
      });

      $http.get(urlRest+"rest/developpeur/userstory/"+$routeParams.idUserStory).success(function(response) {
          $scope.developpeurs = response;
        });

       $scope.makeDevelopper = function(developper){
            return developper.firstName + " " + developper.lastName;
          }

       $scope.removeTask = function(task){
        var r = confirm("Etes vous sure de vouloir supprimer cette tache ?");
          if(r){
            $http.delete(urlRest+"rest/task/"+$routeParams.idTask, {headers: {'Content-Type': 'application/json'}}).success(function(response) {
                      $window.location.href = "/#/userStory/"+$routeParams.idUserStory;
                    });
          }
       }
  });
