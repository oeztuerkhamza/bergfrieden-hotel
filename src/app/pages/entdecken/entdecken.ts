import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { SchemaService } from '../../core/schema.service';
import { LangService } from '../../core/lang.service';
import { TPipe } from '../../core/t.pipe';
import { TKey } from '../../core/i18n';

interface Activity { titleKey: TKey; bodyKey: TKey; image: string; }

@Component({
  selector: 'app-entdecken',
  imports: [RouterLink, TPipe],
  templateUrl: './entdecken.html',
})
export class EntdeckenPage implements OnInit {
  private seo = inject(SeoService);
  private schema = inject(SchemaService);
  protected readonly langSvc = inject(LangService);
  protected readonly lang = this.langSvc.lang;

  protected readonly natur: Activity[] = [
    { titleKey: 'discover.n1Title', bodyKey: 'discover.n1Body', image: 'images/hbf-foto-08.jpg' },
    { titleKey: 'discover.n2Title', bodyKey: 'discover.n2Body', image: 'images/14A7391-1240x827.jpg' },
    { titleKey: 'discover.n3Title', bodyKey: 'discover.n3Body', image: 'images/hotel-hbf-slider03-1240x826.jpg' },
  ];

  protected readonly sport: Activity[] = [
    { titleKey: 'discover.s1Title', bodyKey: 'discover.s1Body', image: 'images/Radausfluge.jpg' },
    { titleKey: 'discover.s2Title', bodyKey: 'discover.s2Body', image: 'images/14A7481-1-1240x827.jpg' },
    { titleKey: 'discover.s3Title', bodyKey: 'discover.s3Body', image: 'images/hbf-foto-19-394x394.jpg' },
  ];

  protected readonly kultur: Activity[] = [
    { titleKey: 'discover.k1Title', bodyKey: 'discover.k1Body', image: 'images/hbf-foto-22-394x394.jpg' },
    { titleKey: 'discover.k2Title', bodyKey: 'discover.k2Body', image: 'images/hotel-hbf-slider01-1240x826.jpg' },
  ];

  link(path: string): unknown[] {
    return path ? ['/', this.lang(), path] : ['/', this.lang()];
  }

  ngOnInit() {
    const title = this.langSvc.t('discover.heroEyebrow');
    const desc = this.langSvc.t('discover.intro');
    this.seo.set({ title, description: desc, path: '/entdecken' });
    this.schema.setForPage({
      pageType: 'discover',
      pageTitle: title,
      pageDescription: desc,
      pagePath: '/entdecken',
      breadcrumbs: [
        { name: this.langSvc.t('nav.home'),     path: '' },
        { name: this.langSvc.t('nav.discover'), path: '/entdecken' },
      ],
      speakableSelectors: ['h1', 'p'],
    });
  }
}
