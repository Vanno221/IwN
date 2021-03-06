'use strict';

describe('Controller: CategorieCtrl', function () {

  // load the controller's module
  beforeEach(module('iwnApp'));

  var CategorieCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CategorieCtrl = $controller('CategorieCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CategorieCtrl.awesomeThings.length).toBe(3);
  });
});
