import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ProfileRoutes } from './profile.routing';
import { ProfileComponent } from './profile.component';
import { MaterialModule } from '../../common/modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ProfileRoutes),
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [
    ProfileComponent
  ],
})
export class ProfileModule { }
