import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { SchemaService } from '../../core/schema.service';
import { LangService } from '../../core/lang.service';
import { TPipe } from '../../core/t.pipe';

@Component({
  selector: 'app-fruhstuck',
  imports: [RouterLink, TPipe],
  templateUrl: './fruhstuck.html',
})
export class FruhstuckPage implements OnInit {
  private seo = inject(SeoService);
  private schema = inject(SchemaService);
  protected readonly langSvc = inject(LangService);
  protected readonly lang = this.langSvc.lang;

  link(path: string): unknown[] {
    return path ? ['/', this.lang(), path] : ['/', this.lang()];
  }

  ngOnInit() {
    const title = this.langSvc.t('breakfast.heroEyebrow');
    const desc = this.langSvc.t('breakfast.intro');
    this.seo.set({ title, description: desc, path: '/fruhstuck' });
    this.schema.setForPage({
      pageType: 'breakfast',
      pageTitle: title,
      pageDescription: desc,
      pagePath: '/fruhstuck',
      breadcrumbs: [
        { name: this.langSvc.t('nav.home'),      path: '' },
        { name: this.langSvc.t('nav.breakfast'), path: '/fruhstuck' },
      ],
      faq: [
        { question: this.langSvc.t('faq.q1'), answer: this.langSvc.t('faq.a1') },
      ],
      speakableSelectors: ['h1', 'p'],
    });
  }
}
