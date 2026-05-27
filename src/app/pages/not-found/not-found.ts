import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { LangService } from '../../core/lang.service';
import { TPipe } from '../../core/t.pipe';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, TPipe],
  templateUrl: './not-found.html',
})
export class NotFoundPage implements OnInit {
  private seo = inject(SeoService);
  protected readonly langSvc = inject(LangService);
  protected readonly lang = this.langSvc.lang;

  link(path: string): unknown[] {
    return path ? ['/', this.lang(), path] : ['/', this.lang()];
  }

  ngOnInit() {
    this.seo.set({
      title: this.langSvc.t('notFound.title1') + ' ' + this.langSvc.t('notFound.title2'),
      description: this.langSvc.t('notFound.body'),
      path: '/404',
    });
  }
}
