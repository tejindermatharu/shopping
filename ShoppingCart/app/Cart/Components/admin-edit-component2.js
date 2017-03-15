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
var AdminEditController2 = (function () {
    //static $inject = ['emitterService', 'genericDataService', '$window', '$timeout'];
    //constructor(private emitter: IEmitterService, private genericDataService: any, @Inject(Window) private _window: Window) {
    function AdminEditController2() {
        this.delete = new core_1.EventEmitter();
        this.editProd = new core_1.EventEmitter();
    }
    AdminEditController2.prototype.ngOnInit = function () {
        if (this.dockable) {
        }
    };
    AdminEditController2.prototype.deleteProduct = function (product) {
        this.delete.emit(product);
    };
    ;
    AdminEditController2.prototype.update = function (product) {
        this.editProd.emit(product);
    };
    ;
    //public updateOnEnter(product, event) {
    //    if (event.key === "Enter") {
    //        this.update(product);
    //    };
    //};
    AdminEditController2.prototype.toggleEditMode = function (item) {
        // Toggle
        item.editMode = !item.editMode;
    };
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AdminEditController2.prototype, "dockable", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], AdminEditController2.prototype, "product", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AdminEditController2.prototype, "delete", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AdminEditController2.prototype, "editProd", void 0);
    AdminEditController2 = __decorate([
        core_1.Component({
            selector: 'admin-edit',
            templateUrl: 'app/Cart/Templates/admin-edit2.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AdminEditController2);
    return AdminEditController2;
}());
exports.AdminEditController2 = AdminEditController2;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tZWRpdC1jb21wb25lbnQyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRtaW4tZWRpdC1jb21wb25lbnQyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQSxxQkFBc0UsZUFBZSxDQUFDLENBQUE7QUFVdEY7SUFRSSxtRkFBbUY7SUFHbkYsMkhBQTJIO0lBQzNIO1FBUFUsV0FBTSxHQUFHLElBQUksbUJBQVksRUFBWSxDQUFDO1FBQ3RDLGFBQVEsR0FBRyxJQUFJLG1CQUFZLEVBQVksQ0FBQztJQVFsRCxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUVJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBT3BCLENBQUM7SUFDTCxDQUFDO0lBRU0sNENBQWEsR0FBcEIsVUFBcUIsT0FBaUI7UUFFbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7SUFFTSxxQ0FBTSxHQUFiLFVBQWMsT0FBTztRQUVqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDOztJQUVELHdDQUF3QztJQUV4QyxrQ0FBa0M7SUFDbEMsK0JBQStCO0lBQy9CLFFBQVE7SUFDUixJQUFJO0lBRUcsNkNBQWMsR0FBckIsVUFBc0IsSUFBSTtRQUN0QixTQUFTO1FBQ1QsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbkMsQ0FBQzs7SUE5Q0Q7UUFBQyxZQUFLLEVBQUU7OzBEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O3lEQUFBO0lBRVI7UUFBQyxhQUFNLEVBQUU7O3dEQUFBO0lBQ1Q7UUFBQyxhQUFNLEVBQUU7OzBEQUFBO0lBYmI7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLHFDQUFxQztTQUlyRCxDQUFDOzs0QkFBQTtJQXlFRiwyQkFBQztBQUFELENBQUMsQUF4RUQsSUF3RUM7QUF4RVksNEJBQW9CLHVCQXdFaEMsQ0FBQTtBQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IElFbWl0dGVyU2VydmljZSA9IEVtaXR0ZXIuSUVtaXR0ZXJTZXJ2aWNlO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElQcm9kdWN0IH0gIGZyb20gJy4uL01vZGVscy9wcm9kdWN0JztcblxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FkbWluLWVkaXQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvQ2FydC9UZW1wbGF0ZXMvYWRtaW4tZWRpdDIuaHRtbCdcclxuICAgIC8vcHJvdmlkZXJzOiBbXHJcbiAgICAvLyAgICB7IHByb3ZpZGU6IFdpbmRvdywgdXNlVmFsdWU6IHdpbmRvdyB9XHJcbiAgICAvL11cclxufSlcbmV4cG9ydCBjbGFzcyBBZG1pbkVkaXRDb250cm9sbGVyMiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBkb2NrYWJsZTogYW55O1xuICAgIEBJbnB1dCgpIHByb2R1Y3Q6IElQcm9kdWN0W107XG5cbiAgICBAT3V0cHV0KCkgZGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxJUHJvZHVjdD4oKTtcbiAgICBAT3V0cHV0KCkgZWRpdFByb2QgPSBuZXcgRXZlbnRFbWl0dGVyPElQcm9kdWN0PigpO1xuXG4gICAgLy9zdGF0aWMgJGluamVjdCA9IFsnZW1pdHRlclNlcnZpY2UnLCAnZ2VuZXJpY0RhdGFTZXJ2aWNlJywgJyR3aW5kb3cnLCAnJHRpbWVvdXQnXTtcblxuXG4gICAgLy9jb25zdHJ1Y3Rvcihwcml2YXRlIGVtaXR0ZXI6IElFbWl0dGVyU2VydmljZSwgcHJpdmF0ZSBnZW5lcmljRGF0YVNlcnZpY2U6IGFueSwgQEluamVjdChXaW5kb3cpIHByaXZhdGUgX3dpbmRvdzogV2luZG93KSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgICAgICBpZiAodGhpcy5kb2NrYWJsZSkge1xuICAgICAgICAgICAgLy8gdGhpcy5nZXRBbGxQcm9kdWN0cygpO1xuXG4gICAgICAgICAgICAvL193aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIC8vICAgIHRoaXMuYWRkUHJvZHVjdFRvTGlzdChKU09OLnBhcnNlKGV2ZW50Lm5ld1ZhbHVlKSk7XG4gICAgICAgICAgICAvL30pO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZGVsZXRlUHJvZHVjdChwcm9kdWN0OiBJUHJvZHVjdCkge1xuXG4gICAgICAgIHRoaXMuZGVsZXRlLmVtaXQocHJvZHVjdCk7XG4gICAgfTtcblxuICAgIHB1YmxpYyB1cGRhdGUocHJvZHVjdCkge1xuXG4gICAgICAgIHRoaXMuZWRpdFByb2QuZW1pdChwcm9kdWN0KTtcbiAgICB9O1xuXG4gICAgLy9wdWJsaWMgdXBkYXRlT25FbnRlcihwcm9kdWN0LCBldmVudCkge1xuXG4gICAgLy8gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgLy8gICAgICAgIHRoaXMudXBkYXRlKHByb2R1Y3QpO1xuICAgIC8vICAgIH07XG4gICAgLy99O1xuXG4gICAgcHVibGljIHRvZ2dsZUVkaXRNb2RlKGl0ZW0pIHtcbiAgICAgICAgLy8gVG9nZ2xlXG4gICAgICAgIGl0ZW0uZWRpdE1vZGUgPSAhaXRlbS5lZGl0TW9kZTtcbiAgICB9O1xuXG4gICAgLy9wcml2YXRlIGFkZFByb2R1Y3RUb0xpc3QoaXRlbSkge1xuXG4gICAgLy8gICAgaWYgKGl0ZW0pIHtcbiAgICAvLyAgICAgICAvLyB0aGlzLiR0aW1lb3V0KCgpID0+IChcbiAgICAvLyAgICAgICAgdGhpcy5wcm9kdWN0TGlzdC5wdXNoKGl0ZW0pO1xuICAgIC8vICAgICAgICAvLyApLCAwKTtcbiAgICAvLyAgICB9XG4gICAgLy99XG5cbiAgICAvL3ByaXZhdGUgZ2V0QWxsUHJvZHVjdHMoKSB7XG5cbiAgICAvLyAgICAvL3RoaXMuZ2VuZXJpY0RhdGFTZXJ2aWNlLmdldERhdGFQcm9taXNlKCdhZG1pblJlcG9zaXRvcnknKS50aGVuKFxuICAgIC8vICAgIC8vICAgIGRhdGEgPT4ge1xuICAgIC8vICAgIC8vICAgICAgICBpZiAoZGF0YSkge1xuICAgIC8vICAgIC8vICAgICAgICAgICAgdGhpcy5wcm9kdWN0TGlzdCA9IGRhdGE7XG4gICAgLy8gICAgLy8gICAgICAgICAgICAvL3ZtLnByb2R1Y3RzUmVjZWl2ZWQgPSB0cnVlO1xuICAgIC8vICAgIC8vICAgICAgICB9XG4gICAgLy8gICAgLy8gICAgfVxuICAgIC8vICAgIC8vKS5jYXRjaChkYXRhID0+IHsgfVxuXG4gICAgLy8gICAgLy8gICAgKTtcbiAgICAvL307XG59O1xuIl19