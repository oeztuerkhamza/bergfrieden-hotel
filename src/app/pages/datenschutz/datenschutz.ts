import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../core/seo.service';
import { SchemaService } from '../../core/schema.service';
import { LangService } from '../../core/lang.service';
import { TPipe } from '../../core/t.pipe';
import { HOTEL } from '../../core/hotel-info';

@Component({
  selector: 'app-datenschutz',
  imports: [TPipe],
  templateUrl: './datenschutz.html',
})
export class DatenschutzPage implements OnInit {
  private seo = inject(SeoService);
  private schema = inject(SchemaService);
  protected readonly langSvc = inject(LangService);
  protected readonly hotel = HOTEL;

  ngOnInit() {
    const title = this.langSvc.t('privacy.eyebrow');
    const desc = this.langSvc.t('privacy.title');
    this.seo.set({ title, description: desc, path: '/datenschutz' });
    this.schema.setForPage({
      pageType: 'legal',
      pageTitle: title,
      pageDescription: desc,
      pagePath: '/datenschutz',
      breadcrumbs: [
        { name: this.langSvc.t('nav.home'),       path: '' },
        { name: this.langSvc.t('footer.privacy'), path: '/datenschutz' },
      ],
    });
  }
}
