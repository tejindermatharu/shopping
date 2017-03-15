﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { FormsModule } from '@angular/forms';

import { HeroDetailComponent } from './Cart/Components/test';
import { AdminEditController2 } from './Cart/Components/admin-edit-component2';

import './Migrate/downgrades';

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule,
        FormsModule
    ],
    declarations: [
        HeroDetailComponent,
        AdminEditController2
    ],
    entryComponents: [
        HeroDetailComponent,
        AdminEditController2
    ]
})
export class AppModule {
    ngDoBootstrap() { }
}