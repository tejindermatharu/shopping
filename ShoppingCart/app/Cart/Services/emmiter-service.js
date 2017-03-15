"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
var EmitterService = (function () {
    function EmitterService() {
        this.subjects = {};
        this.hasOwnProp = {}.hasOwnProperty;
    }
    EmitterService.prototype.emit = function (name, data) {
        var fnName = this.createName(name);
        this.subjects[fnName] || (this.subjects[fnName] = new Subject_1.Subject());
        this.subjects[fnName].onNext(data);
    };
    ;
    EmitterService.prototype.listen = function (name, handler) {
        var fnName = this.createName(name);
        this.subjects[fnName] || (this.subjects[fnName] = new Subject_1.Subject());
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
    EmitterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], EmitterService);
    return EmitterService;
}());
exports.EmitterService = EmitterService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1taXRlci1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZW1taXRlci1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFXQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0Msd0JBQXdCLGNBQWMsQ0FBQyxDQUFBO0FBR3ZDO0lBS0k7UUFIUSxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsZUFBVSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUM7SUFFdkIsQ0FBQztJQUVWLDZCQUFJLEdBQVgsVUFBWSxJQUFJLEVBQUUsSUFBSTtRQUVsQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7SUFFTSwrQkFBTSxHQUFiLFVBQWMsSUFBSSxFQUFFLE9BQU87UUFFdkIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwRCxDQUFDOztJQUVNLGdDQUFPLEdBQWQ7UUFFSSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUM3QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNsQyxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7O0lBRU8sbUNBQVUsR0FBbEIsVUFBbUIsSUFBSTtRQUNuQixNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBakNMO1FBQUMsaUJBQVUsRUFBRTs7c0JBQUE7SUFrQ2IscUJBQUM7QUFBRCxDQUFDLEFBakNELElBaUNDO0FBakNZLHNCQUFjLGlCQWlDMUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxubmFtZXNwYWNlIEVtaXR0ZXIge1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUVtaXR0ZXJTZXJ2aWNlIHtcclxuICAgICAgICBlbWl0OiAobmFtZTogc3RyaW5nLCBkYXRhOiBhbnkpID0+IHZvaWQ7XHJcbiAgICAgICAgbGlzdGVuOiAobmFtZTogc3RyaW5nLCBoYW5kbGVyOiBGdW5jdGlvbikgPT4gYW55O1xyXG4gICAgICAgIGRpc3Bvc2U6ICgpID0+IHZvaWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFbWl0dGVyU2VydmljZSBpbXBsZW1lbnRzIEVtaXR0ZXIuSUVtaXR0ZXJTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIHN1YmplY3RzID0ge307XHJcbiAgICBwcml2YXRlIGhhc093blByb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIHB1YmxpYyBlbWl0KG5hbWUsIGRhdGEpIHtcclxuXHJcbiAgICAgICAgdmFyIGZuTmFtZSA9IHRoaXMuY3JlYXRlTmFtZShuYW1lKTtcclxuICAgICAgICB0aGlzLnN1YmplY3RzW2ZuTmFtZV0gfHwgKHRoaXMuc3ViamVjdHNbZm5OYW1lXSA9IG5ldyBTdWJqZWN0KCkpO1xyXG4gICAgICAgIHRoaXMuc3ViamVjdHNbZm5OYW1lXS5vbk5leHQoZGF0YSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBsaXN0ZW4obmFtZSwgaGFuZGxlcikge1xyXG5cclxuICAgICAgICB2YXIgZm5OYW1lID0gdGhpcy5jcmVhdGVOYW1lKG5hbWUpO1xyXG4gICAgICAgIHRoaXMuc3ViamVjdHNbZm5OYW1lXSB8fCAodGhpcy5zdWJqZWN0c1tmbk5hbWVdID0gbmV3IFN1YmplY3QoKSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViamVjdHNbZm5OYW1lXS5zdWJzY3JpYmUoaGFuZGxlcik7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG5cclxuICAgICAgICBmb3IgKHZhciBwcm9wIGluIHRoaXMuc3ViamVjdHMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcC5jYWxsKHRoaXMuc3ViamVjdHMsIHByb3ApKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1YmplY3RzW3Byb3BdLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVOYW1lKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gJyQnICsgbmFtZTtcclxuICAgIH1cclxufVxyXG5cclxuIl19