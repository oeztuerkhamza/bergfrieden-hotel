import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HOTEL } from './hotel-info';
import { LangService } from './lang.service';
import { Lang, LANG_META, LANGS } from './i18n';

/**
 * Injects JSON-LD structured data into <head> for rich SEO, GEO (Generative
 * Engine Optimization) and AI-search optimization (ChatGPT/Claude/Perplexity).
 *
 * Each page calls one of the build* methods with relevant data, and emits one
 * or more <script type="application/ld+json"> blocks. Old blocks created by
 * this service are cleared on every call so navigation doesn't accumulate them.
 */
@Injectable({ providedIn: 'root' })
export class SchemaService {
  private doc = inject(DOCUMENT);
  private langSvc = inject(LangService);

  private readonly DATA_ATTR = 'data-schema-runtime';

  setForPage(opts: {
    pageType: 'home' | 'about' | 'rooms' | 'breakfast' | 'discover' | 'gallery' | 'contact' | 'legal';
    pageTitle: string;
    pagePath: string;
    pageDescription: string;
    breadcrumbs?: { name: string; path: string }[];
    faq?: { question: string; answer: string }[];
    speakableSelectors?: string[];
  }) {
    this.clearRuntime();
    const lang = this.langSvc.lang();

    // 1. Enhanced Hotel/LodgingBusiness schema (canonical, only on home)
    if (opts.pageType === 'home') {
      this.inject(this.buildHotel(lang));
      this.inject(this.buildLocalBusiness(lang));
    }

    // 2. WebPage schema (every page)
    this.inject(this.buildWebPage(opts, lang));

    // 3. BreadcrumbList
    if (opts.breadcrumbs && opts.breadcrumbs.length > 0) {
      this.inject(this.buildBreadcrumbs(opts.breadcrumbs, lang));
    }

    // 4. FAQPage
    if (opts.faq && opts.faq.length > 0) {
      this.inject(this.buildFAQ(opts.faq));
    }

    // 5. TouristAttraction (only on discover page — describe nearby places)
    if (opts.pageType === 'discover') {
      this.inject(this.buildTouristAttractions(lang));
    }
  }

  // ─── Builders ────────────────────────────────────────────────────────────────

