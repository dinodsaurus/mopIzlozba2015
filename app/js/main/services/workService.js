"use strict";
angular.module("mopIzlozba")
.factory("WorkService", function($q, $http) {
  var WorkService = {};

  WorkService.getWork = function () {
    var q = $q.defer();
    $http.get("work.json").
      success( data => {
        q.resolve(data);
      }).
      error( err => {
        q.reject(err);
      });
    return q.promise;
  };

  return WorkService;
});
