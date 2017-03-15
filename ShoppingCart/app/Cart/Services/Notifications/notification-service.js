(function () {
    'use strict';

    angular
        .module('app')
        .factory('notificationFacade', notificationFacade);


    notificationFacade.$inject = ['$uibModal'];

    function notificationFacade(modal) {
        var notificationService = {
            confirm: confirm
        };


        return notificationService;
        ///////////////////////////////

        function confirm(title, message, callback, dismiss) {
            _displayModalConfirm(title, message, callback, dismiss);
        }
        
        function _displayModalConfirm(title, message, callback, dismiss) {
            var editorModal = modal.open({
                animation: true,
                backdrop: 'static',
                templateUrl: 'app/Cart/Templates/notification-confirm.html',
                controller: 'NotificationConfCtrl',
                controllerAs: 'vm',
                size: 'sm',
                resolve: {
                    'title': function () {
                        return title;
                    },
                    'message': function () {
                        return message;
                    }
                }
            });

            editorModal.result.then(closed, dismissed);

            function closed(e) {
                if (typeof callback === 'function') {
                    callback('yes');
                }
            }

            function dismissed(event) {
                if (typeof dismiss === 'function') {
                    dismiss(event);
                }
            }
        }
    }
})();