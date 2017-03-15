(function () {
    'use strict';

    angular.module('app')
        .controller('NotificationConfCtrl', NotificationConfCtrl);

    NotificationConfCtrl.$inject = ['title', 'message', '$uibModalInstance'];

    function NotificationConfCtrl(title, message, $uibModalInstance) {
        var vm = this;
        vm.title = title;
        vm.message = message;
        
        vm.save = function() {
            $uibModalInstance.close();
        }

        vm.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }

        vm.close = function() {
            $uibModalInstance.dismiss('close');
        }
    }
})();