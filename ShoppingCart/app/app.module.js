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
var platform_browser_1 = require('@angular/platform-browser');
var static_1 = require('@angular/upgrade/static');
var forms_1 = require('@angular/forms');
var test_1 = require('./Cart/Components/test');
var admin_edit_component2_1 = require('./Cart/Components/admin-edit-component2');
var emmiter_service_1 = require('./Cart/Services/emmiter-service');
require('./Migrate/downgrades');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule.prototype.ngDoBootstrap = function () { };
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                static_1.UpgradeModule,
                forms_1.FormsModule
            ],
            declarations: [
                test_1.HeroDetailComponent,
                admin_edit_component2_1.AdminEditController2
            ],
            providers: [
                emmiter_service_1.EmitterService
            ],
            entryComponents: [
                test_1.HeroDetailComponent,
                admin_edit_component2_1.AdminEditController2
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxpQ0FBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUMxRCx1QkFBOEIseUJBQXlCLENBQUMsQ0FBQTtBQUN4RCxzQkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUU3QyxxQkFBb0Msd0JBQXdCLENBQUMsQ0FBQTtBQUM3RCxzQ0FBcUMseUNBQXlDLENBQUMsQ0FBQTtBQUMvRSxnQ0FBK0IsaUNBQWlDLENBQUMsQ0FBQTtBQUVqRSxRQUFPLHNCQUFzQixDQUFDLENBQUE7QUFvQjlCO0lBQUE7SUFFQSxDQUFDO0lBREcsaUNBQWEsR0FBYixjQUFrQixDQUFDO0lBbkJ2QjtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxnQ0FBYTtnQkFDYixzQkFBYTtnQkFDYixtQkFBVzthQUNkO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDBCQUFtQjtnQkFDbkIsNENBQW9CO2FBQ3ZCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLGdDQUFjO2FBQ2pCO1lBQ0QsZUFBZSxFQUFFO2dCQUNiLDBCQUFtQjtnQkFDbkIsNENBQW9CO2FBQ3ZCO1NBQ0osQ0FBQzs7aUJBQUE7SUFHRixnQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksaUJBQVMsWUFFckIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgVXBncmFkZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3VwZ3JhZGUvc3RhdGljJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBIZXJvRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9DYXJ0L0NvbXBvbmVudHMvdGVzdCc7XHJcbmltcG9ydCB7IEFkbWluRWRpdENvbnRyb2xsZXIyIH0gZnJvbSAnLi9DYXJ0L0NvbXBvbmVudHMvYWRtaW4tZWRpdC1jb21wb25lbnQyJztcclxuaW1wb3J0IHsgRW1pdHRlclNlcnZpY2UgfSBmcm9tICcuL0NhcnQvU2VydmljZXMvZW1taXRlci1zZXJ2aWNlJztcclxuXHJcbmltcG9ydCAnLi9NaWdyYXRlL2Rvd25ncmFkZXMnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgICAgIFVwZ3JhZGVNb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBIZXJvRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgIEFkbWluRWRpdENvbnRyb2xsZXIyXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgRW1pdHRlclNlcnZpY2VcclxuICAgIF0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgICAgICBIZXJvRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgIEFkbWluRWRpdENvbnRyb2xsZXIyXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG4gICAgbmdEb0Jvb3RzdHJhcCgpIHsgfVxyXG59Il19