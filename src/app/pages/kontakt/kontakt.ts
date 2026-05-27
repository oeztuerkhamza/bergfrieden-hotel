import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { SchemaService } from '../../core/schema.service';
import { LangService } from '../../core/lang.service';
import { TPipe } from '../../core/t.pipe';
import { HOTEL } from '../../core/hotel-info';

@Component({
  selector: 'app-kontakt',
  imports: [TPipe],
  templateUrl: './kontakt.html',
})
export class KontaktPage implements OnInit {
  private seo = inject(SeoService);
  private schema = inject(SchemaService);
  private route = inject(ActivatedRoute);
  protected readonly langSvc = inject(LangService);
  protected readonly hotel = HOTEL;

  protected readonly form = signal({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  protected readonly mailtoHref = signal('');

  updateField(field: keyof ReturnType<typeof this.form>, value: string) {
    this.form.update(f => ({ ...f, [field]: value }));
    this.rebuildMailto();
  }

  rebuildMailto() {
    const f = this.form();
    const subject = encodeURIComponent(f.subject || this.langSvc.t('contact.formEyebrow'));
    const lines = [
      `${this.langSvc.t('contact.fName')}: ${f.name}`,
      `${this.langSvc.t('contact.fEmail')}: ${f.email}`,
      f.phone ? `${this.langSvc.t('contact.fPhone')}: ${f.phone}` : '',
      '',
      f.message,
    ].filter(Boolean);
    const body = encodeURIComponent(lines.join('\n'));
    this.mailtoHref.set(`mailto:${HOTEL.email}?subject=${subject}&body=${body}`);
  }

  ngOnInit() {
    const title = this.langSvc.t('contact.eyebrow');
    const desc = this.langSvc.t('contact.title1') + ' ' + this.langSvc.t('contact.title2');
    this.seo.set({ title, description: desc, path: '/kontakt' });
    this.schema.setForPage({
      pageType: 'contact',
      pageTitle: title,
      pageDescription: desc,
      pagePath: '/kontakt',
      breadcrumbs: [
        { name: this.langSvc.t('nav.home'),    path: '' },
        { name: this.langSvc.t('nav.contact'), path: '/kontakt' },
      ],
      speakableSelectors: ['h1', 'address'],
    });

    const preselected = this.route.snapshot.queryParamMap.get('zimmer');
    if (preselected) {
      this.form.update(f => ({
        ...f,
        subject: `${this.langSvc.t('common.inquire')}: ${preselected}`,
        message: '',
      }));
    }
    this.rebuildMailto();
  }
}
