// Compact i18n setup for static prerendered multi-language site.
// Each leaf is an object keyed by language code → translated string.
// Add a key once, fill all 4 langs at the same time → impossible to forget one.

export type Lang = 'de' | 'en' | 'fr' | 'tr';
export const LANGS: readonly Lang[] = ['de', 'en', 'fr', 'tr'] as const;
export const DEFAULT_LANG: Lang = 'de';

export const LANG_META: Record<Lang, { label: string; htmlLang: string; ogLocale: string }> = {
  de: { label: 'Deutsch',   htmlLang: 'de-DE', ogLocale: 'de_DE' },
  en: { label: 'English',   htmlLang: 'en',    ogLocale: 'en_US' },
  fr: { label: 'Français',  htmlLang: 'fr-FR', ogLocale: 'fr_FR' },
  tr: { label: 'Türkçe',    htmlLang: 'tr-TR', ogLocale: 'tr_TR' },
};

export function isValidLang(x: unknown): x is Lang {
  return typeof x === 'string' && (LANGS as readonly string[]).includes(x);
}

type LeafTuple = { de: string; en: string; fr: string; tr: string };

// === All translations live here. === // ---------------------------------------
export const T = {
  // ─── Navigation ──────────────────────────────────────────────────────────────
  nav: {
    home:      { de: 'Startseite',  en: 'Home',         fr: 'Accueil',         tr: 'Anasayfa' },
    about:     { de: 'Über uns',    en: 'About',        fr: 'À propos',        tr: 'Hakkımızda' },
    rooms:     { de: 'Zimmer',      en: 'Rooms',        fr: 'Chambres',        tr: 'Odalar' },
    breakfast: { de: 'Frühstück',   en: 'Breakfast',    fr: 'Petit-déjeuner',  tr: 'Kahvaltı' },
    discover:  { de: 'Entdecken',   en: 'Discover',     fr: 'Découvrir',       tr: 'Keşfet' },
    gallery:   { de: 'Galerie',     en: 'Gallery',      fr: 'Galerie',         tr: 'Galeri' },
    blog:      { de: 'Blog',        en: 'Blog',         fr: 'Blog',            tr: 'Blog' },
    contact:   { de: 'Kontakt',     en: 'Contact',      fr: 'Contact',         tr: 'İletişim' },
  },

  common: {
    inquire:        { de: 'Anfrage',          en: 'Inquire',          fr: 'Demander',          tr: 'Talep' },
    inquirySend:    { de: 'Anfrage senden',   en: 'Send inquiry',     fr: 'Envoyer une demande', tr: 'Talep gönder' },
    viewRooms:      { de: 'Zimmer ansehen',   en: 'View rooms',       fr: 'Voir les chambres', tr: 'Odaları gör' },
    discoverLink:   { de: 'Entdecken',        en: 'Discover',         fr: 'Découvrir',         tr: 'Keşfet' },
    learnMore:      { de: 'Mehr erfahren',    en: 'Learn more',       fr: 'En savoir plus',    tr: 'Daha fazla' },
    moreBreakfast:  { de: 'Mehr zum Frühstück', en: 'About our breakfast', fr: 'À propos du petit-déjeuner', tr: 'Kahvaltı hakkında' },
    ourStory:       { de: 'Unsere Geschichte', en: 'Our story',       fr: 'Notre histoire',    tr: 'Hikayemiz' },
    exploreRegion:  { de: 'Region erkunden',  en: 'Explore the region', fr: 'Explorer la région', tr: 'Bölgeyi keşfet' },
    allRooms:       { de: 'Alle Zimmer ansehen', en: 'View all rooms', fr: 'Voir toutes les chambres', tr: 'Tüm odaları gör' },
    contactUs:      { de: 'Kontakt aufnehmen', en: 'Get in touch',    fr: 'Nous contacter',    tr: 'İletişime geç' },
    inquireRoom:    { de: 'Anfrage für dieses Zimmer', en: 'Inquire about this room', fr: 'Demander cette chambre', tr: 'Bu oda için talep' },
    menuOpen:       { de: 'Menü öffnen',      en: 'Open menu',        fr: 'Ouvrir le menu',    tr: 'Menüyü aç' },
    menuClose:      { de: 'Menü schließen',   en: 'Close menu',       fr: 'Fermer le menu',    tr: 'Menüyü kapat' },
    close:          { de: 'Schließen',        en: 'Close',            fr: 'Fermer',            tr: 'Kapat' },
    whatsappLabel:  { de: 'WhatsApp Chat öffnen', en: 'Open WhatsApp chat', fr: 'Ouvrir le chat WhatsApp', tr: 'WhatsApp sohbetini aç' },
    whatsappTooltip:{ de: 'Schreiben Sie uns auf WhatsApp', en: 'Message us on WhatsApp', fr: 'Écrivez-nous sur WhatsApp', tr: 'Bize WhatsApp\'tan yazın' },
  },

  // ─── Footer ──────────────────────────────────────────────────────────────────
  footer: {
    intro: {
      de: 'Ein familiengeführtes Hotel im Hochschwarzwald, wo Ruhe, Aussicht und herzliche Gastfreundschaft sich zu unvergesslichen Tagen verbinden.',
      en: 'A family-run hotel in the Upper Black Forest, where calm, mountain views and warm hospitality come together for unforgettable days.',
      fr: "Un hôtel familial dans la Haute-Forêt-Noire, où le calme, la vue sur les montagnes et l'hospitalité chaleureuse se conjuguent pour des journées inoubliables.",
      tr: 'Yukarı Karaorman\'da aile işletmesi bir otel — huzur, dağ manzarası ve sıcak misafirperverlik unutulmaz günler için bir araya geliyor.',
    },
    navHeading:     { de: 'Navigation',    en: 'Navigation',  fr: 'Navigation',  tr: 'Menü' },
    contactHeading: { de: 'Kontakt',       en: 'Contact',     fr: 'Contact',     tr: 'İletişim' },
    reception:      { de: 'Rezeption: 11:00 – 22:00 Uhr', en: 'Reception: 11:00 AM – 10:00 PM', fr: 'Réception: 11h00 – 22h00', tr: 'Resepsiyon: 11:00 – 22:00' },
    rights:         { de: 'Alle Rechte vorbehalten.', en: 'All rights reserved.', fr: 'Tous droits réservés.', tr: 'Tüm hakları saklıdır.' },
    imprint:        { de: 'Impressum',     en: 'Imprint',     fr: 'Mentions légales', tr: 'Künye' },
    privacy:        { de: 'Datenschutz',   en: 'Privacy',     fr: 'Confidentialité', tr: 'Gizlilik' },
  },

  // ─── Home page ───────────────────────────────────────────────────────────────
  home: {
    heroEyebrow: { de: 'Hochschwarzwald · Löffingen', en: 'Upper Black Forest · Löffingen', fr: 'Haute-Forêt-Noire · Löffingen', tr: 'Yukarı Karaorman · Löffingen' },
    heroTitle1:  { de: 'Wo der Schwarzwald',  en: 'Where the Black Forest',   fr: 'Où la Forêt-Noire',    tr: 'Karaorman\'ın' },
    heroTitle2:  { de: 'die Alpen berührt.',  en: 'meets the Alps.',          fr: 'rencontre les Alpes.', tr: 'Alpler\'e dokunduğu yer.' },
    heroSub: {
      de: 'Familiengeführtes Hotel mit Bio-Regiofrühstück, ruhiger Lage und herzlicher Gastfreundschaft — seit über 40 Jahren ein Ort zum Ankommen.',
      en: 'Family-run hotel with organic regional breakfast, peaceful surroundings and warm hospitality — a place to arrive for over 40 years.',
      fr: 'Hôtel familial avec petit-déjeuner bio régional, environnement paisible et hospitalité chaleureuse — un lieu où poser ses valises depuis plus de 40 ans.',
      tr: 'Organik bölgesel kahvaltı, huzurlu konum ve sıcak misafirperverlik sunan aile işletmesi otel — 40 yılı aşkın süredir bir varış noktası.',
    },
    storyEyebrow: { de: 'Willkommen', en: 'Welcome', fr: 'Bienvenue', tr: 'Hoş geldiniz' },
    storyTitle1:  { de: 'Ein Hotel mit Seele,',      en: 'A hotel with soul,',           fr: 'Un hôtel avec une âme,',     tr: 'Ruhu olan bir otel,' },
    storyTitle2:  { de: 'eine Aussicht ohne Worte.', en: 'a view beyond words.',         fr: 'une vue à couper le souffle.', tr: 'sözcüklere sığmayan bir manzara.' },
    storyBody: {
      de: 'Mitten im Hochschwarzwald, fernab des Lärms, steht das Hotel Bergfrieden Löffingen. Seit vier Jahrzehnten begrüßen wir Gäste, die Ruhe, Natur und ehrliche Gastfreundschaft suchen. Heute führen wir das Haus mit derselben Hingabe weiter — mit Liebe zum Detail und zur Region.',
      en: 'In the heart of the Upper Black Forest, far from the noise, stands Hotel Bergfrieden Löffingen. For four decades we have welcomed guests seeking calm, nature and honest hospitality. Today we run the house with the same devotion — with love for detail and for the region.',
      fr: "Au cœur de la Haute-Forêt-Noire, loin du bruit, se trouve l'Hôtel Bergfrieden Löffingen. Depuis quatre décennies, nous accueillons des clients en quête de calme, de nature et d'une hospitalité sincère. Aujourd'hui, nous dirigeons la maison avec le même dévouement — avec amour du détail et de la région.",
      tr: 'Yukarı Karaorman\'ın kalbinde, gürültüden uzak — Hotel Bergfrieden Löffingen burada. Kırk yıldır huzur, doğa ve içten misafirperverlik arayan konukları ağırlıyoruz. Bugün de aynı bağlılıkla yönetiyoruz — detaya ve bölgeye olan sevgiyle.',
    },
    highlightsEyebrow: { de: 'Was uns ausmacht', en: 'What sets us apart', fr: 'Ce qui nous distingue', tr: 'Bizi farklı kılan' },
    highlightsTitle1:  { de: 'Vier Dinge, die wir',  en: 'Four things we',       fr: 'Quatre choses que nous',     tr: 'Özellikle önem verdiğimiz' },
    highlightsTitle2:  { de: 'besonders ernst nehmen.', en: 'take particularly seriously.', fr: 'prenons particulièrement au sérieux.', tr: 'dört şey.' },

    h1Title: { de: 'Bio-Regiofrühstück', en: 'Organic regional breakfast', fr: 'Petit-déjeuner bio régional', tr: 'Organik bölgesel kahvaltı' },
    h1Text:  {
      de: 'Eier, Milch, Käse und Honig kommen direkt vom Nachbars-Bauernhof in Bio-Qualität. Jeden Morgen frisch zubereitet.',
      en: 'Eggs, milk, cheese and honey come straight from the neighbouring farm in organic quality. Freshly prepared every morning.',
      fr: 'Œufs, lait, fromage et miel viennent directement de la ferme voisine, en qualité bio. Préparés frais chaque matin.',
      tr: 'Yumurta, süt, peynir ve bal — bitişikteki çiftlikten organik kalitede gelir. Her sabah taze hazırlanır.',
    },
    h2Title: { de: 'Alpenblick', en: 'Alpine view', fr: 'Vue sur les Alpes', tr: 'Alp manzarası' },
    h2Text:  {
      de: 'Atmen Sie die klare Schwarzwald-Luft und genießen Sie die Aussicht bis zu den Alpen vom Hotelgarten aus.',
      en: 'Breathe in the crisp Black Forest air and enjoy the view all the way to the Alps from the hotel garden.',
      fr: "Respirez l'air pur de la Forêt-Noire et profitez de la vue jusqu'aux Alpes depuis le jardin de l'hôtel.",
      tr: 'Karaorman\'ın berrak havasını solu, otel bahçesinden Alpler\'e kadar uzanan manzaranın tadını çıkar.',
    },
    h3Title: { de: 'Familiengeführt', en: 'Family-run', fr: 'Hôtel familial', tr: 'Aile işletmesi' },
    h3Text:  {
      de: 'Seit über 40 Jahren mit Herzlichkeit empfangen — heute persönlich geleitet, immer aufmerksam.',
      en: 'Welcoming guests warmly for over 40 years — today personally managed, always attentive.',
      fr: "Accueillir chaleureusement les clients depuis plus de 40 ans — aujourd'hui géré personnellement, toujours attentif.",
      tr: '40 yılı aşkın süredir içtenlikle ağırlıyoruz — bugün kişisel olarak yönetiliyor, her zaman özenli.',
    },
    h4Title: { de: 'Aktiv erleben', en: 'Active experiences', fr: 'Activités en plein air', tr: 'Aktif keşif' },
    h4Text:  {
      de: 'Fahrräder kostenlos, Wutachschlucht in 4 km, Wandern, Skifahren, Tennis und Reiten in der Region.',
      en: 'Free bicycles, Wutach Gorge 4 km away, hiking, skiing, tennis and horse riding in the region.',
      fr: 'Vélos gratuits, gorges de la Wutach à 4 km, randonnée, ski, tennis et équitation dans la région.',
      tr: 'Ücretsiz bisiklet, 4 km mesafede Wutach Vadisi, yürüyüş, kayak, tenis ve at binme.',
    },

    breakfastEyebrow: { de: 'Bio-Regiofrühstück', en: 'Organic regional breakfast', fr: 'Petit-déjeuner bio régional', tr: 'Organik bölgesel kahvaltı' },
    breakfastTitle1:  { de: 'Der frische Start', en: 'A fresh start', fr: 'Un début frais', tr: 'Güne taze' },
    breakfastTitle2:  { de: 'in den Tag.',        en: 'to the day.',  fr: 'à la journée.', tr: 'bir başlangıç.' },
    breakfastP1: {
      de: 'Jeden Morgen von 7 bis 11 Uhr ein Frühstück, das wir selbst zubereiten — mit Eiern, Milch, Käse und Honig vom benachbarten Bio-Bauernhof.',
      en: 'Every morning from 7 to 11 a breakfast we prepare ourselves — with eggs, milk, cheese and honey from the neighbouring organic farm.',
      fr: "Chaque matin de 7h à 11h, un petit-déjeuner que nous préparons nous-mêmes — avec œufs, lait, fromage et miel de la ferme bio voisine.",
      tr: 'Her sabah 7-11 arası kendi hazırladığımız bir kahvaltı — bitişikteki organik çiftlikten yumurta, süt, peynir ve bal ile.',
    },
    breakfastP2: {
      de: 'Vegetarisch, vegan oder mit besonderen Wünschen? Sagen Sie uns Bescheid, wir bereiten alles gerne nach Ihren Bedürfnissen vor.',
      en: 'Vegetarian, vegan or with special requests? Let us know — we are happy to prepare everything to your needs.',
      fr: 'Végétarien, végétalien ou avec des demandes spéciales ? Faites-le nous savoir, nous préparons tout avec plaisir selon vos besoins.',
      tr: 'Vejetaryen, vegan veya özel isteklerin mi var? Bize söyle — ihtiyacına göre seve seve hazırlarız.',
    },
    breakfastQuote: {
      de: '„Vom Nachbarsbauern direkt auf Ihren Teller."',
      en: '"From the neighbour\'s farm straight to your plate."',
      fr: '« De la ferme voisine directement à votre assiette. »',
      tr: '"Komşu çiftlikten doğrudan tabağına."',
    },

    roomsEyebrow: { de: 'Unsere Zimmer', en: 'Our rooms', fr: 'Nos chambres', tr: 'Odalarımız' },
    roomsTitle1:  { de: 'Räume zum',     en: 'Rooms to',  fr: 'Des chambres', tr: 'Sığınmak için' },
    roomsTitle2:  { de: 'Ankommen.',     en: 'arrive in.', fr: 'pour se poser.', tr: 'odalar.' },
    roomCardDouble: { de: 'Für zwei, ruhig und stilvoll', en: 'For two, calm and stylish', fr: 'Pour deux, calme et élégant', tr: 'İki kişilik, sakin ve şık' },
    roomCardSingle: { de: 'Komfortabel und praktisch',    en: 'Comfortable and practical', fr: 'Confortable et pratique', tr: 'Konforlu ve pratik' },
    roomCardFamily: { de: 'Platz für die ganze Familie',  en: 'Space for the whole family', fr: 'De la place pour toute la famille', tr: 'Tüm aile için yer' },

    discoverEyebrow: { de: 'Entdecken',  en: 'Discover',  fr: 'Découvrir', tr: 'Keşfet' },
    discoverTitle1:  { de: 'Wutachschlucht,', en: 'Wutach Gorge,', fr: 'Gorges de la Wutach,', tr: 'Wutach Vadisi,' },
    discoverTitle2:  { de: 'Wälder, Wege.',   en: 'forests, paths.', fr: 'forêts, sentiers.', tr: 'ormanlar, patikalar.' },
    discoverP1: {
      de: '4 Kilometer von der Wutachschlucht, mitten zwischen Schwarzwald-Wanderwegen und Loipen, finden Sie hier Ihren Ausgangspunkt zu allem, was den Hochschwarzwald ausmacht.',
      en: '4 km from the Wutach Gorge, surrounded by Black Forest hiking trails and ski tracks, you have a starting point for everything that defines the Upper Black Forest.',
      fr: 'À 4 km des gorges de la Wutach, au milieu des sentiers de randonnée de la Forêt-Noire et des pistes de ski, vous avez votre point de départ pour tout ce qui fait la Haute-Forêt-Noire.',
      tr: 'Wutach Vadisi\'ne 4 km, Karaorman yürüyüş yolları ve kayak parkurlarının ortasında — Yukarı Karaorman\'ın sunduğu her şey için başlangıç noktası.',
    },
    discoverP2: {
      de: 'Fahrräder leihen wir Ihnen kostenlos. Mit der Hochschwarzwald Card ab zwei Übernachtungen stehen Ihnen zahlreiche Attraktionen kostenfrei offen.',
      en: 'We lend you bicycles for free. With the Hochschwarzwald Card — included from two nights\' stay — many attractions are open to you at no cost.',
      fr: 'Nous vous prêtons gratuitement des vélos. Avec la Hochschwarzwald Card — incluse à partir de deux nuits — de nombreuses attractions vous sont ouvertes gratuitement.',
      tr: 'Bisikleti ücretsiz veriyoruz. İki gece üzeri konaklamada dahil olan Hochschwarzwald Card ile pek çok yer ücretsiz açık.',
    },

    ctaEyebrow: { de: 'Bereit anzukommen?', en: 'Ready to arrive?', fr: 'Prêt à arriver ?', tr: 'Gelmeye hazır mısın?' },
    ctaTitle1:  { de: 'Schreiben Sie uns,',         en: 'Write to us,',                fr: 'Écrivez-nous,',                tr: 'Bize yaz,' },
    ctaTitle2:  { de: 'wir freuen uns auf Sie.',    en: 'we look forward to hearing from you.', fr: 'nous nous réjouissons de vous lire.', tr: 'senden haber bekliyoruz.' },
    ctaBody: {
      de: 'Eine Anfrage genügt — wir melden uns persönlich zurück, prüfen die Verfügbarkeit und beantworten alle Ihre Fragen.',
      en: 'One inquiry is enough — we respond personally, check availability and answer all your questions.',
      fr: 'Une seule demande suffit — nous répondons personnellement, vérifions la disponibilité et répondons à toutes vos questions.',
      tr: 'Tek bir mesaj yeter — kişisel olarak geri döner, müsaitliği kontrol eder ve tüm sorularını yanıtlarız.',
    },
    scrollHint: { de: 'Entdecken', en: 'Scroll', fr: 'Défiler', tr: 'Keşfet' },
  },

  // ─── Über uns / About ────────────────────────────────────────────────────────
  about: {
    heroEyebrow: { de: 'Unsere Geschichte', en: 'Our story', fr: 'Notre histoire', tr: 'Hikayemiz' },
    heroTitle1:  { de: 'Seit vier Jahrzehnten', en: 'For four decades', fr: 'Depuis quatre décennies', tr: 'Kırk yıldır' },
    heroTitle2:  { de: 'in Löffingen zuhause.', en: 'at home in Löffingen.', fr: 'chez nous à Löffingen.', tr: 'Löffingen\'de evimizdeyiz.' },
    intro: {
      de: 'Seit 40 Jahren ist das Hotel Bergfrieden im schönen Löffingen in regem Betrieb.',
      en: 'For 40 years, Hotel Bergfrieden has been bustling in beautiful Löffingen.',
      fr: "Depuis 40 ans, l'Hôtel Bergfrieden est en activité dans la belle Löffingen.",
      tr: '40 yıldır Hotel Bergfrieden güzel Löffingen\'de hizmette.',
    },
    p1: {
      de: 'Als erfahrener Hotelfachmann, der bis dahin nur in Großstädten gelebt hatte, habe ich mich direkt in diese ruhige Gegend verliebt. 2018 übernahm ich die Leitung des Hauses — und freue mich seither jeden Tag aufs Neue, für unsere Gäste früh aufzustehen und das regionale Frühstück selbst vorzubereiten.',
      en: 'As an experienced hotelier who had only lived in big cities until then, I fell in love with this quiet area straight away. In 2018 I took over the management of the house — and ever since, I look forward every day to getting up early for our guests and preparing the regional breakfast myself.',
      fr: "Hôtelier expérimenté n'ayant vécu jusqu'alors que dans les grandes villes, je suis tombé amoureux de cette région paisible. En 2018, j'ai repris la direction de la maison — et depuis, je me réjouis chaque jour de me lever tôt pour nos clients et de préparer moi-même le petit-déjeuner régional.",
      tr: 'O zamana kadar yalnızca büyükşehirlerde yaşamış deneyimli bir otelci olarak, bu sakin bölgeye hemen aşık oldum. 2018\'de yönetimi devraldım — ve o günden beri her gün konuklarımız için erken kalkıp bölgesel kahvaltıyı kendim hazırlamanın mutluluğunu yaşıyorum.',
    },
    p2: {
      de: 'Was uns hier hält? Die Stille des Hochschwarzwalds. Die klare Luft. Der Blick, der an guten Tagen bis zu den Alpen reicht. Und die Menschen, die hier leben — Bauern, Wanderer, Familien, Stammgäste seit den ersten Tagen.',
      en: 'What keeps us here? The silence of the Upper Black Forest. The clear air. The view that, on good days, reaches all the way to the Alps. And the people who live here — farmers, hikers, families, regulars since day one.',
      fr: "Ce qui nous retient ici ? Le silence de la Haute-Forêt-Noire. L'air pur. La vue qui, par beau temps, s'étend jusqu'aux Alpes. Et les gens qui vivent ici — agriculteurs, randonneurs, familles, habitués depuis les premiers jours.",
      tr: 'Bizi burada tutan ne mi? Yukarı Karaorman\'ın sessizliği. Berrak hava. Açık günlerde Alpler\'e kadar uzanan manzara. Ve burada yaşayan insanlar — çiftçiler, yürüyüşçüler, aileler, ilk günden beri gelen müdavimler.',
    },
    p3: {
      de: 'Wir sind kein großes Haus, und das soll auch so bleiben. Bei uns kennt jeder Gast unseren Namen — und wir Ihren. Das ist kein Konzept, das ist einfach unser Verständnis von Gastfreundschaft.',
      en: 'We are not a large hotel, and that\'s how it should stay. With us, every guest knows our name — and we know theirs. That is not a concept, that is simply how we understand hospitality.',
      fr: "Nous ne sommes pas un grand hôtel, et c'est très bien ainsi. Chez nous, chaque client connaît notre nom — et nous connaissons le sien. Ce n'est pas un concept, c'est tout simplement notre conception de l'hospitalité.",
      tr: 'Büyük bir otel değiliz ve böyle de kalsın. Bizde her konuk adımızı bilir — biz de onların adını. Bu bir konsept değil, sadece bizim misafirperverlik anlayışımız.',
    },

    valuesEyebrow: { de: 'Was uns wichtig ist', en: 'What matters to us', fr: 'Ce qui nous importe', tr: 'Bizim için önemli olan' },
    valuesTitle:   { de: 'Drei Dinge, die wir niemals abgeben.', en: 'Three things we will never let go of.', fr: 'Trois choses auxquelles nous ne renoncerons jamais.', tr: 'Asla vazgeçmeyeceğimiz üç şey.' },

    v1Title: { de: 'Regionalität', en: 'Regional roots', fr: 'Régionalisme', tr: 'Yerellik' },
    v1Body: {
      de: 'Eier, Milch, Käse, Honig — direkt vom Bauernhof nebenan. In Bio-Qualität, weil es für uns nicht anders geht.',
      en: 'Eggs, milk, cheese, honey — straight from the farm next door. In organic quality, because for us there is no other way.',
      fr: "Œufs, lait, fromage, miel — directement de la ferme d'à côté. En qualité bio, parce que pour nous il n'y a pas d'autre choix.",
      tr: 'Yumurta, süt, peynir, bal — komşu çiftlikten doğrudan. Organik kalitede, çünkü bizim için başka türlüsü olmuyor.',
    },
    v2Title: { de: 'Persönlichkeit', en: 'Personal touch', fr: 'Approche personnelle', tr: 'Kişisellik' },
    v2Body: {
      de: 'Wir machen vieles selbst, weil wir möchten, dass Sie spüren: hier kümmert sich jemand persönlich um Sie. Nicht eine Hotelkette, nicht ein Algorithmus.',
      en: 'We do many things ourselves, because we want you to feel: someone here cares for you personally. Not a hotel chain, not an algorithm.',
      fr: "Nous faisons beaucoup nous-mêmes, parce que nous voulons que vous sentiez : ici quelqu'un s'occupe personnellement de vous. Pas une chaîne hôtelière, pas un algorithme.",
      tr: 'Çoğu şeyi kendimiz yapıyoruz, çünkü hissetmenizi istiyoruz: burada size kişisel olarak biri ilgileniyor. Bir otel zinciri değil, bir algoritma değil.',
    },
    v3Title: { de: 'Ruhe', en: 'Calm', fr: 'Sérénité', tr: 'Huzur' },
    v3Body: {
      de: 'Keine Eile, kein Lärm, keine Hektik. Was Sie hier mitnehmen, ist Erholung — und das Gefühl, einen Ort zu kennen, an den Sie zurückkehren möchten.',
      en: 'No rush, no noise, no hurry. What you take with you is rest — and the feeling of knowing a place you want to return to.',
      fr: "Pas de précipitation, pas de bruit, pas d'agitation. Ce que vous emportez ici, c'est du repos — et le sentiment de connaître un lieu où vous voulez revenir.",
      tr: 'Acele yok, gürültü yok, telaş yok. Buradan götürdüğün şey dinlenme — ve dönmek isteyeceğin bir yer bildiğini hissetmek.',
    },

    ctaEyebrow: { de: 'Lernen Sie uns kennen', en: 'Get to know us', fr: 'Apprenez à nous connaître', tr: 'Bizi tanıyın' },
    ctaTitle:   { de: 'Am besten persönlich.', en: 'Best in person.', fr: 'Mieux en personne.', tr: 'En iyisi yüz yüze.' },
    ctaBody: {
      de: 'Rufen Sie uns an, schreiben Sie uns, oder kommen Sie vorbei — wir nehmen uns gerne Zeit.',
      en: 'Call us, write to us, or stop by — we are happy to take the time.',
      fr: 'Appelez-nous, écrivez-nous ou passez nous voir — nous prenons le temps avec plaisir.',
      tr: 'Bizi ara, bize yaz, ya da uğra — vakit ayırmaktan memnuniyet duyarız.',
    },
  },

  // ─── Zimmer / Rooms ──────────────────────────────────────────────────────────
  rooms: {
    heroEyebrow: { de: 'Unsere Zimmer', en: 'Our rooms', fr: 'Nos chambres', tr: 'Odalarımız' },
    heroTitle1:  { de: 'Räume zum',     en: 'Rooms to',  fr: 'Des chambres', tr: 'Sığınmak için' },
    heroTitle2:  { de: 'Ankommen.',     en: 'arrive in.', fr: 'pour se poser.', tr: 'odalar.' },
    intro: {
      de: 'Wir haben kein Schema F. Jedes Zimmer hat seinen eigenen Charakter — gemeinsam ist allen nur, dass Sie sich darin wohlfühlen sollen. Sagen Sie uns einfach, wer mit Ihnen reist und was Sie brauchen, und wir finden den richtigen Raum für Sie.',
      en: 'We don\'t do cookie-cutter. Every room has its own character — what they all share is that you should feel at home in them. Just tell us who is travelling with you and what you need, and we\'ll find the right room for you.',
      fr: "Nous n'avons pas de schéma standard. Chaque chambre a son propre caractère — leur point commun est que vous devez vous y sentir bien. Dites-nous simplement avec qui vous voyagez et ce dont vous avez besoin, nous trouverons la bonne chambre pour vous.",
      tr: 'Tek tip yok. Her odanın kendi karakteri var — ortak noktaları yalnızca, içinde rahat hissetmeni istemek. Sadece kimle yola çıktığını ve neye ihtiyacın olduğunu söyle, sana uygun odayı bulalım.',
    },

    r1Name: { de: 'Einzelzimmer', en: 'Single Room', fr: 'Chambre simple', tr: 'Tek kişilik oda' },
    r1Cap:  { de: '1 Person',     en: '1 person',    fr: '1 personne',     tr: '1 kişi' },
    r1Desc: {
      de: 'Ein ruhiger Rückzugsort für Geschäftsreisende und Wanderer. Mit Schreibtisch, eigenem Bad und kostenlosem WLAN — der Bio-Frühstück inklusive.',
      en: 'A quiet retreat for business travellers and hikers. With desk, private bathroom and free Wi-Fi — organic breakfast included.',
      fr: 'Un refuge tranquille pour voyageurs d\'affaires et randonneurs. Avec bureau, salle de bain privée et Wi-Fi gratuit — petit-déjeuner bio inclus.',
      tr: 'İş seyahatleri ve yürüyüşçüler için sakin bir köşe. Çalışma masası, özel banyo ve ücretsiz Wi-Fi ile — organik kahvaltı dahil.',
    },
    r1F1: { de: '1 Einzelbett',            en: '1 single bed',            fr: '1 lit simple',             tr: '1 tek kişilik yatak' },
    r1F2: { de: 'Schreibtisch',            en: 'Desk',                    fr: 'Bureau',                   tr: 'Çalışma masası' },
    r1F3: { de: 'Eigenes Bad',             en: 'Private bathroom',        fr: 'Salle de bain privée',     tr: 'Özel banyo' },
    r1F4: { de: 'Kostenloses WLAN',        en: 'Free Wi-Fi',              fr: 'Wi-Fi gratuit',            tr: 'Ücretsiz Wi-Fi' },
    r1F5: { de: 'Bio-Frühstück inklusive', en: 'Organic breakfast included', fr: 'Petit-déjeuner bio inclus', tr: 'Organik kahvaltı dahil' },

    r2Name: { de: 'Doppelzimmer', en: 'Double Room', fr: 'Chambre double', tr: 'İki kişilik oda' },
    r2Cap:  { de: '2 Personen',   en: '2 people',    fr: '2 personnes',    tr: '2 kişi' },
    r2Desc: {
      de: 'Unser klassisches Zimmer für zwei — geräumig, mit elegantem Velvet-Kopfteil und Bildern aus der Region. Ideal für Paare, die Erholung suchen.',
      en: 'Our classic room for two — spacious, with an elegant velvet headboard and pictures from the region. Ideal for couples seeking rest.',
      fr: 'Notre chambre classique pour deux — spacieuse, avec une élégante tête de lit en velours et des images de la région. Idéale pour les couples en quête de repos.',
      tr: 'Klasik iki kişilik odamız — geniş, şık kadife başlık ve bölgeden tablolarla. Dinlenmek isteyen çiftler için ideal.',
    },
    r2F1: { de: '1 Doppelbett oder 2 Einzelbetten', en: '1 double bed or 2 singles', fr: '1 lit double ou 2 lits simples', tr: '1 çift kişilik veya 2 tek yatak' },
    r2F2: { de: 'Eigenes Bad',             en: 'Private bathroom',        fr: 'Salle de bain privée',     tr: 'Özel banyo' },
    r2F3: { de: 'Kostenloses WLAN',        en: 'Free Wi-Fi',              fr: 'Wi-Fi gratuit',            tr: 'Ücretsiz Wi-Fi' },
    r2F4: { de: 'Bio-Frühstück inklusive', en: 'Organic breakfast included', fr: 'Petit-déjeuner bio inclus', tr: 'Organik kahvaltı dahil' },

    r3Name: { de: 'Familienzimmer', en: 'Family Room', fr: 'Chambre familiale', tr: 'Aile odası' },
    r3Cap:  { de: '2 – 3 Personen', en: '2 – 3 people', fr: '2 à 3 personnes', tr: '2 – 3 kişi' },
    r3Desc: {
      de: 'Großzügiger Raum mit Sitzecke und großem Fenster — Platz für Eltern und ein älteres Kind oder Reisende, die mehr Raum schätzen.',
      en: 'Generous space with a seating area and large window — room for parents and an older child, or travellers who appreciate more space.',
      fr: 'Espace généreux avec coin salon et grande fenêtre — de la place pour parents et un enfant plus âgé, ou pour voyageurs aimant plus d\'espace.',
      tr: 'Oturma köşesi ve geniş pencereli ferah alan — anne baba ve büyükçe bir çocuk için, ya da daha fazla alan isteyenler için.',
    },
    r3F1: { de: 'Doppelbett + Zusatzbett möglich', en: 'Double bed + extra bed possible', fr: 'Lit double + lit d\'appoint possible', tr: 'Çift yatak + ek yatak mümkün' },
    r3F2: { de: 'Sitzecke',                en: 'Seating area',            fr: 'Coin salon',              tr: 'Oturma köşesi' },
    r3F3: { de: 'Eigenes Bad',             en: 'Private bathroom',        fr: 'Salle de bain privée',     tr: 'Özel banyo' },
    r3F4: { de: 'Kostenloses WLAN',        en: 'Free Wi-Fi',              fr: 'Wi-Fi gratuit',            tr: 'Ücretsiz Wi-Fi' },
    r3F5: { de: 'Bio-Frühstück inklusive', en: 'Organic breakfast included', fr: 'Petit-déjeuner bio inclus', tr: 'Organik kahvaltı dahil' },

    r4Name: { de: '4-Personen-Zimmer', en: '4-Person Room', fr: 'Chambre 4 personnes', tr: '4 kişilik oda' },
    r4Cap:  { de: '4 Personen',        en: '4 people',      fr: '4 personnes',         tr: '4 kişi' },
    r4Desc: {
      de: 'Geräumig genug für Familien oder Reisegruppen — mit Doppelbett und Etagenbett für insgesamt vier Schlafplätze.',
      en: 'Spacious enough for families or travel groups — with double bed and bunk bed for a total of four sleeping spots.',
      fr: 'Assez spacieuse pour les familles ou groupes — avec lit double et lit superposé pour quatre couchages au total.',
      tr: 'Aileler veya gruplar için yeterince geniş — çift yatak ve ranza ile toplam dört yatak.',
    },
    r4F1: { de: '1 Doppelbett + 1 Etagenbett (4 Plätze)', en: '1 double bed + 1 bunk bed (4 places)', fr: '1 lit double + 1 lit superposé (4 places)', tr: '1 çift yatak + 1 ranza (4 yatak)' },
    r4F2: { de: 'Eigenes Bad',             en: 'Private bathroom',        fr: 'Salle de bain privée',     tr: 'Özel banyo' },
    r4F3: { de: 'Kostenloses WLAN',        en: 'Free Wi-Fi',              fr: 'Wi-Fi gratuit',            tr: 'Ücretsiz Wi-Fi' },
    r4F4: { de: 'Bio-Frühstück inklusive', en: 'Organic breakfast included', fr: 'Petit-déjeuner bio inclus', tr: 'Organik kahvaltı dahil' },

    r5Name: { de: 'Familienzimmer mit Kindern', en: 'Family Room with Children', fr: 'Chambre familiale avec enfants', tr: 'Çocuklu aile odası' },
    r5Cap:  { de: '2 Erwachsene + Kleinkind',   en: '2 adults + small child',   fr: '2 adultes + jeune enfant',         tr: '2 yetişkin + küçük çocuk' },
    r5Desc: {
      de: 'Speziell für Familien mit Kleinkindern: mit Reisebett im Zimmer, kindgerechter Sitzecke und Spielplatz direkt am Haus.',
      en: 'Specifically for families with small children: with travel cot in the room, child-friendly seating and a playground right by the house.',
      fr: 'Spécialement pour familles avec jeunes enfants : lit de voyage dans la chambre, coin enfant adapté et aire de jeux juste à côté.',
      tr: 'Küçük çocuklu aileler için özel: odada seyahat beşiği, çocuklara uygun oturma köşesi ve evin hemen yanında oyun alanı.',
    },
    r5F1: { de: 'Doppelbett + Reisebett',  en: 'Double bed + travel cot', fr: 'Lit double + lit de voyage', tr: 'Çift yatak + seyahat beşiği' },
    r5F2: { de: 'Sitzecke für Kinder',     en: 'Children\'s seating area', fr: 'Coin enfant',             tr: 'Çocuk oturma köşesi' },
    r5F3: { de: 'Eigenes Bad',             en: 'Private bathroom',        fr: 'Salle de bain privée',     tr: 'Özel banyo' },
    r5F4: { de: 'Spielplatz im Garten',    en: 'Garden playground',       fr: 'Aire de jeux au jardin',  tr: 'Bahçede oyun alanı' },
    r5F5: { de: 'Bio-Frühstück inklusive', en: 'Organic breakfast included', fr: 'Petit-déjeuner bio inclus', tr: 'Organik kahvaltı dahil' },

    ctaEyebrow: { de: 'Nicht das Richtige dabei?', en: 'Nothing quite right?', fr: 'Pas exactement ce que vous cherchez ?', tr: 'Aradığını bulamadın mı?' },
    ctaTitle:   { de: 'Wir richten es ein.',  en: 'We\'ll arrange it.', fr: 'Nous nous en occupons.', tr: 'Biz halledelim.' },
    ctaBody: {
      de: 'Reisen Sie mit größerer Gruppe? Brauchen Sie eine besondere Ausstattung? Schreiben Sie uns einfach, was Sie suchen — wir finden eine Lösung.',
      en: 'Travelling with a larger group? Need special equipment? Just write us what you\'re looking for — we\'ll find a solution.',
      fr: 'Vous voyagez en grand groupe ? Vous avez besoin d\'un équipement particulier ? Écrivez-nous simplement ce que vous cherchez — nous trouverons une solution.',
      tr: 'Daha büyük bir grupla mı seyahat ediyorsun? Özel bir ekipmana mı ihtiyacın var? Aradığını bize yaz — bir çözüm buluruz.',
    },
    ctaBtn: { de: 'Persönliche Anfrage', en: 'Personal inquiry', fr: 'Demande personnelle', tr: 'Kişisel talep' },
  },

  // ─── Frühstück / Breakfast ──────────────────────────────────────────────────
  breakfast: {
    heroEyebrow: { de: 'Bio-Regiofrühstück', en: 'Organic regional breakfast', fr: 'Petit-déjeuner bio régional', tr: 'Organik bölgesel kahvaltı' },
    heroTitle1:  { de: 'Der frische Start', en: 'A fresh start', fr: 'Un début frais', tr: 'Güne taze' },
    heroTitle2:  { de: 'in den Tag.',       en: 'to the day.',   fr: 'à la journée.', tr: 'bir başlangıç.' },

    intro: {
      de: 'Wir bereiten unser Frühstück selbst zu — jeden Morgen, mit Zutaten aus der direkten Nachbarschaft.',
      en: 'We prepare our breakfast ourselves — every morning, with ingredients from the immediate neighbourhood.',
      fr: 'Nous préparons notre petit-déjeuner nous-mêmes — chaque matin, avec des ingrédients du voisinage immédiat.',
      tr: 'Kahvaltıyı kendimiz hazırlıyoruz — her sabah, doğrudan komşu çiftliklerden gelen malzemelerle.',
    },
    p1: {
      de: 'Eier, Milch, Käse und Honig kommen direkt vom Bauernhof nebenan, in Bio-Qualität. Brot und Backwaren werden frisch geliefert, Obst der Saison kommt aus der Region. Was Sie auf dem Teller finden, kennt einen Hof, einen Namen, eine Geschichte.',
      en: 'Eggs, milk, cheese and honey come straight from the farm next door, in organic quality. Bread and baked goods are delivered fresh, seasonal fruit comes from the region. What you find on the plate knows a farm, a name, a story.',
      fr: "Œufs, lait, fromage et miel viennent directement de la ferme d'à côté, en qualité bio. Pain et viennoiseries sont livrés frais, les fruits de saison viennent de la région. Ce que vous trouverez dans votre assiette connaît une ferme, un nom, une histoire.",
      tr: 'Yumurta, süt, peynir ve bal komşu çiftlikten organik kalitede geliyor. Ekmek ve hamur işleri taze geliyor, mevsim meyveleri bölgeden. Tabağında bulduğun her şeyin bir çiftliği, bir adı, bir hikayesi var.',
    },
    p2: {
      de: 'Heißgetränke sind während der Frühstückszeit selbstverständlich inklusive — der Kaffee schwarz und stark, der Tee in Auswahl, die heiße Schokolade für die Kinder.',
      en: 'Hot drinks are included during breakfast time as a matter of course — coffee black and strong, tea in selection, hot chocolate for the children.',
      fr: 'Les boissons chaudes sont bien sûr incluses pendant le petit-déjeuner — café noir et fort, thé en sélection, chocolat chaud pour les enfants.',
      tr: 'Kahvaltı saatinde sıcak içecekler tabii ki dahil — kahve siyah ve sert, çay seçeneklerle, çocuklar için sıcak çikolata.',
    },

    whenLabel:  { de: 'Wann',      en: 'When',      fr: 'Quand',   tr: 'Ne zaman' },
    whenTitle:  { de: '7 – 11 Uhr', en: '7 – 11 AM', fr: '7h – 11h', tr: '7 – 11' },
    whenBody: {
      de: 'Täglich. Wer früher unterwegs ist (Wanderer, Skifahrer), erhält auf Wunsch ein Frühstücksbeutel.',
      en: 'Daily. Those leaving early (hikers, skiers) can request a breakfast-to-go bag.',
      fr: 'Tous les jours. Les lève-tôt (randonneurs, skieurs) peuvent demander un sac de petit-déjeuner à emporter.',
      tr: 'Her gün. Erken çıkanlar (yürüyüşçüler, kayakçılar) isterse paket kahvaltı alabilir.',
    },

    whatLabel:  { de: 'Was',        en: 'What',         fr: 'Quoi',         tr: 'Ne' },
    whatTitle:  { de: 'Bio & regional', en: 'Organic & regional', fr: 'Bio & régional', tr: 'Organik & bölgesel' },
    whatBody: {
      de: 'Frische Eier, regionaler Käse, hausgemachte Aufstriche, frisches Brot, Saison-Obst, Müsli.',
      en: 'Fresh eggs, regional cheese, homemade spreads, fresh bread, seasonal fruit, muesli.',
      fr: 'Œufs frais, fromages régionaux, pâtes à tartiner maison, pain frais, fruits de saison, müesli.',
      tr: 'Taze yumurta, bölgesel peynir, ev yapımı sürmelikler, taze ekmek, mevsim meyveleri, müsli.',
    },

    forAllLabel: { de: 'Für alle',          en: 'For everyone',         fr: 'Pour tous',           tr: 'Herkes için' },
    forAllTitle: { de: 'Vegan & vegetarisch', en: 'Vegan & vegetarian', fr: 'Végan & végétarien', tr: 'Vegan & vejetaryen' },
    forAllBody: {
      de: 'Glutenfrei, laktosefrei oder andere Wünsche? Geben Sie kurz Bescheid — wir richten alles ein.',
      en: 'Gluten-free, lactose-free, or other preferences? Just let us know — we\'ll arrange it.',
      fr: 'Sans gluten, sans lactose ou autres préférences ? Faites-nous signe — nous nous en occupons.',
      tr: 'Glutensiz, laktozsuz veya başka istekler? Söyle yeter — biz hallederiz.',
    },

    ctaEyebrow: { de: 'Reservieren Sie Ihren Aufenthalt', en: 'Reserve your stay', fr: 'Réservez votre séjour', tr: 'Konaklamanı planla' },
    ctaTitle:   { de: 'Mit Frühstück inklusive.', en: 'Breakfast included.', fr: 'Petit-déjeuner inclus.', tr: 'Kahvaltı dahil.' },
  },

  // ─── Entdecken / Discover ───────────────────────────────────────────────────
  discover: {
    heroEyebrow: { de: 'Entdecken',          en: 'Discover',          fr: 'Découvrir',          tr: 'Keşfet' },
    heroTitle1:  { de: 'Hochschwarzwald,',   en: 'Upper Black Forest,', fr: 'Haute-Forêt-Noire,', tr: 'Yukarı Karaorman,' },
    heroTitle2:  { de: 'Tor zu den Alpen.',  en: 'gateway to the Alps.', fr: 'porte des Alpes.',  tr: 'Alpler\'in kapısı.' },
    intro: {
      de: '4 km zur Wutachschlucht. Hunderte Wanderkilometer vor der Tür. Mit der Hochschwarzwald Card — ab zwei Übernachtungen bei uns kostenlos enthalten — stehen Ihnen zahlreiche Attraktionen der Region offen.',
      en: '4 km to the Wutach Gorge. Hundreds of hiking kilometres at the door. With the Hochschwarzwald Card — free from two nights\' stay — many attractions of the region are open to you.',
      fr: '4 km des gorges de la Wutach. Des centaines de kilomètres de randonnée devant la porte. Avec la Hochschwarzwald Card — gratuite à partir de deux nuits — de nombreuses attractions de la région vous sont ouvertes.',
      tr: 'Wutach Vadisi\'ne 4 km. Kapının önünde yüzlerce kilometre yürüyüş yolu. İki gece üzeri konaklamada ücretsiz dahil olan Hochschwarzwald Card ile bölgenin birçok cazibesi açık.',
    },

    naturEyebrow: { de: 'Natur', en: 'Nature', fr: 'Nature', tr: 'Doğa' },
    naturTitle:   { de: 'Wo der Schwarzwald wirklich wild wird.', en: 'Where the Black Forest really turns wild.', fr: 'Où la Forêt-Noire devient vraiment sauvage.', tr: 'Karaorman\'ın gerçekten vahşileştiği yer.' },

    n1Title: { de: 'Wutachschlucht', en: 'Wutach Gorge', fr: 'Gorges de la Wutach', tr: 'Wutach Vadisi' },
    n1Body: {
      de: 'Die wildromantischste Schlucht des Schwarzwalds — nur 4 km vom Hotel entfernt. Stundenlange Wanderungen entlang Bächen, Wasserfällen und uralten Wäldern.',
      en: 'The most wildly romantic gorge in the Black Forest — only 4 km from the hotel. Hours of hiking along streams, waterfalls and ancient forests.',
      fr: "Les gorges les plus sauvagement romantiques de la Forêt-Noire — à seulement 4 km de l'hôtel. Des heures de randonnée le long de ruisseaux, cascades et forêts anciennes.",
      tr: 'Karaorman\'ın en vahşi-romantik vadisi — otele yalnızca 4 km. Dereler, şelaleler ve kadim ormanlar boyunca saatlerce yürüyüş.',
    },
    n2Title: { de: 'Alpenblick', en: 'Alpine view', fr: 'Vue sur les Alpes', tr: 'Alp manzarası' },
    n2Body: {
      de: 'An klaren Tagen reicht der Blick vom Balkon und Hotelgarten bis zu den Schweizer Alpen. Ein Anblick, den man nicht vergisst.',
      en: 'On clear days, the view from the balcony and hotel garden reaches all the way to the Swiss Alps. A sight you won\'t forget.',
      fr: "Par temps clair, la vue depuis le balcon et le jardin de l'hôtel s'étend jusqu'aux Alpes suisses. Une vue qu'on n'oublie pas.",
      tr: 'Açık günlerde balkondan ve otel bahçesinden İsviçre Alpleri\'ne kadar uzanan bir manzara. Unutamayacağın bir görüntü.',
    },
    n3Title: { de: 'Garten & Ruhe', en: 'Garden & calm', fr: 'Jardin & sérénité', tr: 'Bahçe & huzur' },
    n3Body: {
      de: 'Der hauseigene Garten lädt zum Verweilen ein — Liegestühle, Sonnenschirme, weiche Wiese und das Rauschen der Schwarzwald-Bäume drumherum.',
      en: 'Our own garden invites you to linger — loungers, parasols, soft grass and the rustle of the Black Forest trees all around.',
      fr: "Notre jardin invite à s'attarder — chaises longues, parasols, herbe douce et le bruissement des arbres de la Forêt-Noire tout autour.",
      tr: 'Otelin kendi bahçesi seni alıkoyuyor — şezlonglar, şemsiyeler, yumuşak çimen ve etrafta Karaorman ağaçlarının hışırtısı.',
    },

    sportEyebrow: { de: 'Sport & Aktivitäten', en: 'Sport & activities', fr: 'Sport & activités', tr: 'Spor & aktiviteler' },
    sportTitle:   { de: 'Aktiv erleben — in jeder Jahreszeit.', en: 'Active experience — in every season.', fr: 'Vivre actif — en toute saison.', tr: 'Aktif yaşa — her mevsim.' },

    s1Title: { de: 'Radausflüge', en: 'Cycling trips', fr: 'Excursions à vélo', tr: 'Bisiklet turları' },
    s1Body: {
      de: 'Fahrräder leihen wir Ihnen kostenlos. Tourenvorschläge geben wir gerne — von der gemütlichen Runde bis zur Bergetappe.',
      en: 'We lend you bicycles for free. We\'re happy to suggest routes — from leisurely loops to mountain stages.',
      fr: 'Nous vous prêtons gratuitement des vélos. Nous suggérons volontiers des parcours — de la balade tranquille à l\'étape de montagne.',
      tr: 'Bisikleti ücretsiz veriyoruz. Tur önerileri seve seve veririz — rahat turdan dağ etabına kadar.',
    },
    s2Title: { de: 'Spiel & Spaß im Garten', en: 'Games & fun in the garden', fr: 'Jeux & loisirs au jardin', tr: 'Bahçede oyun & eğlence' },
    s2Body: {
      de: 'Tischkicker, Brettspiele, Grill, Minigolf, Spielgeräte für Kinder — direkt am Haus, ohne Wege.',
      en: 'Foosball, board games, barbecue, minigolf, play equipment for children — right at the house, no travel needed.',
      fr: 'Baby-foot, jeux de société, barbecue, minigolf, équipements de jeu pour enfants — directement à la maison, sans détour.',
      tr: 'Langırt, kutu oyunları, mangal, minigolf, çocuklar için oyun aletleri — evin hemen yanında, gidiş geliş yok.',
    },
    s3Title: { de: 'Loipen & Wintersport', en: 'Cross-country & winter sport', fr: 'Pistes & sports d\'hiver', tr: 'Loipler & kış sporları' },
    s3Body: {
      de: 'Im Winter führen Loipen direkt durchs Tal, alpine Skigebiete sind in kurzer Fahrt erreichbar — und das Hotel ist warm und einladend wie eh und je.',
      en: 'In winter, cross-country tracks lead right through the valley, alpine ski areas are a short drive away — and the hotel is warm and welcoming as ever.',
      fr: "En hiver, les pistes de ski de fond traversent directement la vallée, les domaines de ski alpin sont à courte distance — et l'hôtel est chaleureux et accueillant comme toujours.",
      tr: 'Kışın loipler doğrudan vadiden geçer, alp kayak merkezleri kısa bir mesafede — ve otel her zaman olduğu gibi sıcak ve davetkâr.',
    },

    kulturEyebrow: { de: 'Kultur', en: 'Culture', fr: 'Culture', tr: 'Kültür' },
    kulturTitle:   { de: 'Geschichten, die hier zuhause sind.', en: 'Stories that live here.', fr: 'Des histoires qui vivent ici.', tr: 'Burada yaşayan hikayeler.' },

    k1Title: { de: 'Altstadt Löffingen', en: 'Old Town Löffingen', fr: 'Vieille ville de Löffingen', tr: 'Löffingen Eski Şehir' },
    k1Body: {
      de: 'Historische Schwarzwaldhäuser, Fachwerk, kleine Cafés und Wochenmarkt — die Altstadt ist in wenigen Minuten zu Fuß erreichbar.',
      en: 'Historic Black Forest houses, half-timbering, small cafés and a weekly market — the old town is just a few minutes\' walk away.',
      fr: "Maisons historiques de Forêt-Noire, colombages, petits cafés et marché hebdomadaire — la vieille ville est à quelques minutes à pied.",
      tr: 'Tarihi Karaorman evleri, kerpiç ve ahşap, küçük kafeler ve haftalık pazar — eski şehir yürüme mesafesinde.',
    },
    k2Title: { de: 'Schwarzwald-Tradition', en: 'Black Forest tradition', fr: 'Tradition de la Forêt-Noire', tr: 'Karaorman geleneği' },
    k2Body: {
      de: 'Charakteristische Schwarzwaldhöfe, Walmdächer und Holzbalkone — und das Hotel selbst ist ein Stück dieser Bauweise mit modernem Inneren.',
      en: 'Characteristic Black Forest farmsteads, hipped roofs and wooden balconies — and the hotel itself is a piece of this architecture with a modern interior.',
      fr: "Fermes typiques de Forêt-Noire, toits en croupe et balcons en bois — et l'hôtel lui-même est un morceau de cette architecture avec un intérieur moderne.",
      tr: 'Karakteristik Karaorman çiftlik evleri, kalkan çatılar ve ahşap balkonlar — ve otelin kendisi de bu mimarinin modern iç tasarımlı bir parçası.',
    },

    cardEyebrow: { de: 'Hochschwarzwald Card', en: 'Hochschwarzwald Card', fr: 'Hochschwarzwald Card', tr: 'Hochschwarzwald Card' },
    cardTitle:   { de: 'Ab zwei Nächten — kostenlos.', en: 'From two nights — free of charge.', fr: 'À partir de deux nuits — gratuit.', tr: 'İki geceden itibaren — ücretsiz.' },
    cardBody: {
      de: 'Mit der Hochschwarzwald Card nutzen unsere Gäste viele Attraktionen, Bäder und Bergbahnen der Region kostenfrei. Wir geben Ihnen die Karte bei Ankunft persönlich in die Hand.',
      en: 'With the Hochschwarzwald Card, our guests use many of the region\'s attractions, pools and mountain railways free of charge. We hand you the card personally on arrival.',
      fr: 'Avec la Hochschwarzwald Card, nos clients utilisent gratuitement de nombreuses attractions, piscines et téléphériques de la région. Nous vous remettons la carte personnellement à votre arrivée.',
      tr: 'Hochschwarzwald Card ile konuklarımız bölgenin pek çok cazibesini, havuzu ve dağ trenini ücretsiz kullanır. Kartı varışta size kişisel olarak teslim ederiz.',
    },
    cardBtn:      { de: 'Aufenthalt anfragen', en: 'Inquire about a stay', fr: 'Demander un séjour', tr: 'Konaklama talep et' },
    cardLearnBtn: { de: 'Mehr zur Karte',      en: 'More about the card', fr: 'En savoir plus sur la carte', tr: 'Kart hakkında daha fazlası' },
  },

  // ─── Hochschwarzwald Card ───────────────────────────────────────────────────
  card: {
    heroEyebrow: { de: 'Hochschwarzwald Card', en: 'Hochschwarzwald Card', fr: 'Hochschwarzwald Card', tr: 'Hochschwarzwald Card' },
    heroTitle1:  { de: 'Eine Karte,',          en: 'One card,',           fr: 'Une carte,',           tr: 'Tek bir kart,' },
    heroTitle2:  { de: 'die Region öffnet.',   en: 'the region opens up.', fr: 'la région s\'ouvre.', tr: 'bölgeyi açar.' },

    intro: {
      de: 'Als unser Gast erhalten Sie ab zwei Übernachtungen die Hochschwarzwald Card kostenlos. Sie ist Ihr Schlüssel zu über 100 Attraktionen, Bergbahnen, Bädern und Museen der Region — ohne weitere Kosten. Wir geben Ihnen die Karte bei Ankunft persönlich in die Hand.',
      en: 'As our guest, you receive the Hochschwarzwald Card free of charge from two nights\' stay. It is your key to more than 100 attractions, mountain railways, pools and museums of the region — at no extra cost. We hand you the card personally on arrival.',
      fr: 'En tant que notre client, vous recevez gratuitement la Hochschwarzwald Card à partir de deux nuits. C\'est votre clé pour plus de 100 attractions, téléphériques, piscines et musées de la région — sans frais supplémentaires. Nous vous remettons la carte personnellement à l\'arrivée.',
      tr: 'İki geceden itibaren konaklayan misafirlerimiz Hochschwarzwald Card\'ı ücretsiz alır. Bölgenin 100\'ü aşkın cazibe noktasına, dağ trenlerine, havuzlarına ve müzelerine ek ücret olmadan girişin anahtarıdır. Kartı varışta size kişisel olarak teslim ederiz.',
    },

    whatEyebrow: { de: 'Was ist die Karte?', en: 'What is the card?', fr: 'Qu\'est-ce que la carte ?', tr: 'Bu kart nedir?' },
    whatTitle:   { de: 'Ihr Pass für den Hochschwarzwald.', en: 'Your pass to the Upper Black Forest.', fr: 'Votre laissez-passer pour la Haute-Forêt-Noire.', tr: 'Yukarı Karaorman\'a pasaportunuz.' },
    whatBody: {
      de: 'Die Hochschwarzwald Card ist eine regionale Gästekarte, die von der Hochschwarzwald Tourismus GmbH für Übernachtungsgäste der Region ausgegeben wird. Während Ihres gesamten Aufenthalts gelangen Sie damit kostenfrei zu zahlreichen Ausflugszielen — von Bergbahnen über Thermen bis zu Erlebnisparks. Eine zweite oder dritte Nutzung am selben Tag ist möglich, der Wert steigt also mit jedem Ausflug.',
      en: 'The Hochschwarzwald Card is a regional guest card issued by Hochschwarzwald Tourismus GmbH for overnight guests of the region. During your entire stay it grants you free access to numerous excursion destinations — from mountain railways to thermal baths to adventure parks. A second or third visit on the same day is possible, so the value grows with each outing.',
      fr: 'La Hochschwarzwald Card est une carte d\'hôte régionale délivrée par Hochschwarzwald Tourismus GmbH aux clients en hébergement dans la région. Pendant tout votre séjour, elle vous donne un accès gratuit à de nombreuses destinations d\'excursion — des téléphériques aux bains thermaux en passant par les parcs d\'aventure. Une deuxième ou troisième visite le même jour est possible, sa valeur augmente donc à chaque sortie.',
      tr: 'Hochschwarzwald Card, bölgede konaklayan misafirler için Hochschwarzwald Tourismus GmbH tarafından verilen bölgesel bir misafir kartıdır. Konaklamanız boyunca dağ trenlerinden termal banyolara, macera parklarına kadar pek çok gezi noktasına ücretsiz giriş sağlar. Aynı gün ikinci veya üçüncü ziyaret de mümkündür — yani her gezide değer artar.',
    },

    howEyebrow: { de: 'So funktioniert\'s', en: 'How it works', fr: 'Comment ça marche', tr: 'Nasıl çalışır' },
    howTitle:   { de: 'Drei Schritte — fertig.', en: 'Three steps — done.', fr: 'Trois étapes — c\'est tout.', tr: 'Üç adım — tamam.' },

    step1Title: { de: 'Ab zwei Übernachtungen', en: 'From two nights\' stay', fr: 'À partir de deux nuits', tr: 'İki geceden itibaren' },
    step1Body: {
      de: 'Buchen Sie bei uns einen Aufenthalt von mindestens zwei Nächten. Die Karte ist im Übernachtungspreis bereits enthalten — Sie zahlen keinen Aufpreis.',
      en: 'Book a stay of at least two nights with us. The card is already included in the room rate — there\'s no extra charge.',
      fr: 'Réservez chez nous un séjour d\'au moins deux nuits. La carte est déjà incluse dans le prix de la chambre — sans supplément.',
      tr: 'Bizde en az iki gecelik konaklama yapın. Kart oda ücretine zaten dahildir — ek ücret ödemezsiniz.',
    },
    step2Title: { de: 'Persönlich bei Ankunft', en: 'Personally on arrival', fr: 'Personnellement à l\'arrivée', tr: 'Varışta kişisel olarak' },
    step2Body: {
      de: 'Bei Ihrem Check-in händigen wir Ihnen die Karte persönlich aus — pro Gast eine Karte, auch für Kinder. Wir erklären Ihnen gerne die Leistungen und geben Tipps für Ausflüge.',
      en: 'At check-in we hand you the card personally — one card per guest, including children. We are happy to explain the benefits and give you tips for excursions.',
      fr: 'Au check-in, nous vous remettons la carte personnellement — une carte par personne, enfants compris. Nous expliquons volontiers les avantages et donnons des conseils d\'excursions.',
      tr: 'Giriş işleminde kartı size kişisel olarak teslim ederiz — her misafir için bir kart, çocuklar dahil. Avantajları anlatır, gezi önerileri sunarız.',
    },
    step3Title: { de: 'Gültig den ganzen Aufenthalt', en: 'Valid for your whole stay', fr: 'Valable tout le séjour', tr: 'Tüm konaklama boyunca geçerli' },
    step3Body: {
      de: 'An den Kassen der Partner-Attraktionen einfach vorzeigen — kein Buchen, kein Anstehen für Tickets. Die Karte gilt vom Anreise- bis zum Abreisetag.',
      en: 'Simply show it at the partner attractions\' ticket desks — no bookings, no queueing for tickets. The card is valid from arrival day to departure day.',
      fr: 'Présentez-la simplement aux caisses des attractions partenaires — pas de réservation, pas de file d\'attente. Valable du jour d\'arrivée au jour de départ.',
      tr: 'Partner cazibe noktalarının giriş gişelerinde göstermeniz yeterli — rezervasyon yok, bilet kuyruğu yok. Kart varış gününden ayrılış gününe kadar geçerlidir.',
    },

    validEyebrow: { de: 'Wo gilt sie?',  en: 'Where is it valid?', fr: 'Où est-elle valable ?', tr: 'Nerelerde geçerli?' },
    validTitle:   { de: 'Über 100 Erlebnisse im ganzen Hochschwarzwald.', en: 'Over 100 experiences across the entire Upper Black Forest.', fr: 'Plus de 100 expériences dans toute la Haute-Forêt-Noire.', tr: 'Tüm Yukarı Karaorman\'da 100\'ü aşkın deneyim.' },
    validIntro: {
      de: 'Von Feldberg bis Titisee, von Freiburg bis zur Wutachschlucht — die Karte öffnet Türen in der gesamten Region. Eine Auswahl der Möglichkeiten:',
      en: 'From Feldberg to Titisee, from Freiburg to the Wutach Gorge — the card opens doors throughout the entire region. A selection of what\'s possible:',
      fr: 'Du Feldberg au Titisee, de Fribourg aux gorges de la Wutach — la carte ouvre des portes dans toute la région. Une sélection des possibilités :',
      tr: 'Feldberg\'den Titisee\'ye, Freiburg\'dan Wutach Vadisi\'ne — kart tüm bölgede kapılar açar. Olanaklardan bir seçki:',
    },

    cat1Title: { de: 'Bergbahnen & Gondeln', en: 'Mountain & cable railways', fr: 'Téléphériques & funiculaires', tr: 'Dağ trenleri & teleferikler' },
    cat1Body: {
      de: 'Feldbergbahn, Schauinslandbahn, Hasenhornbahn — Höhenfahrten mit Aussicht über Schwarzwald und Alpen, ohne Aufpreis.',
      en: 'Feldbergbahn, Schauinslandbahn, Hasenhornbahn — ascents with views over the Black Forest and the Alps, at no extra cost.',
      fr: 'Feldbergbahn, Schauinslandbahn, Hasenhornbahn — montées avec vue sur la Forêt-Noire et les Alpes, sans supplément.',
      tr: 'Feldbergbahn, Schauinslandbahn, Hasenhornbahn — Karaorman ve Alpler manzaralı tırmanışlar, ek ücretsiz.',
    },
    cat2Title: { de: 'Schwimmbäder & Saunen', en: 'Pools & saunas', fr: 'Piscines & saunas', tr: 'Havuzlar & saunalar' },
    cat2Body: {
      de: 'Hallen- und Freibäder in Titisee, Lenzkirch, Hinterzarten und vielen weiteren Orten — perfekt für entspannte Stunden nach einer Wanderung.',
      en: 'Indoor and outdoor pools in Titisee, Lenzkirch, Hinterzarten and many more — perfect for relaxing hours after a hike.',
      fr: 'Piscines intérieures et extérieures à Titisee, Lenzkirch, Hinterzarten et bien d\'autres — parfait pour se détendre après une randonnée.',
      tr: 'Titisee, Lenzkirch, Hinterzarten ve daha pek çok yerde kapalı ve açık havuzlar — yürüyüş sonrası rahatlamak için harika.',
    },
    cat3Title: { de: 'Bootsfahrten auf Titisee & Schluchsee', en: 'Boat trips on Titisee & Schluchsee', fr: 'Excursions en bateau sur le Titisee & Schluchsee', tr: 'Titisee & Schluchsee\'de tekne turları' },
    cat3Body: {
      de: 'Rundfahrten auf den beiden bekanntesten Schwarzwald-Seen — eine Stunde Ruhe auf dem Wasser, von beiden Ufern aus mit Schwarzwaldkulisse.',
      en: 'Round trips on the two best-known Black Forest lakes — an hour of calm on the water, with Black Forest backdrop on both shores.',
      fr: 'Croisières sur les deux lacs les plus célèbres de la Forêt-Noire — une heure de calme sur l\'eau, avec la Forêt-Noire en toile de fond.',
      tr: 'Karaorman\'ın en bilinen iki gölünde tekne turları — su üzerinde bir saatlik huzur, iki kıyıda da Karaorman manzarası.',
    },
    cat4Title: { de: 'Museen & Erlebnisorte', en: 'Museums & experience venues', fr: 'Musées & lieux d\'expérience', tr: 'Müzeler & deneyim merkezleri' },
    cat4Body: {
      de: 'Schwarzwälder Freilichtmuseum Vogtsbauernhof, Uhrenindustriemuseum, Wasserkraftwerk Häusern und mehr — Schwarzwald-Geschichte zum Anfassen.',
      en: 'Vogtsbauernhof Black Forest Open-Air Museum, Clock Industry Museum, Häusern hydroelectric plant and more — Black Forest history you can touch.',
      fr: 'Musée en plein air de la Forêt-Noire Vogtsbauernhof, Musée de l\'horlogerie, centrale hydroélectrique de Häusern et bien d\'autres — l\'histoire de la Forêt-Noire à portée de main.',
      tr: 'Vogtsbauernhof Açık Hava Müzesi, Saat Endüstrisi Müzesi, Häusern hidroelektrik santrali ve daha fazlası — dokunulabilen Karaorman tarihi.',
    },
    cat5Title: { de: 'Erlebnisparks für Familien', en: 'Adventure parks for families', fr: 'Parcs d\'aventure pour familles', tr: 'Aileler için macera parkları' },
    cat5Body: {
      de: 'Steinwasen-Park, Tatzmania, Galaxy Schwarzwald (mit Ermäßigung) — Spaß für Kinder und Erwachsene, vom Streichelzoo bis zur Sommerrodelbahn.',
      en: 'Steinwasen Park, Tatzmania, Galaxy Schwarzwald (discounted) — fun for kids and adults, from petting zoo to summer toboggan run.',
      fr: 'Steinwasen-Park, Tatzmania, Galaxy Schwarzwald (avec réduction) — plaisir pour enfants et adultes, du zoo pour enfants à la piste de luge d\'été.',
      tr: 'Steinwasen-Park, Tatzmania, Galaxy Schwarzwald (indirimli) — çocuk hayvanat bahçesinden yazlık kızak pistine kadar büyük-küçük herkese eğlence.',
    },
    cat6Title: { de: 'KONUS-Gästekarte: ÖPNV inklusive', en: 'KONUS guest card: public transport included', fr: 'Carte d\'hôte KONUS : transports en commun inclus', tr: 'KONUS misafir kartı: toplu taşıma dahil' },
    cat6Body: {
      de: 'Ihre Gästekarte ist gleichzeitig KONUS-Karte: Bus und Bahn im gesamten Schwarzwald nutzen Sie kostenlos — vom ersten bis zum letzten Tag.',
      en: 'Your guest card is also a KONUS card: you use buses and trains throughout the entire Black Forest free of charge — from the first day to the last.',
      fr: 'Votre carte d\'hôte est aussi une carte KONUS : vous utilisez bus et trains dans toute la Forêt-Noire gratuitement — du premier au dernier jour.',
      tr: 'Misafir kartınız aynı zamanda bir KONUS kartıdır: tüm Karaorman\'da otobüs ve treni ücretsiz kullanırsınız — ilk günden son güne kadar.',
    },

    tipEyebrow: { de: 'Gut zu wissen',   en: 'Good to know',   fr: 'Bon à savoir',   tr: 'Bilmeniz iyi olur' },
    tipTitle:   { de: 'Kleine Hinweise, großer Mehrwert.', en: 'Small tips, big value.', fr: 'Petites astuces, grande valeur.', tr: 'Küçük ipuçları, büyük değer.' },
    tip1: {
      de: 'Eine Karte pro Gast — auch Kinder erhalten ihre eigene Karte und profitieren von kostenfreiem Eintritt bei Partner-Attraktionen.',
      en: 'One card per guest — children also receive their own card and benefit from free admission at partner attractions.',
      fr: 'Une carte par personne — les enfants reçoivent aussi leur propre carte et bénéficient d\'entrées gratuites chez les partenaires.',
      tr: 'Her misafire bir kart — çocuklar da kendi kartlarını alır ve partner cazibe noktalarında ücretsiz girişten yararlanır.',
    },
    tip2: {
      de: 'Manche Leistungen sind saisonal: Bergbahnen, Freibäder und Sommerrodelbahnen sind nicht ganzjährig geöffnet. Wir geben Ihnen vor Ort gerne aktuelle Tipps.',
      en: 'Some services are seasonal: mountain railways, outdoor pools and summer toboggan runs are not open year-round. We are happy to give you up-to-date tips on site.',
      fr: 'Certaines prestations sont saisonnières : téléphériques, piscines en plein air et pistes de luge d\'été ne sont pas ouverts toute l\'année. Nous vous donnons volontiers des conseils sur place.',
      tr: 'Bazı hizmetler mevsimseldir: dağ trenleri, açık havuzlar ve yazlık kızak pistleri yıl boyu açık değildir. Yerinde güncel ipuçları seve seve veririz.',
    },
    tip3: {
      de: 'Aktuelle Partner-Liste und Öffnungszeiten finden Sie auf der offiziellen Website der Hochschwarzwald Tourismus GmbH — wir verlinken sie unten.',
      en: 'You can find the current partner list and opening times on the official Hochschwarzwald Tourismus GmbH website — we link to it below.',
      fr: 'Vous trouverez la liste actuelle des partenaires et les horaires sur le site officiel de Hochschwarzwald Tourismus GmbH — lien ci-dessous.',
      tr: 'Güncel partner listesini ve açılış saatlerini Hochschwarzwald Tourismus GmbH\'nin resmi sitesinde bulabilirsiniz — aşağıda bağlantı var.',
    },
    officialLinkLabel: { de: 'Zur offiziellen Hochschwarzwald-Card-Seite ↗', en: 'Visit the official Hochschwarzwald Card site ↗', fr: 'Vers le site officiel de la Hochschwarzwald Card ↗', tr: 'Resmi Hochschwarzwald Card sayfasına ↗' },

    ctaEyebrow: { de: 'Bereit für den Hochschwarzwald?', en: 'Ready for the Upper Black Forest?', fr: 'Prêt pour la Haute-Forêt-Noire ?', tr: 'Yukarı Karaorman\'a hazır mısınız?' },
    ctaTitle:   { de: 'Aufenthalt anfragen — Karte inklusive.', en: 'Inquire about a stay — card included.', fr: 'Demandez un séjour — carte incluse.', tr: 'Konaklama talep edin — kart dahil.' },
    ctaBody: {
      de: 'Schreiben Sie uns kurz Ihre Reisedaten — wir prüfen die Verfügbarkeit, beantworten alle Fragen und bestätigen Ihren Aufenthalt persönlich.',
      en: 'Just send us your travel dates — we check availability, answer all your questions and confirm your stay personally.',
      fr: 'Envoyez-nous simplement vos dates — nous vérifions la disponibilité, répondons à toutes vos questions et confirmons votre séjour personnellement.',
      tr: 'Bize kısaca tarihlerinizi yazın — müsaitliği kontrol eder, tüm sorularınızı yanıtlar ve konaklamanızı kişisel olarak onaylarız.',
    },
  },

  // ─── Galerie / Gallery ──────────────────────────────────────────────────────
  gallery: {
    eyebrow: { de: 'Galerie', en: 'Gallery', fr: 'Galerie', tr: 'Galeri' },
    title1:  { de: 'Werfen Sie einen', en: 'Take a',    fr: 'Jetez un',     tr: 'İçeriye' },
    title2:  { de: 'Blick hinein.',    en: 'look inside.', fr: 'coup d\'œil à l\'intérieur.', tr: 'göz at.' },
  },

  // ─── Kontakt / Contact ──────────────────────────────────────────────────────
  contact: {
    eyebrow: { de: 'Kontakt', en: 'Contact', fr: 'Contact', tr: 'İletişim' },
    title1:  { de: 'Schreiben Sie uns —', en: 'Write to us —', fr: 'Écrivez-nous —', tr: 'Bize yaz —' },
    title2:  { de: 'wir antworten persönlich.', en: 'we reply personally.', fr: 'nous répondons personnellement.', tr: 'kişisel olarak cevaplarız.' },

    formEyebrow: { de: 'Anfrage', en: 'Inquiry', fr: 'Demande', tr: 'Talep' },
    formTitle:   { de: 'Erzählen Sie uns von Ihrer Reise.', en: 'Tell us about your trip.', fr: 'Parlez-nous de votre voyage.', tr: 'Yolculuğunu anlat.' },

    fName:      { de: 'Name',       en: 'Name',     fr: 'Nom',       tr: 'Ad' },
    fEmail:     { de: 'E-Mail',     en: 'Email',    fr: 'E-mail',    tr: 'E-posta' },
    fPhone:     { de: 'Telefon',    en: 'Phone',    fr: 'Téléphone', tr: 'Telefon' },
    fSubject:   { de: 'Betreff',    en: 'Subject',  fr: 'Objet',     tr: 'Konu' },
    fMessage:   { de: 'Nachricht',  en: 'Message',  fr: 'Message',   tr: 'Mesaj' },
    fSubjectPh: { de: 'z. B. Anfrage Doppelzimmer 10.–14. Juli', en: 'e.g. Inquiry Double Room 10–14 July', fr: 'p.ex. Demande chambre double 10–14 juillet', tr: 'örn. İki kişilik oda talep 10–14 Temmuz' },
    fMessagePh: { de: 'Reisedaten, Personenzahl, besondere Wünsche…', en: 'Travel dates, number of people, special requests…', fr: 'Dates, nombre de personnes, demandes spéciales…', tr: 'Tarihler, kişi sayısı, özel istekler…' },
    fRequired:  { de: '* Pflichtfelder. Die Anfrage öffnet Ihr E-Mail-Programm und sendet die Nachricht an',
                  en: '* Required fields. The inquiry opens your email client and sends the message to',
                  fr: '* Champs obligatoires. La demande ouvre votre client mail et envoie le message à',
                  tr: '* Zorunlu alanlar. Talep e-posta programını açar ve mesajı şu adrese gönderir:' },

    sideEyebrow: { de: 'So erreichen Sie uns', en: 'How to reach us', fr: 'Comment nous joindre', tr: 'Bize nasıl ulaşılır' },
    sideAddress: { de: 'Adresse',  en: 'Address', fr: 'Adresse',  tr: 'Adres' },
    sidePhone:   { de: 'Telefon',  en: 'Phone',   fr: 'Téléphone', tr: 'Telefon' },
    sideEmail:   { de: 'E-Mail',   en: 'Email',   fr: 'E-mail',   tr: 'E-posta' },
    sideHours:   { de: 'Rezeption', en: 'Reception', fr: 'Réception', tr: 'Resepsiyon' },
    sideHoursV:  { de: '11:00 – 22:00 Uhr', en: '11:00 AM – 10:00 PM', fr: '11h00 – 22h00', tr: '11:00 – 22:00' },
    mapsLink:    { de: 'Auf Google Maps öffnen ↗', en: 'Open on Google Maps ↗', fr: 'Ouvrir sur Google Maps ↗', tr: 'Google Maps\'te aç ↗' },
    mapTitle:    { de: 'Standort Hotel Bergfrieden Löffingen', en: 'Location Hotel Bergfrieden Löffingen', fr: 'Emplacement Hôtel Bergfrieden Löffingen', tr: 'Konum Hotel Bergfrieden Löffingen' },
  },

  // ─── Impressum & Datenschutz ────────────────────────────────────────────────
  imprint: {
    eyebrow: { de: 'Impressum', en: 'Imprint', fr: 'Mentions légales', tr: 'Künye' },
    title:   { de: 'Angaben gemäß § 5 TMG', en: 'Information pursuant to § 5 TMG (German Telemedia Act)', fr: 'Informations conformément au § 5 TMG (loi allemande sur les télémédias)', tr: '§ 5 TMG (Alman Telemedya Kanunu) uyarınca bilgiler' },

    providerH: { de: 'Anbieter', en: 'Provider', fr: 'Prestataire', tr: 'Sağlayıcı' },
    contactH:  { de: 'Kontakt',  en: 'Contact',  fr: 'Contact',     tr: 'İletişim' },
    responsibleH: { de: 'Verantwortlich für den Inhalt', en: 'Responsible for content', fr: 'Responsable du contenu', tr: 'İçerikten sorumlu' },
    responsibleP: {
      de: 'Die Inhaberin / der Inhaber des Hotel Bergfrieden Löffingen.',
      en: 'The owner of Hotel Bergfrieden Löffingen.',
      fr: 'Le/la propriétaire de l\'Hôtel Bergfrieden Löffingen.',
      tr: 'Hotel Bergfrieden Löffingen sahibi.',
    },
    responsibleNote: {
      de: 'Hinweis: Die vollständigen handelsrechtlichen Angaben (USt-IdNr., Registergericht etc.) werden auf Wunsch von der Inhaberseite ergänzt.',
      en: 'Note: The complete commercial details (VAT ID, registration court etc.) will be added on request by the owner.',
      fr: 'Remarque : les coordonnées commerciales complètes (numéro de TVA, tribunal d\'enregistrement, etc.) seront complétées à la demande du propriétaire.',
      tr: 'Not: Tam ticari bilgiler (KDV numarası, kayıt mahkemesi vb.) sahip tarafından talep üzerine eklenir.',
    },
    disputeH: { de: 'Streitschlichtung', en: 'Dispute resolution', fr: 'Règlement des litiges', tr: 'Uyuşmazlık çözümü' },
    disputeP1: {
      de: 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:',
      en: 'The European Commission provides a platform for online dispute resolution (ODR):',
      fr: 'La Commission européenne met à disposition une plateforme de règlement en ligne des litiges (RLL) :',
      tr: 'Avrupa Komisyonu çevrimiçi uyuşmazlık çözümü (OS) için bir platform sağlar:',
    },
    disputeP2: {
      de: 'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
      en: 'We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.',
      fr: 'Nous ne sommes ni disposés ni obligés à participer à des procédures de règlement des litiges devant un organisme d\'arbitrage des consommateurs.',
      tr: 'Tüketici tahkim kurulu önündeki uyuşmazlık çözüm süreçlerine katılmaya istekli veya yükümlü değiliz.',
    },
    liabilityH: { de: 'Haftung für Inhalte', en: 'Liability for content', fr: 'Responsabilité du contenu', tr: 'İçerik sorumluluğu' },
    liabilityP: {
      de: 'Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
      en: 'As a service provider, we are responsible for our own content on these pages in accordance with general laws (§ 7 (1) TMG). According to §§ 8 to 10 TMG, however, we are not obliged to monitor transmitted or stored external information or to investigate circumstances that indicate illegal activity.',
      fr: 'En tant que prestataire de services, nous sommes responsables de nos propres contenus sur ces pages conformément aux lois générales (§ 7 al. 1 TMG). Conformément aux §§ 8 à 10 TMG, nous ne sommes toutefois pas obligés de surveiller les informations étrangères transmises ou stockées, ni de rechercher des circonstances indiquant une activité illégale.',
      tr: 'Hizmet sağlayıcı olarak, bu sayfalardaki kendi içeriğimizden § 7 par. 1 TMG uyarınca genel yasalara göre sorumluyuz. Ancak §§ 8 ila 10 TMG\'ye göre, iletilen veya saklanan üçüncü taraf bilgilerini izlemek veya yasadışı bir faaliyete işaret eden koşulları araştırmakla yükümlü değiliz.',
    },
    copyrightH: { de: 'Urheberrecht', en: 'Copyright', fr: 'Droit d\'auteur', tr: 'Telif hakkı' },
    copyrightP: {
      de: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.',
      en: 'The content and works on these pages created by the operators are subject to German copyright law. Reproduction, processing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator.',
      fr: 'Les contenus et œuvres créés par les exploitants sur ces pages sont soumis au droit d\'auteur allemand. La reproduction, le traitement, la diffusion et toute forme d\'exploitation en dehors des limites du droit d\'auteur nécessitent le consentement écrit de l\'auteur ou du créateur concerné.',
      tr: 'Bu sayfalardaki, operatörler tarafından oluşturulan içerikler ve eserler Alman telif hakkı yasasına tabidir. Çoğaltma, işleme, dağıtma ve telif hakkının sınırları dışında her türlü kullanım, ilgili yazar veya yaratıcının yazılı izni gerektirir.',
    },
  },

  privacy: {
    eyebrow: { de: 'Datenschutz', en: 'Privacy', fr: 'Confidentialité', tr: 'Gizlilik' },
    title:   { de: 'Datenschutzerklärung', en: 'Privacy policy', fr: 'Politique de confidentialité', tr: 'Gizlilik politikası' },

    s1H: { de: '1. Verantwortliche Stelle', en: '1. Data controller', fr: '1. Responsable du traitement', tr: '1. Veri sorumlusu' },
    s2H: { de: '2. Erhebung allgemeiner Daten beim Besuch', en: '2. Collection of general data when visiting', fr: '2. Collecte de données générales lors de la visite', tr: '2. Ziyaret sırasında genel veri toplama' },
    s2P: {
      de: 'Beim Besuch dieser Webseite werden durch unseren Hosting-Anbieter automatisch Informationen in Server-Logfiles erfasst (z. B. IP-Adresse, Datum und Uhrzeit des Aufrufs, abgerufene Seite). Diese Daten sind nicht bestimmten Personen zuordenbar und dienen ausschließlich statistischen Zwecken sowie der Sicherheit unserer IT-Systeme.',
      en: 'When you visit this website, our hosting provider automatically records information in server log files (e.g. IP address, date and time of the visit, page accessed). This data is not attributable to specific persons and is used exclusively for statistical purposes and the security of our IT systems.',
      fr: 'Lors de la visite de ce site, notre hébergeur enregistre automatiquement des informations dans des fichiers journaux du serveur (par ex. adresse IP, date et heure de la consultation, page consultée). Ces données ne peuvent pas être attribuées à des personnes spécifiques et servent exclusivement à des fins statistiques et à la sécurité de nos systèmes informatiques.',
      tr: 'Bu web sitesini ziyaret ettiğinizde, hosting sağlayıcımız sunucu log dosyalarına bilgileri otomatik olarak kaydeder (örn. IP adresi, ziyaret tarihi ve saati, erişilen sayfa). Bu veriler belirli kişilere atfedilemez ve yalnızca istatistiksel amaçlar ile IT sistemlerimizin güvenliği için kullanılır.',
    },
    s3H: { de: '3. Kontaktformular', en: '3. Contact form', fr: '3. Formulaire de contact', tr: '3. İletişim formu' },
    s3P: {
      de: 'Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.',
      en: 'If you send us inquiries via the contact form, the information you provide will be stored by us for the purpose of processing the inquiry and for any follow-up questions. We do not share this data without your consent.',
      fr: 'Si vous nous adressez des demandes via le formulaire de contact, vos informations seront stockées par nos soins aux fins du traitement de la demande et pour d\'éventuelles questions complémentaires. Nous ne partageons pas ces données sans votre consentement.',
      tr: 'İletişim formu aracılığıyla bize talepler gönderirseniz, verdiğiniz bilgiler talebin işlenmesi ve olası takip soruları için tarafımızca saklanır. Bu verileri rızanız olmadan paylaşmayız.',
    },
    s4H: { de: '4. Cookies', en: '4. Cookies', fr: '4. Cookies', tr: '4. Çerezler' },
    s4P: {
      de: 'Diese Webseite verwendet keine Cookies zu Tracking- oder Marketing-Zwecken. Es werden nur technisch notwendige Cookies gesetzt, die zum Betrieb der Seite erforderlich sind.',
      en: 'This website does not use cookies for tracking or marketing purposes. Only technically necessary cookies are set, required for the operation of the site.',
      fr: 'Ce site n\'utilise pas de cookies à des fins de suivi ou de marketing. Seuls les cookies techniquement nécessaires au fonctionnement du site sont définis.',
      tr: 'Bu web sitesi takip veya pazarlama amaçları için çerez kullanmaz. Yalnızca sitenin çalışması için gerekli teknik çerezler ayarlanır.',
    },
    s5H: { de: '5. Eingebundene Dienste', en: '5. Embedded services', fr: '5. Services intégrés', tr: '5. Entegre hizmetler' },
    s5P1: {
      de: 'Auf der Kontaktseite ist eine Google-Maps-Karte eingebettet. Beim Aufruf werden Daten an Google übertragen. Details:',
      en: 'A Google Maps map is embedded on the contact page. When accessed, data is transmitted to Google. Details:',
      fr: 'Une carte Google Maps est intégrée sur la page de contact. Lors de la consultation, des données sont transmises à Google. Détails :',
      tr: 'İletişim sayfasında bir Google Maps haritası gömülüdür. Erişildiğinde Google\'a veri aktarılır. Detaylar:',
    },
    s5P2: {
      de: 'Schriftarten werden über Google Fonts geladen. Beim Aufruf der Seite werden Daten an Google übertragen.',
      en: 'Fonts are loaded via Google Fonts. When the page is accessed, data is transmitted to Google.',
      fr: 'Les polices sont chargées via Google Fonts. Lors de la consultation de la page, des données sont transmises à Google.',
      tr: 'Yazı tipleri Google Fonts üzerinden yüklenir. Sayfa erişildiğinde Google\'a veri aktarılır.',
    },
    s6H: { de: '6. Ihre Rechte', en: '6. Your rights', fr: '6. Vos droits', tr: '6. Haklarınız' },
    s6Intro: {
      de: 'Sie haben jederzeit das Recht auf:',
      en: 'You have the right at any time to:',
      fr: 'Vous avez à tout moment le droit de :',
      tr: 'Her zaman şu haklara sahipsiniz:',
    },
    s6r1: { de: 'Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15 DSGVO)', en: 'Information about the data stored about you (Art. 15 GDPR)', fr: 'Informations sur les données vous concernant (art. 15 RGPD)', tr: 'Hakkınızda saklanan veriler hakkında bilgi (Madde 15 GDPR)' },
    s6r2: { de: 'Berichtigung unrichtiger Daten (Art. 16 DSGVO)', en: 'Correction of incorrect data (Art. 16 GDPR)', fr: 'Rectification des données inexactes (art. 16 RGPD)', tr: 'Yanlış verilerin düzeltilmesi (Madde 16 GDPR)' },
    s6r3: { de: 'Löschung Ihrer Daten (Art. 17 DSGVO)', en: 'Deletion of your data (Art. 17 GDPR)', fr: 'Effacement de vos données (art. 17 RGPD)', tr: 'Verilerinizin silinmesi (Madde 17 GDPR)' },
    s6r4: { de: 'Einschränkung der Verarbeitung (Art. 18 DSGVO)', en: 'Restriction of processing (Art. 18 GDPR)', fr: 'Limitation du traitement (art. 18 RGPD)', tr: 'İşlemenin kısıtlanması (Madde 18 GDPR)' },
    s6r5: { de: 'Datenübertragbarkeit (Art. 20 DSGVO)', en: 'Data portability (Art. 20 GDPR)', fr: 'Portabilité des données (art. 20 RGPD)', tr: 'Veri taşınabilirliği (Madde 20 GDPR)' },
    s6r6: { de: 'Widerspruch (Art. 21 DSGVO)', en: 'Objection (Art. 21 GDPR)', fr: 'Opposition (art. 21 RGPD)', tr: 'İtiraz (Madde 21 GDPR)' },
    s6After: {
      de: 'Wenden Sie sich dazu an die oben genannte E-Mail-Adresse. Außerdem haben Sie das Recht, sich bei einer Aufsichtsbehörde zu beschweren.',
      en: 'Please contact the email address above for this. You also have the right to file a complaint with a supervisory authority.',
      fr: 'Veuillez nous contacter à l\'adresse e-mail ci-dessus à cet effet. Vous avez également le droit de déposer une plainte auprès d\'une autorité de contrôle.',
      tr: 'Bunun için lütfen yukarıdaki e-posta adresine başvurun. Ayrıca bir denetim otoritesine şikayette bulunma hakkınız da vardır.',
    },
    s7H: { de: '7. Aktualität', en: '7. Currency', fr: '7. Actualité', tr: '7. Güncellik' },
    s7P: {
      de: 'Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung unserer Webseite oder geänderter gesetzlicher Vorgaben kann es notwendig werden, diese Erklärung zu ändern.',
      en: 'This privacy policy is currently valid. Due to the further development of our website or changes in legal requirements, it may become necessary to amend this statement.',
      fr: 'Cette politique de confidentialité est actuellement en vigueur. En raison du développement de notre site ou de modifications des exigences légales, il peut devenir nécessaire de modifier cette déclaration.',
      tr: 'Bu gizlilik politikası şu anda geçerlidir. Web sitemizin geliştirilmesi veya yasal gerekliliklerin değiştirilmesi nedeniyle bu beyanın değiştirilmesi gerekli hale gelebilir.',
    },
  },

  // ─── FAQ (also rendered as visible Q&A section on home + as FAQPage schema) ─
  faq: {
    eyebrow: { de: 'Häufig gefragt', en: 'Frequently asked', fr: 'Questions fréquentes', tr: 'Sıkça sorulan' },
    title1:  { de: 'Was Gäste',      en: 'What guests',      fr: 'Ce que les clients', tr: 'Konukların' },
    title2:  { de: 'oft wissen wollen.', en: 'often want to know.', fr: 'demandent souvent.', tr: 'sıkça sorduğu sorular.' },

    q1: { de: 'Ist das Frühstück inklusive?', en: 'Is breakfast included?', fr: 'Le petit-déjeuner est-il inclus ?', tr: 'Kahvaltı dahil mi?' },
    a1: {
      de: 'Ja. Unser Bio-Regiofrühstück ist bei jedem Zimmer inklusive und wird täglich von 7 bis 11 Uhr serviert. Eier, Milch, Käse und Honig kommen direkt vom benachbarten Bio-Bauernhof. Vegetarisch, vegan oder mit besonderen Wünschen — geben Sie uns kurz Bescheid.',
      en: 'Yes. Our organic regional breakfast is included with every room and served daily from 7 to 11 AM. Eggs, milk, cheese and honey come directly from the neighbouring organic farm. Vegetarian, vegan or special dietary needs — just let us know.',
      fr: 'Oui. Notre petit-déjeuner bio régional est inclus pour chaque chambre, servi tous les jours de 7h à 11h. Œufs, lait, fromage et miel viennent directement de la ferme bio voisine. Végétarien, végétalien ou demandes spéciales — faites-nous signe.',
      tr: 'Evet. Organik bölgesel kahvaltımız her odada dahildir, her gün 7-11 arası servis edilir. Yumurta, süt, peynir ve bal komşu organik çiftlikten gelir. Vejetaryen, vegan veya özel istekler — bize söylemeniz yeterli.',
    },

    q2: { de: 'Wo befindet sich das Hotel?', en: 'Where is the hotel?', fr: 'Où se trouve l\'hôtel ?', tr: 'Otel nerede?' },
    a2: {
      de: 'Wachtbuck Str. 17, 79843 Löffingen, Baden-Württemberg — mitten im Hochschwarzwald, 4 km von der Wutachschlucht entfernt. An klaren Tagen reicht der Blick bis zu den Schweizer Alpen.',
      en: 'Wachtbuck Str. 17, 79843 Löffingen, Baden-Württemberg — in the Upper Black Forest, 4 km from the Wutach Gorge. On clear days the view reaches all the way to the Swiss Alps.',
      fr: 'Wachtbuck Str. 17, 79843 Löffingen, Bade-Wurtemberg — en pleine Haute-Forêt-Noire, à 4 km des gorges de la Wutach. Par temps clair, la vue s\'étend jusqu\'aux Alpes suisses.',
      tr: 'Wachtbuck Str. 17, 79843 Löffingen, Baden-Württemberg — Yukarı Karaorman\'ın ortasında, Wutach Vadisi\'ne 4 km. Açık günlerde manzara İsviçre Alpleri\'ne kadar uzanır.',
    },

    q3: { de: 'Welche Sprachen werden gesprochen?', en: 'Which languages are spoken?', fr: 'Quelles langues sont parlées ?', tr: 'Hangi diller konuşulur?' },
    a3: {
      de: 'An der Rezeption sprechen wir Deutsch, Englisch und Türkisch. Mit Französisch und einfachem Italienisch helfen wir gerne weiter.',
      en: 'At reception we speak German, English and Turkish. We also help guests in French and basic Italian where possible.',
      fr: 'À la réception, nous parlons allemand, anglais et turc. Nous aidons aussi en français et en italien de base si possible.',
      tr: 'Resepsiyonda Almanca, İngilizce ve Türkçe konuşuyoruz. Fransızca ve temel İtalyanca ile de elimizden geldiğince yardımcı oluyoruz.',
    },

    q4: { de: 'Gibt es kostenlose Fahrräder?', en: 'Are there free bicycles?', fr: 'Y a-t-il des vélos gratuits ?', tr: 'Ücretsiz bisiklet var mı?' },
    a4: {
      de: 'Ja. Wir leihen unseren Gästen Fahrräder kostenlos und geben gerne Tourenvorschläge — von der gemütlichen Runde bis zur Bergetappe.',
      en: 'Yes. We lend bicycles to our guests free of charge and gladly suggest routes — from leisurely loops to mountain stages.',
      fr: 'Oui. Nous prêtons des vélos à nos clients gratuitement et suggérons volontiers des parcours — de la balade tranquille à l\'étape de montagne.',
      tr: 'Evet. Konuklarımıza bisikleti ücretsiz veriyoruz ve tur önerileri seve seve yapıyoruz — rahat turdan dağ etabına kadar.',
    },

    q5: { de: 'Was ist die Hochschwarzwald Card?', en: 'What is the Hochschwarzwald Card?', fr: 'Qu\'est-ce que la Hochschwarzwald Card ?', tr: 'Hochschwarzwald Card nedir?' },
    a5: {
      de: 'Eine regionale Gästekarte, die ab zwei Übernachtungen bei uns kostenlos enthalten ist. Sie öffnet Ihnen viele Attraktionen, Bäder und Bergbahnen der Region kostenfrei. Wir geben Ihnen die Karte bei Ankunft persönlich.',
      en: 'A regional guest card, included free of charge from two-night stays. It grants free entry to many of the region\'s attractions, swimming pools and mountain lifts. We hand you the card personally on arrival.',
      fr: 'Une carte d\'hôte régionale, incluse gratuitement à partir de deux nuits. Elle donne accès gratuit à de nombreuses attractions, piscines et téléphériques de la région. Nous vous la remettons personnellement à l\'arrivée.',
      tr: 'İki gece ve üzeri konaklamalarda ücretsiz dahil olan bölgesel bir misafir kartı. Bölgenin pek çok cazibe noktasına, havuzuna ve dağ trenine ücretsiz giriş sağlar. Kartı varışta size kişisel olarak teslim ederiz.',
    },

    q6: { de: 'Wie kann ich buchen?', en: 'How can I book?', fr: 'Comment réserver ?', tr: 'Nasıl rezervasyon yapabilirim?' },
    a6: {
      de: 'Per Anfrage über das Kontaktformular, per E-Mail an info@hbf-hotel.de oder telefonisch unter +49 173 5321179. Wir antworten persönlich, prüfen die Verfügbarkeit und bestätigen Ihre Buchung.',
      en: 'Via the contact form, by email at info@hbf-hotel.de, or by phone at +49 173 5321179. We respond personally, check availability and confirm your booking.',
      fr: 'Par le formulaire de contact, par e-mail à info@hbf-hotel.de, ou par téléphone au +49 173 5321179. Nous répondons personnellement, vérifions la disponibilité et confirmons votre réservation.',
      tr: 'İletişim formu üzerinden, info@hbf-hotel.de e-postası ile veya +49 173 5321179 numarasından telefonla. Kişisel olarak cevaplar, müsaitliği kontrol eder ve rezervasyonunuzu onaylarız.',
    },

    q8: { de: 'Wann sind Check-in und Check-out?', en: 'When is check-in and check-out?', fr: 'Quels sont les horaires d\'arrivée et de départ ?', tr: 'Giriş ve çıkış saatleri nedir?' },
    a8: {
      de: 'Check-in ab 14:00 Uhr, Check-out bis 11:00 Uhr. Die Rezeption ist täglich von 11:00 bis 22:00 Uhr besetzt. Frühere oder spätere Ankünfte bitte vorher mit uns absprechen.',
      en: 'Check-in from 14:00, check-out by 11:00. Reception is staffed daily 11:00 – 22:00. Please arrange earlier or later arrivals with us in advance.',
      fr: 'Arrivée à partir de 14h00, départ avant 11h00. La réception est tenue tous les jours de 11h00 à 22h00. Merci de nous prévenir pour toute arrivée plus tôt ou plus tard.',
      tr: 'Giriş 14:00\'dan itibaren, çıkış en geç 11:00. Resepsiyon her gün 11:00 – 22:00 arası açıktır. Daha erken veya geç varışları lütfen önceden bizimle planlayın.',
    },
  },

  // ─── 404 ────────────────────────────────────────────────────────────────────
  notFound: {
    eyebrow: { de: '404', en: '404', fr: '404', tr: '404' },
    title1:  { de: 'Wir scheinen',           en: 'We seem to have',     fr: 'Nous semblons',    tr: 'Yolumuzu' },
    title2:  { de: 'vom Weg abgekommen.',    en: 'wandered off the path.', fr: 'avoir perdu le chemin.', tr: 'kaybetmiş gibiyiz.' },
    body: {
      de: 'Die gewünschte Seite existiert nicht oder wurde verschoben. Kein Grund zur Sorge — hier finden Sie zurück.',
      en: 'The requested page does not exist or has been moved. No need to worry — find your way back here.',
      fr: 'La page demandée n\'existe pas ou a été déplacée. Pas d\'inquiétude — retrouvez votre chemin ici.',
      tr: 'İstenen sayfa mevcut değil veya taşındı. Endişelenme — yolu buradan bulursun.',
    },
    btnHome: { de: 'Zur Startseite',  en: 'To homepage',   fr: 'Vers l\'accueil', tr: 'Anasayfaya' },
  },
} as const;

// === Helpers ================================================================

// All keys in T type-safely. Format: 'nav.home', 'home.heroTitle1', etc.
type TPath<Obj, Prefix extends string = ''> = {
  [K in keyof Obj & string]: Obj[K] extends LeafTuple
    ? `${Prefix}${K}`
    : TPath<Obj[K], `${Prefix}${K}.`>;
}[keyof Obj & string];

export type TKey = TPath<typeof T>;

export function tr(lang: Lang, key: TKey): string {
  const parts = key.split('.');
  let node: any = T;
  for (const p of parts) {
    node = node?.[p];
    if (!node) return key;
  }
  return (node as LeafTuple)[lang] ?? (node as LeafTuple).de ?? key;
}
