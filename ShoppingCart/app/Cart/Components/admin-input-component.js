
(function () {
    'use strict';

    angular.module('app')
        .component('adminInputComponent', {
            templateUrl: 'app/Cart/Templates/admin-input.html',
            controllerAs: "vm",
            bindings: {
                productAdded: '<',
                addProd: '&',
                dockable: '@'
            },
            controller: controller,
            transclude: true
        });

    function controller($transclude, $element) {
        var vm = this;

        vm.test = 12;

        $transclude(function (transEl, transScope) {
            // Set something property
            transScope.test = vm.test;
            // Now append transcluded element to your element
            $element.find('#additionalContent').append(transEl);
        });

        vm.add = function addProduct() {

            if (vm.dockable) {
                var event,
                    eventName = 'add-product';

                event = window.opener.document.createEvent('HTMLEvents');
                event.initEvent(eventName, true, true);

                event.eventName = eventName;
                event.args = { product: vm.product };
                window.opener.dispatchEvent(event);
            }

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