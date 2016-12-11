
/// <reference path="C:\Users\Tej\Documents\Visual Studio 2013\Projects\ShoppingCart\ShoppingCart\Scripts/angular.js" />

(function () {
    'use strict';

    angular
        .module('app')
        .service('SystemService', systemService);

   // deferredService.$inject = ['$q'];

    function systemService(emitterService) {

        var service = {
            fireNavEvent: fireNavEvent
        };

        return service;

        function fireNavEvent(data) {
            emitterService.emit('nav.setVisibility', { visibility: false });
        }

    };
})();