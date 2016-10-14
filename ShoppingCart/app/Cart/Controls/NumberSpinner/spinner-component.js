(function () {
    'use strict';

    angular.module('app')
        .component('numberSpinner', {
            templateUrl: 'spinner.html',
            controllerAs: "vm",
            bindings: {
                initialValue: '=',
                config: '<',
                onChange: '&'
            },
            controller: controller
        });

    function controller() {
        var vm = this;
        var options = {};
        vm.value = this.initialValue;

        var defaults = {
            minValue: null,
            maxValue: null
        };

        options = angular.extend({}, defaults, vm.config);

        vm.onValueChanged = function () {
            valueChanged();
        };

        vm.clickUp = function () {

            //Don't allows values more than maxValue if specified
            if (options.maxValue && parseInt(options.maxValue) !== 'NaN' && vm.value >= options.maxValue) {
                return;
            }

            vm.value++;
            valueChanged();
        };

        vm.clickDown = function () {

            //Don't allows values less than minValue if specified
            if (options.minValue && parseInt(options.minValue) !== 'NaN' && vm.value <= options.minValue) {
                return;
            }

            vm.value--;
            valueChanged();
        };

        function valueChanged() {
            vm.onChange({ $event: { value: vm.value } });
        };
    }
})();