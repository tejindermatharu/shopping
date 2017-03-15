

(function () {
    'use strict';

    angular.module('app')
        .component('mainComponent', {
            templateUrl: 'app/Cart/Templates/main.html',
            controllerAs: "vm",
            controller: controller
        });

    function controller(emitterService) {

        var vm = this;
        vm.visibility = true;

        emitterService.listen('nav.setVisibility', function (event) {
            vm.visibility = event.visibility;
        });
    }
})();