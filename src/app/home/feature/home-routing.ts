import { Routes } from '@angular/router';

export default [
  { path: '', loadComponent: () => import('./home-form/home.component') },
  {
    path: 'list',
    loadComponent: () => import('./home-list/home-list.component'),
  },
] as Routes;
