
(function () {
    'use strict';

    angular.module('app')
        .component('adminInputComponent', {
            templateUrl: 'app/Cart/Templates/admin-input.html',
            controllerAs: "vm",
            bindings: {
                productAdded: '<',
                addProd: '&'
            },
            controller: controller
        });

    function controller() {
        var vm = this;

        vm.add = function addProduct() {

            vm.addProd({
                $event: {
                    product: vm.product
                }
            });
        };

        vm.$onChanges = function (changes) {

            if (changes.productAdded.currentValue === true) {
                vm.product = null;
            }

        };

    }
})();