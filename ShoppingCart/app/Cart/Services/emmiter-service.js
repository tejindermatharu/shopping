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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1taXRlci1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZW1taXRlci1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLElBQVUsT0FBTyxDQStDaEI7QUEvQ0QsV0FBVSxPQUFPLEVBQUMsQ0FBQztJQVFmO1FBS0ksd0JBQW9CLEVBQU87WUFBUCxPQUFFLEdBQUYsRUFBRSxDQUFLO1lBSG5CLGFBQVEsR0FBRyxFQUFFLENBQUM7WUFDZCxlQUFVLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQztRQUVSLENBQUM7UUFFekIsNkJBQUksR0FBWCxVQUFZLElBQUksRUFBRSxJQUFJO1lBRWxCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDekUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQzs7UUFFTSwrQkFBTSxHQUFiLFVBQWMsSUFBSSxFQUFFLE9BQU87WUFFdkIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUN6RSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEQsQ0FBQzs7UUFFTSxnQ0FBTyxHQUFkO1lBRUksR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNsQyxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7O1FBRU8sbUNBQVUsR0FBbEIsVUFBbUIsSUFBSTtZQUNuQixNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztRQUN0QixDQUFDO1FBRUwscUJBQUM7SUFBRCxDQUFDLEFBbENELElBa0NDO0lBRUQsT0FBTztTQUNGLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDYixPQUFPLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDbkQsQ0FBQyxFQS9DUyxPQUFPLEtBQVAsT0FBTyxRQStDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJcblxubmFtZXNwYWNlIEVtaXR0ZXIge1xuXG4gICAgZXhwb3J0IGludGVyZmFjZSBJRW1pdHRlclNlcnZpY2Uge1xuICAgICAgICBlbWl0OiAobmFtZTogc3RyaW5nLCBkYXRhOiBhbnkpID0+IHZvaWQ7XG4gICAgICAgIGxpc3RlbjogKG5hbWU6IHN0cmluZywgaGFuZGxlcjogRnVuY3Rpb24pID0+IGFueTtcbiAgICAgICAgZGlzcG9zZTogKCkgPT4gdm9pZDtcbiAgICB9XG5cbiAgICBjbGFzcyBFbWl0dGVyU2VydmljZSBpbXBsZW1lbnRzIElFbWl0dGVyU2VydmljZSB7XG5cbiAgICAgICAgcHJpdmF0ZSBzdWJqZWN0cyA9IHt9O1xuICAgICAgICBwcml2YXRlIGhhc093blByb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuICAgICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJ4OiBhbnkpIHsgfVxuXG4gICAgICAgIHB1YmxpYyBlbWl0KG5hbWUsIGRhdGEpIHtcblxuICAgICAgICAgICAgdmFyIGZuTmFtZSA9IHRoaXMuY3JlYXRlTmFtZShuYW1lKTtcbiAgICAgICAgICAgIHRoaXMuc3ViamVjdHNbZm5OYW1lXSB8fCAodGhpcy5zdWJqZWN0c1tmbk5hbWVdID0gbmV3IHRoaXMucnguU3ViamVjdCgpKTtcbiAgICAgICAgICAgIHRoaXMuc3ViamVjdHNbZm5OYW1lXS5vbk5leHQoZGF0YSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcHVibGljIGxpc3RlbihuYW1lLCBoYW5kbGVyKSB7XG5cbiAgICAgICAgICAgIHZhciBmbk5hbWUgPSB0aGlzLmNyZWF0ZU5hbWUobmFtZSk7XG4gICAgICAgICAgICB0aGlzLnN1YmplY3RzW2ZuTmFtZV0gfHwgKHRoaXMuc3ViamVjdHNbZm5OYW1lXSA9IG5ldyB0aGlzLnJ4LlN1YmplY3QoKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdWJqZWN0c1tmbk5hbWVdLnN1YnNjcmliZShoYW5kbGVyKTtcbiAgICAgICAgfTtcblxuICAgICAgICBwdWJsaWMgZGlzcG9zZSgpIHtcblxuICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiB0aGlzLnN1YmplY3RzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcC5jYWxsKHRoaXMuc3ViamVjdHMsIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViamVjdHNbcHJvcF0uZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBwcml2YXRlIGNyZWF0ZU5hbWUobmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuICckJyArIG5hbWU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGFuZ3VsYXJcbiAgICAgICAgLm1vZHVsZSgnYXBwJylcbiAgICAgICAgLnNlcnZpY2UoJ2VtaXR0ZXJTZXJ2aWNlJywgRW1pdHRlclNlcnZpY2UpO1xufVxuICJdfQ==