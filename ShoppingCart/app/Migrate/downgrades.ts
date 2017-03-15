import { downgradeComponent } from '@angular/upgrade/static';
import { downgradeInjectable } from '@angular/upgrade/static';
import { HeroDetailComponent } from "../Cart/Components/test";
import { AdminEditController2 } from "../Cart/Components/admin-edit-component2";
import { EmitterService } from  '../Cart/Services/emmiter-service';

declare var angular: any;

let appName = 'app';

angular.module(appName)
    .directive(
    'heroDetail',
    downgradeComponent({ component: HeroDetailComponent })
    );

angular.module(appName)
    .directive('adminEdit', downgradeComponent({
        component: AdminEditController2,
        inputs: ['dockable', 'product'],
        outputs: ['delete', 'editProd']
    }) as angular.IDirectiveFactory);


angular.module(appName)
    .factory('emitterService', downgradeInjectable(EmitterService));
