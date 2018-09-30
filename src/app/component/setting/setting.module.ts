import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SettingRoutes } from './setting.routing';
import { SettingComponent } from './setting.component';
import { MaterialModule } from '../../common/modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SettingRoutes),
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [
    SettingComponent
  ],
})
export class SettingModule { }
