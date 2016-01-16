"use strict";
angular.module('agileApp').controller('AddTaskCtrl', function ($scope, $http,$routeParams,$window) {
    //fonction appelés à la création d'une tache
    $scope.createTask = function(task){
       $http.post(urlRest+"rest/task/"+$routeParams.idUserStory, task)
                              .success(function(data, status, headers, config) {
                                //redirection vers la page de l'user story de la tache
                                $window.location.href = "/#/userStory/"+$routeParams.idUserStory;
                              });
    }
    //récupère les développeurs associés au projet
    $http.get(urlRest+"rest/developpeur/userstory/"+$routeParams.idUserStory).success(function(response) {
            $scope.developpeurs = response;
    });
    //affichage du nom et prénom des développeurs
    $scope.makeDevelopper = function(developper){
      return developper.firstName + " " + developper.lastName;
    }

  });
angular.module('agileApp').controller('TaskCtrl', function ($scope, $http,$routeParams,$window) {
      //modification d'une tache
      $scope.updateTask= function(task){
          $http.put(urlRest+"rest/task", task)
                              .success(function(data, status, headers, config) {
                    });
      }
      //récupération des informations d'une tache
      $http.get(urlRest+"rest/task/"+$routeParams.idTask).success(function(response) {
        $scope.task = response;
      });

      //récupère les développeurs associés au projet
      $http.get(urlRest+"rest/developpeur/userstory/"+$routeParams.idUserStory).success(function(response) {
          $scope.developpeurs = response;
        });

        //affichage du nom et prénom des développeurs
       $scope.makeDevelopper = function(developper){
            return developper.firstName + " " + developper.lastName;
          }

        //fonction appelés à la suppression d'une tache
       $scope.removeTask = function(task){
        var r = confirm("Etes vous sure de vouloir supprimer cette tache ?");
          if(r){
            $http.delete(urlRest+"rest/task/"+$routeParams.idTask, {headers: {'Content-Type': 'application/json'}}).success(function(response) {
                       //redirection vers la page de l'user story
                      $window.location.href = "/#/userStory/"+$routeParams.idUserStory;
                    });
          }
       }
  });
