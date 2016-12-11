(function () {
    'use strict';

    // configure our routes
    app.config(function ($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/home', {
                template: '<admin-component></admin-component>'
                //controller: 'adminController',
                //controllerAs: 'vm'
            })
            .when('/adminedit', {
                template: '<admin-edit-component></<admin-edit-component>',
                resolve: {
                    load: function (SystemService) {
                        SystemService.fireNavEvent({ showNav: false });
                    }
                }
            })
            .when('/shop', {
                templateUrl: 'app/Cart/Templates/shop.html',
                controller: 'shopController',
                controllerAs: 'vm'
            })
            .otherwise({
                //template: 'rferge'
                template: '<admin-component></admin-component>'
                //controller: 'adminController',
                //controllerAs: 'vm'
            });
    });

})();