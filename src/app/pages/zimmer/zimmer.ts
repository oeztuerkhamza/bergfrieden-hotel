import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { SchemaService } from '../../core/schema.service';
import { LangService } from '../../core/lang.service';
import { TPipe } from '../../core/t.pipe';
import { TKey } from '../../core/i18n';

interface Room {
  slug: string;
  nameKey: TKey;
  capKey: TKey;
  descKey: TKey;
  featureKeys: TKey[];
  image: string;
}

@Component({
  selector: 'app-zimmer',
  imports: [RouterLink, TPipe],
  templateUrl: './zimmer.html',
})
export class ZimmerPage implements OnInit {
  private seo = inject(SeoService);
  private schema = inject(SchemaService);
  protected readonly langSvc = inject(LangService);
  protected readonly lang = this.langSvc.lang;

  protected readonly rooms: Room[] = [
    {
      slug: 'einzelzimmer',
      nameKey: 'rooms.r1Name', capKey: 'rooms.r1Cap', descKey: 'rooms.r1Desc',
      featureKeys: ['rooms.r1F1', 'rooms.r1F2', 'rooms.r1F3', 'rooms.r1F4', 'rooms.r1F5'],
      image: '/images/IMG_62802-1024x638-1.jpg',
    },
    {
      slug: 'doppelzimmer',
      nameKey: 'rooms.r2Name', capKey: 'rooms.r2Cap', descKey: 'rooms.r2Desc',
      featureKeys: ['rooms.r2F1', 'rooms.r2F2', 'rooms.r2F3', 'rooms.r2F4'],
      image: '/images/hbf-foto-11.jpg',
    },
    {
      slug: 'familienzimmer',
      nameKey: 'rooms.r3Name', capKey: 'rooms.r3Cap', descKey: 'rooms.r3Desc',
      featureKeys: ['rooms.r3F1', 'rooms.r3F2', 'rooms.r3F3', 'rooms.r3F4', 'rooms.r3F5'],
      image: '/images/IMG_62542-scaled-1-1240x827.jpg',
    },
    {
      slug: 'vier-personen-zimmer',
      nameKey: 'rooms.r4Name', capKey: 'rooms.r4Cap', descKey: 'rooms.r4Desc',
      featureKeys: ['rooms.r4F1', 'rooms.r4F2', 'rooms.r4F3', 'rooms.r4F4'],
      image: '/images/hbf-foto-16.jpg',
    },
    {
      slug: 'familienzimmer-mit-kindern',
      nameKey: 'rooms.r5Name', capKey: 'rooms.r5Cap', descKey: 'rooms.r5Desc',
      featureKeys: ['rooms.r5F1', 'rooms.r5F2', 'rooms.r5F3', 'rooms.r5F4', 'rooms.r5F5'],
      image: '/images/14A7498-1240x827.jpg',
    },
  ];

  link(path: string, qs?: Record<string, string>): unknown[] {
    return path ? ['/', this.lang(), path] : ['/', this.lang()];
  }

  buildInquiryLink(roomNameKey: TKey) {
    const name = this.langSvc.t(roomNameKey);
    return { commands: ['/', this.lang(), 'kontakt'], queryParams: { zimmer: name } };
  }

  ngOnInit() {
    const title = this.langSvc.t('rooms.heroEyebrow');
    const desc = this.langSvc.t('rooms.intro').slice(0, 200);
    this.seo.set({ title, description: desc, path: '/zimmer' });
    this.schema.setForPage({
      pageType: 'rooms',
      pageTitle: title,
      pageDescription: desc,
      pagePath: '/zimmer',
      breadcrumbs: [
        { name: this.langSvc.t('nav.home'),  path: '' },
        { name: this.langSvc.t('nav.rooms'), path: '/zimmer' },
      ],
      speakableSelectors: ['h1', 'h2'],
    });
  }
}
