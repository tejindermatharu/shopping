

(function () {
    'use strict';

    angular
        .module('app')
        .component('adminComponent',
                    {
                        templateUrl: "app/Cart/Html/admin.html",
                        controller: controller,
                        controllerAs: "vm"
                    });

    //adminComponent.$inject = ['$location', 'adminComponent'];

    function controller($location, adminRepository) {

        var vm = this;

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

        // Updates an item
        vm.update = function (item) {
            item.editMode = false;

            adminRepository.update(
              item,
              function (result) {
                  success('Success');
              },
              function (result) {
                  error(result);
              });
        }

        vm.add = function () {

            vm.productList.push(angular.copy(vm.product));

            adminRepository.save(
              vm.product,
                  function (result) {
                      success('Success');
                      vm.product = null;
                  },
                  function (result) {
                      error(result);
                  });
        };

        vm.delete = function (item) {
            adminRepository.delete(
                  { name: item.Name },
                  function (result) {
                      success('Success');
                      // Remove from list
                      var index = vm.productList.indexOf(item);
                      vm.productList.splice(index, 1);
                  },
                  function (result) {
                      error(result);
                  });
        };
    }
})();


