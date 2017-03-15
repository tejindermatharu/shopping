/// <reference path="C:\Users\Tej\Documents\Visual Studio 2013\Projects\ShoppingCart\ShoppingCart\Scripts/angular.js" />


(function () {
    'use strict';

    angular
        .module('app')
        .service('shopService', shopService);

    shopService.$inject = ['deferredService', '$q'];

    function shopService(deferredService, $q) {
        
        var deferred = deferredService.deferred();

            var service = {
                addedToCart: addedToCart,
                onAdd: onAdd,
                fireOnAdd: fireOnAdd
        };

        return service;
     
        function addedToCart(addQuantity) {

            if (addQuantity) {
                deferred.notify(addQuantity);
            }

            return deferred.promise;
        }

        var callback = function () {};

        function onAdd(fn) {
            callback = fn;
        }

        function fireOnAdd(data)
        {
            callback(data);
        }
    };
})();