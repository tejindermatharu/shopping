

(function () {
    'use strict';

    angular.module('app')
        .component('cartComponent', {
            templateUrl: 'app/Cart/Templates/cart.html',
            controllerAs: "vm",
            controller: controller
        });

    function controller(cartService) {

        var vm = this;

        function getTotalPrice(acc, current) {
            var accumulatedValue = angular.isDefined(acc.Quantity) ? acc.Price * acc.Quantity : acc;
            return (accumulatedValue) + (current.Price * current.Quantity);
        };

        function getTotalNumberOfItems(acc, current) {
            var accumulatedValue = angular.isDefined(acc.Quantity) ? acc.Quantity : acc;
            return (accumulatedValue + current.Quantity);
        };

        function updateSubtotal() {
            if (vm.cartList && vm.cartList.length > 0) {

                if (vm.cartList.length === 1) {

                    var item = vm.cartList[0];

                    vm.totalPrice = item.Price * item.Quantity;
                    vm.totalNumberItems = item.Quantity;

                } else {

                    vm.totalPrice = vm.cartList.reduce(function (acc, cur) {
                        return getTotalPrice(acc, cur);
                    });

                    vm.totalNumberItems = vm.cartList.reduce(function (acc, cur) {
                        return getTotalNumberOfItems(acc, cur);
                    });
                }

            }
            else {
                vm.totalNumberItems = 0;
            };
        };

        vm.cartList = cartService.getItems();

        vm.quantityChanged = function (event) {
            updateSubtotal();
        };

        vm.deleteItem = function (event) {
            // Remove from list
            var index = vm.cartList.indexOf(event.item);
            vm.cartList.splice(index, 1);
            updateSubtotal();
        };

        updateSubtotal();

    }
})();