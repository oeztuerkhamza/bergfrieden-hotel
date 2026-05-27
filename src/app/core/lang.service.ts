import { Injectable, signal, inject, DOCUMENT } from '@angular/core';
import { Lang, DEFAULT_LANG, LANG_META, tr, TKey } from './i18n';

@Injectable({ providedIn: 'root' })
export class LangService {
  private doc = inject(DOCUMENT);

  readonly lang = signal<Lang>(DEFAULT_LANG);

  setLang(lang: Lang) {
    this.lang.set(lang);
    this.doc.documentElement.setAttribute('lang', LANG_META[lang].htmlLang);
  }

  t = (key: TKey): string => tr(this.lang(), key);

  // Build a routerLink array prefixed with the current lang.
  link(...segments: string[]): unknown[] {
    return ['/', this.lang(), ...segments];
  }
}
