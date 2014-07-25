describe('Controllers', function() {
  var $controller, scope;

  beforeEach(function() {
    module('myApp');
    inject(function(_$controller_, $rootScope) {
      $controller = _$controller_;
      scope = $rootScope.$new()
    });
  });

  it('should test the main controller', inject(function(configuration) {
    ctrl = $controller('MainCtrl', {
      $scope: scope
    });
    expect(ctrl.config).toBe(configuration);
  }));

});