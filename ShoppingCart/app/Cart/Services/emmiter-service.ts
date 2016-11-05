

namespace Emitter {

    export interface IEmitterService {
        emit: (name: string, data: any) => void;
        listen: (name: string, handler: Function) => any;
        dispose: () => void;
    }

    class EmitterService implements IEmitterService {

        private subjects = {};
        private hasOwnProp = {}.hasOwnProperty;

        constructor(private rx: any) { }

        public emit(name, data) {

            var fnName = this.createName(name);
            this.subjects[fnName] || (this.subjects[fnName] = new this.rx.Subject());
            this.subjects[fnName].onNext(data);
        };

        public listen(name, handler) {

            var fnName = this.createName(name);
            this.subjects[fnName] || (this.subjects[fnName] = new this.rx.Subject());
            return this.subjects[fnName].subscribe(handler);
        };

        public dispose() {

            for (var prop in this.subjects) {
                if (this.hasOwnProp.call(this.subjects, prop)) {
                    this.subjects[prop].dispose();
                }
            }
        };

        private createName(name) {
            return '$' + name;
        }

    }

    angular
        .module('app')
        .service('emitterService', EmitterService);
}
 