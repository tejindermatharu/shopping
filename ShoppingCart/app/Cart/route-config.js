(function () {
    'use strict';

    // configure our routes
    app.config(function ($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/home', {
                templateUrl: 'app/Cart/Html/admin.html',
                controller: 'adminController',
                controllerAs: 'vm'
            })
            .when('/shop', {
                templateUrl: 'app/Cart/Html/shop.html',
                controller: 'shopController',
                controllerAs: 'vm'
            })
            .otherwise({
                templateUrl: 'app/Cart/Html/admin.html',
                controller: 'adminController',
                controllerAs: 'vm'
            });
    });

})();