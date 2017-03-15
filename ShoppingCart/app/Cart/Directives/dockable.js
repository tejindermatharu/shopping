(function () {
    'use strict';

    angular
        .module('app')
        .directive('docks', dockable);

   // addClearButton.$inject = ['$q'];

    function dockable() {

        return {
            restrict: 'A', //E = element, A = attribute, C = class, M = comment         
     
            link: link
        }

        function link($scope, element, attrs){
        

        }


    };
})();