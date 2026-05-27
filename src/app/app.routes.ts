import { Routes } from '@angular/router';
import { langGuard } from './core/lang.guard';
import { DEFAULT_LANG } from './core/i18n';

// Page paths within each language (kept consistent across all langs).
const PAGES: Routes = [
  { path: '',           loadComponent: () => import('./pages/home/home').then(m => m.HomePage) },
  { path: 'uber-uns',   loadComponent: () => import('./pages/uber-uns/uber-uns').then(m => m.UberUnsPage) },
  { path: 'zimmer',     loadComponent: () => import('./pages/zimmer/zimmer').then(m => m.ZimmerPage) },
  { path: 'fruhstuck',  loadComponent: () => import('./pages/fruhstuck/fruhstuck').then(m => m.FruhstuckPage) },
  { path: 'entdecken',  loadComponent: () => import('./pages/entdecken/entdecken').then(m => m.EntdeckenPage) },
  { path: 'hochschwarzwald-card', loadComponent: () => import('./pages/hochschwarzwald-card/hochschwarzwald-card').then(m => m.HochschwarzwaldCardPage) },
  { path: 'galerie',    loadComponent: () => import('./pages/galerie/galerie').then(m => m.GaleriePage) },
  { path: 'kontakt',    loadComponent: () => import('./pages/kontakt/kontakt').then(m => m.KontaktPage) },
  { path: 'impressum',  loadComponent: () => import('./pages/impressum/impressum').then(m => m.ImpressumPage) },
  { path: 'datenschutz', loadComponent: () => import('./pages/datenschutz/datenschutz').then(m => m.DatenschutzPage) },
];

export const routes: Routes = [
  // Root → default language
  { path: '', pathMatch: 'full', redirectTo: `/${DEFAULT_LANG}` },

  // Language-prefixed routes: /de, /en, /fr, /tr → guard validates lang
  {
    path: ':lang',
    canActivate: [langGuard],
    canActivateChild: [langGuard],
    children: PAGES,
  },

  // 404
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFoundPage),
  },
];
