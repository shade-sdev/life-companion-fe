import {Routes} from '@angular/router';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    loadComponent: () => import('./components/life-companion/router-outlet/life-companion.component').then(parent => parent.LifeCompanionComponent),
    loadChildren: () => import('./components/life-companion/life.companion.routes').then(mod => mod.LIFE_COMPANION_ROUTES)
  }

// In the main application:
// export const ROUTES: Route[] = [
//   {path: 'admin', loadChildren: () => import('./admin/routes').then(mod => mod.ADMIN_ROUTES)},
//   // ...
// ];
//
// // In admin/routes.ts:
// export const ADMIN_ROUTES: Route[] = [
//   {path: 'home', component: AdminHomeComponent},
//   {path: 'users', component: AdminUsersComponent},
//   // ...
// ];
];
