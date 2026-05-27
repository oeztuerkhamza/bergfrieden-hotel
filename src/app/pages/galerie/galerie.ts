import { Component, OnInit, inject, signal } from '@angular/core';
import { SeoService } from '../../core/seo.service';
import { SchemaService } from '../../core/schema.service';
import { LangService } from '../../core/lang.service';
import { TPipe } from '../../core/t.pipe';

interface GalleryImage {
  src: string;
  alt: string;        // German alt — generic enough that translation is low value
  span?: 'wide' | 'tall';
}

@Component({
  selector: 'app-galerie',
  imports: [TPipe],
  templateUrl: './galerie.html',
})
export class GaleriePage implements OnInit {
  private seo = inject(SeoService);
  private schema = inject(SchemaService);
  protected readonly langSvc = inject(LangService);

  protected readonly lightbox = signal<GalleryImage | null>(null);

  // Layout order: exterior → garden → view → rooms → bathrooms → food → activity → atmosphere
  protected readonly images: GalleryImage[] = [
    { src: '/images/hotel-hbf-slider01-1240x826.jpg', alt: 'Hotel Bergfrieden — Tageslicht mit Garten', span: 'wide' },
    { src: '/images/14A7533-1240x827.jpg',            alt: 'Hotel Bergfrieden bei Abenddämmerung' },
    { src: '/images/hotel-hbf-slider02-1240x826.jpg', alt: 'Hotel mit Terrasse und Sonnenschirmen', span: 'wide' },
    { src: '/images/hotel-hbf-slider03-1240x826.jpg', alt: 'Hotel-Außenansicht durch Bäume gerahmt' },
    { src: '/images/WhatsApp-Image-2021-09-04-at-18.13.27-5-394x394.jpeg', alt: 'Hotel bei Sonnenuntergang' },

    { src: '/images/14A7345-1240x827.jpg',   alt: 'Gartenterrasse' },
    { src: '/images/14A7481-1-1240x827.jpg', alt: 'Tischkicker und Gartenfest' },

    { src: '/images/14A7391-1240x827.jpg', alt: 'Balkon mit Alpenblick', span: 'tall' },

    { src: '/images/hbf-foto-11.jpg',                 alt: 'Doppelzimmer' },
    { src: '/images/hbf-foto-18-394x394.jpg',         alt: 'Doppelzimmer — Detail' },
    { src: '/images/IMG_62542-scaled-1-1240x827.jpg', alt: 'Geräumiges Familienzimmer' },
    { src: '/images/IMG_6256-500x330-1.jpg',          alt: 'Doppelzimmer mit Blumengruß' },
    { src: '/images/IMG_62802-1024x638-1.jpg',        alt: 'Einzelzimmer mit Schreibtisch' },
    { src: '/images/14A7498-1240x827.jpg',            alt: 'Familienzimmer' },
    { src: '/images/hbf-foto-16.jpg',                 alt: '4-Personen-Zimmer mit Etagenbett' },
    { src: '/images/IMG_6285-1-500x330-1.jpg',        alt: 'Etagenbett' },

    { src: '/images/IMG_6261-scaled-1-1240x827.jpg', alt: 'Badezimmer' },
    { src: '/images/IMG_62682-500x330-1.jpg',        alt: 'Badezimmer mit Badewanne' },

    { src: '/images/Fruhstuck.jpg',           alt: 'Frühstücksauswahl', span: 'wide' },
    { src: '/images/hbf-foto-14-394x394.jpg', alt: 'Käse- und Vorspeisenplatte' },

    { src: '/images/Radausfluge.jpg', alt: 'Radausflüge im Hochschwarzwald', span: 'tall' },
    { src: '/images/hbf-foto-08.jpg', alt: 'Schwarzwald-Waldweg' },
    { src: '/images/14A7346-1240x827.jpg', alt: 'Regionale Details' },

    { src: '/images/hbf-foto-19-394x394.jpg', alt: 'Hotel bei Nacht' },
    { src: '/images/hbf-foto-21-394x394.jpg', alt: 'Hotel in der Dämmerung' },
    { src: '/images/hbf-foto-22-394x394.jpg', alt: 'Eingangsweg am Abend' },
  ];

  open(img: GalleryImage) { this.lightbox.set(img); }
  close() { this.lightbox.set(null); }

  ngOnInit() {
    const title = this.langSvc.t('gallery.eyebrow');
    const desc = this.langSvc.t('gallery.title1') + ' ' + this.langSvc.t('gallery.title2');
    this.seo.set({ title, description: desc, path: '/galerie' });
    this.schema.setForPage({
      pageType: 'gallery',
      pageTitle: title,
      pageDescription: desc,
      pagePath: '/galerie',
      breadcrumbs: [
        { name: this.langSvc.t('nav.home'),    path: '' },
        { name: this.langSvc.t('nav.gallery'), path: '/galerie' },
      ],
    });
  }
}
