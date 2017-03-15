

(function () {
    'use strict';

    angular
        .module('app')
        .controller('userController', userController);


    function userController() {
        angular.bootstrap(document.getElementById('testing'), ['testapp']);
    }
})();
