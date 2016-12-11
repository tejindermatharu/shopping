

(function (undefined) {
    'use strict';

    angular.module('app')
        .component('adminComponent', {
            templateUrl: 'app/Cart/Templates/admin.html',
            controllerAs: "vm",
            controller: controller
        });

    function controller($scope, $location, $window, adminRepository, genericDataService, rx) {

        console.log('test');
        var vm = this;
        vm.productList = [];
        vm.productAdded = false;

        this.$onDestroy = function () {
            // clean up events
            //   emitterService.dispose();
        };

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
        function getAllProductsUsingPromises() {

            genericDataService.getDataPromise('adminRepository').then(
                function (data) {
                    if (data) {
                        vm.productList = data;
                        vm.productsReceived = true;
                    }
                }
            ).catch(
                function (data) {
                    vm.productsReceived = false;
                    //vm.productList = data;
                }
            );
        };

        function getAllProductsUsingRxJs() {

            var promise = genericDataService.getDataPromise('adminRepository');

            rx.Observable.fromPromise(promise)
                         .safeApply(
                                $scope,
                                function (data) {
                                    vm.productList = data;
                                })
                         .subscribe();

            //             .digest($scope, 'vm.productList')
            //             .subscribe(
            //function success(data) {

            //    //$scope.$apply(function() {
            //    vm.productList = data;
            //    // });
            //},
            //function error(err) {
            //    console.log('Error: ' + err);   
            //},
            //function complete(data) {
            //   // vm.productList = data;
            //    console.log('Completed');   
            //}
            //);
        }

        getAllProductsUsingPromises();
        //getAllProductsUsingRxJs();

        vm.undock = function () {
            $window.open('#/adminedit', '_blank', 'toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=600,height=400');
        };

        // Updates an item
        vm.update = function (event) {

            var item = event.product;

            item.editMode = false;

            adminRepository.update(
                item,
                function (result) {
                    success('Success');
                },
                function (result) {
                    error(result);
                });
        };

        vm.openAside = function () {
            var asideInstance = $aside.open({
                template: "<admin-footer-component></admin-footer-component>",
                //templateUrl: "app/Cart/Templates/adminTemp.html",
                //  controller: "adminController as vm",
                placement: "Left",
                size: "sm"
                //resolve: {
                //    data: { teamMembers: vm.teamMembers, teamName: vm.team.teamName }
                //}
            });
        };

        vm.add = function (event) {

            adminRepository.save(
                event.product,
                function (result) {
                    success('Success');
                    vm.productList.push(angular.copy(event.product));
                    vm.productAdded = true;
                },
                function (result) {
                    error(result);
                });
        };

        vm.delete = function (event) {

            var item = event.product;

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
