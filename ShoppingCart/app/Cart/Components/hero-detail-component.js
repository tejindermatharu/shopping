//import { HeroDetailComponent } from './test';
/////* . . . */
//import { downgradeComponent } from '@angular/upgrade/static';
"use strict";
var test_1 = require('./test');
/* . . . */
var static_1 = require('@angular/upgrade/static');
angular.module('heroApp', [])
    .directive('heroDetail', static_1.downgradeComponent({ component: test_1.HeroDetailComponent }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby1kZXRhaWwtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVyby1kZXRhaWwtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyxlQUFlO0FBQ2YsK0RBQStEOztBQUUvRCxxQkFBb0MsUUFBUSxDQUFDLENBQUE7QUFDN0MsV0FBVztBQUNYLHVCQUFtQyx5QkFBeUIsQ0FBQyxDQUFBO0FBRTdELE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztLQUN4QixTQUFTLENBQ1YsWUFBWSxFQUNaLDJCQUFrQixDQUFDLEVBQUUsU0FBUyxFQUFFLDBCQUFtQixFQUFFLENBQThCLENBQ2xGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7IEhlcm9EZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL3Rlc3QnO1xyXG4vLy8vLyogLiAuIC4gKi9cclxuLy9pbXBvcnQgeyBkb3duZ3JhZGVDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci91cGdyYWRlL3N0YXRpYyc7XHJcblxyXG5pbXBvcnQgeyBIZXJvRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi90ZXN0JztcclxuLyogLiAuIC4gKi9cclxuaW1wb3J0IHsgZG93bmdyYWRlQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvdXBncmFkZS9zdGF0aWMnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2hlcm9BcHAnLCBbXSlcclxuICAgIC5kaXJlY3RpdmUoXHJcbiAgICAnaGVyb0RldGFpbCcsXHJcbiAgICBkb3duZ3JhZGVDb21wb25lbnQoeyBjb21wb25lbnQ6IEhlcm9EZXRhaWxDb21wb25lbnQgfSkgYXMgYW5ndWxhci5JRGlyZWN0aXZlRmFjdG9yeVxyXG4gICAgKTsiXX0=