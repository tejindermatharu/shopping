
(function () {
    'use strict';

    angular.module('app')
        .component('dockable', {
            templateUrl: 'app/Cart/Templates/dockable-window.html',
            controllerAs: "vm",
            controller: controller,
            bindings: {
                windowName: '@'
            },
            transclude: true
        });

    function controller(SystemService) {

        var vm = this;
        SystemService.fireNavEvent({ showNav: false });

        vm.dock = function() {

            var event,
                eventName = 'dock_event' + windowName;

            event = window.opener.document.createEvent('HTMLEvents');
            event.initEvent(eventName, true, true);

            event.eventName = eventName;
            event.args = { windowName: vm.windowName };
            window.opener.dispatchEvent(event);

            window.close();
        };

    }
})();