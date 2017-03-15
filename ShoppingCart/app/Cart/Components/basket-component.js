

(function () {
    'use strict';

    angular.module('app')
        .component('basketComponent', {
            templateUrl: 'app/Cart/Templates/basket.html',
            controllerAs: "vm",
            controller: controller
        });

    function controller() {

        var vm = this;
    }
})();