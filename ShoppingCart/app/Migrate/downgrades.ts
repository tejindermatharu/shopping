import { downgradeComponent } from '@angular/upgrade/static';
import { HeroDetailComponent } from "../Cart/Components/test";
import { AdminEditController2 } from "../Cart/Components/admin-edit-component2";

declare var angular: any;

angular.module('app')
    .directive(
    'heroDetail',
    downgradeComponent({ component: HeroDetailComponent })
    );

angular.module('app')
    .directive('adminEdit', downgradeComponent({
        component: AdminEditController2,
        inputs: ['dockable', 'product'],
        outputs: ['delete', 'editProd']
    }) as angular.IDirectiveFactory);