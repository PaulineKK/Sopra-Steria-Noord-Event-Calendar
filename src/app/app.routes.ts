import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'admin',
    component: AdminPageComponent,
  },
];
