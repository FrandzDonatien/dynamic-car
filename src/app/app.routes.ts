import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },


  {
    path: '',
    loadChildren: () => import('./layouts/layouts.module').then((m) => m.LayoutsModule),
    // canActivate: [authGuard],
  },
  {path: '**', redirectTo: 'error/404'},
];
