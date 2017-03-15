

namespace Emitter {

    export interface IEmitterService {
        emit: (name: string, data: any) => void;
        listen: (name: string, handler: Function) => any;
        dispose: () => void;
    }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class EmitterService implements Emitter.IEmitterService {

    private subjects = {};
    private hasOwnProp = {}.hasOwnProperty;

    constructor() { }

    public emit(name, data) {

        var fnName = this.createName(name);
        this.subjects[fnName] || (this.subjects[fnName] = new Subject());
        this.subjects[fnName].onNext(data);
    };

    public listen(name, handler) {

        var fnName = this.createName(name);
        this.subjects[fnName] || (this.subjects[fnName] = new Subject());
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

