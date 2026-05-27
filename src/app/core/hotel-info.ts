// Single source of truth for hotel contact info, branding, and navigation paths.
// All user-visible text comes from i18n.ts — nothing in this file is translated.

import { TKey } from './i18n';

export const HOTEL = {
  name: 'Hotel Bergfrieden Löffingen',
  shortName: 'Hotel Bergfrieden',
  tagline: 'mit Alpenblick',

  address: {
    street: 'Wachtbuck Str. 17',
    postalCode: '79843',
    city: 'Löffingen',
    region: 'Baden-Württemberg',
    country: 'Deutschland',
    countryCode: 'DE',
  },

  geo: { lat: 47.8751017, lng: 8.3464534 },

  phones: [
    { label: 'Telefon', value: '+49 173 5321179', href: 'tel:+491735321179' },
    { label: 'Mobil',   value: '+49 162 2524914', href: 'tel:+491622524914' },
  ],

  email: 'info@hbf-hotel.de',
  emailHref: 'mailto:info@hbf-hotel.de',

  whatsapp: {
    number: '491735321179',
    href: 'https://wa.me/491735321179',
  },

  bookingCom: 'https://www.booking.com/hotel/de/haus-bergfrieden-loffingen.de.html',
  googleMaps: 'https://www.google.com/maps/place/Hotel+Bergfrieden/@47.8751017,8.3464534,17z',

  baseUrl: 'https://hbf-hotel.de',
} as const;

export interface NavLink {
  key: TKey;       // i18n key for label
  path: string;    // empty = home; otherwise relative to /<lang>/
}

export const NAV_LINKS: readonly NavLink[] = [
  { key: 'nav.home',      path: '' },
  { key: 'nav.about',     path: 'uber-uns' },
  { key: 'nav.rooms',     path: 'zimmer' },
  { key: 'nav.breakfast', path: 'fruhstuck' },
  { key: 'nav.discover',  path: 'entdecken' },
  { key: 'nav.gallery',   path: 'galerie' },
  { key: 'nav.contact',   path: 'kontakt' },
];
