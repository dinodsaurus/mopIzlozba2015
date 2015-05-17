"use strict";
angular.module("mopIzlozba", [
  "constants",
  "ui.router",
  "templates"
])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state("home", {
    url: "/",
    templateUrl: "main/views/home.html",
    controller: "MainController"
  });

  $urlRouterProvider.otherwise("/");
})
;
