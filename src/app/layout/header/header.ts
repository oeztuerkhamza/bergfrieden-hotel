import {
  Component,
  DestroyRef,
  HostListener,
  PLATFORM_ID,
  afterNextRender,
  computed,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NAV_LINKS, HOTEL } from '../../core/hotel-info';
import { LangService } from '../../core/lang.service';
import { LANGS, LANG_META, Lang, isValidLang } from '../../core/i18n';
import { TPipe } from '../../core/t.pipe';

// Pages with a full-bleed hero — header starts transparent, goes solid on scroll/menu.
// Slugs only (without /:lang prefix).
const PAGES_WITH_HERO = new Set(['', 'uber-uns', 'zimmer', 'fruhstuck', 'entdecken', 'hochschwarzwald-card']);

/** Strip /:lang prefix and trailing slash, return page slug ('' for root). */
function pageSlugOf(url: string | null | undefined): string {
  const raw = (url ?? '/').split('?')[0].split('#')[0];
  const parts = raw.split('/').filter(Boolean);
  if (parts.length === 0) return '';
  if (isValidLang(parts[0])) parts.shift();
  return parts[0] ?? '';
}

function pathHasHero(url: string | null | undefined): boolean {
  return PAGES_WITH_HERO.has(pageSlugOf(url));
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, TPipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  protected readonly langSvc = inject(LangService);

  protected readonly nav = NAV_LINKS;
  protected readonly hotel = HOTEL;
  protected readonly langs = LANGS;
  protected readonly langMeta = LANG_META;
  protected readonly lang = this.langSvc.lang;

  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);
  protected readonly langMenuOpen = signal(false);
  protected readonly routeHasHero = signal(false);
  // Mobile/tablet (< Tailwind lg, 1024px) always uses solid look — transparent header
  // over a hero with white logo is unreadable on small screens with light hero areas.
  protected readonly isCompact = signal(false);

  protected readonly solid = computed(
    () => this.scrolled() || this.menuOpen() || !this.routeHasHero() || this.isCompact(),
  );

  constructor() {
    this.routeHasHero.set(pathHasHero(this.router.url));

    const sub = this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(e => this.routeHasHero.set(pathHasHero(e.urlAfterRedirects)));
    this.destroyRef.onDestroy(() => sub.unsubscribe());

    afterNextRender(() => {
      const currentPath =
        this.isBrowser && typeof window !== 'undefined'
          ? window.location.pathname + window.location.search + window.location.hash
          : this.router.url;
      this.routeHasHero.set(pathHasHero(currentPath));

      if (this.isBrowser && typeof window !== 'undefined' && window.matchMedia) {
        const mq = window.matchMedia('(max-width: 1023.98px)');
        this.isCompact.set(mq.matches);
        const onChange = (e: MediaQueryListEvent) => this.isCompact.set(e.matches);
        mq.addEventListener('change', onChange);
        this.destroyRef.onDestroy(() => mq.removeEventListener('change', onChange));
      }
    });
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 40);
  }

  toggleMenu()     { this.menuOpen.update(v => !v); }
  closeMenu()      { this.menuOpen.set(false); this.langMenuOpen.set(false); }
  toggleLangMenu() { this.langMenuOpen.update(v => !v); }

  switchLang(newLang: Lang) {
    this.langMenuOpen.set(false);
    this.menuOpen.set(false);
    const segments = this.router.url.split('/').filter(Boolean);
    if (segments.length && isValidLang(segments[0])) {
      segments[0] = newLang;
    } else {
      segments.unshift(newLang);
    }
    this.router.navigateByUrl('/' + segments.join('/'));
  }

  link(path: string): unknown[] {
    return path ? ['/', this.lang(), path] : ['/', this.lang()];
  }
}
