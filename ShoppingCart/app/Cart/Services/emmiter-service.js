var Emitter;
(function (Emitter) {
    var EmitterService = (function () {
        function EmitterService(rx) {
            this.rx = rx;
            this.subjects = {};
            this.hasOwnProp = {}.hasOwnProperty;
        }
        EmitterService.prototype.emit = function (name, data) {
            var fnName = this.createName(name);
            this.subjects[fnName] || (this.subjects[fnName] = new this.rx.Subject());
            this.subjects[fnName].onNext(data);
        };
        ;
        EmitterService.prototype.listen = function (name, handler) {
            var fnName = this.createName(name);
            this.subjects[fnName] || (this.subjects[fnName] = new this.rx.Subject());
            return this.subjects[fnName].subscribe(handler);
        };
        ;
        EmitterService.prototype.dispose = function () {
            for (var prop in this.subjects) {
                if (this.hasOwnProp.call(this.subjects, prop)) {
                    this.subjects[prop].dispose();
                }
            }
        };
        ;
        EmitterService.prototype.createName = function (name) {
            return '$' + name;
        };
        return EmitterService;
    }());
    angular
        .module('app')
        .service('emitterService', EmitterService);
})(Emitter || (Emitter = {}));
//# sourceMappingURL=emmiter-service.js.map