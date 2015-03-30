'use strict';

describe('starter.app module', function() {

  beforeEach(module('starter.app'));

  describe('app controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var appCtrl = $controller('LoginCtrl');
      expect(LoginCtrl).toBeDefined();
    }));

  });
});