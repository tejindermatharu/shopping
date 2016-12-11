

(function () {
    'use strict';

    angular
        .module('app')
        .controller('shopController', shopController);

    shopController.$inject = ['$location', 'adminRepository', 'shopService','Store'];

    function shopController($location, adminRepository, shopService, Store) {

        var vm = this;

        vm.cartList = [];

        var success = function (text) {
            if (text === undefined) {
                text = '';
            }
            //toastr.success("Success. " + text);
        };

        var error = function (text) {
            if (text === undefined) {
                text = '';
            }
            // toastr.error("Error. " + text);
        };

        // Get all items from the server
        vm.getAllProducts = function () {

            vm.productList = adminRepository.query(function (success) {

            }, error());
        };

        vm.getAllProducts();

        vm.toggleEditMode = function (item) {
            // Toggle
            item.editMode = !item.editMode;
        };

        vm.addToCart = function (item, $event) {

            if ($event.value > 0) {
                
                vm.cartList.push(item);
                Store.dispatch({ type: 'nav', payload: { viewType: 'test', itemsCount: $event.value } });

                shopService.addedToCart($event.value);

                refreshCart();
            }
        };

        vm.removeFromCart = function (item) {

            item.Quantity = 0;

            // Remove from list
            var index = vm.cartList.indexOf(item);
            vm.cartList.splice(index, 1);

            refreshCart();

        };

        function refreshCart()
        {
            var list = "";

            angular.forEach(vm.cartList, function (item) {
                list += item.Quantity + " " + item.Name + "\n";
            });

            vm.cart = list;
        }

    }
})();

