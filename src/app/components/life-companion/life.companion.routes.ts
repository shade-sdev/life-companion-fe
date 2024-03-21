import {Route} from "@angular/router";

export const LIFE_COMPANION_ROUTES: Route[] = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(component => component.DashboardComponent)
  }
]
