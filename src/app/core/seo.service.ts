import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { HOTEL } from './hotel-info';
import { LangService } from './lang.service';
import { LANGS, LANG_META, Lang, DEFAULT_LANG } from './i18n';

export interface SeoData {
  title: string;        // full title for current language
  description: string;  // localized description
  path: string;         // path AFTER the /:lang segment, e.g. '/zimmer' or ''
  image?: string;
  type?: 'website' | 'article';
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);
  private doc = inject(DOCUMENT);
  private langSvc = inject(LangService);

  set(data: SeoData) {
    const lang = this.langSvc.lang();
    const fullTitle = data.title.includes(HOTEL.shortName)
      ? data.title
      : `${data.title} — ${HOTEL.name}`;
    const url = `${HOTEL.baseUrl}/${lang}${data.path}`;
    const image = data.image
      ? (data.image.startsWith('http') ? data.image : `${HOTEL.baseUrl}${data.image}`)
      : `${HOTEL.baseUrl}/images/14A7533-1240x827.jpg`;

    this.title.setTitle(fullTitle);
    this.meta.updateTag({ name: 'description', content: data.description });

    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:type', content: data.type ?? 'website' });
    this.meta.updateTag({ property: 'og:locale', content: LANG_META[lang].ogLocale });
    this.meta.updateTag({ property: 'og:site_name', content: HOTEL.name });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    this.setCanonical(url);
    this.setHreflang(data.path);
  }

  private setCanonical(url: string) {
    let link = this.doc.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  /** One hreflang link per language + x-default → DEFAULT_LANG version. */
  private setHreflang(pathAfterLang: string) {
    this.doc.querySelectorAll("link[rel='alternate'][hreflang]").forEach(l => l.remove());

    const make = (hreflang: string, href: string) => {
      const l = this.doc.createElement('link');
      l.setAttribute('rel', 'alternate');
      l.setAttribute('hreflang', hreflang);
      l.setAttribute('href', href);
      this.doc.head.appendChild(l);
    };

    for (const lang of LANGS) {
      make(LANG_META[lang].htmlLang, `${HOTEL.baseUrl}/${lang}${pathAfterLang}`);
    }
    make('x-default', `${HOTEL.baseUrl}/${DEFAULT_LANG}${pathAfterLang}`);
  }
}
