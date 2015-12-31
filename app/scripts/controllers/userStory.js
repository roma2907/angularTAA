angular.module('agileApp')
  .controller('AddUserStoryCtrl', function ($scope, $http,$routeParams,$window) {
    $scope.createUserStory = function(userStory){
       $http.post(urlRest+"rest/userstory/add/"+$routeParams.idSprint, userStory)
                              .success(function(data, status, headers, config) {
                                $window.location.href = "/#/sprint/"+$routeParams.idSprint;
                              });
    }
  });
angular.module('agileApp')
  .controller('UserStoryCtrl', function ($scope, $http,$routeParams,$window) {
      $scope.updateUserStory= function(userStory){
          $http.put(urlRest+"rest/userstory/update", userStory)
                              .success(function(data, status, headers, config) {
                    });
      }

      $http.get(urlRest+"rest/userstory/"+$routeParams.idSprint).success(function(response) {
        $scope.userStory = response;
      });
  });
