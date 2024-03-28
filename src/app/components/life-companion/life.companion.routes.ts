import {Route} from "@angular/router";

export const LIFE_COMPANION_ROUTES: Route[] = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(component => component.DashboardComponent)
  },
  {
    path: 'users',
    loadComponent: () => import('./user-list/user-list.component').then(component => component.UserListComponent)
  },
  {
    path: 'setting',
    loadComponent: () => import('./setting/setting.component').then(component => component.SettingComponent)
  }
]
