angular.module('agileApp')
  .controller('AddSprintCtrl', function ($scope, $http,$routeParams, $window) {
    $scope.createSprint = function(sprint){
          if(sprint.dateEnd > sprint.dateBegin){
           $http.post(urlRest+"rest/sprint/add/"+$routeParams.idProjet, sprint)
                      .success(function(data, status, headers, config) {
                          $window.location.href = "/#/project/"+$routeParams.idProjet;
                      });
                       $scope.errorSprint = "";
           }else{
               $scope.errorSprint = "La date de début doit être avant la date de fin.";
           }
        }
  });

angular.module('agileApp')
  .controller('SprintCtrl', function ($scope, $http,$routeParams) {
       $scope.updateSprint = function(sprint){
              if(sprint.dateEnd > sprint.dateBegin){
                   $http.put(urlRest+"rest/sprint/update", sprint)
                        .success(function(data, status, headers, config) {
                        });
                        $scope.errorSprint="";
              }else{
                   $scope.errorSprint = "La date de début doit être avant la date de fin.";
              }
          }


      $http.get(urlRest+"rest/sprint/"+$routeParams.id).success(function(response) {
              $scope.sprint = response;
               $scope.sprint.dateEnd = new Date( $scope.sprint.dateEnd);
               $scope.sprint.dateBegin = new Date( $scope.sprint.dateBegin);
            });
            $http.get(urlRest+"rest/sprint/"+$routeParams.id+"/epic").success(function(response) {
              $scope.epics = response;
            });

            $http.get(urlRest+"rest/sprint/"+$routeParams.id+"/userStory").success(function(response) {
              $scope.userStories = response;
            });
  });
