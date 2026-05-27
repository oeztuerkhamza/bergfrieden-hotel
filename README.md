# Hotel Bergfrieden Löffingen — Web

Moderne, statisch gerenderte Webseite für das Hotel Bergfrieden Löffingen. Angular 21 mit Prerendering (SSG), Tailwind CSS, vollständig SEO-optimiert, hostet auf GitHub Pages ohne Server-Runtime.

## Architektur

| Bereich        | Technologie                                     |
|---|---|
| Framework      | Angular 21 (Standalone Components, Signals)     |
| Rendering      | Static Site Generation via `outputMode: 'static'` (Prerender aller Routen zu HTML) |
| Styling        | Tailwind CSS 3 + Custom Design Tokens           |
| Fonts          | Cormorant Garamond (Display) + Inter (Body)     |
| SEO            | Pro-Route Meta-Service, Hotel-Schema.org JSON-LD, sitemap.xml, robots.txt, OG/Twitter Cards |
| Hosting        | GitHub Pages (statisch, kein Node-Runtime)      |
| Deploy         | GitHub Actions (auto-deploy on push to main)    |

## Designsystem

Inspiriert von "luxuriös, aber warm". Black-Forest-Palette:

- **Forest** (`#1f3322` → `#9bc09b`) — primär, Hintergründe, dunkle Sektionen
- **Cream** (`#fdfbf6` → `#7d5a32`) — Hintergrund, Text auf Dunkel
- **Bronze** (`#bc8945` → `#5d3c28`) — Akzente, Eyebrows, Hervorhebungen
- **Ink** (`#1f1f1c` → `#f6f6f5`) — Text-Hierarchie

Typografie:
- Headlines in Cormorant Garamond (klassische Serif) — oft mit Kursiv-Akzent
- Body in Inter — klare, moderne Lesbarkeit

## Seitenstruktur

```
/                  Startseite mit Hero, Story, Highlights, Zimmer-Teaser, Kontakt-CTA
/uber-uns          Über uns — Geschichte, Werte, persönliche Note
/zimmer            Alle 5 Zimmertypen mit Beschreibung & Anfrage-CTA
/fruhstuck         Bio-Regiofrühstück — Zeiten, Bezugsquellen, Optionen
/entdecken         Region: Natur, Sport, Kultur, Hochschwarzwald Card
/galerie           Bildergalerie mit Lightbox
/kontakt           Anfrageformular (mailto) + Adresse + Google Maps
/impressum         Angaben gemäß § 5 TMG
/datenschutz       Datenschutzerklärung (DSGVO)
```

Alle Routen sind beim Build vorgerendert → vollständiges HTML ohne JavaScript-Laden.

## Entwicklung

Voraussetzungen: Node.js ≥ 20, npm ≥ 10.

```bash
npm install        # Abhängigkeiten installieren
npm start          # Dev-Server auf http://localhost:4200
npm run build      # Production Build mit Prerender + 404-Fallback
```

Build-Output unter `dist/hbf-hotel-web/browser/` enthält:
- `index.html` und je `route/index.html` für jede definierte Route (vorgerendert)
- `404.html` als SPA-Fallback (Kopie von `index.csr.html`)
- `sitemap.xml`, `robots.txt`, `.nojekyll`, Assets unter `images/`

## Deployment (GitHub Pages)

1. Repository auf GitHub anlegen, Code pushen auf `main`.
2. In den Repository-Settings → Pages: Source = "GitHub Actions".
3. Bei jedem Push auf `main` läuft `.github/workflows/deploy.yml` und veröffentlicht den Build.
4. Die Seite ist dann unter `https://<user>.github.io/<repo>/` erreichbar.

Bei eigener Domain (z. B. `hbf-hotel.de`):
- `--base-href "/"` im Workflow setzen (statt `/repo-name/`)
- Datei `public/CNAME` mit der Domain anlegen
- DNS auf GitHub Pages zeigen lassen (A Records 185.199.108.153 etc., oder CNAME auf `<user>.github.io`)

## Inhalte ändern

Zentrale Stellen:
- `src/app/core/hotel-info.ts` — Kontakt, Adresse, Navigation
- `src/app/pages/zimmer/zimmer.ts` — Zimmer-Daten (Name, Bild, Beschreibung, Features)
- `src/app/pages/entdecken/entdecken.ts` — Aktivitäten/Sehenswürdigkeiten
- `src/index.html` — Globale SEO-Defaults und Hotel-Schema.org JSON-LD
- `public/sitemap.xml` — Suchmaschinen-Sitemap (bei neuen Routen aktualisieren)
- `public/images/` — Hotelfotos

Bilder: Originale HD-Versionen sind unter `public/images/`. Neue Bilder einfach hier ablegen und im Template als `/images/dateiname.jpg` referenzieren.

## SEO-Checkliste

- Pro-Route `<title>`, `<meta description>`, Canonical
- Open Graph + Twitter Cards mit Vorschaubild
- Hotel-Schema.org JSON-LD (Adresse, Geo, Telefon, Amenities, Preis)
- `lang="de"` und `og:locale=de_DE`
- Sitemap.xml mit allen Routen
- Robots.txt mit Sitemap-Verweis
- Semantisches HTML (`<header>`, `<main>`, `<footer>`, `<article>`, `<address>`)
- Bilder mit beschreibendem `alt`
- Lazy-Loading für Below-the-Fold-Bilder

## Bekannte offene Punkte

- Echte Zimmerdaten (Anzahl, Maße, Preise) müssen mit dem Inhaber abgeglichen werden — aktuell sind Beschreibungen generisch gehalten.
- Echte Social-Media-Konten (falls vorhanden) sollten ergänzt werden.
- Impressum: vollständige handelsrechtliche Angaben (USt-IdNr. etc.) müssen vom Inhaber ergänzt werden.
- Domain-Konfiguration (CNAME, DNS) wenn das Hotel die Domain übernehmen möchte.

## Lizenz

Inhalte und Bilder gehören dem Hotel Bergfrieden Löffingen.
