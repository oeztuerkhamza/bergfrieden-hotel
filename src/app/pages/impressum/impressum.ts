import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../core/seo.service';
import { SchemaService } from '../../core/schema.service';
import { LangService } from '../../core/lang.service';
import { TPipe } from '../../core/t.pipe';
import { HOTEL } from '../../core/hotel-info';

@Component({
  selector: 'app-impressum',
  imports: [TPipe],
  templateUrl: './impressum.html',
})
export class ImpressumPage implements OnInit {
  private seo = inject(SeoService);
  private schema = inject(SchemaService);
  protected readonly langSvc = inject(LangService);
  protected readonly hotel = HOTEL;

  ngOnInit() {
    const title = this.langSvc.t('imprint.eyebrow');
    const desc = this.langSvc.t('imprint.title');
    this.seo.set({ title, description: desc, path: '/impressum' });
    this.schema.setForPage({
      pageType: 'legal',
      pageTitle: title,
      pageDescription: desc,
      pagePath: '/impressum',
      breadcrumbs: [
        { name: this.langSvc.t('nav.home'),     path: '' },
        { name: this.langSvc.t('footer.imprint'), path: '/impressum' },
      ],
    });
  }
}
