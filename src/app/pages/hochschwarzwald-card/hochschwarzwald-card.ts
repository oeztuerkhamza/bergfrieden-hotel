import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { SchemaService } from '../../core/schema.service';
import { LangService } from '../../core/lang.service';
import { TPipe } from '../../core/t.pipe';
import { TKey } from '../../core/i18n';

interface Category { titleKey: TKey; bodyKey: TKey; icon: string; }
interface Step { titleKey: TKey; bodyKey: TKey; }

@Component({
  selector: 'app-hochschwarzwald-card',
  imports: [RouterLink, TPipe],
  templateUrl: './hochschwarzwald-card.html',
})
export class HochschwarzwaldCardPage implements OnInit {
  private seo = inject(SeoService);
  private schema = inject(SchemaService);
  protected readonly langSvc = inject(LangService);
  protected readonly lang = this.langSvc.lang;

  protected readonly officialUrl = 'https://www.hochschwarzwald.de/Gastgeber/Hochschwarzwald-Card';

  protected readonly steps: Step[] = [
    { titleKey: 'card.step1Title', bodyKey: 'card.step1Body' },
    { titleKey: 'card.step2Title', bodyKey: 'card.step2Body' },
    { titleKey: 'card.step3Title', bodyKey: 'card.step3Body' },
  ];

  protected readonly categories: Category[] = [
    { titleKey: 'card.cat1Title', bodyKey: 'card.cat1Body', icon: 'mountain' },
    { titleKey: 'card.cat2Title', bodyKey: 'card.cat2Body', icon: 'wave' },
    { titleKey: 'card.cat3Title', bodyKey: 'card.cat3Body', icon: 'boat' },
    { titleKey: 'card.cat4Title', bodyKey: 'card.cat4Body', icon: 'museum' },
    { titleKey: 'card.cat5Title', bodyKey: 'card.cat5Body', icon: 'park' },
    { titleKey: 'card.cat6Title', bodyKey: 'card.cat6Body', icon: 'bus' },
  ];

  protected readonly tips: TKey[] = ['card.tip1', 'card.tip2', 'card.tip3'];

  link(path: string): unknown[] {
    return path ? ['/', this.lang(), path] : ['/', this.lang()];
  }

  ngOnInit() {
    const title = this.langSvc.t('card.heroEyebrow');
    const desc = this.langSvc.t('card.intro');
    this.seo.set({ title, description: desc, path: '/hochschwarzwald-card' });
    this.schema.setForPage({
      pageType: 'discover',
      pageTitle: title,
      pageDescription: desc,
      pagePath: '/hochschwarzwald-card',
      breadcrumbs: [
        { name: this.langSvc.t('nav.home'),     path: '' },
        { name: this.langSvc.t('nav.discover'), path: '/entdecken' },
        { name: this.langSvc.t('card.heroEyebrow'), path: '/hochschwarzwald-card' },
      ],
      faq: [
        { question: this.langSvc.t('faq.q5'), answer: this.langSvc.t('faq.a5') },
      ],
      speakableSelectors: ['h1', 'p'],
    });
  }
}
