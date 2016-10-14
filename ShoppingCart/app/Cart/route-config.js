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
            .when('/shop', {
                templateUrl: 'app/Cart/Html/shop.html',
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