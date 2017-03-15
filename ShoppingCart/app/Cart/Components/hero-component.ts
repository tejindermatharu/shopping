import { downgradeComponent } from '@angular/upgrade/static';
import { HeroDetailComponent } from './test';
import { AdminEditController2 } from './admin-edit-component2';

/* . . . */

declare var angular: any;

angular.module('app')
    .directive(
    'heroDetail',
    downgradeComponent({ component: HeroDetailComponent }) 
    );

angular.module('app')
    .directive('adminEdit', downgradeComponent({
        component: AdminEditController2,
        inputs: ['dockable', 'product']
    }) as angular.IDirectiveFactory);
