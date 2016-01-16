'use strict';

/**
 * @ngdoc overview
 * @name agileApp
 * @description
 * # agileApp
 *
 * Main module of the application.
 */
angular
  .module('agileApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]).config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/project', {
              templateUrl: 'views/projects.html',
              controller: 'ProjectsCtrl',
              controllerAs: 'projects'
      }).when('/developper', {
              templateUrl: 'views/developper.html',
              controller: 'DeveloppeurCtrl',
              controllerAs: 'developper'
      }).when('/project/:id', {
	  templateUrl: 'views/project.html',
              controller: 'ProjectCtrl',
              controllerAs: 'project'
      }).when('/addSprint/:idProjet', {
          templateUrl: 'views/addSprint.html',
          controller: 'AddSprintCtrl',
          controllerAs: 'addSprint'
      }).when('/sprint/:id', {
              templateUrl: 'views/sprint.html',
              controller: 'SprintCtrl',
              controllerAs: 'Sprint'
	}).when('/addDevelopper', {
    	  templateUrl: 'views/addDevelopper.html',
                  controller: 'AddDevelopperCtrl',
                  controllerAs: 'addDev'
    }).when('/addUserStory/:idSprint', {
            templateUrl: 'views/addUserStory.html',
                      controller: 'AddUserStoryCtrl',
                      controllerAs: 'addUserStory'
    }).when('/addTask/:idUserStory', {
                templateUrl: 'views/addTask.html',
                          controller: 'AddTaskCtrl',
                          controllerAs: 'addTask'
    }).when('/task/:idUserStory/:idTask', {
                     templateUrl: 'views/task.html',
                               controller: 'TaskCtrl',
                               controllerAs: 'Task'

    }).when('/userStory/:idSprint', {
             templateUrl: 'views/userStory.html',
                       controller: 'UserStoryCtrl',
                       controllerAs: 'userStory'
    	}).otherwise({
        redirectTo: '/'
      });
  });

