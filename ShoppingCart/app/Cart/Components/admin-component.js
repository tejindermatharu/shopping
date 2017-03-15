

(function (undefined) {
    'use strict';

    angular.module('app')
    .controller('userDetails', function ($scope) {
        $scope.age = 38;
    });

    angular.module('app')
        .component('adminComponent', {
            templateUrl: 'app/Cart/Templates/admin.html',
            controllerAs: "vm",
            controller: controller
        });

    function controller($scope, $timeout, $location, $window, adminRepository, genericDataService, emitterService, notificationFacade) {

        console.log('test');
        var vm = this;

        vm.$onInit = function () {
            var panel = new window.document.DraggablePanel('adminGrid');
        };
        
        vm.productList = [];
        vm.productAdded = false;
        vm.isAdminEditUndocked = false;
        vm.isAdminInputUndocked = false;
        
        vm.adminEditPanelOptions = { width: 1000 };

        vm.deletetest = function() {
              notificationFacade.confirm('Delete Order', 'Are you sure you want to delete this order?',
			     deleteOrder
			  , function (event) {

                      if (event === 'cancel') {
                          vm.status = 'Cancelled';
                      }
                      else if (event === 'close') {
                          vm.status = 'Closed';
                      }

              });
        };

        function deleteOrder() {
             vm.status = 'Yes';
        };

        vm.$onDestroy = function () {
            // clean up events
            //   emitterService.dispose();
        };


        

        //Handle docked event
        emitterService.listen('dock-panel', function(event) {
            $timeout(function () {


            }, 0);
        });

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

        $(window).on('add-product', function (event) {

            var data = new Object(angular.copy(event.originalEvent.args));
            vm.add(data);

            //emitterService.emit('dock-panel', 'admin-edit');
        });


        vm.add = function (event) {

            var data = event.product;

            genericDataService.postData(data).then(
            function (result) {
                success('Success');
                vm.productList.push(angular.copy(event.product));
                vm.productAdded = true;
                localStorage.setItem('add-product', JSON.stringify(event.product));
            },
            function (result) {
                error(result);
            });

            //adminRepository.save(
            //    data,
            //    function (result) {
            //        success('Success');
            //        vm.productList.push(angular.copy(event.product));
            //        vm.productAdded = true;
            //        localStorage.setItem('add-product', JSON.stringify(event.product));
            //    },
            //    function (result) {
            //        error(result);
            //    });


        };

        vm.delete = function (product) {

            adminRepository.delete(
                { name: product.Name },
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
