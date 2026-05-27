import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { SchemaService } from '../../core/schema.service';
import { LangService } from '../../core/lang.service';
import { TPipe } from '../../core/t.pipe';

@Component({
  selector: 'app-uber-uns',
  imports: [RouterLink, TPipe],
  templateUrl: './uber-uns.html',
})
export class UberUnsPage implements OnInit {
  private seo = inject(SeoService);
  private schema = inject(SchemaService);
  protected readonly langSvc = inject(LangService);
  protected readonly lang = this.langSvc.lang;

  link(path: string): unknown[] {
    return path ? ['/', this.lang(), path] : ['/', this.lang()];
  }

  ngOnInit() {
    const title = this.langSvc.t('about.heroEyebrow');
    const desc = this.langSvc.t('about.intro') + ' ' + this.langSvc.t('about.p1').slice(0, 120);
    this.seo.set({ title, description: desc, path: '/uber-uns' });
    this.schema.setForPage({
      pageType: 'about',
      pageTitle: title,
      pageDescription: desc,
      pagePath: '/uber-uns',
      breadcrumbs: [
        { name: this.langSvc.t('nav.home'),  path: '' },
        { name: this.langSvc.t('nav.about'), path: '/uber-uns' },
      ],
      speakableSelectors: ['h1', 'p'],
    });
  }
}
