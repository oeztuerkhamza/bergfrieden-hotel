import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { SchemaService } from '../../core/schema.service';
import { LangService } from '../../core/lang.service';
import { TPipe } from '../../core/t.pipe';
import { HOTEL } from '../../core/hotel-info';
import { TKey } from '../../core/i18n';

interface Highlight { titleKey: TKey; textKey: TKey; }

@Component({
  selector: 'app-home',
  imports: [RouterLink, TPipe],
  templateUrl: './home.html',
})
export class HomePage implements OnInit {
  private seo = inject(SeoService);
  private schema = inject(SchemaService);
  protected readonly langSvc = inject(LangService);
  protected readonly lang = this.langSvc.lang;
  protected readonly hotel = HOTEL;

  protected readonly heroSlides = [
    '/images/14A7533-1240x827.jpg',
    '/images/14A7391-1240x827.jpg',
    '/images/hotel-hbf-slider01-1240x826.jpg',
  ];

  protected readonly highlights: Highlight[] = [
    { titleKey: 'home.h1Title', textKey: 'home.h1Text' },
    { titleKey: 'home.h2Title', textKey: 'home.h2Text' },
    { titleKey: 'home.h3Title', textKey: 'home.h3Text' },
    { titleKey: 'home.h4Title', textKey: 'home.h4Text' },
  ];

  protected readonly faq: Array<{ qKey: TKey; aKey: TKey }> = [
    { qKey: 'faq.q1', aKey: 'faq.a1' },
    { qKey: 'faq.q2', aKey: 'faq.a2' },
    { qKey: 'faq.q3', aKey: 'faq.a3' },
    { qKey: 'faq.q4', aKey: 'faq.a4' },
    { qKey: 'faq.q5', aKey: 'faq.a5' },
    { qKey: 'faq.q6', aKey: 'faq.a6' },
    { qKey: 'faq.q8', aKey: 'faq.a8' },
  ];

  link(path: string): unknown[] {
    return path ? ['/', this.lang(), path] : ['/', this.lang()];
  }

  ngOnInit() {
    const title = this.langSvc.t('home.heroTitle1') + ' ' + this.langSvc.t('home.heroTitle2');
    const desc = this.langSvc.t('home.heroSub');

    this.seo.set({ title, description: desc, path: '' });

    this.schema.setForPage({
      pageType: 'home',
      pageTitle: title,
      pageDescription: desc,
      pagePath: '',
      breadcrumbs: [
        { name: this.langSvc.t('nav.home'), path: '' },
      ],
      faq: this.faq.map(qa => ({
        question: this.langSvc.t(qa.qKey),
        answer: this.langSvc.t(qa.aKey),
      })),
      speakableSelectors: ['h1', '.story-body', '.faq-question', '.faq-answer'],
    });
  }
}
