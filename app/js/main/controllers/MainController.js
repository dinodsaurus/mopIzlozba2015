"use strict";

angular.module("mopIzlozba")
.controller("MainController", function ($scope, $stateParams, WorkService) {
  var user = $stateParams.user;
  var image = parseInt($stateParams.image, 10) - 1;
  var self = this;
  $scope.main = true;
  WorkService.getWork().then(function (data) {
    data.work.forEach(function (userWork) {
      if(user === userWork.author){
        self.workUser = userWork;
        self.work = userWork.works[image];
      }
    });
  });
});
