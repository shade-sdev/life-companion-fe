import {Route} from "@angular/router";

export const LIFE_COMPANION_ROUTES: Route[] = [
  {
    path: 'dashboard',
    loadComponent: () => import('./components/dashboard/dashboard.component').then(component => component.DashboardComponent)
  },
  {
    path: 'users',
    loadComponent: () => import('./components/user-list/user-list.component').then(component => component.UserListComponent)
  },
  {
    path: 'setting',
    loadComponent: () => import('./components/setting/setting.component').then(component => component.SettingComponent)
  }
]
