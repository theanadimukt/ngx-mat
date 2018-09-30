import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'dashboard', loadChildren: './component/home/home.module#HomeModule'},
      {path: 'profile', loadChildren: './component/profile/profile.module#ProfileModule'},
      {path: 'setting', loadChildren: './component/setting/setting.module#SettingModule'},
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];

