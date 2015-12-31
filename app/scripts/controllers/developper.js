angular.module('agileApp')
  .controller('DeveloppeurCtrl', function ($scope, $http) {
    refreshDevelopper($http,$scope);
});
function refreshDevelopper($http,$scope){
  $http.get(urlRest+"rest/developpeur").success(function(response) {
          $scope.developpers = response;
  });
 }
angular.module('agileApp')
  .controller('AddDevelopperCtrl', function ($scope, $http, $window) {
    $scope.createDevelopper = function(developpeur){
       $http.post(urlRest+"rest/developpeur/add", developpeur)
                  .success(function(data, status, headers, config) {
                        $window.location.href = "/#/developper";
                  });
    }
  });
