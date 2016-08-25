


(function () {
    'use strict';

    angular
        .module('app')
        .factory('adminRepository', adminRepository);

    adminRepository.$inject = ['$resource'];

    function adminRepository($resource) {
        return $resource('/api/product/',
        {
            // default URL params
            // @ Indicates that the value should be obtained from a data property
            id: '@Id'
        },
        {
            // add update to actions (is not defined by default)
            'update': { method: 'PUT' }
        })
    }
})();