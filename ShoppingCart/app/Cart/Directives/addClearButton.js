
/// <reference path="C:\Users\Tej\Documents\Visual Studio 2013\Projects\ShoppingCart\ShoppingCart\Scripts/angular.js" />


(function () {
    'use strict';

    angular
        .module('app')
        .directive('addClearButton', addClearButton);

    addClearButton.$inject = ['$q'];

    function addClearButton($q) {

        return {
            restrict: 'E', //E = element, A = attribute, C = class, M = comment         
            scope: {
                //@ reads the attribute value, = provides two-way binding, & works with functions
                title: '@'
            },          
            link: link
        }

        function link($scope, element, attrs){
        

        }


    };
})();