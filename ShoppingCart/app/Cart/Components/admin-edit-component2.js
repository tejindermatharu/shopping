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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var emmiter_service_1 = require('../Services/emmiter-service');
var AdminEditController2 = (function () {
    function AdminEditController2(emitter, _window) {
        this.emitter = emitter;
        this._window = _window;
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
            templateUrl: 'app/Cart/Templates/admin-edit2.html',
            providers: [
                { provide: Window, useValue: window }
            ]
        }),
        __param(1, core_1.Inject(Window)), 
        __metadata('design:paramtypes', [emmiter_service_1.EmitterService, Window])
    ], AdminEditController2);
    return AdminEditController2;
}());
exports.AdminEditController2 = AdminEditController2;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tZWRpdC1jb21wb25lbnQyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRtaW4tZWRpdC1jb21wb25lbnQyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxxQkFBc0UsZUFBZSxDQUFDLENBQUE7QUFFdEYsZ0NBQStCLDZCQUE2QixDQUFDLENBQUE7QUFTN0Q7SUFRSSw4QkFBb0IsT0FBdUIsRUFBMEIsT0FBZTtRQUFoRSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUEwQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBSDFFLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQVksQ0FBQztRQUN0QyxhQUFRLEdBQUcsSUFBSSxtQkFBWSxFQUFZLENBQUM7SUFJbEQsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFFSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQU9wQixDQUFDO0lBQ0wsQ0FBQztJQUVNLDRDQUFhLEdBQXBCLFVBQXFCLE9BQWlCO1FBRWxDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O0lBRU0scUNBQU0sR0FBYixVQUFjLE9BQU87UUFFakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7SUFFRCx3Q0FBd0M7SUFFeEMsa0NBQWtDO0lBQ2xDLCtCQUErQjtJQUMvQixRQUFRO0lBQ1IsSUFBSTtJQUVHLDZDQUFjLEdBQXJCLFVBQXNCLElBQUk7UUFDdEIsU0FBUztRQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ25DLENBQUM7O0lBMUNEO1FBQUMsWUFBSyxFQUFFOzswREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzt5REFBQTtJQUVSO1FBQUMsYUFBTSxFQUFFOzt3REFBQTtJQUNUO1FBQUMsYUFBTSxFQUFFOzswREFBQTtJQWJiO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSxxQ0FBcUM7WUFDbEQsU0FBUyxFQUFFO2dCQUNQLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2FBQ3hDO1NBQ0osQ0FBQzttQkFTZ0QsYUFBTSxDQUFDLE1BQU0sQ0FBQzs7NEJBVDlEO0lBcUVGLDJCQUFDO0FBQUQsQ0FBQyxBQXBFRCxJQW9FQztBQXBFWSw0QkFBb0IsdUJBb0VoQyxDQUFBO0FBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJUHJvZHVjdCB9ICBmcm9tICcuLi9Nb2RlbHMvcHJvZHVjdCc7XHJcbmltcG9ydCB7IEVtaXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvZW1taXRlci1zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhZG1pbi1lZGl0JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL0NhcnQvVGVtcGxhdGVzL2FkbWluLWVkaXQyLmh0bWwnLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgeyBwcm92aWRlOiBXaW5kb3csIHVzZVZhbHVlOiB3aW5kb3cgfVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRtaW5FZGl0Q29udHJvbGxlcjIgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIEBJbnB1dCgpIGRvY2thYmxlOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwcm9kdWN0OiBJUHJvZHVjdFtdO1xyXG5cclxuICAgIEBPdXRwdXQoKSBkZWxldGUgPSBuZXcgRXZlbnRFbWl0dGVyPElQcm9kdWN0PigpO1xyXG4gICAgQE91dHB1dCgpIGVkaXRQcm9kID0gbmV3IEV2ZW50RW1pdHRlcjxJUHJvZHVjdD4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVtaXR0ZXI6IEVtaXR0ZXJTZXJ2aWNlLCBASW5qZWN0KFdpbmRvdykgcHJpdmF0ZSBfd2luZG93OiBXaW5kb3cpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuIFxyXG4gICAgICAgIGlmICh0aGlzLmRvY2thYmxlKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZ2V0QWxsUHJvZHVjdHMoKTtcclxuXHJcbiAgICAgICAgICAgIC8vX3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICB0aGlzLmFkZFByb2R1Y3RUb0xpc3QoSlNPTi5wYXJzZShldmVudC5uZXdWYWx1ZSkpO1xyXG4gICAgICAgICAgICAvL30pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZVByb2R1Y3QocHJvZHVjdDogSVByb2R1Y3QpIHtcclxuXHJcbiAgICAgICAgdGhpcy5kZWxldGUuZW1pdChwcm9kdWN0KTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShwcm9kdWN0KSB7XHJcblxyXG4gICAgICAgIHRoaXMuZWRpdFByb2QuZW1pdChwcm9kdWN0KTtcclxuICAgIH07XHJcblxyXG4gICAgLy9wdWJsaWMgdXBkYXRlT25FbnRlcihwcm9kdWN0LCBldmVudCkge1xyXG5cclxuICAgIC8vICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgLy8gICAgICAgIHRoaXMudXBkYXRlKHByb2R1Y3QpO1xyXG4gICAgLy8gICAgfTtcclxuICAgIC8vfTtcclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlRWRpdE1vZGUoaXRlbSkge1xyXG4gICAgICAgIC8vIFRvZ2dsZVxyXG4gICAgICAgIGl0ZW0uZWRpdE1vZGUgPSAhaXRlbS5lZGl0TW9kZTtcclxuICAgIH07XHJcblxyXG4gICAgLy9wcml2YXRlIGFkZFByb2R1Y3RUb0xpc3QoaXRlbSkge1xyXG5cclxuICAgIC8vICAgIGlmIChpdGVtKSB7XHJcbiAgICAvLyAgICAgICAvLyB0aGlzLiR0aW1lb3V0KCgpID0+IChcclxuICAgIC8vICAgICAgICB0aGlzLnByb2R1Y3RMaXN0LnB1c2goaXRlbSk7XHJcbiAgICAvLyAgICAgICAgLy8gKSwgMCk7XHJcbiAgICAvLyAgICB9XHJcbiAgICAvL31cclxuXHJcbiAgICAvL3ByaXZhdGUgZ2V0QWxsUHJvZHVjdHMoKSB7XHJcblxyXG4gICAgLy8gICAgLy90aGlzLmdlbmVyaWNEYXRhU2VydmljZS5nZXREYXRhUHJvbWlzZSgnYWRtaW5SZXBvc2l0b3J5JykudGhlbihcclxuICAgIC8vICAgIC8vICAgIGRhdGEgPT4ge1xyXG4gICAgLy8gICAgLy8gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAvLyAgICAvLyAgICAgICAgICAgIHRoaXMucHJvZHVjdExpc3QgPSBkYXRhO1xyXG4gICAgLy8gICAgLy8gICAgICAgICAgICAvL3ZtLnByb2R1Y3RzUmVjZWl2ZWQgPSB0cnVlO1xyXG4gICAgLy8gICAgLy8gICAgICAgIH1cclxuICAgIC8vICAgIC8vICAgIH1cclxuICAgIC8vICAgIC8vKS5jYXRjaChkYXRhID0+IHsgfVxyXG5cclxuICAgIC8vICAgIC8vICAgICk7XHJcbiAgICAvL307XHJcbn07XHJcbiJdfQ==