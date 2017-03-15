/// <reference path="C:\Users\Tej\Documents\Visual Studio 2013\Projects\ShoppingCart\ShoppingCart\Scripts/angular.js" />


(function () {
    'use strict';

    angular
        .module('app')
        .service('deferredService', deferredService);

    deferredService.$inject = ['$q'];

    function deferredService($q) {

        var service = {
            deferred: deferred
        };

        return service;

        function deferred() {
            
            return $q.defer();
        }

    };
})();