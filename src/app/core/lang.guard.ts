import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LangService } from './lang.service';
import { DEFAULT_LANG, isValidLang } from './i18n';

/**
 * Reads the `:lang` route param, validates it, and updates LangService.
 * Invalid langs redirect to the default-lang version of the same path.
 */
export const langGuard: CanActivateFn = (route, state) => {
  const langSvc = inject(LangService);
  const router  = inject(Router);

  const param = route.paramMap.get('lang');
  if (isValidLang(param)) {
    langSvc.setLang(param);
    return true;
  }

  // Strip leading "/<bad-lang>" and redirect to default lang.
  const tail = state.url.replace(/^\/[^/]+/, '');
  return router.parseUrl(`/${DEFAULT_LANG}${tail}`);
};
