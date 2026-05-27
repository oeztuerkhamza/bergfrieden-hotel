import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HOTEL, NAV_LINKS } from '../../core/hotel-info';
import { LangService } from '../../core/lang.service';
import { TPipe } from '../../core/t.pipe';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, TPipe],
  templateUrl: './footer.html',
})
export class FooterComponent {
  protected readonly hotel = HOTEL;
  protected readonly nav = NAV_LINKS;
  protected readonly year = new Date().getFullYear();
  protected readonly langSvc = inject(LangService);
  protected readonly lang = this.langSvc.lang;

  link(path: string): unknown[] {
    return path ? ['/', this.lang(), path] : ['/', this.lang()];
  }
}
