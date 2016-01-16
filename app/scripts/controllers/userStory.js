"use strict";
angular.module('agileApp')
  .controller('AddUserStoryCtrl', function ($scope, $http,$routeParams,$window) {
    //création d'une nouvelle user story
    $scope.createUserStory = function(userStory){
       $http.post(urlRest+"rest/userstory/"+$routeParams.idSprint, userStory)
                              .success(function(data, status, headers, config) {
                                //redirection vers le sprint
                                $window.location.href = "/#/sprint/"+$routeParams.idSprint;
                              });
    }
  });
angular.module('agileApp')
  .controller('UserStoryCtrl', function ($scope, $http,$routeParams,$window) {
      //modification d'une user story
      $scope.updateUserStory= function(userStory){
          $http.put(urlRest+"rest/userstory", userStory)
                              .success(function(data, status, headers, config) {
                    });
      }
      //récupération de l'information d'une user story
      $http.get(urlRest+"rest/userstory/"+$routeParams.idSprint).success(function(response) {
        $scope.userStory = response;
      });
  });
