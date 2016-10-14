
    
var app = angular.module('app', ['ngRoute', 'ngResource']);

app.config(["$provide", function ($provide) {
    // Extend the $exceptionHandler service to also display a toast.
    $provide.decorator("$exceptionHandler", ["$delegate", extendExceptionHandler]);
    function extendExceptionHandler($delegate) {
        //var appErrorPrefix = config.appErrorPrefix;
        //var logError = logger.getLogFn("app", "error");
        return function (exception, cause) {
            $delegate(exception, cause);
            //if (appErrorPrefix && exception.message.indexOf(appErrorPrefix) === 0) {
            //    return;
            //}
            //var errorData = { exception: exception, cause: cause };
            //var msg = appErrorPrefix + exception.message;
            //logError(msg, errorData, true);
        };
    }
}]);

//    app.config(["$provide", "appConfig", function ($provide, appConfig) {
app.config(["$provide", function ($provide, appConfig) {
    return $provide.decorator("$http", ["$delegate", function ($delegate) {
        var get = $delegate.get;
        $delegate.get = function (url, config) {
            if (~url.indexOf('app/') || ~url.indexOf('script/')) {
                url += (url.indexOf("?") === -1 ? "?" : "&");
               // url += "v=" + appConfig.version;
                url += "v=" + 1.2;
            }
            return get(url, config);
        };
        return $delegate;
    }]);
}]);
