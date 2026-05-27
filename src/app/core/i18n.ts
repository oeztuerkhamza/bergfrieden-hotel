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

  // ─── Blog ───────────────────────────────────────────────────────────────────
  blog: {
    heroEyebrow: { de: 'Blog', en: 'Blog', fr: 'Blog', tr: 'Blog' },
    heroTitle1:  { de: '20 Erlebnisse im',  en: '20 experiences in',  fr: '20 expériences en',  tr: 'Karaorman\'da' },
    heroTitle2:  { de: 'Schwarzwald.',      en: 'the Black Forest.',  fr: 'Forêt-Noire.',       tr: '20 deneyim.' },
    intro: {
      de: 'Welche Wege lohnen sich? Wo schmeckt die Schwarzwälder Kirschtorte am besten? Was tun an Regentagen? Wir leben hier, kennen die Pfade, die kleinen Cafés, die Aussichtspunkte — und teilen unsere Lieblingsziele gerne mit Ihnen. Klicken Sie sich durch, vom geheimen Bach bis zum klassischen Ausflug.',
      en: 'Which trails are worth it? Where does Black Forest cherry cake taste best? What to do on rainy days? We live here, know the paths, the small cafés, the lookout points — and gladly share our favourite places with you. Click through, from secret stream to classic outing.',
      fr: "Quels sentiers valent le détour ? Où la forêt-noire est-elle la meilleure ? Que faire les jours de pluie ? Nous vivons ici, connaissons les chemins, les petits cafés, les points de vue — et partageons volontiers nos coins préférés avec vous. Parcourez, du ruisseau secret à l'excursion classique.",
      tr: 'Hangi rotalar değer? Karaorman pastası nerede en lezzetli? Yağmurlu günler için ne yapılır? Burada yaşıyoruz; patikaları, küçük kafeleri, manzara noktalarını biliyoruz — ve favori yerlerimizi sizinle paylaşmaktan keyif alıyoruz. Tıklayıp keşfedin, gizli bir dereden klasik bir geziye.',
    },
    readMore: { de: 'Weiterlesen', en: 'Read more', fr: 'Lire la suite', tr: 'Devamını oku' },

    // 01 — Wutachschlucht
    a01Title: { de: 'Die Wutachschlucht — wild und nah', en: "The Wutach Gorge — wild and close by", fr: 'Les gorges de la Wutach — sauvages et proches', tr: 'Wutach Vadisi — vahşi ve yakın' },
    a01Excerpt: { de: 'Nur 4 Kilometer vom Hotel beginnt eine der eindrucksvollsten Schluchten Süddeutschlands.', en: "Only 4 kilometres from the hotel begins one of southern Germany's most impressive gorges.", fr: "À seulement 4 kilomètres de l'hôtel commence l'une des gorges les plus impressionnantes du sud de l'Allemagne.", tr: 'Otelden yalnızca 4 kilometre ötede Güney Almanya\'nın en etkileyici vadilerinden biri başlar.' },
    a01P1: {
      de: 'Über rund 33 Kilometer hat sich die Wutach tief in den Hochschwarzwald eingegraben. Felsen, Wasser und alte Bäume treffen hier in seltener Wildheit aufeinander. Wer einmal zwischen den Wänden steht und nur das Rauschen des Flusses hört, vergisst diese Stille so schnell nicht wieder. Die Schlucht beginnt direkt vor unserer Haustür.',
      en: 'Over some thirty-three kilometres the Wutach has cut deep into the Upper Black Forest. Rock, water and ancient trees meet here in a rare wildness. Once you have stood between its walls and heard only the rushing of the river, you do not soon forget that silence. The gorge begins right at our doorstep.',
      fr: "Sur environ trente-trois kilomètres, la Wutach s'est creusée profondément dans la Haute-Forêt-Noire. Rocher, eau et arbres anciens se rencontrent ici dans une rare sauvagerie. Une fois entre ses parois, on n'entend que le bruissement de la rivière — un silence qu'on n'oublie pas. La gorge commence juste devant notre porte.",
      tr: 'Wutach yaklaşık otuz üç kilometre boyunca Yukarı Karaorman\'a derinden oyulmuş. Kaya, su ve kadim ağaçlar burada nadir bir vahşilikle buluşur. Bir kez duvarların arasında durup yalnızca nehrin uğultusunu duyduğunuzda, bu sessizliği kolay unutmazsınız. Vadi tam kapımızın önünde başlar.',
    },
    a01P2: {
      de: 'Wer wandern möchte, hat die Wahl: kurze Spaziergänge am Fluss entlang oder ganztägige Etappen durch enge Klammen, an Wasserfällen vorbei und über schmale Holzbrücken. Besonders schön ist die Strecke von der Schattenmühle zur Wutachmühle. Wir empfehlen festes Schuhwerk, eine Brotzeit und ausreichend Wasser — und bei Nässe ein wachsames Auge.',
      en: 'For hiking, the choice is yours: short walks along the river or full-day stages through narrow ravines, past waterfalls and over slender wooden bridges. The stretch from Schattenmühle to Wutachmühle is particularly beautiful. We recommend sturdy shoes, a packed lunch and enough water — and in wet weather, a watchful eye.',
      fr: "Pour la randonnée, le choix vous appartient : promenades courtes le long de la rivière ou étapes d'une journée à travers d'étroites cluses, devant des cascades et sur de fins ponts en bois. Le tronçon Schattenmühle–Wutachmühle est particulièrement beau. Chaussures solides, casse-croûte et eau en quantité — et par temps humide, prudence.",
      tr: 'Yürüyüş için seçim sizin: nehir kenarında kısa yürüyüşler ya da dar kayalıklardan, şelalelerden ve ince ahşap köprülerden geçen tam günlük etaplar. Schattenmühle\'den Wutachmühle\'ye giden parça özellikle güzeldir. Sağlam ayakkabı, atıştırmalık ve yeterli su öneririz — ıslakta dikkatli olun.',
    },
    a01P3: {
      de: 'Auch nach Regen lohnt sich die Schlucht: dann tosen die Wasser besonders eindrucksvoll. Wir geben Ihnen gerne Karten mit, packen auf Wunsch ein Frühstückspaket zum Mitnehmen — und freuen uns abends, wenn Sie mit Schlamm an den Schuhen und Geschichten im Kopf zurückkommen.',
      en: 'The gorge is also rewarding after rain: the water then roars all the more impressively. We gladly hand you maps, pack a breakfast bag to take along on request — and look forward to your return in the evening, mud on your shoes, stories in your head.',
      fr: "Même après la pluie, la gorge vaut le détour : l'eau gronde alors d'autant plus. Nous vous remettons volontiers des cartes, préparons sur demande un panier-déjeuner — et nous nous réjouissons le soir de votre retour, boue aux chaussures, histoires plein la tête.",
      tr: 'Vadi yağmurdan sonra da değerlidir: su o zaman çok daha etkileyici çağlar. Size seve seve harita veririz, isteğe bağlı paket kahvaltı hazırlarız — ve akşam, ayakkabılarınızda çamur ve kafanızda hikayelerle döndüğünüzde sizi bekleriz.',
    },

    // 02 — Titisee
    a02Title: { de: 'Titisee — der schimmernde Bergsee', en: 'Lake Titisee — the shimmering mountain lake', fr: 'Le lac Titisee — le lac de montagne scintillant', tr: 'Titisee — parıltılı dağ gölü' },
    a02Excerpt: { de: 'Klares Wasser, Promenade, Tretboot — der Klassiker im Hochschwarzwald, gut 30 Minuten entfernt.', en: 'Clear water, promenade, pedalo — the Upper Black Forest classic, just over 30 minutes away.', fr: 'Eau claire, promenade, pédalo — le classique de la Haute-Forêt-Noire, à un peu plus de 30 minutes.', tr: 'Berrak su, sahil yürüyüşü, deniz bisikleti — Yukarı Karaorman klasiği, 30 dakika ötede.' },
    a02P1: {
      de: 'Der Titisee liegt rund 30 Autominuten von Löffingen entfernt — ein eiszeitlich geformter Bergsee mit kristallklarem Wasser auf rund 850 Meter Höhe. Schon im 19. Jahrhundert zogen sich Reisende aus den Städten hierher zurück; heute ist der See gut erschlossen und doch ein Naturerlebnis, das man nicht verpassen sollte.',
      en: 'Lake Titisee lies about thirty minutes by car from Löffingen — an ice-age mountain lake with crystal-clear water at around 850 metres altitude. Already in the nineteenth century, travellers from the cities retreated here; today the lake is well developed and still a natural experience not to be missed.',
      fr: "Le lac Titisee se trouve à environ trente minutes en voiture de Löffingen — un lac de montagne formé par les glaciers, à l'eau cristalline à environ 850 mètres d'altitude. Dès le XIXe siècle, des voyageurs des villes venaient s'y retirer ; aujourd'hui, le lac est bien aménagé tout en restant une expérience naturelle à ne pas manquer.",
      tr: 'Titisee, Löffingen\'den arabayla yaklaşık otuz dakika uzakta — buz çağında oluşmuş, 850 metre yükseklikte kristal berraklığında suyu olan bir dağ gölü. Daha 19. yüzyılda şehir yorgunu gezginler buraya çekilirdi; bugün göl iyi düzenlenmiş ama yine de kaçırılmaması gereken bir doğa deneyimi.',
    },
    a02P2: {
      de: 'Im Sommer kann man rund um den See spazieren, mit dem Tretboot oder Ruderboot hinausfahren, im Sandstrand baden oder eine kleine Rundfahrt mit den traditionellen Holzschiffen unternehmen. Entlang der Promenade reihen sich Cafés, Eisdielen und Geschäfte mit regionalen Spezialitäten — von Kuckucksuhren bis Bollenhüten.',
      en: 'In summer you can stroll around the lake, head out by pedalo or rowing boat, bathe at the sandy beach or take a short tour aboard the traditional wooden boats. Along the promenade you find cafés, ice-cream parlours and shops with regional specialities — from cuckoo clocks to Bollenhut hats.',
      fr: "En été, on peut se promener autour du lac, sortir en pédalo ou en barque, se baigner à la plage de sable ou faire un petit tour à bord des bateaux traditionnels en bois. Le long de la promenade s'alignent cafés, glaciers et boutiques de spécialités régionales — des coucous aux Bollenhut.",
      tr: 'Yazın gölün etrafında yürüyebilir, deniz bisikleti veya kürek tekneyle açılabilir, kumsalda yüzebilir ya da geleneksel ahşap teknelerle kısa bir tur yapabilirsiniz. Sahil boyunca kafeler, dondurma satıcıları ve bölgesel ürünler satan dükkanlar var — guguklu saatlerden geleneksel başlıklara.',
    },
    a02P3: {
      de: 'Im Winter zeigt sich der See von seiner ruhigen Seite: oft mit Eis am Rand, manchmal komplett zugefroren. Loipen führen direkt vom Ort weg in die Wälder. Tipp: früh kommen, parken auf den ausgewiesenen Plätzen — und vor dem Heimweg unbedingt ein Stück Schwarzwälder Kirschtorte einplanen.',
      en: 'In winter the lake shows its quiet side: often with ice at the edges, sometimes completely frozen over. Cross-country tracks lead straight from the village into the woods. Tip: come early, park in the marked lots — and before heading home, definitely plan a slice of Black Forest cherry cake.',
      fr: "En hiver, le lac se montre sous son visage calme : souvent gelé sur les bords, parfois entièrement glacé. Les pistes de fond partent directement du village vers les bois. Astuce : venez tôt, garez-vous aux endroits indiqués — et avant le retour, prévoyez impérativement une part de forêt-noire.",
      tr: 'Kışın göl sakin yüzünü gösterir: çoğunlukla kenarlarda buz, bazen tamamen donmuş. Kros kayak parkurları doğrudan köyden ormana uzanır. İpucu: erken gelin, belirlenen yerlere park edin — ve dönmeden önce mutlaka bir dilim Karaorman kiraz pastası planlayın.',
    },

    // 03 — Schluchsee
    a03Title: { de: 'Schluchsee — Schwarzwalds größter See', en: "Schluchsee — the Black Forest's largest lake", fr: 'Le Schluchsee — le plus grand lac de la Forêt-Noire', tr: 'Schluchsee — Karaorman\'ın en büyük gölü' },
    a03Excerpt: { de: 'Wasser, Wald, Wege rundherum: ideal für Schwimmen, Stand-up-Paddling und lange Spaziergänge.', en: 'Water, woods, paths all around: ideal for swimming, stand-up paddling and long walks.', fr: 'Eau, forêts, sentiers tout autour : idéal pour la baignade, le stand-up paddle et les longues promenades.', tr: 'Su, ormanlar, etrafta patikalar: yüzme, ayakta kürek ve uzun yürüyüşler için ideal.' },
    a03P1: {
      de: 'Der Schluchsee ist mit über sieben Kilometern Länge der größte See im Schwarzwald — und gleichzeitig der höchstgelegene Stausee Deutschlands. Eingerahmt von dichten Wäldern und sanften Hängen, wirkt er trotz seiner Größe nie überlaufen. Wer Ruhe sucht, findet sie hier zuverlässig, besonders an den ruhigeren Westufern.',
      en: "At over seven kilometres in length, the Schluchsee is the largest lake in the Black Forest — and at the same time Germany's highest reservoir. Framed by dense forests and gentle slopes, it never feels overcrowded despite its size. If you are looking for calm, you will find it here reliably, especially on the quieter western shores.",
      fr: "Avec plus de sept kilomètres de long, le Schluchsee est le plus grand lac de la Forêt-Noire — et en même temps le lac de barrage le plus haut d'Allemagne. Encadré par des forêts denses et de douces pentes, il ne semble jamais bondé malgré sa taille. Qui cherche le calme le trouve ici, surtout sur les rives ouest plus tranquilles.",
      tr: 'Yedi kilometreyi aşan uzunluğuyla Schluchsee, Karaorman\'ın en büyük gölü — aynı zamanda Almanya\'nın en yüksek baraj gölü. Yoğun ormanlar ve yumuşak yamaçlarla çevrili; büyüklüğüne rağmen hiç kalabalık hissi vermez. Huzur arıyorsanız burada güvenle bulursunuz, özellikle daha sakin batı kıyılarında.',
    },
    a03P2: {
      de: 'Im Sommer ist das Wasser angenehm kühl und sauber — perfekt zum Schwimmen, Stand-up-Paddling oder Tretbootfahren. Wer lieber an Land bleibt, kann den See in rund 18 Kilometern umrunden, zu Fuß oder mit dem Rad. Mehrere Naturbäder, schattige Liegewiesen und kleine Gasthäuser liegen entlang des Ufers.',
      en: 'In summer the water is pleasantly cool and clean — perfect for swimming, stand-up paddling or pedalo. Those who prefer to stay on land can circle the lake in about eighteen kilometres, on foot or by bike. Several natural bathing spots, shady lawns and small inns lie along the shore.',
      fr: "En été, l'eau est agréablement fraîche et propre — parfaite pour la baignade, le stand-up paddle ou le pédalo. Qui préfère rester à terre peut faire le tour du lac sur environ dix-huit kilomètres, à pied ou à vélo. Plusieurs baignades naturelles, pelouses ombragées et petites auberges bordent la rive.",
      tr: 'Yazın su hoş bir serinlikte ve temiz — yüzmek, ayakta kürek çekmek veya deniz bisikleti için mükemmel. Karada kalmayı tercih edenler gölün etrafını yaklaşık on sekiz kilometrede dolaşabilir, yürüyerek veya bisikletle. Kıyı boyunca birkaç doğal plaj, gölgeli çayırlar ve küçük lokantalar var.',
    },
    a03P3: {
      de: 'Mit der Hochschwarzwald Card — bei uns ab zwei Übernachtungen inklusive — sind Bootsfahrt und Strandbad oft kostenfrei. Wer einen ganzen Tag plant, kombiniert den See gut mit einem Stopp am benachbarten Titisee.',
      en: "With the Hochschwarzwald Card — included from two nights' stay with us — boat trip and lido are often free of charge. If you are planning a full day, the lake combines well with a stop at the neighbouring Titisee.",
      fr: 'Avec la Hochschwarzwald Card — incluse chez nous à partir de deux nuits — la sortie en bateau et la baignade sont souvent gratuites. Si vous prévoyez une journée entière, le lac se combine bien avec un arrêt au Titisee voisin.',
      tr: 'Bizde iki gece üzeri konaklamada dahil olan Hochschwarzwald Card ile tekne turu ve plaj çoğu zaman ücretsizdir. Tam gün planlıyorsanız göl, komşu Titisee duraklarıyla iyi birleşir.',
    },

    // 04 — Feldberg
    a04Title: { de: 'Feldberg — der höchste Gipfel', en: 'Feldberg — the highest peak', fr: 'Le Feldberg — le plus haut sommet', tr: 'Feldberg — en yüksek zirve' },
    a04Excerpt: { de: '1.493 Meter, Rundumblick bis zu den Alpen — der höchste Berg außerhalb der Alpen in Deutschland.', en: "1,493 metres, all-round view as far as the Alps — Germany's highest peak outside the Alps.", fr: "1 493 mètres, vue panoramique jusqu'aux Alpes — le plus haut sommet d'Allemagne en dehors des Alpes.", tr: '1.493 metre, Alpler\'e kadar uzanan panorama — Alpler dışında Almanya\'nın en yüksek zirvesi.' },
    a04P1: {
      de: 'Der Feldberg ist mit 1.493 Metern der höchste Gipfel des Schwarzwalds — und zugleich der höchste Berg Deutschlands außerhalb der Alpen. Bei klarem Wetter reicht der Blick über die gesamte Schwarzwald-Hochfläche bis hinüber zu den Vogesen und den Schweizer Alpen. Eine Aussicht, die jeden Aufstieg wert ist.',
      en: "At 1,493 metres, the Feldberg is the highest peak of the Black Forest — and at the same time Germany's highest mountain outside the Alps. In clear weather the view stretches across the entire Black Forest highland to the Vosges and the Swiss Alps. A panorama worth every step of the climb.",
      fr: "Avec 1 493 mètres, le Feldberg est le plus haut sommet de la Forêt-Noire — et en même temps le point culminant d'Allemagne hors Alpes. Par temps clair, la vue s'étend sur tout le plateau de la Forêt-Noire jusqu'aux Vosges et aux Alpes suisses. Un panorama qui vaut chaque pas de l'ascension.",
      tr: 'Feldberg, 1.493 metreyle Karaorman\'ın en yüksek zirvesi — aynı zamanda Almanya\'nın Alpler dışındaki en yüksek dağı. Açık havada manzara, Karaorman yaylasının tamamı boyunca Vosges\'a ve İsviçre Alpleri\'ne kadar uzanır. Her tırmanış adımına değer bir panorama.',
    },
    a04P2: {
      de: 'Im Sommer führen markierte Wanderwege auf den Gipfel — vom moderaten Spaziergang bis zur ganztägigen Tour. Die Gondelbahn bringt weniger Sportliche bis fast nach oben. Oben angekommen, lohnt der kleine Umweg zum Feldbergturm: 360-Grad-Panorama, Café, und an guten Tagen ein Anblick, der schwer in Worte zu fassen ist.',
      en: 'In summer marked trails lead to the summit — from gentle walk to full-day tour. The cable car takes less athletic visitors almost all the way up. Once at the top, the small detour to the Feldbergturm is worth it: 360-degree panorama, café, and on good days a sight hard to put into words.',
      fr: "En été, des sentiers balisés mènent au sommet — de la promenade modérée au tour d'une journée. Le téléphérique amène les moins sportifs presque jusqu'en haut. Une fois là-haut, le petit détour par la Feldbergturm en vaut la peine : panorama à 360°, café, et par beau temps, une vue difficile à décrire.",
      tr: 'Yazın işaretli yürüyüş yolları zirveye çıkar — sakin yürüyüşten tam günlük tura kadar. Telesiyej daha az sportif olanları neredeyse tepeye taşır. Zirvede Feldbergturm\'a kısa sapma değerlidir: 360 derece panorama, kafe ve açık havada sözcüklere sığmayan bir manzara.',
    },
    a04P3: {
      de: 'Im Winter wird der Feldberg zum größten Wintersportgebiet im Schwarzwald: Skipisten für alle Niveaus, Loipen über das gesamte Plateau, Schneeschuhwanderungen durch verschneite Tannenwälder. Von Löffingen aus erreichen Sie ihn in rund 45 Minuten.',
      en: "In winter, the Feldberg becomes the Black Forest's largest winter-sports area: ski slopes for all levels, cross-country trails across the entire plateau, snowshoe hikes through snowy fir forests. You can reach it from Löffingen in about forty-five minutes.",
      fr: "En hiver, le Feldberg devient le plus grand domaine de sports d'hiver de la Forêt-Noire : pistes de ski tous niveaux, pistes de fond sur tout le plateau, randonnées en raquettes à travers les sapinières enneigées. Vous l'atteignez depuis Löffingen en environ quarante-cinq minutes.",
      tr: 'Kışın Feldberg, Karaorman\'ın en büyük kış sporları bölgesine dönüşür: her seviyeye kayak pistleri, tüm yayla boyunca kros parkurları, karlı ladin ormanlarında kar ayakkabılı yürüyüşler. Löffingen\'den yaklaşık kırk beş dakikada ulaşırsınız.',
    },

    // 05 — Triberger Wasserfälle
    a05Title: { de: 'Triberger Wasserfälle — 163 Meter Fallhöhe', en: 'Triberg Waterfalls — 163 metres of drop', fr: 'Cascades de Triberg — 163 mètres de chute', tr: 'Triberg Şelaleleri — 163 metre düşüş' },
    a05Excerpt: { de: 'Sieben Kaskaden, deutschlandweit zu den höchsten Wasserfällen zählend — leicht zugänglich, ganzjährig offen.', en: "Seven cascades, among Germany's tallest waterfalls — easily accessible, open year-round.", fr: "Sept cascades, parmi les plus hautes chutes d'eau d'Allemagne — d'accès facile, ouvert toute l'année.", tr: 'Yedi kademe, Almanya\'nın en yüksek şelaleleri arasında — kolay ulaşılır, yıl boyu açık.' },
    a05P1: {
      de: 'Die Triberger Wasserfälle gehören zu den höchsten und meistbesuchten Wasserfällen Deutschlands. Über sieben Stufen stürzt die Gutach gut 163 Meter in die Tiefe — laut, kraftvoll und doch eingebettet in dichten Tannenwald. Vom Eingang am Kurpark führt ein gut ausgebauter Weg über Holzstege und kleine Brücken bergauf.',
      en: 'The Triberg Waterfalls are among the tallest and most visited in Germany. The Gutach river plunges some 163 metres in seven cascades — loud, powerful, and yet embedded in dense fir forest. From the entrance at the spa park, a well-built path leads uphill over wooden walkways and small bridges.',
      fr: "Les chutes de Triberg comptent parmi les plus hautes et les plus visitées d'Allemagne. La Gutach se précipite de quelque 163 mètres en sept cascades — bruyant, puissant, et pourtant niché dans une dense sapinière. Depuis l'entrée au parc des thermes, un chemin bien aménagé monte par des passerelles en bois et de petits ponts.",
      tr: 'Triberg Şelaleleri Almanya\'nın en yüksek ve en çok ziyaret edilen şelaleleri arasındadır. Gutach nehri yedi basamakta yaklaşık 163 metre aşağı düşer — gürültülü, güçlü ama yine de yoğun bir ladin ormanına gömülü. Kaplıca parkındaki girişten iyi bakımlı bir yol ahşap köprülerle yukarı çıkar.',
    },
    a05P2: {
      de: 'Der Aufstieg dauert je nach Tempo 45 bis 90 Minuten — eine Strecke, die selbst Kinder schaffen, da man immer wieder an Bänken pausieren kann. Oben angekommen, lohnt sich der Weg weiter zur Wallfahrtskirche Maria in der Tanne oder hinüber zum Schwarzwaldmuseum.',
      en: 'The ascent takes 45 to 90 minutes depending on your pace — a distance even children can manage, as there are plenty of benches along the way for breaks. At the top, it pays to continue to the pilgrimage church Maria in der Tanne or over to the Black Forest Museum.',
      fr: "L'ascension dure de 45 à 90 minutes selon le rythme — une distance que même les enfants gèrent, car de nombreux bancs invitent à la pause. En haut, cela vaut la peine de poursuivre jusqu'à l'église de pèlerinage Maria in der Tanne ou jusqu'au musée de la Forêt-Noire.",
      tr: 'Tırmanış hızınıza göre 45 ila 90 dakika sürer — çocukların bile başarabileceği bir mesafe, çünkü yol boyunca dinlenecek banklar boldur. Tepede Maria in der Tanne hac kilisesine veya Karaorman Müzesi\'ne devam etmek değer.',
    },
    a05P3: {
      de: 'Im Winter sind die Wasserfälle festlich beleuchtet und teilweise eisbedeckt — eine andere, fast magische Stimmung. Eintrittsgebühr fällt an, die mit der Hochschwarzwald Card oft entfällt. Triberg liegt rund eine Autostunde vom Hotel entfernt.',
      en: 'In winter the falls are festively illuminated and partly ice-covered — a different, almost magical atmosphere. There is an entrance fee, which is often waived with the Hochschwarzwald Card. Triberg lies about an hour by car from the hotel.',
      fr: "En hiver, les chutes sont illuminées et en partie recouvertes de glace — une ambiance différente, presque magique. Un droit d'entrée s'applique, souvent gratuit avec la Hochschwarzwald Card. Triberg se trouve à environ une heure de route de l'hôtel.",
      tr: 'Kışın şelaleler şenlikli aydınlatılır ve kısmen buzla kaplanır — farklı, neredeyse büyülü bir atmosfer. Giriş ücreti vardır, Hochschwarzwald Card ile çoğunlukla ücretsizdir. Triberg, otelden arabayla yaklaşık bir saat uzaktadır.',
    },

    // 06 — Schwarzwälder Kirschtorte
    a06Title: { de: 'Schwarzwälder Kirschtorte — am Originalort', en: 'Black Forest Cherry Cake — at the original spot', fr: "Forêt-Noire — à l'endroit original", tr: 'Karaorman Kiraz Pastası — orijinal yerinde' },
    a06Excerpt: { de: 'In Triberg, im Café Schäfer, bäckt man die Torte noch nach Originalrezept — ein Stück Geschichte auf dem Teller.', en: 'In Triberg, at Café Schäfer, the cake is still baked to the original recipe — a piece of history on your plate.', fr: "À Triberg, au Café Schäfer, le gâteau est encore fait selon la recette originale — un morceau d'histoire dans l'assiette.", tr: 'Triberg\'de Café Schäfer, pastayı hâlâ orijinal tarife göre yapıyor — tabağınızda bir parça tarih.' },
    a06P1: {
      de: 'Wenn man im Schwarzwald ist, gibt es ein Stück Kultur, das man unbedingt probieren sollte: die echte Schwarzwälder Kirschtorte. Schichten aus Schokoladenbiskuit, dichter Sahne, sauren Kirschen und einem ordentlichen Schuss Kirschwasser — wenn richtig zubereitet, schmeckt sie ganz anders als die Versionen, die man aus Supermärkten kennt.',
      en: 'When you are in the Black Forest, there is one piece of culture you simply have to try: the genuine Black Forest cherry cake. Layers of chocolate sponge, dense cream, sour cherries and a proper splash of Kirschwasser — when properly made, it tastes nothing like the versions you know from supermarkets.',
      fr: "Quand on est en Forêt-Noire, il y a un morceau de culture à goûter absolument : la véritable forêt-noire. Couches de biscuit au chocolat, crème dense, cerises acides et une bonne lampée de kirsch — bien préparée, elle n'a rien à voir avec les versions des supermarchés.",
      tr: 'Karaorman\'daysanız mutlaka tatmanız gereken bir kültür parçası var: gerçek Karaorman kiraz pastası. Çikolatalı pandispanya katmanları, yoğun krema, ekşi vişneler ve iyi bir tutam Kirschwasser — doğru yapıldığında, marketten bildiğiniz versiyonlardan tamamen farklı bir lezzettir.',
    },
    a06P2: {
      de: 'Das Café Schäfer in Triberg gilt als die offizielle Adresse — Konditor Claus Schäfer hütet das Rezept seit Jahrzehnten und bäckt die Torte täglich frisch. Eine Vitrine zeigt die Geschichte, vom ersten Rezept aus den 1930er Jahren bis heute. Ein Stück Torte, ein Espresso, das genügt.',
      en: "Café Schäfer in Triberg is considered the official address — pastry chef Claus Schäfer has guarded the recipe for decades and bakes the cake fresh daily. A small display shows the history, from the first recipe in the 1930s to today. A slice of cake, an espresso, that's enough.",
      fr: "Le Café Schäfer à Triberg est considéré comme l'adresse officielle — le pâtissier Claus Schäfer garde la recette depuis des décennies et confectionne le gâteau frais chaque jour. Une petite vitrine raconte l'histoire, de la première recette des années 1930 à aujourd'hui. Une part, un espresso, et c'est parfait.",
      tr: 'Triberg\'deki Café Schäfer resmî adres sayılır — pastacı Claus Schäfer tarifi onlarca yıldır koruyor ve pastayı her gün taze pişiriyor. Küçük bir vitrin tarihi anlatıyor: 1930\'lardaki ilk tariften bugüne. Bir dilim pasta, bir espresso, yeterli.',
    },
    a06P3: {
      de: 'Triberg liegt rund eine Stunde vom Hotel — ideal in Kombination mit einem Besuch der Wasserfälle. Wer es lieber näher hat: auch in Löffingen und Umgebung backen einige Cafés die Torte hervorragend. Fragen Sie uns gerne nach unseren Tipps.',
      en: 'Triberg is about an hour from the hotel — ideal combined with a visit to the waterfalls. If you prefer to stay closer: in Löffingen and the surrounding area too, several cafés bake an excellent version. Just ask us for our tips.',
      fr: "Triberg est à environ une heure de l'hôtel — idéal en combinaison avec une visite aux cascades. Si vous préférez rester plus près : à Löffingen et alentours, plusieurs cafés en font une excellente version. Demandez-nous volontiers nos adresses.",
      tr: 'Triberg otelden yaklaşık bir saat — şelale ziyaretiyle birleştirmek ideal. Daha yakını tercih ediyorsanız: Löffingen ve çevresinde de pastayı çok iyi pişiren birkaç kafe var. Önerilerimizi sormaktan çekinmeyin.',
    },

    // 07 — Vogtsbauernhof
    a07Title: { de: 'Vogtsbauernhof — Schwarzwald-Freilichtmuseum', en: 'Vogtsbauernhof — Black Forest open-air museum', fr: 'Vogtsbauernhof — musée en plein air de la Forêt-Noire', tr: 'Vogtsbauernhof — Karaorman açık hava müzesi' },
    a07Excerpt: { de: 'Über 400 Jahre alte Schwarzwaldhöfe, original erhalten, mit Vieh, Garten und Mühlen — ein lebendiges Museum in Gutach.', en: 'Over 400-year-old Black Forest farmhouses, preserved in their original state, with livestock, garden and mills — a living museum in Gutach.', fr: "Des fermes de Forêt-Noire vieilles de plus de 400 ans, conservées dans leur état d'origine, avec bétail, jardin et moulins — un musée vivant à Gutach.", tr: '400 yılı aşkın orijinal hâliyle korunmuş Karaorman çiftlik evleri — hayvanlar, bahçe ve değirmenleriyle Gutach\'ta yaşayan bir müze.' },
    a07P1: {
      de: 'Im Schwarzwälder Freilichtmuseum Vogtsbauernhof in Gutach stehen über ein Dutzend originale Bauernhöfe aus verschiedenen Jahrhunderten — vom ältesten Hof von 1612 bis zu Tagelöhnerhäusern und Mühlen, allesamt sorgfältig versetzt und Stein für Stein wieder aufgebaut. Wer sich für die Geschichte des Schwarzwalds interessiert, sollte einen halben Tag einplanen.',
      en: 'At the Vogtsbauernhof open-air museum in Gutach stand over a dozen original farmhouses from various centuries — from the oldest farm dating to 1612 to day-labourer cottages and mills, all carefully relocated and rebuilt stone by stone. Anyone interested in Black Forest history should plan half a day.',
      fr: "Au musée en plein air Vogtsbauernhof à Gutach se dressent plus d'une douzaine de fermes originales de divers siècles — de la plus ancienne datant de 1612 aux maisons de journaliers et aux moulins, toutes soigneusement déplacées et reconstruites pierre par pierre. Aux passionnés d'histoire de la Forêt-Noire, prévoyez une demi-journée.",
      tr: 'Gutach\'taki Vogtsbauernhof açık hava müzesinde farklı yüzyıllardan on iki orijinal çiftlik evi yer alır — 1612 tarihli en eski çiftlikten gündelikçi evlerine ve değirmenlere kadar; hepsi titizlikle yerinden taşınıp taş taş yeniden inşa edilmiştir. Karaorman tarihiyle ilgilenenler için yarım gün ayırın.',
    },
    a07P2: {
      de: 'Im Inneren der Höfe sind die alten Stuben, Schlafkammern und Werkstätten authentisch eingerichtet. Auf dem Gelände grasen typische Schwarzwälder Rassen — Hinterwälder Rinder, Bronzeputen, Bürstner Schafe. Mühlen klappern, ein Bäcker zeigt das Brotbacken, und je nach Saison stehen Schauvorführungen wie Schindelmachen oder Wäschestampfen auf dem Programm.',
      en: 'Inside the farmhouses the old parlours, sleeping chambers and workshops are authentically furnished. Typical Black Forest breeds graze on the grounds — Hinterwälder cattle, bronze turkeys, Bürstner sheep. Mills clatter, a baker demonstrates bread baking, and seasonal shows include shingle-making or laundry-stamping.',
      fr: "À l'intérieur des fermes, les anciennes salles, chambres et ateliers sont aménagés de manière authentique. Sur les terrains paissent des races typiques de la Forêt-Noire — bovins Hinterwälder, dindes bronze, moutons Bürstner. Les moulins cliquètent, un boulanger montre la cuisson du pain, et selon la saison, on découvre la fabrication des bardeaux ou le lavage à l'ancienne.",
      tr: 'Çiftlik evlerinin içinde eski oturma odaları, yatak odaları ve atölyeler özgün biçimde döşelidir. Arazide tipik Karaorman ırkları otlar — Hinterwälder sığırları, bronz hindiler, Bürstner koyunları. Değirmenler tıkırdar, bir fırıncı ekmek pişirmeyi gösterir; mevsime göre kiremit yapımı veya çamaşır ezme gibi gösteriler programdadır.',
    },
    a07P3: {
      de: 'Das Museum eignet sich besonders für Familien — die Kinder dürfen anfassen, fragen, mitmachen. Anfahrt: rund 1 Stunde 15 Minuten ab Löffingen, am besten frühmorgens kommen, dann ist es noch ruhig.',
      en: 'The museum is particularly suited to families — children may touch, ask, join in. Driving time: about one hour fifteen from Löffingen, best to come early in the morning while it is still quiet.',
      fr: "Le musée convient particulièrement aux familles — les enfants peuvent toucher, demander, participer. Trajet : environ 1h15 depuis Löffingen, mieux vaut arriver tôt le matin quand c'est encore calme.",
      tr: 'Müze özellikle aileler için uygundur — çocuklar dokunabilir, sorabilir, katılabilir. Yol: Löffingen\'den yaklaşık 1 saat 15 dakika, en iyisi sabah erken gitmek, henüz sessizken.',
    },

    // 08 — Sauschwänzlebahn
    a08Title: { de: 'Sauschwänzlebahn — die Museumsbahn', en: 'Sauschwänzlebahn — the heritage steam railway', fr: 'Sauschwänzlebahn — le train à vapeur historique', tr: 'Sauschwänzlebahn — tarihi vapur treni' },
    a08Excerpt: { de: 'Eine echte Dampflok auf historischer Strecke durch Wälder, Tunnel und Viadukte — fünf Mal hin und her bergauf.', en: 'A real steam locomotive on a historic line through forests, tunnels and viaducts — five times back-and-forth uphill.', fr: 'Une véritable locomotive à vapeur sur une ligne historique à travers forêts, tunnels et viaducs — cinq allers-retours en montée.', tr: 'Tarihi bir hatta gerçek bir buhar lokomotifi — ormanlar, tüneller ve viyadüklerden geçer; tepeye doğru beş kez gider gelir.' },
    a08P1: {
      de: 'Die Sauschwänzlebahn — offiziell Wutachtalbahn — ist eine der spektakulärsten Bahnstrecken Deutschlands. Im späten 19. Jahrhundert als strategische Militärbahn gebaut, überwindet sie mit Kehrtunneln, Brücken und engen Kurven ein enormes Höhengefälle. Heute fährt sie als Museumsbahn von Blumberg-Zollhaus nach Weizen — und sieht von oben tatsächlich aus wie ein Schweineschwanz.',
      en: "The Sauschwänzlebahn — officially the Wutachtalbahn — is one of Germany's most spectacular railway lines. Built as a strategic military railway in the late nineteenth century, it overcomes huge differences in altitude through spiral tunnels, bridges and tight curves. Today it runs as a heritage railway from Blumberg-Zollhaus to Weizen — and from above really does look like a pig's tail.",
      fr: "Le Sauschwänzlebahn — officiellement Wutachtalbahn — est l'une des lignes ferroviaires les plus spectaculaires d'Allemagne. Construit comme voie militaire stratégique à la fin du XIXe siècle, il franchit d'énormes dénivelés grâce à des tunnels en spirale, des ponts et des courbes serrées. Aujourd'hui, il circule en train historique de Blumberg-Zollhaus à Weizen — et vu d'en haut, il ressemble vraiment à une queue de cochon.",
      tr: 'Sauschwänzlebahn — resmî adıyla Wutachtalbahn — Almanya\'nın en görkemli demiryollarından biridir. 19. yüzyıl sonunda stratejik askeri hat olarak inşa edilmiş; helezon tüneller, köprüler ve dar virajlarla muazzam yükseklik farklarını aşar. Bugün Blumberg-Zollhaus\'tan Weizen\'e tarihi tren olarak işliyor — ve yukarıdan gerçekten domuz kuyruğuna benziyor.',
    },
    a08P2: {
      de: 'Eine Fahrt dauert rund zwei Stunden pro Richtung. Während der Saison (April bis Oktober) sind echte Dampflokomotiven im Einsatz; gelegentlich werden auch historische Diesellokomotiven gefahren. Es gibt verschiedene Wagenklassen — vom einfachen Holzklassewagen bis zum gemütlichen Salonwagen, und sogar einen Speisewagen.',
      en: "A one-way trip takes about two hours. During the season (April to October) real steam engines run; occasionally vintage diesels are used too. There are different carriage classes — from simple wooden third-class wagons to comfortable saloon cars, and even a dining car.",
      fr: "Un trajet dure environ deux heures dans un sens. Pendant la saison (avril à octobre), de véritables locomotives à vapeur sont utilisées ; parfois aussi des diesels d'époque. Il existe différentes classes de voitures — du wagon en bois simple au confortable wagon-salon, et même un wagon-restaurant.",
      tr: 'Tek yön bir yolculuk yaklaşık iki saat sürer. Sezonda (Nisan-Ekim) gerçek buhar lokomotifleri çalışır; bazen tarihi dizeller de kullanılır. Farklı vagon sınıfları vardır — basit ahşap üçüncü sınıftan rahat salon vagonlarına, hatta yemekli vagona kadar.',
    },
    a08P3: {
      de: 'Blumberg liegt rund 25 Minuten vom Hotel — die Sauschwänzlebahn ist also einer unserer „nahen" Tipps für einen Halbtagesausflug, besonders mit Kindern. Wir reservieren auf Wunsch gerne Ihre Plätze vorab.',
      en: "Blumberg lies about 25 minutes from the hotel — so the Sauschwänzlebahn is one of our \"close\" tips for a half-day trip, especially with children. We are happy to reserve your seats in advance on request.",
      fr: "Blumberg se trouve à environ 25 minutes de l'hôtel — le Sauschwänzlebahn fait donc partie de nos suggestions « proches » pour une demi-journée, surtout avec des enfants. Nous réservons volontiers vos places à l'avance sur demande.",
      tr: 'Blumberg otelden yaklaşık 25 dakika — Sauschwänzlebahn yarım günlük gezi için "yakın" önerilerimizden, özellikle çocuklarla. İsterseniz koltuklarınızı önceden seve seve ayırtırız.',
    },

    // 09 — Belchen
    a09Title: { de: 'Belchen — der schönste Aussichtsberg', en: 'The Belchen — the finest viewpoint mountain', fr: 'Le Belchen — la plus belle montagne panoramique', tr: 'Belchen — en güzel manzara dağı' },
    a09Excerpt: { de: '1.414 Meter, Panorama vom Schwarzwald über Vogesen bis zu den Alpen — oft als schönster Berg des Schwarzwalds bezeichnet.', en: '1,414 metres, panorama from the Black Forest across the Vosges to the Alps — often called the most beautiful mountain in the Black Forest.', fr: '1 414 mètres, panorama de la Forêt-Noire aux Vosges et aux Alpes — souvent appelée la plus belle montagne de la Forêt-Noire.', tr: '1.414 metre, Karaorman\'dan Vosges\'a ve Alpler\'e uzanan panorama — sıkça Karaorman\'ın en güzel dağı denir.' },
    a09P1: {
      de: 'Der Belchen wird oft als der schönste Aussichtsberg des Schwarzwalds bezeichnet — und das nicht ohne Grund. Vom Gipfel auf 1.414 Metern überblickt man bei klarem Wetter den gesamten südlichen Schwarzwald, die Rheinebene, die Vogesen und ein langes Band der Schweizer Alpen. Wenige Berge geben so viel auf einmal.',
      en: 'The Belchen is often called the most beautiful viewpoint mountain in the Black Forest — and not without reason. From the summit at 1,414 metres you overlook, in clear weather, the entire southern Black Forest, the Rhine plain, the Vosges and a long ribbon of the Swiss Alps. Few mountains give so much at once.',
      fr: "Le Belchen est souvent considéré comme la plus belle montagne panoramique de la Forêt-Noire — non sans raison. Depuis le sommet à 1 414 mètres, par temps clair, on embrasse toute la Forêt-Noire méridionale, la plaine du Rhin, les Vosges et un long ruban d'Alpes suisses. Peu de montagnes offrent autant d'un coup.",
      tr: 'Belchen, Karaorman\'ın en güzel manzara dağı diye anılır — boşuna değil. 1.414 metredeki zirveden açık havada güney Karaorman\'ın tamamı, Ren ovası, Vosges ve uzun bir İsviçre Alpleri şeridi görülür. Az dağ bu kadarını bir kerede sunar.',
    },
    a09P2: {
      de: 'Vom Parkplatz an der Talstation führt eine Seilbahn nahezu auf den Gipfel — der letzte Aufstieg dauert nur wenige Minuten. Wer wandern möchte, hat verschiedene Routen zur Auswahl, von gemütlich (1 Stunde) bis fordernd (3–4 Stunden). Oben gibt es einen Gipfelrundweg mit Hinweistafeln zu den Bergen am Horizont.',
      en: 'From the car park at the valley station a cable car runs almost to the summit — the final climb takes only a few minutes. For hikers, several routes are available, from easy (1 hour) to demanding (3–4 hours). At the top, a circular summit path features boards naming the mountains on the horizon.',
      fr: "Depuis le parking de la station du bas, un téléphérique monte presque au sommet — la dernière montée ne prend que quelques minutes. Pour les randonneurs, plusieurs itinéraires sont possibles, du facile (1 h) à l'exigeant (3 à 4 h). Au sommet, un sentier circulaire propose des panneaux nommant les montagnes à l'horizon.",
      tr: 'Vadi istasyonu otoparkından telesiyej neredeyse zirveye çıkarır — son tırmanış yalnızca birkaç dakika. Yürüyüşçüler için kolaydan (1 saat) zorluya (3-4 saat) çeşitli rotalar vardır. Zirvede çevresel patika ve ufuktaki dağları gösteren levhalar bulunur.',
    },
    a09P3: {
      de: 'Wir empfehlen klare Herbsttage für die beste Fernsicht — dann sind die Alpen am deutlichsten zu sehen. Anfahrt: rund 1 Stunde 30 Minuten von Löffingen. Bringen Sie warme Kleidung mit, oben weht meist Wind.',
      en: 'We recommend clear autumn days for the best long-distance view — that is when the Alps appear most clearly. Driving time: about one hour thirty from Löffingen. Bring warm clothes, the summit is usually windy.',
      fr: "Nous recommandons les journées claires d'automne pour la meilleure visibilité au loin — c'est alors que les Alpes apparaissent le plus nettement. Trajet : environ 1h30 depuis Löffingen. Apportez des vêtements chauds, le vent souffle généralement au sommet.",
      tr: 'En iyi uzak görüş için açık sonbahar günlerini öneririz — Alpler o zaman en net görünür. Yol: Löffingen\'den yaklaşık 1 saat 30 dakika. Sıcak giysi getirin, zirvede genelde rüzgâr eser.',
    },

    // 10 — Mummelsee
    a10Title: { de: 'Mummelsee — der sagenumwobene Bergsee', en: 'Mummelsee — the lake of legends', fr: 'Le Mummelsee — le lac des légendes', tr: 'Mummelsee — efsane gölü' },
    a10Excerpt: { de: 'Dunkler Karsee an der Schwarzwaldhochstraße, von Sagen umrankt — und nur ein Spaziergang zum höchsten Punkt des Nordschwarzwalds.', en: 'A dark cirque lake on the Black Forest High Road, wrapped in legend — and only a short walk to the highest point of the northern Black Forest.', fr: 'Un lac de cirque sombre sur la route des Crêtes, enveloppé de légendes — et une simple marche jusqu\'au point culminant du nord de la Forêt-Noire.', tr: 'Schwarzwaldhochstrasse üzerinde efsanelerle örülü karanlık bir sirk gölü — kuzey Karaorman\'ın en yüksek noktasına yalnızca bir yürüyüş.' },
    a10P1: {
      de: 'Der Mummelsee ist einer der bekanntesten Sagenorte des Schwarzwalds — ein kleiner, dunkler Karsee inmitten dichter Tannenwälder, an der berühmten Schwarzwaldhochstraße gelegen. Schon Eduard Mörike dichtete über die Nixe Mumme, die hier ihr Reich haben soll. Wer am Ufer steht, versteht, warum die Sagen entstanden sind.',
      en: "The Mummelsee is one of the Black Forest's best-known legendary places — a small, dark cirque lake in the midst of dense fir forests, on the famous Black Forest High Road. Even the poet Mörike wrote of the water-nymph Mumme, who is said to rule here. Standing on the shore, you understand how the legends began.",
      fr: "Le Mummelsee est l'un des lieux légendaires les plus connus de la Forêt-Noire — un petit lac de cirque sombre au milieu de sapinières denses, sur la célèbre route des Crêtes. Le poète Mörike a même chanté la nymphe Mumme, qui y aurait son royaume. Sur la rive, on comprend l'origine des légendes.",
      tr: 'Mummelsee, Karaorman\'ın en bilinen efsane yerlerinden biridir — yoğun ladin ormanlarının ortasında, ünlü Schwarzwaldhochstrasse üzerinde küçük, karanlık bir sirk gölü. Şair Mörike, burada krallığı olduğu söylenen su perisi Mumme\'yi yazdı. Kıyıda durunca, efsanelerin nasıl doğduğunu anlarsınız.',
    },
    a10P2: {
      de: 'Der See ist in 20 Minuten zu Fuß umrundet — ein gemütlicher Weg, gut auch für Familien. Direkt am Ufer gibt es ein Berghotel, Souvenirläden und ein Bootsverleih für Tretboote. Wer mehr will, wandert in einer guten halben Stunde hinauf zur Hornisgrinde — mit 1.164 Metern der höchste Berg des Nordschwarzwalds.',
      en: 'You can walk round the lake in twenty minutes — an easy path, suitable for families. Right by the shore there is a mountain hotel, souvenir shops and pedalo rental. For more, hike up in a good half-hour to the Hornisgrinde — at 1,164 metres the highest mountain in the northern Black Forest.',
      fr: "On peut faire le tour du lac en vingt minutes — un sentier facile, adapté aux familles. Sur la rive, un hôtel de montagne, des boutiques de souvenirs et la location de pédalos. Pour aller plus loin, une bonne demi-heure de marche mène à la Hornisgrinde — point culminant du nord de la Forêt-Noire à 1 164 mètres.",
      tr: 'Gölün etrafı yirmi dakikada yürünebilir — kolay bir yol, aileler için de uygundur. Kıyıda bir dağ oteli, hediyelik dükkanları ve deniz bisikleti kiralığı var. Daha fazlasını isteyenler için yarım saatlik tırmanış Hornisgrinde\'ye çıkar — 1.164 metreyle kuzey Karaorman\'ın en yüksek dağı.',
    },
    a10P3: {
      de: 'Vom Hotel sind es etwa zwei Stunden Fahrt — wer den Mummelsee besucht, sollte die Anfahrt entlang der Schwarzwaldhochstraße genießen, mit Aussichtspunkten und Einkehrmöglichkeiten unterwegs. Im Frühherbst ist es besonders schön, wenn die Wälder sich verfärben.',
      en: "It is about two hours' drive from the hotel — when visiting the Mummelsee, enjoy the journey along the Black Forest High Road, with viewpoints and inns along the way. Early autumn is particularly beautiful, when the forests are turning colour.",
      fr: "Il faut environ deux heures de route depuis l'hôtel — lors de la visite du Mummelsee, profitez du trajet le long de la route des Crêtes, avec ses points de vue et ses étapes. Le début de l'automne est particulièrement beau, quand les forêts se colorent.",
      tr: 'Otelden yaklaşık iki saat sürer — Mummelsee\'yi ziyaret edenler Schwarzwaldhochstrasse boyunca yolculuğun, manzara noktaları ve duraklarıyla keyfini çıkarmalı. Sonbahar başlangıcında, ormanlar renklenirken, özellikle güzeldir.',
    },

    // 11 — Hofgut Sternen
    a11Title: { de: 'Hofgut Sternen — historische Poststation im Höllental', en: 'Hofgut Sternen — historic posting station in the Höllental', fr: "Hofgut Sternen — relais historique dans la vallée de l'Enfer", tr: 'Hofgut Sternen — Höllental\'da tarihi posta istasyonu' },
    a11Excerpt: { de: 'Marie Antoinette übernachtete hier auf dem Weg nach Versailles — heute eine Glasbläserei, ein Café und ein Museumshof.', en: 'Marie Antoinette stayed here on her way to Versailles — today a glassworks, a café and a museum farm.', fr: 'Marie-Antoinette y séjourna en route vers Versailles — aujourd\'hui une verrerie, un café et une ferme musée.', tr: 'Marie Antoinette Versay yolunda burada kalmıştı — bugün cam atölyesi, kafe ve müze çiftliği.' },
    a11P1: {
      de: 'Das Hofgut Sternen liegt mitten im Höllental — einer der schmalsten Pässe des Schwarzwalds. Seit über 600 Jahren wird hier Reisenden Rast gewährt, und 1770 übernachtete hier die junge Marie Antoinette auf ihrem Weg zur Hochzeit nach Versailles. Eine Tafel an der Wand erinnert daran.',
      en: 'Hofgut Sternen lies in the middle of the Höllental — one of the narrowest passes in the Black Forest. For over 600 years travellers have rested here, and in 1770 the young Marie Antoinette stayed overnight on her way to her wedding in Versailles. A plaque on the wall recalls it.',
      fr: "Le Hofgut Sternen est situé au milieu de la vallée de l'Enfer — l'un des cols les plus étroits de la Forêt-Noire. Depuis plus de 600 ans, on y accueille les voyageurs, et en 1770, la jeune Marie-Antoinette y passa la nuit en route vers son mariage à Versailles. Une plaque au mur le rappelle.",
      tr: 'Hofgut Sternen, Karaorman\'ın en dar geçitlerinden biri olan Höllental\'ın ortasındadır. Burada 600 yılı aşkın süredir gezginler dinlenir; 1770\'te genç Marie Antoinette Versay\'daki düğününe giderken bir gece konaklamıştı. Duvardaki bir levha bunu hatırlatır.',
    },
    a11P2: {
      de: 'Heute beherbergt das Hofgut eine bekannte Glasbläserei, in der man den Handwerkern bei der Arbeit zusehen und eigene Stücke kaufen kann. Daneben gibt es ein Hofgut-Museum, eine Kuckucksuhrwerkstatt und ein gemütliches Café mit Schwarzwälder Kirschtorte. Ein Ort, der vieles auf einmal bietet.',
      en: 'Today the estate houses a well-known glassworks where you can watch the craftspeople at work and buy your own pieces. There is also a Hofgut museum, a cuckoo clock workshop and a cosy café with Black Forest cherry cake. A place that offers many things at once.',
      fr: "Aujourd'hui, le domaine abrite une verrerie réputée où l'on peut observer les artisans à l'œuvre et acheter ses propres pièces. À côté, un musée du Hofgut, un atelier de coucou et un café cosy avec sa forêt-noire. Un lieu qui propose beaucoup à la fois.",
      tr: 'Bugün çiftlik, ustaları çalışırken izleyip kendi parçanızı alabileceğiniz tanınmış bir cam atölyesini barındırıyor. Yanı sıra Hofgut müzesi, bir guguklu saat atölyesi ve Karaorman pastalı sıcak bir kafe var. Tek yerde çok şey sunan bir mekân.',
    },
    a11P3: {
      de: 'Das Höllental liegt rund 45 Minuten vom Hotel entfernt — die Strecke selbst ist sehenswert, mit dem Hirschsprung-Felsen und dramatischen Felswänden. Ideal für einen halben Tag, gut zu kombinieren mit dem Titisee.',
      en: 'The Höllental lies about 45 minutes from the hotel — the road itself is worth seeing, with the Hirschsprung rock and dramatic cliffs. Ideal for half a day, easily combined with Lake Titisee.',
      fr: "La vallée de l'Enfer est à environ 45 minutes de l'hôtel — le trajet lui-même mérite le coup d'œil, avec le rocher du Saut-du-Cerf et ses parois dramatiques. Idéal pour une demi-journée, à combiner avec le Titisee.",
      tr: 'Höllental otelden yaklaşık 45 dakika uzakta — yol bile görülmeye değer; Hirschsprung kayası ve dramatik kayalıklarıyla. Yarım gün için ideal, Titisee ile birleştirmek kolay.',
    },

    // 12 — Glasbläserei Wolfach
    a12Title: { de: 'Dorotheenhütte Wolfach — Glas aus Tradition', en: 'Dorotheenhütte Wolfach — glass in the traditional way', fr: 'Dorotheenhütte Wolfach — le verre selon la tradition', tr: 'Dorotheenhütte Wolfach — geleneğe göre cam' },
    a12Excerpt: { de: 'Die letzte handwerkliche Mundbläserei des Schwarzwalds — zusehen, lernen, selber blasen.', en: 'The last traditional mouth-blown glassworks in the Black Forest — watch, learn, blow your own.', fr: 'La dernière verrerie artisanale soufflée à la bouche en Forêt-Noire — voir, apprendre, souffler soi-même.', tr: 'Karaorman\'ın son geleneksel ağızda üflenen cam atölyesi — izleyin, öğrenin, kendiniz üfleyin.' },
    a12P1: {
      de: 'Die Dorotheenhütte in Wolfach ist die letzte verbliebene Mundbläserei im Schwarzwald — ein Handwerk, das im 18. Jahrhundert eine wichtige Industrie der Region war. Heute arbeiten dort noch ein knappes Dutzend Glasbläser, die vor Besuchern den Werkstoff aus glühenden 1.200-Grad-Öfen ziehen und in kunstvolle Schalen, Vasen und Trinkgläser formen.',
      en: 'The Dorotheenhütte in Wolfach is the last remaining mouth-blown glassworks in the Black Forest — a craft that was an important industry of the region in the eighteenth century. Today a handful of glassblowers still work there, drawing the material from glowing 1,200-degree furnaces in front of visitors and shaping it into artful bowls, vases and drinking glasses.',
      fr: "La Dorotheenhütte à Wolfach est la dernière verrerie soufflée à la bouche subsistant en Forêt-Noire — un artisanat qui fut une industrie importante de la région au XVIIIe siècle. Aujourd'hui, une poignée de souffleurs y travaillent encore, tirant la matière des fours à 1 200 degrés devant les visiteurs et la façonnant en coupes, vases et verres.",
      tr: 'Wolfach\'taki Dorotheenhütte, Karaorman\'da kalan son ağızda üflenen cam atölyesidir — 18. yüzyılda bölgenin önemli bir endüstrisi olan bir el sanatı. Bugün hâlâ bir avuç cam üfleyici çalışıyor; 1.200 dereceye varan kor fırınlardan ziyaretçilerin önünde malzeme çekip kâseler, vazolar ve içki bardakları biçimlendiriyor.',
    },
    a12P2: {
      de: 'Der Rundgang beginnt im historischen Glasmuseum und führt durch verschiedene Produktionsbereiche bis in den großen Glaspark mit unzähligen Stücken zum Anschauen und Kaufen. Auf Anmeldung darf man sogar selbst ein Glas blasen — ein Erlebnis, das man als kleines Souvenir mitnimmt.',
      en: 'The tour begins in the historic glass museum and runs through various production areas to the large glass park with countless pieces to view and buy. By prior arrangement you can even blow your own glass — an experience you can take home as a small souvenir.',
      fr: "Le parcours commence dans le musée historique du verre et traverse divers ateliers de production jusqu'au grand parc du verre avec d'innombrables pièces à voir et à acheter. Sur réservation, vous pouvez même souffler votre propre verre — une expérience à ramener comme petit souvenir.",
      tr: 'Tur tarihi cam müzesinde başlar; çeşitli üretim alanlarından geçerek, izlenecek ve satın alınacak sayısız parçanın bulunduğu büyük cam parkına ulaşır. Önceden randevuyla kendi bardağınızı bile üfleyebilirsiniz — küçük bir hatıra olarak götürdüğünüz bir deneyim.',
    },
    a12P3: {
      de: 'Wolfach liegt rund 1 Stunde 20 Minuten vom Hotel — wer dort hinfährt, kombiniert den Besuch gut mit dem nahegelegenen Vogtsbauernhof oder einem Bummel durch das hübsche Kinzigtal.',
      en: 'Wolfach lies about 1 hour 20 minutes from the hotel — those who go can combine the visit well with the nearby Vogtsbauernhof or a stroll through the pretty Kinzig Valley.',
      fr: "Wolfach se trouve à environ 1h20 de l'hôtel — ceux qui s'y rendent peuvent combiner la visite avec le Vogtsbauernhof voisin ou une flânerie dans la jolie vallée du Kinzig.",
      tr: 'Wolfach otelden yaklaşık 1 saat 20 dakika — gidenler ziyareti yakındaki Vogtsbauernhof veya güzel Kinzig Vadisi\'nde bir gezintiyle birleştirebilir.',
    },

    // 13 — Uhrenmuseum Furtwangen
    a13Title: { de: 'Deutsches Uhrenmuseum — die Kuckucksuhr und mehr', en: 'German Clock Museum — the cuckoo clock and beyond', fr: "Musée allemand de l'horlogerie — le coucou et au-delà", tr: 'Alman Saat Müzesi — guguklu saat ve ötesi' },
    a13Excerpt: { de: 'Über 8.000 Uhren in Furtwangen erzählen die Geschichte einer Region — vom Bauernhandwerk zur Weltindustrie.', en: 'Over 8,000 clocks in Furtwangen tell the story of a region — from farm craft to global industry.', fr: "Plus de 8 000 horloges à Furtwangen racontent l'histoire d'une région — de l'artisanat paysan à l'industrie mondiale.", tr: 'Furtwangen\'deki 8.000\'den fazla saat bir bölgenin hikâyesini anlatıyor — köylü el sanatından dünya endüstrisine.' },
    a13P1: {
      de: 'Im Deutschen Uhrenmuseum in Furtwangen, dem höchstgelegenen Ort des Schwarzwalds, lernt man die wahre Geschichte hinter der berühmten Schwarzwälder Kuckucksuhr. Im 18. Jahrhundert begannen Bauern, in den langen Wintern Holzuhren zu schnitzen, um die kargen Einkommen aufzubessern — daraus entstand eine Industrie, die die Region weltbekannt machte.',
      en: 'At the German Clock Museum in Furtwangen, the highest town in the Black Forest, you learn the true story behind the famous Black Forest cuckoo clock. In the eighteenth century, farmers began to carve wooden clocks during the long winters to supplement meagre incomes — from this grew an industry that made the region world-famous.',
      fr: "Au Musée allemand de l'horlogerie à Furtwangen, la localité la plus haute de la Forêt-Noire, on découvre la véritable histoire du célèbre coucou. Au XVIIIe siècle, les paysans se mirent à sculpter des horloges en bois pendant les longs hivers pour compléter leurs maigres revenus — c'est ainsi qu'est née une industrie qui rendit la région mondialement célèbre.",
      tr: 'Karaorman\'ın en yüksek yerleşimi olan Furtwangen\'deki Alman Saat Müzesi\'nde ünlü Karaorman guguklu saatinin gerçek hikâyesini öğrenirsiniz. 18. yüzyılda köylüler, kıt gelirlerini desteklemek için uzun kışlarda ahşap saatler oymaya başladı — buradan, bölgeyi dünyaca ünlü yapan bir endüstri doğdu.',
    },
    a13P2: {
      de: 'Die Sammlung umfasst über 8.000 Stücke — von der ersten primitiven Pendeluhr aus dem 17. Jahrhundert bis zu Hightech-Atomuhren von heute. Besonders sehenswert: die enorme Astronomische Welt-Uhr und die Phonola-Selbstspielklavier-Sammlung. Kinder dürfen an verschiedenen Stationen Mechanismen selbst ausprobieren.',
      en: "The collection comprises over 8,000 pieces — from the first primitive pendulum clock of the seventeenth century to today's high-tech atomic clocks. Particularly worth seeing: the enormous Astronomical World Clock and the Phonola self-playing piano collection. Children can try out mechanisms at various interactive stations.",
      fr: "La collection compte plus de 8 000 pièces — de la première horloge à pendule primitive du XVIIe siècle aux horloges atomiques de haute technologie d'aujourd'hui. À voir absolument : l'énorme horloge astronomique mondiale et la collection de pianos mécaniques Phonola. Les enfants peuvent essayer divers mécanismes sur des stations interactives.",
      tr: 'Koleksiyon 8.000\'den fazla parça içerir — 17. yüzyılın ilk basit sarkaçlı saatinden günümüzün yüksek teknolojili atomik saatlerine. Özellikle görülmeye değer: muazzam Astronomik Dünya Saati ve Phonola kendi kendine çalan piyano koleksiyonu. Çocuklar çeşitli interaktif istasyonlarda mekanizmaları deneyebilir.',
    },
    a13P3: {
      de: 'Furtwangen liegt rund 1 Stunde vom Hotel — bei Regenwetter eine perfekte Empfehlung, das Museum ist groß genug für mehrere Stunden. Tipp: einen Stopp in der Furtwanger Konditorei einplanen.',
      en: 'Furtwangen lies about one hour from the hotel — a perfect recommendation in rainy weather; the museum is large enough for several hours. Tip: plan a stop at the Furtwangen patisserie.',
      fr: "Furtwangen se trouve à environ une heure de l'hôtel — une recommandation parfaite par temps pluvieux ; le musée occupe plusieurs heures. Astuce : prévoir un arrêt à la pâtisserie de Furtwangen.",
      tr: 'Furtwangen otelden yaklaşık bir saat uzakta — yağmurlu havalarda mükemmel bir öneri; müze birkaç saatlik bir gezi için yeterince büyüktür. İpucu: Furtwangen pastanesine uğrayın.',
    },

    // 14 — Langlauf Hinterzarten
    a14Title: { de: 'Langlauf in Hinterzarten — das Mekka der Loipen', en: 'Cross-country skiing in Hinterzarten — the trail Mecca', fr: 'Ski de fond à Hinterzarten — la Mecque des pistes', tr: 'Hinterzarten\'da kros kayağı — parkurların başkenti' },
    a14Excerpt: { de: 'Heimat olympischer Skispringer, mehr als 100 km gespurte Loipen für jedes Niveau, von Anfänger bis Profi.', en: 'Home of Olympic ski jumpers, over 100 km of groomed cross-country tracks for every level, from beginner to pro.', fr: 'Berceau de sauteurs à ski olympiques, plus de 100 km de pistes de fond damées pour tous les niveaux.', tr: 'Olimpik atlama kayakçılarının evi, yeni başlayandan profesyonele her seviye için 100 km\'yi aşan bakımlı kros parkurları.' },
    a14P1: {
      de: 'Hinterzarten ist die heimliche Hauptstadt des Langlaufs im Schwarzwald. Der kleine Ort hat zahlreiche olympische Skispringer hervorgebracht — Sven Hannawald und Georg Thoma sind nur zwei Namen, die hier zur Welt kamen. Wer im Winter eine Loipe sucht, findet hier mehr als hundert Kilometer gut präparierter Spuren in allen Schwierigkeitsgraden.',
      en: 'Hinterzarten is the secret cross-country capital of the Black Forest. The small village has produced numerous Olympic ski jumpers — Sven Hannawald and Georg Thoma are just two names born here. If you are looking for a winter trail, you will find more than a hundred kilometres of well-prepared tracks at every level.',
      fr: "Hinterzarten est la capitale secrète du ski de fond en Forêt-Noire. Ce petit village a vu naître de nombreux sauteurs à ski olympiques — Sven Hannawald et Georg Thoma ne sont que deux noms originaires d'ici. Pour les amateurs de pistes hivernales, plus de cent kilomètres de tracés bien préparés, tous niveaux.",
      tr: 'Hinterzarten, Karaorman\'ın gizli kros kayağı başkentidir. Küçük köy birçok olimpik atlama kayakçısı yetiştirdi — Sven Hannawald ve Georg Thoma burada doğan iki isim. Kış parkuru arayanlar her seviyede yüz kilometreden fazla iyi hazırlanmış iz bulur.',
    },
    a14P2: {
      de: 'Loipen führen vom Ortskern direkt in die verschneiten Wälder und über sanfte Hochmoore. Skischulen vor Ort bieten Anfängerkurse, und Skiverleih ist überall problemlos möglich. Im Sommer verwandeln sich die Loipen in Wander- und Mountainbike-Wege — der Ort ist also ganzjährig ein Ausgangspunkt.',
      en: 'Tracks lead from the village centre straight into snowy forests and over gentle high moors. Local ski schools offer beginner courses, and ski rentals are easy to find. In summer the tracks turn into hiking and mountain-biking routes — the village is a year-round base.',
      fr: "Les pistes partent du centre du village directement vers les forêts enneigées et les tourbières d'altitude. Les écoles locales proposent des cours pour débutants, et la location de skis se trouve partout. En été, les pistes se transforment en sentiers de randonnée et VTT — le village est une base toute l'année.",
      tr: 'Parkurlar köy merkezinden doğrudan karlı ormanlara ve yumuşak yüksek bataklıklara uzanır. Yerel kayak okulları başlangıç kursları sunar; kayak kiralama her yerde kolaydır. Yazın parkurlar yürüyüş ve dağ bisikleti yollarına dönüşür — köy yıl boyu bir üs noktası.',
    },
    a14P3: {
      de: 'Hinterzarten ist rund 40 Minuten vom Hotel — wer mehrere Wintertage einplant, kann morgens hin und mittags wieder bei uns sein. Wir geben Ihnen gerne aktuelle Loipenkarten und Wettertipps.',
      en: 'Hinterzarten is about 40 minutes from the hotel — those planning several winter days can drive there in the morning and be back with us by lunch. We gladly provide current trail maps and weather tips.',
      fr: "Hinterzarten est à environ 40 minutes de l'hôtel — ceux qui prévoient plusieurs jours d'hiver peuvent s'y rendre le matin et être de retour à midi. Nous fournissons volontiers des cartes des pistes et des prévisions.",
      tr: 'Hinterzarten otelden yaklaşık 40 dakika — birkaç kış günü planlayanlar sabah gidip öğlen yine bizimle olabilir. Güncel parkur haritaları ve hava ipuçlarını seve seve veririz.',
    },

    // 15 — Bahntrassen-Radweg
    a15Title: { de: 'Bahntrassen-Radweg — sanftes Rollen auf alten Gleisen', en: 'Old-rail cycling — gentle riding on former tracks', fr: "Voies vertes — rouler en douceur sur d'anciens rails", tr: 'Eski demiryolu bisiklet yolu — eski raylarda kolay sürüş' },
    a15Excerpt: { de: 'Stillgelegte Bahnstrecken, in Radwege verwandelt — flache Routen, lange Strecken, kaum Autoverkehr.', en: 'Disused railway lines turned into cycle paths — flat routes, long distances, hardly any car traffic.', fr: 'Anciennes voies ferrées transformées en pistes cyclables — itinéraires plats, longues distances, presque sans circulation.', tr: 'Bisiklet yoluna dönüşmüş kullanılmayan demiryolları — düz rotalar, uzun mesafeler, neredeyse trafiksiz.' },
    a15P1: {
      de: 'Eine der schönsten Eigenheiten des Schwarzwalds: viele alte, stillgelegte Bahntrassen wurden zu Radwegen umgebaut. Das bedeutet sanfte Steigungen — schließlich konnten Dampfzüge keine Steilstrecken bewältigen — und lange, ruhige Abschnitte, oft fern von Straßen. Perfekt für entspannte Tagestouren mit der Familie oder zum sportlichen Strecken-Machen.',
      en: "One of the Black Forest's most charming features: many old disused railway lines have been converted into cycle paths. That means gentle gradients — steam trains could not master steep climbs — and long, quiet stretches, often far from any road. Perfect for relaxed day trips with the family or for serious distance riding.",
      fr: "L'une des plus belles particularités de la Forêt-Noire : de nombreuses anciennes voies ferrées désaffectées ont été transformées en pistes cyclables. Cela signifie des pentes douces — les trains à vapeur ne pouvaient pas franchir des montées raides — et de longues sections calmes, souvent loin des routes. Parfait pour des sorties détendues en famille ou pour rouler longtemps.",
      tr: 'Karaorman\'ın en güzel özelliklerinden biri: kullanılmayan birçok eski demiryolu bisiklet yoluna dönüştürüldü. Bu, yumuşak eğimler — buhar trenleri dik yokuş çıkamazdı — ve uzun, sessiz bölümler demek; çoğunlukla yollardan uzak. Aileyle rahat gezi veya sportif uzun yol için mükemmel.',
    },
    a15P2: {
      de: 'In unserer Nähe liegen mehrere solcher Strecken — etwa der Bahntrassen-Radweg entlang der ehemaligen Wutachtalbahn oder der Kandertal-Radweg. Wir verleihen Fahrräder kostenlos, geben Karten mit und beraten Sie zur passenden Route für Ihr Tempo. Auch E-Bikes können wir auf Anfrage organisieren.',
      en: 'Several such routes lie near us — for instance the cycle path along the former Wutachtalbahn or the Kandertal cycle route. We lend bicycles for free, provide maps and advise on the route that fits your pace. E-bikes can also be arranged on request.',
      fr: "Plusieurs de ces itinéraires se trouvent près de nous — par exemple la piste cyclable de l'ancienne Wutachtalbahn ou la piste de la vallée du Kander. Nous prêtons des vélos gratuitement, fournissons des cartes et conseillons selon votre rythme. Des vélos électriques peuvent être organisés sur demande.",
      tr: 'Yakınımızda böyle birkaç rota var — örneğin eski Wutachtalbahn boyunca bisiklet yolu veya Kandertal bisiklet rotası. Bisikletleri ücretsiz veriyoruz, harita sağlıyoruz ve hızınıza uygun rotayı tavsiye ediyoruz. İsteğe bağlı e-bikes da temin edebiliriz.',
    },
    a15P3: {
      de: 'Die beste Zeit dafür ist Mai bis Oktober. Wir packen Ihnen gerne ein Picknick aus dem Bio-Frühstück ein — ein paar belegte Brote, ein Stück Käse, ein Apfel aus dem Garten. Das schmeckt mittags am Bachrand besonders gut.',
      en: 'The best season is May to October. We are happy to pack a picnic from the organic breakfast — a few filled rolls, a piece of cheese, an apple from the garden. It tastes especially good at midday by a stream.',
      fr: "La meilleure saison est de mai à octobre. Nous préparons volontiers un pique-nique avec notre petit-déjeuner bio — quelques sandwichs, un morceau de fromage, une pomme du jardin. C'est particulièrement bon à midi au bord d'un ruisseau.",
      tr: 'En iyi mevsim Mayıs-Ekim. Organik kahvaltıdan size seve seve piknik hazırlarız — birkaç sandviç, bir parça peynir, bahçeden bir elma. Öğlen dere kenarında özellikle güzel olur.',
    },

    // 16 — Schauinsland
    a16Title: { de: 'Schauinsland — Freiburgs Hausberg', en: "Schauinsland — Freiburg's home mountain", fr: 'Le Schauinsland — la montagne de Freiburg', tr: 'Schauinsland — Freiburg\'un kendi dağı' },
    a16Excerpt: { de: '1.284 m, längste Pendelseilbahn Deutschlands, alte Silberbergwerke und ein weiter Blick über die Rheinebene.', en: "1,284 m, Germany's longest cable car, old silver mines and a sweeping view over the Rhine plain.", fr: "1 284 m, le plus long téléphérique d'Allemagne, d'anciennes mines d'argent et une vue large sur la plaine du Rhin.", tr: '1.284 m, Almanya\'nın en uzun teleferiği, eski gümüş madenleri ve Ren ovasının geniş manzarası.' },
    a16P1: {
      de: 'Der Schauinsland ist Freiburgs Hausberg — und gleichzeitig ein historisch interessanter Ort. Schon im Mittelalter wurde hier Silber und Blei abgebaut; das hat den Berg geprägt, sichtbar an den vielen alten Schächten. Heute führt Deutschlands längste Pendelseilbahn (3,6 km) gemächlich von der Talstation auf 1.284 Meter.',
      en: "The Schauinsland is Freiburg's home mountain — and at the same time a historically interesting place. Silver and lead were mined here as early as the Middle Ages; this shaped the mountain, visible in many old shafts. Today Germany's longest cable car (3.6 km) climbs leisurely from the valley station to 1,284 metres.",
      fr: "Le Schauinsland est la montagne de Freiburg — et un lieu d'intérêt historique. Argent et plomb y étaient extraits dès le Moyen Âge ; cela a marqué la montagne, visible dans les nombreux puits anciens. Aujourd'hui, le plus long téléphérique d'Allemagne (3,6 km) monte tranquillement de la station vallée à 1 284 mètres.",
      tr: 'Schauinsland, Freiburg\'un kendi dağı — aynı zamanda tarihsel ilgi noktası. Daha Orta Çağ\'da burada gümüş ve kurşun çıkarılmış; bu dağı şekillendirmiş, çok sayıda eski kuyuda görülür. Bugün Almanya\'nın en uzun teleferiği (3,6 km) vadi istasyonundan 1.284 metreye yavaşça çıkar.',
    },
    a16P2: {
      de: 'Oben warten Aussichtspunkte mit Blick über die Rheinebene bis zu den Vogesen, ein Aussichtsturm aus den 1980ern und mehrere Wanderwege durch Wälder und über Almwiesen. Besonders schön: der Besuch des Schauinsland-Bergwerks, in dem man mit Helm und Lampe in echte Stollen hinabsteigen darf.',
      en: 'At the top, viewing points overlook the Rhine plain as far as the Vosges, plus an observation tower from the 1980s and several trails through forests and across alpine meadows. Particularly fine: a visit to the Schauinsland mine, where with helmet and lamp you can descend into real tunnels.',
      fr: "En haut, des points de vue dominent la plaine du Rhin jusqu'aux Vosges, plus une tour d'observation des années 1980 et plusieurs sentiers à travers les forêts et les pâturages d'altitude. Particulièrement beau : la visite de la mine du Schauinsland, où, casque et lampe en main, on descend dans de véritables galeries.",
      tr: 'Yukarıda Vosges\'a kadar Ren ovasını gören manzara noktaları, 1980\'lerden bir gözlem kulesi ve ormanlardan ve Alp çayırlarından geçen birkaç patika sizi bekler. Özellikle güzel: kask ve lambayla gerçek galerilere indiğiniz Schauinsland madeni ziyareti.',
    },
    a16P3: {
      de: 'Vom Hotel rund 1 Stunde 30 Minuten — gut zu kombinieren mit einem halben Tag in der Freiburger Altstadt, die unbedingt einen Bummel wert ist. Tipp: Münster, Bächle, Markt.',
      en: "About 1 hour 30 minutes from the hotel — easily combined with half a day in Freiburg's old town, which is well worth a stroll. Tip: cathedral, Bächle, market.",
      fr: "Environ 1h30 de l'hôtel — à combiner avec une demi-journée dans la vieille ville de Freiburg, qui vaut absolument une promenade. Astuce : la cathédrale, les Bächle, le marché.",
      tr: 'Otelden yaklaşık 1 saat 30 dakika — Freiburg eski şehrinde yarım günle birleştirmek kolaydır; gezilmeye değer. İpucu: katedral, Bächle\'ler ve pazar.',
    },

    // 17 — Allerheiligen
    a17Title: { de: 'Allerheiligen — Wasserfälle und Klosterruine', en: 'Allerheiligen — waterfalls and monastery ruin', fr: "Allerheiligen — cascades et ruine d'abbaye", tr: 'Allerheiligen — şelaleler ve manastır kalıntıları' },
    a17Excerpt: { de: 'Sieben Kaskaden im Nordschwarzwald, daneben die romantische Ruine eines Prämonstratenser-Klosters.', en: 'Seven cascades in the northern Black Forest, alongside the romantic ruin of a Premonstratensian abbey.', fr: "Sept cascades dans le nord de la Forêt-Noire, à côté de la ruine romantique d'une abbaye de Prémontrés.", tr: 'Kuzey Karaorman\'da yedi kademe ve yanlarında romantik bir Premonstre manastırının kalıntıları.' },
    a17P1: {
      de: 'Im stillen Tal von Oppenau, gut versteckt, liegt einer der schönsten Plätze des Nordschwarzwalds: die Allerheiligen-Wasserfälle und gleich daneben die Ruine einer alten Klosteranlage aus dem 13. Jahrhundert. Die Kombination aus stürzendem Wasser, moosbedeckten Steinen und gotischen Bögen wirkt fast wie aus einem Bilderbuch.',
      en: 'In the quiet Oppenau valley, well-hidden, lies one of the most beautiful spots in the northern Black Forest: the Allerheiligen waterfalls and right next to them the ruin of an old monastery complex from the thirteenth century. The combination of plunging water, moss-covered stones and Gothic arches looks almost like a picture book.',
      fr: "Dans la vallée tranquille d'Oppenau, bien dissimulé, se trouve l'un des plus beaux endroits du nord de la Forêt-Noire : les cascades d'Allerheiligen et, juste à côté, la ruine d'une ancienne abbaye du XIIIe siècle. L'alliance d'eau qui plonge, de pierres moussues et d'arches gothiques semble sortir d'un livre d'images.",
      tr: 'Oppenau\'nun sessiz vadisinde, iyi gizlenmiş, kuzey Karaorman\'ın en güzel yerlerinden biri var: Allerheiligen şelaleleri ve hemen yanında 13. yüzyıldan kalma eski bir manastır kompleksinin kalıntısı. Dökülen su, yosun kaplı taşlar ve gotik kemerlerin birleşimi neredeyse bir resim kitabından çıkmış gibi.',
    },
    a17P2: {
      de: 'Ein gut angelegter Treppenweg führt entlang der sieben Kaskaden über zahlreiche Stufen hinauf — knapp 30 Minuten Aufstieg, mit vielen Pausen an Aussichtspunkten. Oben angekommen, kann man weiter durch den Wald spazieren oder direkt zur Klosterruine zurückgehen, die jederzeit frei zugänglich ist.',
      en: "A well-laid stepped path leads alongside the seven cascades up many flights — about 30 minutes' climb, with plenty of viewing pauses. At the top, you can walk further through the forest or head straight back to the monastery ruin, which is freely accessible at all times.",
      fr: "Un chemin d'escaliers bien aménagé longe les sept cascades — environ 30 minutes de montée, avec de nombreuses pauses panoramiques. Au sommet, on peut continuer à travers la forêt ou redescendre vers la ruine d'abbaye, librement accessible à tout moment.",
      tr: 'İyi yapılmış bir merdivenli yol yedi kademe boyunca yukarı çıkar — yaklaşık 30 dakikalık tırmanış, manzara için pek çok ara. Tepede, ormandan ileriye yürüyebilir ya da her zaman serbestçe ulaşılabilen manastır kalıntısına dönebilirsiniz.',
    },
    a17P3: {
      de: 'Allerheiligen ist rund 1 Stunde 50 Minuten vom Hotel entfernt — ein Tagesausflug, gut zu kombinieren mit der Schwarzwaldhochstraße und einer Pause am Mummelsee.',
      en: 'Allerheiligen is about 1 hour 50 minutes from the hotel — a day trip, well combined with the Black Forest High Road and a break at the Mummelsee.',
      fr: "Allerheiligen est à environ 1h50 de l'hôtel — une excursion d'une journée, à combiner avec la route des Crêtes et une pause au Mummelsee.",
      tr: 'Allerheiligen otelden yaklaşık 1 saat 50 dakika uzakta — bir günlük gezi, Schwarzwaldhochstrasse ve Mummelsee molasıyla iyi birleşir.',
    },

    // 18 — Rheinfall
    a18Title: { de: 'Rheinfall — Europas größter Wasserfall', en: "Rheinfall — Europe's largest waterfall", fr: "Rheinfall — la plus grande chute d'eau d'Europe", tr: 'Rheinfall — Avrupa\'nın en büyük şelalesi' },
    a18Excerpt: { de: 'In Schaffhausen, knapp anderthalb Stunden vom Hotel — Boote, Aussichtskanzeln, donnernde Wassermassen.', en: 'In Schaffhausen, just under an hour and a half from the hotel — boats, viewing platforms, thundering masses of water.', fr: "À Schaffhouse, à peine une heure et demie de l'hôtel — bateaux, plateformes panoramiques, eaux tonitruantes.", tr: 'Schaffhausen\'da, otelden bir buçuk saatten az — tekneler, manzara terasları, gürleyen su kütleleri.' },
    a18P1: {
      de: 'Knapp anderthalb Stunden südlich von Löffingen, schon auf Schweizer Seite, donnert der größte Wasserfall Europas in die Tiefe. Der Rheinfall bei Schaffhausen ist nicht besonders hoch — gut 23 Meter — aber dafür breit und enorm wasserreich. Bei Hochwasser stürzen pro Sekunde mehr als 600 Kubikmeter Wasser hinab.',
      en: 'Just under an hour and a half south of Löffingen, already on the Swiss side, the largest waterfall in Europe thunders down. The Rheinfall at Schaffhausen is not particularly tall — a good 23 metres — but it is wide and enormously water-rich. At high water, more than 600 cubic metres of water plunge down each second.',
      fr: "À peine une heure et demie au sud de Löffingen, déjà côté suisse, gronde la plus grande chute d'Europe. Le Rheinfall près de Schaffhouse n'est pas particulièrement haut — un peu plus de 23 mètres — mais il est large et extrêmement abondant. En crue, plus de 600 mètres cubes d'eau dévalent chaque seconde.",
      tr: 'Löffingen\'in bir buçuk saat kadar güneyinde, artık İsviçre tarafında, Avrupa\'nın en büyük şelalesi gürler. Schaffhausen yakınındaki Rheinfall özellikle yüksek değildir — yaklaşık 23 metre — ama geniştir ve son derece su zengini. Yüksek su seviyesinde saniyede 600 metreküpten fazla su düşer.',
    },
    a18P2: {
      de: 'Vom Schloss Laufen aus führt ein Steig direkt an die Felsen, an denen das Wasser donnernd vorbeischießt — ein eindrucksvolles Gefühl, so nah dran zu stehen. Mit kleinen Schiffen kann man auf den Fels in der Mitte des Wasserfalls fahren oder eine Rundfahrt unternehmen. Es lohnt sich, Wechselkleidung mitzunehmen.',
      en: 'From Laufen Castle, a path leads right up to the rocks past which the water roars — an impressive feeling, standing so close. Small boats can take you to the rock in the middle of the falls or on a circular tour. It pays to bring a change of clothes.',
      fr: "Depuis le château de Laufen, un sentier mène directement aux rochers le long desquels l'eau gronde — une sensation impressionnante d'être si près. De petits bateaux mènent au rocher au milieu de la chute ou en tour panoramique. Prévoir des vêtements de rechange.",
      tr: 'Laufen Şatosu\'ndan bir patika doğrudan suyun gürleyerek geçtiği kayalara çıkar — bu kadar yakın durmak etkileyici bir histir. Küçük teknelerle şelalenin ortasındaki kayaya gidebilir veya tur yapabilirsiniz. Yedek kıyafet götürmek değerlidir.',
    },
    a18P3: {
      de: 'Schaffhausen selbst ist eine alte Hansestadt mit hübscher Altstadt — wer ohnehin schon dort ist, sollte einen Bummel einplanen. Bringen Sie den Reisepass mit, der Grenzübergang ist meist unkompliziert.',
      en: 'Schaffhausen itself is an old Hanseatic town with a pretty old centre — anyone already there should plan a stroll. Bring your passport; the border crossing is usually uncomplicated.',
      fr: "Schaffhouse elle-même est une ancienne ville hanséatique au joli centre — qui s'y trouve devrait y flâner. Apportez votre passeport ; le passage de la frontière est généralement sans soucis.",
      tr: 'Schaffhausen başlı başına güzel eski şehirli eski bir Hansa kasabası — zaten oradaysanız bir gezinti planlayın. Pasaportu yanınıza alın; sınır geçişi genelde sorunsuzdur.',
    },

    // 19 — Hochfirst
    a19Title: { de: 'Hochfirstturm — Panorama vor der Haustür', en: 'Hochfirst Tower — panorama on the doorstep', fr: 'Tour du Hochfirst — panorama devant la porte', tr: 'Hochfirst kulesi — kapımızın önünde panorama' },
    a19Excerpt: { de: 'Auf 1.192 Metern, oberhalb von Saig, rundum Blick bis zu den Alpen — und nur 15 Minuten vom Hotel.', en: 'At 1,192 metres, above Saig, all-round view as far as the Alps — only 15 minutes from the hotel.', fr: "À 1 192 mètres, au-dessus de Saig, vue panoramique jusqu'aux Alpes — à seulement 15 minutes de l'hôtel.", tr: '1.192 metrede, Saig\'in üstünde, Alpler\'e kadar çepeçevre manzara — otele yalnızca 15 dakika.' },
    a19P1: {
      de: 'Der Hochfirst ist mit 1.192 Metern einer der höchsten Berge im Hochschwarzwald — und liegt direkt vor unserer Haustür. Oberhalb des kleinen Ortes Saig, in rund 15 Autominuten erreichbar, steht ein hölzerner Aussichtsturm, der jeden Aufstieg lohnt. An klaren Tagen reicht der Blick vom Feldberg über den Belchen bis hin zu den Schweizer Alpen.',
      en: 'At 1,192 metres the Hochfirst is one of the highest mountains in the Upper Black Forest — and lies right on our doorstep. Above the small village of Saig, reachable in about 15 minutes by car, stands a wooden observation tower well worth the climb. On clear days the view stretches from the Feldberg across the Belchen to the Swiss Alps.',
      fr: "Avec 1 192 mètres, le Hochfirst est l'une des plus hautes montagnes de la Haute-Forêt-Noire — et il se trouve à notre porte. Au-dessus du petit village de Saig, atteignable en environ 15 minutes en voiture, se dresse une tour panoramique en bois qui mérite la montée. Par temps clair, la vue s'étend du Feldberg au Belchen jusqu'aux Alpes suisses.",
      tr: 'Hochfirst 1.192 metreyle Yukarı Karaorman\'ın en yüksek dağlarından biri — ve kapımızın hemen önünde. Küçük Saig köyünün üstünde, arabayla yaklaşık 15 dakikada ulaşılır; tırmanışa değen ahşap bir gözlem kulesi var. Açık günlerde manzara Feldberg\'den Belchen üzerinden İsviçre Alpleri\'ne uzanır.',
    },
    a19P2: {
      de: 'Vom Parkplatz aus geht es in 20–30 Minuten gemütlich bergauf, durch Tannenwald und kleine Lichtungen. Der Turm selbst ist ganzjährig zugänglich und kostenlos. Im Winter ist der Aufstieg meist gut präpariert und auch mit Schneeschuhen möglich.',
      en: 'From the car park, the gentle climb takes 20–30 minutes through fir forest and small clearings. The tower itself is accessible all year and free of charge. In winter the ascent is usually well prepared and possible with snowshoes too.',
      fr: 'Depuis le parking, la montée tranquille prend 20 à 30 minutes à travers sapinières et petites clairières. La tour est accessible toute l\'année et gratuite. En hiver, la montée est généralement bien préparée et possible en raquettes.',
      tr: 'Otoparktan ladin ormanı ve küçük açıklıklardan rahat bir tırmanış 20-30 dakika sürer. Kule yıl boyu açık ve ücretsizdir. Kışın çıkış genelde iyi hazırlanmış ve kar ayakkabısıyla da mümkündür.',
    },
    a19P3: {
      de: 'Unser ehrlicher Tipp: zum Sonnenuntergang hochgehen. Wenn das Licht über den Wäldern weich wird und die Alpen sich rosa färben, versteht man, warum wir gern hier leben. Wir packen Ihnen auf Wunsch eine Thermoskanne Tee ein.',
      en: 'Our honest tip: go up at sunset. When the light softens over the forests and the Alps turn pink, you understand why we like living here. We are happy to pack you a thermos of tea on request.',
      fr: "Notre conseil sincère : monter au coucher du soleil. Quand la lumière s'adoucit sur les forêts et que les Alpes prennent une teinte rose, on comprend pourquoi nous aimons vivre ici. Nous préparons volontiers un thermos de thé sur demande.",
      tr: 'Samimi tavsiyemiz: gün batımında çıkın. Işık ormanların üzerinde yumuşadığında ve Alpler pembeleştiğinde, neden burada yaşamayı sevdiğimizi anlarsınız. İsterseniz bir termos çay hazırlarız.',
    },

    // 20 — Weihnachtsmärkte
    a20Title: { de: 'Schwarzwälder Weihnachtsmärkte — der Zauber des Advents', en: 'Black Forest Christmas markets — the magic of Advent', fr: "Marchés de Noël de la Forêt-Noire — la magie de l'Avent", tr: 'Karaorman Noel pazarları — Advent büyüsü' },
    a20Excerpt: { de: 'Freiburg, Triberg, Konstanz, Löffingen: kleine und große Märkte, Glühwein, Holzfiguren und der Duft von Zimt.', en: 'Freiburg, Triberg, Konstanz, Löffingen: large and small markets, mulled wine, wooden figures and the scent of cinnamon.', fr: 'Freiburg, Triberg, Constance, Löffingen : grands et petits marchés, vin chaud, figurines en bois et parfum de cannelle.', tr: 'Freiburg, Triberg, Konstanz, Löffingen: küçük ve büyük pazarlar, glühwein, ahşap figürler ve tarçın kokusu.' },
    a20P1: {
      de: 'Zwischen Ende November und kurz vor Weihnachten verwandelt sich der Schwarzwald in eine Lichterlandschaft. Fast jedes Dorf hat seinen kleinen Markt, und in den Städten der Region — Freiburg, Konstanz, Triberg, Donaueschingen — entstehen große Märkte mit Hunderten Ständen, Bühnen und Karussells. Glühwein, gebrannte Mandeln, Holzhandwerk: alles, was den Advent ausmacht.',
      en: "Between late November and shortly before Christmas the Black Forest transforms into a landscape of lights. Almost every village has its own small market, and in the region's towns — Freiburg, Konstanz, Triberg, Donaueschingen — large markets spring up with hundreds of stalls, stages and carousels. Mulled wine, roasted almonds, woodcraft: everything Advent stands for.",
      fr: "Entre fin novembre et peu avant Noël, la Forêt-Noire se transforme en paysage de lumières. Presque chaque village a son petit marché, et dans les villes de la région — Freiburg, Constance, Triberg, Donaueschingen — surgissent de grands marchés avec des centaines de stands, scènes et carrousels. Vin chaud, amandes grillées, artisanat du bois : tout ce qui fait l'Avent.",
      tr: 'Kasım sonundan Noel\'e kadar Karaorman bir ışık manzarasına dönüşür. Neredeyse her köyün küçük bir pazarı vardır; bölgenin şehirlerinde — Freiburg, Konstanz, Triberg, Donaueschingen — yüzlerce tezgâh, sahne ve atlıkarıncayla büyük pazarlar kurulur. Glühwein, kavrulmuş badem, ahşap el sanatı: Advent\'i Advent yapan her şey.',
    },
    a20P2: {
      de: 'Besonders empfehlen wir den Markt in Triberg — er gilt als einer der größten Weihnachtsmärkte unter freiem Himmel und liegt rund um die berühmten Wasserfälle, die festlich beleuchtet sind. Freiburg ist klassisch und gemütlich, mit Mittelaltermarkt unter dem Münster. Löffingen selbst hat einen kleinen, sehr persönlichen Markt am ersten Adventswochenende.',
      en: "We particularly recommend the market in Triberg — considered one of Germany's biggest open-air Christmas markets, set around the famous waterfalls, which are festively illuminated. Freiburg is classic and atmospheric, with a medieval market beneath the cathedral. Löffingen itself hosts a small, very personal market on the first Advent weekend.",
      fr: "Nous recommandons particulièrement le marché de Triberg — considéré comme l'un des plus grands marchés de Noël en plein air, autour des célèbres cascades illuminées. Freiburg est classique et chaleureux, avec un marché médiéval sous la cathédrale. Löffingen lui-même tient un petit marché très personnel le premier week-end de l'Avent.",
      tr: 'Özellikle Triberg pazarını öneririz — Almanya\'nın en büyük açık hava Noel pazarlarından biri sayılır ve şenlikli aydınlatılan ünlü şelalelerin etrafında kurulur. Freiburg klasik ve sıcaktır; katedralin altında ortaçağ pazarıyla. Löffingen\'in kendisi de ilk Advent hafta sonu küçük, çok kişisel bir pazar düzenler.',
    },
    a20P3: {
      de: 'Im Advent ist es bei uns besonders schön — Schnee auf den Tannen, ein knisterndes Feuer in der Lobby, früh dunkle Abende mit Glühwein. Wir geben Ihnen gerne aktuelle Markttermine und unsere Lieblingsadressen mit.',
      en: 'Advent at our hotel is particularly beautiful — snow on the firs, a crackling fire in the lobby, early dark evenings with mulled wine. We are happy to give you current market dates and our favourite addresses.',
      fr: "L'Avent chez nous est particulièrement beau — neige sur les sapins, feu crépitant dans le lobby, soirées tôt sombres avec vin chaud. Nous fournissons volontiers les dates des marchés et nos adresses préférées.",
      tr: 'Bizde Advent özellikle güzeldir — ladinlerde kar, lobide çıtırdayan ateş, erken kararan akşamlarda glühwein. Güncel pazar tarihlerini ve favori adreslerimizi seve seve veririz.',
    },

    ctaEyebrow: { de: 'Mehr Tipps gefällig?', en: 'Want more tips?', fr: 'Plus de conseils ?', tr: 'Daha fazla öneri ister misiniz?' },
    ctaTitle:   { de: 'Wir kennen die Gegend.', en: 'We know this corner of the world.', fr: 'Nous connaissons la région.', tr: 'Bölgeyi tanıyoruz.' },
    ctaBody: {
      de: 'Schreiben Sie uns, was Sie interessiert — Wandern, Kultur, Kulinarisches oder Familie — wir stellen Ihnen ein passendes Programm zusammen, ganz persönlich und ohne Aufpreis.',
      en: 'Write to us about what interests you — hiking, culture, food or family — and we will put together a tailored programme, personally and at no extra cost.',
      fr: 'Écrivez-nous ce qui vous intéresse — randonnée, culture, gastronomie ou famille — et nous vous composerons un programme adapté, personnellement et sans supplément.',
      tr: 'İlgilendiğinizi yazın — yürüyüş, kültür, gastronomi veya aile — kişisel ve ek ücretsiz size özel bir program hazırlarız.',
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
