import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeRoutes } from './home.routing';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../../common/modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [
    HomeComponent
  ],
})
export class HomeModule { }
