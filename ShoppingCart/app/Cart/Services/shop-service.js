/// <reference path="C:\Users\Tej\Documents\Visual Studio 2013\Projects\ShoppingCart\ShoppingCart\Scripts/angular.js" />


(function () {
    'use strict';

    angular
        .module('app')
        .service('shopService', shopService);

    shopService.$inject = ['$q'];

    function shopService($q) {
        
        var deferred = $q.defer();

            var service = {
            addToCart: addToCart,
            subcribeToAddToCart: subcribeToAddToCart
        };

        return service;


        function subcribeToAddToCart() {
            return deferred.promise;
        };        

        function addToCart(addQuantity) {

            if (addQuantity) {
                deferred.notify(addQuantity);
            }
        }

    };
})();