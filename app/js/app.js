"use strict";
angular.module("mopIzlozba", [
  "ui.router",
  "templates"
])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state("home", {
    url: "/:user/:image",
    templateUrl: "main/views/home.html",
    controller: "MainController",
    controllerAs: "main"
  });

  $urlRouterProvider.otherwise("/");
})
;