  private buildHotel(lang: Lang) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Hotel',
      '@id': `${HOTEL.baseUrl}/#hotel`,
      name: HOTEL.name,
      alternateName: HOTEL.shortName,
      description: this.langSvc.t('home.heroSub'),
      url: `${HOTEL.baseUrl}/${lang}`,
      image: [
        `${HOTEL.baseUrl}/images/14A7533-1240x827.jpg`,
        `${HOTEL.baseUrl}/images/hotel-hbf-slider01-1240x826.jpg`,
        `${HOTEL.baseUrl}/images/14A7391-1240x827.jpg`,
      ],
      logo: `${HOTEL.baseUrl}/images/web-logo-219x77.png`,
      telephone: HOTEL.phones[0].value,
      email: HOTEL.email,
      priceRange: '€€',
      currenciesAccepted: 'EUR',
      paymentAccepted: 'Cash, Visa, MasterCard, PayPal',
      checkinTime: '14:00',
      checkoutTime: '11:00',
      starRating: { '@type': 'Rating', ratingValue: '3' },
      numberOfRooms: '5',
      petsAllowed: 'On request',
      smokingAllowed: false,
      address: {
        '@type': 'PostalAddress',
        streetAddress: HOTEL.address.street,
        addressLocality: HOTEL.address.city,
        postalCode: HOTEL.address.postalCode,
        addressRegion: HOTEL.address.region,
        addressCountry: HOTEL.address.countryCode,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: HOTEL.geo.lat,
        longitude: HOTEL.geo.lng,
      },
      hasMap: HOTEL.googleMaps,
      sameAs: [HOTEL.bookingCom],
      amenityFeature: [
        this.amenity('Bio-Regiofrühstück / Organic breakfast', true),
        this.amenity('Free WiFi', true),
        this.amenity('Free bicycles', true),
        this.amenity('Children playground', true),
        this.amenity('Foosball / table football', true),
        this.amenity('Minigolf', true),
        this.amenity('BBQ / grill', true),
        this.amenity('Hochschwarzwald Card (from 2 nights)', true),
        this.amenity('Vegetarian / vegan options', true),
      ],
      makesOffer: this.buildRoomOffers(lang),
      knowsLanguage: ['de', 'en', 'tr'],
      areaServed: { '@type': 'Place', name: 'Hochschwarzwald, Black Forest' },
      openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '11:00',
        closes: '22:00',
      }],
      inLanguage: LANGS.map(l => LANG_META[l].htmlLang),
    };
  }

  private buildLocalBusiness(lang: Lang) {
    return {
      '@context': 'https://schema.org',
      '@type': 'LodgingBusiness',
      '@id': `${HOTEL.baseUrl}/#business`,
      name: HOTEL.name,
      url: `${HOTEL.baseUrl}/${lang}`,
      telephone: HOTEL.phones[0].value,
      address: {
        '@type': 'PostalAddress',
        streetAddress: HOTEL.address.street,
        addressLocality: HOTEL.address.city,
        postalCode: HOTEL.address.postalCode,
        addressCountry: HOTEL.address.countryCode,
      },
      geo: { '@type': 'GeoCoordinates', latitude: HOTEL.geo.lat, longitude: HOTEL.geo.lng },
      priceRange: '€€',
      openingHours: 'Mo-Su 11:00-22:00',
    };
  }

  private buildRoomOffers(lang: Lang) {
    const rooms: Array<{ key: string; cap: number }> = [
      { key: 'rooms.r1Name', cap: 1 },
      { key: 'rooms.r2Name', cap: 2 },
      { key: 'rooms.r3Name', cap: 3 },
      { key: 'rooms.r4Name', cap: 4 },
      { key: 'rooms.r5Name', cap: 3 },
    ];
    return rooms.map(r => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'HotelRoom',
        name: this.langSvc.t(r.key as any),
        occupancy: { '@type': 'QuantitativeValue', maxValue: r.cap, unitCode: 'C62' },
      },
      availability: 'https://schema.org/InStock',
    }));
  }

  private buildWebPage(opts: { pageTitle: string; pagePath: string; pageDescription: string; speakableSelectors?: string[] }, lang: Lang) {
    const url = `${HOTEL.baseUrl}/${lang}${opts.pagePath}`;
    const node: any = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: opts.pageTitle,
      description: opts.pageDescription,
      url,
      inLanguage: LANG_META[lang].htmlLang,
      isPartOf: { '@type': 'WebSite', name: HOTEL.name, url: HOTEL.baseUrl },
      about: { '@id': `${HOTEL.baseUrl}/#hotel` },
    };
    if (opts.speakableSelectors && opts.speakableSelectors.length) {
      node.speakable = {
        '@type': 'SpeakableSpecification',
        cssSelector: opts.speakableSelectors,
      };
    }
    return node;
  }

  private buildBreadcrumbs(items: { name: string; path: string }[], lang: Lang) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.name,
        item: `${HOTEL.baseUrl}/${lang}${b.path}`,
      })),
    };
  }

  private buildFAQ(items: { question: string; answer: string }[]) {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map(qa => ({
        '@type': 'Question',
        name: qa.question,
        acceptedAnswer: { '@type': 'Answer', text: qa.answer },
      })),
    };
  }

  private buildTouristAttractions(lang: Lang) {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'TouristAttraction',
          name: 'Wutachschlucht',
          description: 'Wild gorge in the Black Forest with hiking trails, streams and waterfalls. 4 km from Hotel Bergfrieden Löffingen.',
          geo: { '@type': 'GeoCoordinates', latitude: 47.8284, longitude: 8.4011 },
          isAccessibleForFree: true,
          publicAccess: true,
        },
        {
          '@type': 'TouristAttraction',
          name: 'Hochschwarzwald',
          description: 'Upper Black Forest region — hiking, skiing, cycling, nature reserves. Accessible via Hochschwarzwald Card included with stays at Hotel Bergfrieden Löffingen.',
          geo: { '@type': 'GeoCoordinates', latitude: 47.8751017, longitude: 8.3464534 },
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Löffingen',
          description: 'Small historic town in the Upper Black Forest, Baden-Württemberg, Germany. Home of Hotel Bergfrieden Löffingen.',
          containedInPlace: { '@type': 'Country', name: 'Germany' },
        },
      ],
    };
  }

  private amenity(name: string, value: boolean) {
    return { '@type': 'LocationFeatureSpecification', name, value };
  }

  private inject(data: object) {
    const script = this.doc.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute(this.DATA_ATTR, '1');
    script.textContent = JSON.stringify(data);
    this.doc.head.appendChild(script);
  }

  private clearRuntime() {
    this.doc.querySelectorAll(`script[type="application/ld+json"][${this.DATA_ATTR}]`).forEach(el => el.remove());
  }
}
