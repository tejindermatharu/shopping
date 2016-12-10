(function () {
    'use strict';

    angular.module('app').service('genericDataService', ['$injector', '$http', '$q', '$timeout', genericDataService]);

    function genericDataService($injector, $http, $q, $timeout) {

        function getRepositoryInstance(repoName) {

            if (!repoName) {
                throw new Error("Repository name must be defined when using generic repository");
            }

            return $injector.get(repoName);
        };

        function handleGenericError() {
            //Handle in a generic way
        };

        var fakeHttpService = function () {

            var deffered = $q.defer();



            return deffered.promise;
        };

        var getDataPromise = function (fullRepoName) {

            var promise = getRepositoryInstance(fullRepoName).query().$promise.then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                return $q.resolve(response);
            }).catch(function(response) {
                //return response;

                var error = {
                    response: response,
                    handled: true,
                    reasonCode: 12,
                    sendToast: false
                };

                return $q.reject(error);
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });

            //promise.catch(
            //    function () {
            //        handleGenericError();
            //        console.error('there was a problem');
            //    });

            return promise;
        };

        return {
            getDataPromise: getDataPromise
        }
    }
})();
