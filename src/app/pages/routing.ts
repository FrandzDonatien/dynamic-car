import { Routes } from "@angular/router";

const Routing: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadChildren: () => import('../modules/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'categories',
    loadChildren: () => import('../modules/categorie/categorie.module').then((m) => m.CategorieModule),
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
]

export {Routing};
