"use strict";

describe("Main Conttroller tests", function(){
  var scope,controller;

  beforeEach(module("mopIzlozba"));

  describe("List of awesome things", function () {
    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      controller = $controller("MainController", {
        $scope: scope
      });
    }));

    it("should have rank defined ", inject(function() {
      expect(scope.main).toBeDefined();
    }));
  });
});
