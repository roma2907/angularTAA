"use strict";
angular.module('agileApp')
  .controller('AddSprintCtrl', function ($scope, $http,$routeParams, $window) {
    //lorsqu'on crée un nouveau sprint
    $scope.createSprint = function(sprint){
          //vérification, date de fin supérieur à date de début
          if(sprint.dateEnd > sprint.dateBegin){
           $http.post(urlRest+"rest/sprint/"+$routeParams.idProjet, sprint)
                      .success(function(data, status, headers, config) {
                          //redirige sur la page du projet
                          $window.location.href = "/#/project/"+$routeParams.idProjet;
                      });
                       $scope.errorSprint = "";
           }else{
               //message d'erreur
               $scope.errorSprint = "La date de début doit être avant la date de fin.";
           }
        }
  });

angular.module('agileApp')
  .controller('SprintCtrl', function ($scope, $http,$routeParams) {
      //modification d'un sprint
       $scope.updateSprint = function(sprint){
              //vérification, date de fin supérieur à date de début
              if(sprint.dateEnd > sprint.dateBegin){

                   $http.put(urlRest+"rest/sprint", sprint)
                        .success(function(data, status, headers, config) {
                        });
                        $scope.errorSprint="";
              }else{
                   //message d'erreur
                   $scope.errorSprint = "La date de début doit être avant la date de fin.";
              }
          }

      //récupération des infos du sprint
      $http.get(urlRest+"rest/sprint/"+$routeParams.id).success(function(response) {
              $scope.sprint = response;
               $scope.sprint.dateEnd = new Date( $scope.sprint.dateEnd);
               $scope.sprint.dateBegin = new Date( $scope.sprint.dateBegin);
            });
            //récupération des epics associés au sprint
            $http.get(urlRest+"rest/sprint/"+$routeParams.id+"/epic").success(function(response) {
              $scope.epics = response;
            });

            //récupération des user stories associés au sprint
            $http.get(urlRest+"rest/sprint/"+$routeParams.id+"/userStory").success(function(response) {
              $scope.userStories = response;
            });
  });
