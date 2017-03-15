

(function () {
    'use strict';

    angular.module('app')
        .component('subTotalComponent', {
            templateUrl: 'app/Cart/Templates/sub-total.html',
            controllerAs: "vm",
            controller: controller,
            bindings: {
                totalNumberItems: '<',
                totalPrice: '<'
            }
        });

    function controller() {
        var vm = this;
    }
})();