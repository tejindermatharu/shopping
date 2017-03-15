

(function () {
    'use strict';

    angular.module('app')
        .component('dockablePanelComponent', {
            templateUrl: 'app/Cart/Templates/dockable-panel.html',
            controllerAs: "vm",
            controller: controller,
            transclude: true,
            bindings: {
                url: '@',
                options: '<',
                title: '@',
                preProcess: '&'
            }
        });

    function controller($window, $timeout) {

        var vm = this;
        var popoutWindow;

        vm.isUndocked = false;

        vm.preProcessBeforeUnDocking = function()
        {
            if (vm.preProcess) {
                vm.preProcess();
            }
        };

        vm.undock = function () {

            $timeout(function () {

                var url = '#/' + vm.url;
                var windowOptions = {};

                var defaultOptions = {
                    width: 600,
                    height: 400,
                    menubar: 'no',
                    toolbar: 'no',
                    location: 'no',
                    personalbar: 'no',
                    resizable: 'yes',
                    scrollbars: 'no',
                    status: 'no'
                };

                //Override defualt options with any provided by the options binding
                angular.extend(windowOptions, defaultOptions, vm.options);

                vm.isUndocked = true;
                var serializedOptions = serializeWindowOptions(windowOptions);

                window.open(url, vm.title, serializedOptions);
                
                //Listen for window dock-event
                $(window).on('dock_event', function (event) {

                    $(window).off('dock_event');

                    if (event.originalEvent.args.windowName) {

                        //We need to check if the event is from the the same window lauched by this instance of the component
                        if (event.originalEvent.args.windowName === vm.url) {
                            $timeout(function () {

                                vm.isUndocked = false;
                            }, 0);
                        }
                    }
                });
            }, 0);

        };

        function serializeWindowOptions(windowOptions) {
            var windowOptionsString = [], key;

            for (key in windowOptions) {
                if (windowOptions.hasOwnProperty(key)) {
                    windowOptionsString.push(key + '=' + windowOptions[key]);
                }
            }

            return windowOptionsString.join(',');
        };
    }
})();