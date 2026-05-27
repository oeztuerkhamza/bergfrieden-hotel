import { RenderMode, ServerRoute } from '@angular/ssr';
import { LANGS } from './core/i18n';

const langParams = () => Promise.resolve(LANGS.map(lang => ({ lang })));

const pagePaths = ['', 'uber-uns', 'zimmer', 'fruhstuck', 'entdecken', 'hochschwarzwald-card', 'galerie', 'kontakt', 'impressum', 'datenschutz'];

export const serverRoutes: ServerRoute[] = [
  // Root '/' is a redirect to /de — prerender to an HTML stub that triggers
  // the client-side router redirect (and works for GH Pages static hosting).
  { path: '', renderMode: RenderMode.Prerender },

  // Each page × each language → /<lang>/<page>/index.html
  ...pagePaths.map((p): ServerRoute => ({
    path: p ? `:lang/${p}` : ':lang',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: langParams,
  })),

  // 404 fallback
  { path: '**', renderMode: RenderMode.Prerender },
];
