(function () {
    'use strict';

    var routes = {
        ADMIN_EDIT: 'adminedit',
        ADMIN_INPUT: 'admininput',
        BASKET: 'basket'
    };

    // configure our routes
    app.config(function ($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/home', {
                template: '<admin-component></admin-component>'
            })
            .when('/' + routes.ADMIN_EDIT, {
                template: '<dockable window-name=' + routes.ADMIN_EDIT + ' ><admin-edit-component dockable="true"></<admin-edit-component>'
            })
            .when('/' + routes.ADMIN_INPUT, {
                 template: '<dockable window-name=' + routes.ADMIN_INPUT + '><admin-input-component dockable="true"></<admin-edit-component>'
            })
            .when('/' + routes.BASKET, {
                 template: '<dockable window-name=' + routes.BASKET + '><basket-component></<basket-component>'
            })
            .when('/shop', {
                templateUrl: 'app/Cart/Templates/shop.html',
                controller: 'shopController',
                controllerAs: 'vm'
            })
            .when('/user', {
               template: '<hero-detail></hero-detail>'
            })
            .otherwise({
                template: '<admin-component></admin-component>'
            });
    });

})();