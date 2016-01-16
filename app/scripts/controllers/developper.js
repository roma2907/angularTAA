"use strict";
angular.module('agileApp')
  .controller('DeveloppeurCtrl', function ($scope, $http) {
    refreshDevelopper($http,$scope);
});
function refreshDevelopper($http,$scope){
  //fonction qui récupère l'ensemble des développeurs
  $http.get(urlRest+"rest/developpeur").success(function(response) {
          $scope.developpers = response;
  });
 }
angular.module('agileApp')
  .controller('AddDevelopperCtrl', function ($scope, $http, $window) {
    //création d'un développeur
    $scope.createDevelopper = function(developpeur){
       $http.post(urlRest+"rest/developpeur", developpeur)
                  .success(function(data, status, headers, config) {
                        //redirection sur la page des développeurs
                        $window.location.href = "/#/developper";
                  });
    }
  });
