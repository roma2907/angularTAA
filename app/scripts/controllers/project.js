"use strict";
angular.module('agileApp')
  .controller('ProjectsCtrl', function ($scope, $http) {
	refreshProjet($http,$scope);

  $scope.createProjet = function(projet){
        //vérification que le nom n'existe pas encore en base de données
        $http.get(urlRest+"rest/projet/exist/"+projet.name).success(function(response){
         if(!response){
          //s'il n'existe pas on ajoute le nouveau projet
          $http.post(urlRest+"rest/projet", projet)
            .success(function(data, status, headers, config) {
                refreshProjet($http,$scope);
             });
             $scope.errorProjet = "";
         }else{
            $scope.errorProjet = "Le nom du projet existe déjà.";
         }
    })
  };

//recupere les infos des projets
function refreshProjet($http,$scope){
	$http.get(urlRest+"rest/projet").success(function(response) {
        $scope.projets = response;
      });
}
});


angular.module('agileApp')
  .controller('ProjectCtrl', function ($scope, $http,$routeParams) {
  if($routeParams.id !== undefined){
    //récupération du projet sur lequel on a cliqué
    $http.get(urlRest+"rest/projet/"+$routeParams.id).success(function(response){
       $scope.projet = response;
    });

    //recupération des développeurs que l'on peut affecter
    $http.get(urlRest+"rest/developpeur/notInProjet/"+$routeParams.id).success(function(response){
      $scope.developpersNotInProjet=response;
    });

    //fonction qui permet d'afficher le nom et prenom d'un developper
    $scope.makeDevelopper = function(developper){
      return developper.firstName + " " + developper.lastName;
    }

    //lorsqu'on clique sur le bouton pour affecter ou désaffecter des développeurs
    $scope.changeDevelopper = function(){
      //on rajoute les développeurs sélectionnées dans la section développeurs disponible au développeur du projet
      for (var element in $scope.availableDev) {
           $scope.developpersNotInProjet.splice($scope.developpersNotInProjet.indexOf($scope.availableDev[element]),1);
           $scope.projet.developpers.push($scope.availableDev[element]);
      }
      //on enleve les développeurs sélectionnés de la section développeur du projet
      for (var element in $scope.inProjectDev) {
          $scope.projet.developpers.splice($scope.projet.developpers.indexOf($scope.inProjectDev[element]),1);
          $scope.developpersNotInProjet.push($scope.inProjectDev[element]);
      }
    }

    //modification du projet
    $scope.updateProjet = function(projet){
            //vérification que le nom n'existe pas encore en base de données
            $http.get(urlRest+"rest/projet/exist/"+projet.name+"/"+projet.id).success(function(response){
             if(!response){
              //s'il n'existe pas on ajoute le nouveau projet
              $http.put(urlRest+"rest/projet", projet)
                .success(function(data, status, headers, config) {
                 });
                 $scope.errorProjetName = "";
             }else{
                $scope.errorProjetName = "Le nom du projet existe déjà.";
             }
        })
      };
  }
});
