// Multi-tradition mythological depth for animal guides.
// Layered ON TOP of Ayşe Nilgün Fırat's daily guidance — never replaces it.
// Each animal can be progressively enriched; missing fields render gracefully.

export interface AnimalLore {
  jung?: string;
  dream?: string;
  shadow?: string;
  traditions?: Tradition[];
  myths?: string[];
  whenAppears?: string;
}

export interface Tradition {
  culture: string;
  meaning: string;
}

export const ANIMAL_LORE: Record<string, AnimalLore> = {
  // ─── a001 Bozkurt ───────────────────────────────────────────────────────
  a001: {
    jung: 'Bozkurt, kolektif bilinçaltında "Yol Gösteren Lider" arketipidir — kaybolmuş benliği eve döndüren içsel ses. Karanlık ormanda ışığı bulduran içgüdü.',
    dream: 'Rüyada bozkurt — yolunu kaybettiğini ama içsel pusulanın hâlâ çalıştığını söyler. Sürünün sesi geliyor; dinle.',
    shadow: 'Sürü zihniyetinde kaybolma. Bozkurt enerjisi kontrol edilemezse otoriter sertlik, kurt sürüsünün acımasızlığı çıkar.',
    whenAppears: 'Yalnız kaldığında, liderlik testinde, ailene/topluluğuna döndüğünde.',
    traditions: [
      { culture: 'Türk Şamanizmi',  meaning: 'Asena/Bozkurt — kutsal ata. Göktürk efsanesinde kaybolan halkı kurtaran ana. Devlet kurucu enerji.' },
      { culture: 'Roma Mitolojisi', meaning: 'Lupa — Romulus ve Remus\'u emziren dişi kurt. Şehir kurucu, medeniyet besleyici.' },
      { culture: 'İskandinav',      meaning: 'Fenrir — kontrol edilemeyen kozmik güç. Aynı zamanda Odin\'in iki yol arkadaşı Geri ve Freki.' },
      { culture: 'Kızılderili',     meaning: 'Lakota geleneğinde "öğretmen". Sürü, aile, sadakat dersleri verir.' },
      { culture: 'Kelt',            meaning: 'Cu Chulainn\'in koruyucusu. Ay\'ın bekçisi, geçişlerin habercisi.' },
    ],
    myths: [
      'Göktürk Efsanesi: Düşman tarafından yok edilen Türk soyundan sağ kalan tek çocuğu Asena dişi kurdu kurtarır, mağarada büyütür. Türk halkı bu çocuğun soyundan türer.',
      'Roma\'nın Kuruluşu: Romulus ve Remus\'u nehre bırakılınca dişi kurt Lupa bulup emzirir. Roma şehri bu çocuklar tarafından kurulur.',
    ],
  },

  // ─── a002 Kartal ────────────────────────────────────────────────────────
  a002: {
    jung: 'Kartal, "Yüksek Benlik" arketipidir. Egodan kopup ruhsal perspektife geçişin sembolü. Üçüncü gözün hayvan formu.',
    dream: 'Kartalın uçtuğunu görmek — düşüncenin yükseldiğine, sorunun küçüldüğüne işaret. Kartal seni avlıyorsa: yüksek bir gerçek aşağıdan seni yakalamaya geliyor.',
    shadow: 'Soğuk uzaklık. Toprağa bağlanmamış zihinsellik. Mesafeden bakmak insandan kopmaya dönüşürse — kartal düşer.',
    whenAppears: 'Büyük kararlar öncesi, perspektif kaybettiğinde, hayalle gerçek arasında köprü kurarken.',
    traditions: [
      { culture: 'Yunan Mitolojisi', meaning: 'Zeus\'un kuşu. Tanrının iradesini taşıyan haberci. Ganimedes\'i Olympos\'a taşıyan ruhsal yükselici.' },
      { culture: 'Hitit',            meaning: 'Çift başlı kartal — gökle yerin birleşim noktası. Anadolu\'nun en kadim devlet sembolü.' },
      { culture: 'Kızılderili',      meaning: 'Wakan Tanka\'nın (Büyük Ruh) habercisi. Tüy en kutsal hediye.' },
      { culture: 'Hristiyan',        meaning: 'Aziz Yuhanna\'nın sembolü. Diriliş ve ilahi vahiy.' },
      { culture: 'Vedik',            meaning: 'Garuda — Vishnu\'nun bineği. Yılan-bilgisini taşıyan ruhsal güç.' },
    ],
    myths: [
      'Prometheus: Tanrılardan ateşi çalan Prometheus\'u her gün kartal yer. Burada kartal — ego cezalandırıcı, ama aynı zamanda yenilenme döngüsünün taşıyıcısı.',
      'Hitit Çifte Kartalı: Selçuklu\'dan modern Türk devletine kadar — iki yöne bakan tek kartal. Geçmiş ve gelecek.',
    ],
  },

  // ─── a003 At ────────────────────────────────────────────────────────────
  a003: {
    jung: '"Yaşam Gücü/Libido" arketipi. At, içsel enerjinin sembolüdür — eyerlenmiş hâli irade, vahşi hâli içgüdü. Animanın bineği.',
    dream: 'Rüyada at — özgürlük çağrısı. Beyaz at: yükselen ruhsallık. Siyah at: bastırılmış arzu. At dizginsizse: hayatın seni sürüklüyor.',
    shadow: 'Kontrolsüz tutku. Atın gemini bırakmak — disiplinsiz tutkuyla harcanan ömür. Ya da: hep eyerli kalmak, asla koşamamak.',
    whenAppears: 'Bir yola çıkma anında, büyük göç/seyahat öncesi, içsel bir tutkunun uyanışında, özgürleşme zamanı.',
    traditions: [
      { culture: 'Türk Mitolojisi', meaning: 'At "yiğidin kanadı" — Dede Korkut destanlarında ayrılmaz yoldaş. Tulpar — uçan kanatlı at, Tanrı bineği.' },
      { culture: 'Yunan Mitolojisi', meaning: 'Pegasus — Medusa\'nın kanından doğan kanatlı at. İlham perilerinin bineği. Şair-savaşçı sembolü.' },
      { culture: 'Kelt',            meaning: 'Epona — at tanrıçası. Ölülerin ruhlarını öteye taşıyan rehber.' },
      { culture: 'Vedik',           meaning: 'Ashvamedha — at kurbanı kralın kozmik egemenliği için. Vishnu\'nun Kalki avatarı beyaz at üstündedir.' },
      { culture: 'Hristiyan',       meaning: 'Vahiy kitabında dört atlı — fetih, savaş, kıtlık, ölüm. Apokaliptik haberci.' },
    ],
    myths: [
      'Pegasus ve Bellerophon: Bellerophon kanatlı Pegasus\'u ehlileştirir, Khimera canavarını öldürür. Ama Olympos\'a çıkmaya kalkınca Zeus onu düşürür — kibrin cezası.',
      'Dede Korkut\'ta At: "Yiğidin başı omuzun üstünde, yiğidin atı yanı başında." Anadolu kahramanı ile atı arasındaki kardeşlik.',
    ],
  },

  // ─── a004 Turna ─────────────────────────────────────────────────────────
  a004: {
    jung: '"Sadık Hac Yolcusu" arketipi. Turna, döngüsel uzun yolculuğun, kararlılığın ve sadakatin sembolü. Aşk için göç eden kalp.',
    dream: 'Turna rüyada — uzun bekleyişlerin meyvesinin yaklaştığını söyler. Sürü hâlinde uçuyorsa: dostluk/topluluk bir şey kuruyor. Yalnızsa: sevdiğine yöneliş.',
    shadow: 'Bir ümitle ömür boyu beklemek. Turna döngüsü kararlılık olabilir, ama gerçeklikten kaçışsa — donmuş hayat.',
    whenAppears: 'Uzun ayrılık sonrası kavuşmada, evlilik/sözleşme öncesinde, sabırla beklenmiş bir habere yakın.',
    traditions: [
      { culture: 'Alevi-Bektaşi',   meaning: 'Hz. Ali\'nin kutsal kuşu. Semah\'ta turna duruşu — kanatların aşk için açılışı. Cemde rehber kuş.' },
      { culture: 'Türk Halk',        meaning: '"Turnalar geldi" ezgisi — sevdiğine haber, gurbet kavuşması. Anadolu\'nun en içli kuşu.' },
      { culture: 'Japonya',          meaning: 'Tsuru — 1000 yıl yaşar, uzun ömür sembolü. 1000 turna katlamak (senbazuru) — bir dileğin kabulü.' },
      { culture: 'Çin',              meaning: 'Taoist ölümsüzlerin bineği. Erdem ve bilgelik sembolü.' },
      { culture: 'Yunan Mitolojisi', meaning: 'Hermes\'in alfabesi turnaların uçuş dizilişinden. Yazının habercisi.' },
    ],
    myths: [
      'Pir Sultan ve Turnalar: "Yürü bre Hızır Paşa / Senin de çarkın kırılır" — Anadolu\'da turnalar Pir Sultan\'a haber taşıyan, sözü ileten kuşlar.',
      'Senbazuru: Hiroshima\'da bombadan etkilenen Sadako adlı kız iyileşmek için 1000 turna katlamaya başlar. Hikayesi dünyada barış sembolü olur.',
    ],
  },

  // ─── a005 Hüma Kuşu ─────────────────────────────────────────────────────
  a005: {
    jung: '"Kutsal Kader" arketipi. Hüma, kişiyi seçen ilahi mukadderatın sembolü — gölgesi başına düşene saltanat veren mitik kuş.',
    dream: 'Hüma rüyada — bir lütfun, beklenmedik bir nimetin yaklaştığını söyler. Üstüne konuyorsa: kaderin sana yöneliyor. Yüksekten geçiyorsa: izle, takip et.',
    shadow: 'Kaderi beklemek için hareket etmemek. "Hüma kuşum nerede?" diye oturup hayatı kaçırmak. Mistik bir bahane.',
    whenAppears: 'Beklenmedik bir fırsat çıkmadan önce, hak ettiğin tanınma anında, kader anlarında.',
    traditions: [
      { culture: 'Pers/İran',       meaning: 'Hümay-i Saadet — saadet kuşu. Asla yere konmaz, hep havadadır. Gölgesi başa düşene padişahlık nasip olur.' },
      { culture: 'Türk-İslam',      meaning: 'Osmanlı sarayında "Hüma" bahtın simgesi. Tahta çıkacak şehzadeyi belirleyen kutsal kuş.' },
      { culture: 'Sufi',            meaning: 'Yüksekte uçar, asla durmaz — "tarikat-ı seyr" sembolü. Aşkın kuşu hep yolda.' },
      { culture: 'Hint',            meaning: 'Garuda\'nın akrabası — gökyüzü tanrılarının habercisi.' },
      { culture: 'Anadolu Halk',    meaning: '"Hüma kuşunun gölgesi başına düşsün" duası — büyük kısmet temennisi.' },
    ],
    myths: [
      'Hüma ve Sultan: Anadolu efsanesinde tahta çıkacak şehzadeyi seçmek için Hüma kuşu salınır. Kimin başına gölgesi düşerse o sultan olur — kader önceden bellidir, ama kuşun seçimine güven gerekir.',
      'Attar\'ın Hüması: "Mantık-üt Tayr"da Hüma ölümsüzlüğün ve göklerin kuşudur — Simurg\'a ulaşmaya çalışan otuz kuşun rehberlerinden.',
    ],
  },

  // ─── a006 Anka ──────────────────────────────────────────────────────────
  a006: {
    jung: '"Ölüm-Diriliş" arketipi. En radikal dönüşüm sembolü. Eski benlik ölmeden yeni doğamaz — ateş hem yıkıcı hem yaratıcı.',
    dream: 'Anka rüyada — bir döngünün sona ermesi gerekiyor. Yanıyorsa: dirilişin eşiğindesin. Küllerden çıkıyorsa: çoktan dönüştün, sadece bunu kabul et.',
    shadow: 'Sürekli kriz yaratma. "Kendini yakıp yeniden doğmak" bir yaşam biçimi olursa — stabilite kaybedilir. Drama bağımlılığı.',
    whenAppears: 'Ciddi bir kayıp sonrası, mesleki çöküşte, kimlik krizinde, "bu kadar yeter" dediğin anda.',
    traditions: [
      { culture: 'Yunan Mitolojisi', meaning: 'Phoenix — 500 yılda bir kendini yakıp küllerinden doğan kuş. Helios\'a adanmış.' },
      { culture: 'Mısır',           meaning: 'Bennu — Ra\'nın kuşu. Heliopolis tapınağında her gün yeniden doğan güneş ruhu.' },
      { culture: 'İslam-Sufi',      meaning: 'Simurg — Attar\'ın eserinde 30 kuş Simurg\'u arar. Sonunda fark ederler ki: 30 kuş kendileridir (Si=30, Murg=kuş).' },
      { culture: 'Çin',             meaning: 'Fenghuang — uyum, erdem ve barış sembolü. İmparatoriçenin kuşu.' },
      { culture: 'Türk Mitolojisi', meaning: 'Tuğrul/Anka — Türk hanedanlarının amblemi. Saltanatın ölümsüzlüğü.' },
    ],
    myths: [
      'Attar\'ın Simurg\'u: Dünyanın bütün kuşları kralları Simurg\'u bulmak için yolculuğa çıkar. Tehlikeli vadileri geçerler, çoğu ölür. Sonunda 30 kuş kalır ve aynaya bakarlar — Simurg kendileridir. Sufi\'de "kendini bulma"nın en güçlü metaforu.',
      'Mısır Bennu Kuşu: Her sabah Heliopolis tapınağında güneşle birlikte doğan, akşam ölüp tekrar dirilen kutsal kuş. Tanrı Ra\'nın ruhu.',
    ],
  },

  // ─── a007 Geyik ─────────────────────────────────────────────────────────
  a007: {
    jung: '"Kalbin Habercisi" arketipi. Geyik anima/animus köprüsü — vahşi olduğu kadar nazik, kaçtığı kadar yaklaşan. Maskülen-feminen dengesinin sembolü.',
    dream: 'Geyik rüyada görünürse — kalp meselesi açılıyor demektir. Geyiği takip ediyorsan, ruhun bir sevgiye yönlendiriliyor. Kaçıyorsa, korkuyorsun.',
    shadow: 'Aşırı hassasiyet. Hep tetikte yaşamak. Sürekli kaçış halinde olmak savunma değil, hapis olur.',
    whenAppears: 'Şefkat sınavında, vahşi ile nazik arasında seçim yaparken, sürpriz bir aşk veya kalp açılışında.',
    traditions: [
      { culture: 'Türk Mitolojisi', meaning: 'Hakan Oğuz Han\'a yol gösteren kutsal ak geyik. Devleti kuran rehber.' },
      { culture: 'Kelt',            meaning: 'Cernunnos — boynuzlu geyik tanrısı. Vahşi doğanın kralı, döngüsel ölüm-doğum.' },
      { culture: 'Hristiyan',       meaning: 'Aziz Eustace\'in görmesi — boynuzları arasında haç taşıyan geyik. İlahi çağrı.' },
      { culture: 'Şamanik',         meaning: 'Sibirya şamanları ruhlar alemine geyikle yolculuk eder. Üç dünya arasında köprü.' },
      { culture: 'Yunan Mitolojisi',meaning: 'Artemis\'in kutsal hayvanı. Bakire avcı tanrıçanın bineği ve simgesi.' },
    ],
    myths: [
      'Oğuz Han Destanı: Oğuz Han avlanırken karşısına bir ak geyik çıkar, onu izleyerek yeni topraklara ulaşır ve devletini kurar.',
      'Aziz Eustace: Romalı bir general avlanırken bir geyikle karşılaşır, boynuzları arasında haç görür — bu görüntüyle Hristiyanlığa geçer.',
    ],
  },

  // ─── a008 Baykuş ────────────────────────────────────────────────────────
  a008: {
    jung: '"Bilge Yaşlı" arketipi — Senex. Karanlıkta görme yeteneği; bilinçaltını okuma kapasitesi. Gece zekası.',
    dream: 'Baykuş rüyada — bir sırrın çözülmek üzere olduğunu söyler. Ya da bir aldatma fark ediliyor. Baykuşun bakışı: gerçeği görme zamanı geldi.',
    shadow: 'Kötümser bilgelik. Her şeyi "görmek" insanı yalnızlaştırırsa baykuş — küskün münzeviye dönüşür. Bilgi acıya dönüşür.',
    whenAppears: 'Aldatıldığında, gizli bir gerçek hissettiğinde, içe çekilme döneminde, sezgin keskinleştiğinde.',
    traditions: [
      { culture: 'Yunan Mitolojisi', meaning: 'Athena\'nın kuşu. Bilgelik tanrıçasının zeka simgesi. Atina sikkelerinde basılı.' },
      { culture: 'Mısır',           meaning: 'Ölüler diyarının bekçisi. Geçişin ve gece âleminin hayvanı.' },
      { culture: 'Kızılderili',     meaning: 'Hopi geleneğinde uyarıcı — kötü haberi taşıyan ama doğruyu söyleyen.' },
      { culture: 'Türk Halk İnancı',meaning: 'Anadolu\'da uğursuz sayılan ama gerçekte kadim bilgeliği taşıyan. Atalardan miras zihinsel direnç.' },
      { culture: 'Hint',            meaning: 'Lakshmi\'nin bineği. Bolluk tanrıçasının gözleri — karanlıkta bile bereketi görür.' },
    ],
    myths: [
      'Athena ve Baykuş: Bilgelik tanrıçası Athena\'nın omzunda taşıdığı baykuş, sahibinin sezgilerini ve görüsünü taşır. Atina\'nın sembolü.',
      'Anadolu\'da Baykuş: "Baykuş öttü, kötü oldu" inanışı yüzyıllar boyu sürmüş — ama gerçek şaman geleneğinde baykuş atadan haberdir.',
    ],
  },

  // ─── a009 Aslan ─────────────────────────────────────────────────────────
  a009: {
    jung: '"Kral" arketipi. Sezar, Pir, Hükümdar. İçsel otoritenin sembolü. Egoyu hizmete dönüştürme gücü.',
    dream: 'Aslan rüyada — içindeki kral uyanıyor. Üzerine atıyor mu? Bastırdığın bir gücün geri istiyor. Yanında yatıyor mu? Otoritene barıştın.',
    shadow: 'Kibir ve narsisizm. Kral arketipi denetlenmezse — tiranlık, açlık doymayan ego, gösteriş için var olma.',
    whenAppears: 'Otorite sınavında, lider olarak çıkma zamanında, haksızlığa uğradığında, sesini yükseltmen gerekirken.',
    traditions: [
      { culture: 'Mısır',           meaning: 'Sekhmet — aslan başlı tanrıça. Şiddetli iyileştirici. Sahmet adaletin koruyucusu.' },
      { culture: 'Hitit',           meaning: 'Tapınak bekçisi. Anadolu\'da Hattuşa kapılarında taş aslanlar — sınırın koruyucuları.' },
      { culture: 'Hristiyan',       meaning: 'Aziz Markos\'un sembolü. Diriliş ve İsa\'nın krallığı. "Yahuda\'nın aslanı".' },
      { culture: 'Vedik',           meaning: 'Narasimha — Vishnu\'nun aslan-insan avatarı. Adaletsizliği yıkıcı kutsal öfke.' },
      { culture: 'Yunan Mitolojisi',meaning: 'Nemea aslanı — Herakles\'in ilk işi. Bastırılması gereken vahşi güç.' },
    ],
    myths: [
      'Sekhmet: Mısır mitolojisinde insanları kötülüklerinden temizlemek için gönderilen aslan başlı tanrıça. Hem yıkıcı hem de şifa veren güç.',
      'Hitit Aslan Kapısı: Bu aslanlar 3500 yıldır şehri korumaya devam ediyor — Anadolu\'nun ilk kralları aslanı sınırın bekçisi yaptı.',
    ],
  },

  // ─── a010 Ayı ──────────────────────────────────────────────────────────
  a010: {
    jung: '"Büyük Ana" arketipi — kollayıcı, besleyici, ama sınırını çiğnemeye gelen olursa yıkıcı. İçsel kaynaklara çekilme.',
    dream: 'Ayı rüyada — uyku, dinlenme, içe dönüşe çağrı. Saldırıyorsa: bir sınırın çiğneniyor. Yavrularını koruyorsa: kendine ait olanı savunmalısın.',
    shadow: 'Aşırı içekapanma, depresyon, hibernasyonun bitmemesi. Ayı uyandığında çıkmazsa — soğukta donar.',
    whenAppears: 'Sosyal yorgunlukta, bir krizden sonra şifaya çekildiğinde, koruyucu enerjini bulman gerekirken.',
    traditions: [
      { culture: 'Kızılderili',    meaning: 'Şifa hayvanı. Tıp adamları "Ayı Tıbbı" toplar. Mağaraya çekilip rüyada öğrenme.' },
      { culture: 'Kelt',           meaning: 'Artos — savaşçı kraliçenin sembolü. Kral Arthur\'un adı buradan gelir.' },
      { culture: 'Sibirya/Şamanik',meaning: 'Ayı törenleri — avlandıktan sonra ruhuna saygı duruşu. Atalar ayıdan türemiş kabul edilir.' },
      { culture: 'Yunan Mitolojisi',meaning: 'Artemis\'in formu. Kalypso\'nun mağarası — ayı annenin sığınağı.' },
      { culture: 'İskandinav',     meaning: 'Berserkir — savaşçılar ayı postu giyerek savaş çılgınlığına girer. Vahşi koruyucu güç.' },
    ],
    myths: [
      'Kallisto: Yunan mitolojisinde Artemis\'in nymph\'i. Zeus\'la birleştiği için ayıya dönüştürülüp gökyüzüne fırlatılır — Büyük Ayı takımyıldızı olur.',
      'Şamanik Ayı Töreni: Sibirya\'da avlanan ayının ruhuna özür dilenir, eti törensel paylaşılır. Ayı atadır, kabul edilir.',
    ],
  },

  // ─── a011 Tilki ─────────────────────────────────────────────────────────
  a011: {
    jung: '"Hilebaz/Trickster" arketipi. Kuralları sorgulayan, beklenmedik yoldan çözüm bulan zeka. Logosa karşı mythos.',
    dream: 'Tilki rüyada — bir durumda dolambaçlı yola gitmeni söylüyor. Direkt yaklaşma çözmüyor. Ya da: biri seni kandırıyor, gözünü aç.',
    shadow: 'Manipülasyon ve sahtekarlık. Zeka etik olmaksızın kullanılırsa tilki — yolsuz politikacı, dolandırıcı.',
    whenAppears: 'Doğrudan yaklaşımın işe yaramadığı bir durumda, yaratıcı stratejiye ihtiyaç duyduğunda, oyunun kurallarını yeniden yazman gereken anda.',
    traditions: [
      { culture: 'Japonya',         meaning: 'Kitsune — dokuz kuyruklu tilki ruhu. Şekil değiştirir, ya yardım eder ya tuzak kurar. İnari tanrıçanın habercisi.' },
      { culture: 'Kızılderili',     meaning: 'Coyote (kuzen ruh) — yaratıcı ve yıkıcı. Dünyaya hem akıl hem kaos getiren.' },
      { culture: 'Kelt',            meaning: 'Diplomasi ve sezginin sembolü. Druidler tilki tüyüyle rüya gönderir.' },
      { culture: 'Anadolu',         meaning: 'Halk masallarında daima kazanan zeki kahraman. "Aklını kullanan tilki, zorlukları aşar."' },
      { culture: 'Çin',             meaning: 'Hu jing — bin yaşına ulaşan tilki insana dönüşür. Şehvet ve hile sembolü.' },
    ],
    myths: [
      'Kitsune Efsaneleri: Japonya\'da bir tilkinin 100 yaşına gelince beyaz olduğu, 1000 yaşına gelince 9 kuyruk açtığı ve tanrısallaştığı söylenir.',
      'Aesop\'un Tilkisi: "Üzümlere ulaşamayınca ekşi olduğunu söyleyen tilki" — Batı medeniyetinin en eski hilebaz hikayesi.',
    ],
  },

  // ─── a012 Yunus ─────────────────────────────────────────────────────────
  a012: {
    jung: '"Sevinç Rehberi" arketipi. Yunus, duygu denizinde özgürce yüzen bilinç — neşeyle bilgelik aynı bedende.',
    dream: 'Yunus rüyada — duygusal akış geri geldi. Suyun üzerinden atlıyorsa: kalbin neşeleniyor. Sana eşlik ediyorsa: yalnız değilsin, ruh dostları yakın.',
    shadow: 'Hep iyimser görünme baskısı. Her şeyi "neşeyle" karşılamaya çalışmak, gerçek acıyı bastırırsa — yunus boğulur.',
    whenAppears: 'Uzun bir hüzünden sonra, çocuksu sevincini geri istediğinde, suyla/denizle iletişiminin açıldığı anda.',
    traditions: [
      { culture: 'Yunan Mitolojisi', meaning: 'Apollon\'un kutsal hayvanı. Boğulanları kurtaran rehber. Delphi tapınağının habercisi.' },
      { culture: 'Sumer',            meaning: 'Enki — bilgelik tanrısı yunusla yolculuk eder. Tatlı su ve bilgeliğin kuşağı.' },
      { culture: 'Hristiyan',        meaning: 'Mesih sembolü — denizden insanı çıkaran kurtarıcı. Erken katakomblarda sık çizilen motif.' },
      { culture: 'Maori',            meaning: 'Taniwha — denizin ruhu, kabilenin koruyucusu. Yardım çağrısına gelir.' },
      { culture: 'Anadolu',          meaning: 'Akdeniz halklarının dost ruhu. Balıkçılara yol gösteren akrabası.' },
    ],
    myths: [
      'Arion ve Yunus: Yunan şairi Arion gemiciler tarafından denize atılır, bir yunus onu sırtında alıp kıyıya götürür. Sanat ve doğa arasındaki kardeşliğin sembolü.',
      'Yunus Emre ve Adı: Bir rivayete göre Yunus Emre adını, Yunus peygamberin balıktan çıkışı gibi içsel bir dirilişten alır — derinden yüzeye gelen aşk.',
    ],
  },

  // ─── a013 Kaplumbağa ────────────────────────────────────────────────────
  a013: {
    jung: '"Kadim Bilge" arketipi. Yavaş, sabırlı, uzun ömürlü. Kabuğunu evine taşıyan — içsel istikrarın sembolü.',
    dream: 'Kaplumbağa rüyada — acele etmemen gerekiyor. Kabuğuna çekiliyorsa: korunma zamanı. Yumurtluyorsa: uzun vadeli tohumlar atıyorsun.',
    shadow: 'Aşırı temkin. "Sonra"ya erteleyerek ömrü tamamlamak. Kaplumbağa hızlıdır kendi yolunda — ama hiç çıkmazsa hapse dönüşür.',
    whenAppears: 'Acele kararlardan vazgeçmen gerektiğinde, uzun soluklu projelerde, yaşlılık bilgeliğine açıldığında.',
    traditions: [
      { culture: 'Çin',              meaning: 'Dört kutsal hayvandan biri (Xuanwu). Kuzey, kış, su ve uzun ömrün koruyucusu. Yaratılışın temeli.' },
      { culture: 'Hint',             meaning: 'Vishnu\'nun Kurma avatarı — okyanus çalkalanırken dünyayı sırtında taşıyan kaplumbağa.' },
      { culture: 'Kızılderili',      meaning: '"Kaplumbağa Adası" — Kuzey Amerika kıtasının atası. Dünyanın kendisi onun sırtında.' },
      { culture: 'Afrika',           meaning: 'Anansi masallarında zeki kahraman. Yavaşlığın altında gizli akıl.' },
      { culture: 'Japonya',          meaning: '"Minogame" — 10000 yıl yaşayan kaplumbağa. Uzun ömür ve şansın simgesi.' },
    ],
    myths: [
      'Kurma Avatarı: Hint mitolojisinde tanrılar ve şeytanlar ölümsüzlük iksiri için okyanusu çalkalar. Vishnu kaplumbağa olur, dağı sırtında destekler — yaratılışın sabit ekseni.',
      'Kaplumbağa Adası: Kızılderili kozmolojisinde dünya sular üzerinde yüzen bir kaplumbağanın sırtında durur. Toprak — onun zırhının üstünde toplanmış çamur.',
    ],
  },

  // ─── a014 Yılan ─────────────────────────────────────────────────────────
  a014: {
    jung: '"Dönüşüm" arketipi. Ouroboros — kuyruğunu yiyen yılan. Ölüm ve doğum aynı ağzın iki ucu. Kundalini enerjisinin omurga boyunca yükseliş hayvanı.',
    dream: 'Yılan rüyada — derin bir dönüşüm sürecindesin. Isırıyorsa: bastırdığın bir gerçek seni uyandırıyor. Deri değiştiriyorsa: eski sen ölüyor.',
    shadow: 'Aldatma, manipülasyon, zehir. Yılan enerjisi dönüştürülmezse — pasif-agresif kontrol, gizli sokuş.',
    whenAppears: 'Kimlik değişiminde, eski bir kalıbı bırakırken, derin şifa sürecinde, cinsel uyanışta, ölüm-yas süreçlerinde.',
    traditions: [
      { culture: 'Yunan Mitolojisi', meaning: 'Asklepios\'un asası — şifa tanrısının iki yılanı. Modern tıp sembolü.' },
      { culture: 'Mısır',           meaning: 'Wadjet — kobra tanrıça. Firavunların alın koruyucusu. Bilgeliğin gözü.' },
      { culture: 'Vedik',           meaning: 'Kundalini — omurganın dibinde uyuyan ilahi enerji. Yedi çakra boyunca yükseliş.' },
      { culture: 'Hristiyan',       meaning: 'Cennetten kovulma — bilginin acı meyvesi. Aynı zamanda Musa\'nın tunç yılanı: şifa.' },
      { culture: 'Türk Mitolojisi', meaning: 'Şahmeran — yılan kraliçesi. Bilgelik, şifa, ölümsüzlük sırrını bilen kadın-yılan.' },
      { culture: 'Aztek',           meaning: 'Quetzalcoatl — tüylü yılan tanrı. Bilgelik, kültür, dönüşümün getiricisi.' },
    ],
    myths: [
      'Şahmeran Efsanesi: Anadolu\'nun en kadim mitlerinden. Mağarada yaşayan, yarı kadın yarı yılan bilgelik kraliçesi. İhanetle ölür, ama suyunu içen kişi büyük bir şifacı olur.',
      'Kundalini: Hint geleneğinde insanın kuyruk sokumunda uyuyan yılan. Meditasyon ve nefesle uyandırılır, omurga boyunca yükselip taç çakrada aydınlanmaya ulaştırır.',
    ],
  },

  // ─── a015 Kelebek ───────────────────────────────────────────────────────
  a015: {
    jung: '"Yeniden Doğan Ruh" arketipi. Psyche — Yunanca hem "ruh" hem "kelebek" anlamına gelir. Bilincin metamorfozu.',
    dream: 'Kelebek rüyada — bir dönüşümün tamamlandığını söyler. Yumurtadan tırtıla, krizalitten kelebeğe — şu an hangi aşamadasın?',
    shadow: 'Hafiflik kaçıngana dönüşmek. "Sadece güzelin tarafını al" tutumu — derinliği kaçırma. Kelebek kanat çırpar ama yer çekimini unutur.',
    whenAppears: 'Bir kişilik dönemini bitirip yenisine geçerken, depresyon sonrası uyanışta, yaratıcılığın yeniden açılışında.',
    traditions: [
      { culture: 'Yunan Mitolojisi', meaning: 'Psyche — ruhun bizzat kendisi. Eros\'la aşkı: ruhun aşkı arayışı.' },
      { culture: 'Çin',              meaning: 'İki kelebek — Zhuangzi\'nin meşhur rüyası: "Ben kelebek mi olduğumu rüyada gören insanım, yoksa insan olduğunu rüyada gören kelebek miyim?"' },
      { culture: 'Aztek',            meaning: 'Itzpapalotl — obsidyen kelebek tanrıça. Savaşçı ruhların eşlikçisi.' },
      { culture: 'Anadolu',          meaning: 'Ölmüş yakının ruhunun ziyareti. Mezarlıkta kelebek görmek — atalar konuşuyor.' },
      { culture: 'Japonya',          meaning: 'Aşkın simgesi. İki kelebek bir arada — sadık eşler.' },
    ],
    myths: [
      'Eros ve Psyche: Aşk tanrısı Eros\'a aşık olan ölümlü kız Psyche\'nin sınavları. Aşk ruhu arıyor, ruh aşkı arıyor — sonunda Olympos\'a yükseliyor.',
      'Zhuangzi\'nin Rüyası: Çinli Taocu filozofun en ünlü hikayesi — rüyada kelebek olur, uyandığında hangisinin gerçek olduğundan emin olamaz.',
    ],
  },

  // ─── a016 Tavus ─────────────────────────────────────────────────────────
  a016: {
    jung: '"Görkemli Benlik" arketipi. Tavus kuşu — ifşa edilmiş güzellik, görünmeye cesaret eden ego.',
    dream: 'Tavus rüyada — kendini göstermek için izin alıyorsun. Kuyruğunu açıyorsa: sahip olduğun değeri kabul et. Kapalıysa: gücünü saklıyorsun.',
    shadow: 'Kibir, gösteriş, sahte parlaklık. Tavus enerjisi savunmasızlığını kaybederse — yalnız gösterişin içinde donar.',
    whenAppears: 'Sahneye çıkma anında, görünür olma fırsatında, içsel güzelliğin tanınma talebinde.',
    traditions: [
      { culture: 'Hint',            meaning: 'Sarasvati\'nin bineği — sanat ve bilgi tanrıçası. Kartikeya\'nın da kuşu.' },
      { culture: 'Yezidi',          meaning: 'Melek Tavus — Yezidiliğin merkezi figürü. Tanrı\'nın yeryüzündeki yansıması.' },
      { culture: 'Yunan Mitolojisi', meaning: 'Hera\'nın kuşu. Argos\'un yüz gözünü tüylerine işler — uyanıklık ve sadakat.' },
      { culture: 'Hristiyan',       meaning: 'Ölümsüzlük ve diriliş. Bizans mozaiklerinde sık görülür — kanatlarındaki "gözler" ilahi bakış.' },
      { culture: 'Türk-İslam',      meaning: 'Cennet kuşu. Sufi metinlerinde "tavus-i ervah" — ruhların gösterişli formu.' },
    ],
    myths: [
      'Hera ve Argos: Hera, sadık dev bekçisi Argos öldürülünce yüz gözünü tavusun kuyruğuna işler. O günden beri tavus, sadakatin ve uyanıklığın taşıyıcısıdır.',
      'Melek Tavus: Yezidi geleneğinde Melek Tavus, Tanrı\'nın yedi meleğinden en büyüğüdür. Diğer dinlerde "düşmüş melek" olarak yorumlanmış ama Yezidilerce yücedir — perspektif meselesi.',
    ],
  },

  // ─── a017 Leylek ────────────────────────────────────────────────────────
  a017: {
    jung: '"Doğum/Yeni Başlangıç" arketipi. Leylek, eski döngünün bitimi ve yeni ruhun gelişinin habercisi.',
    dream: 'Leylek rüyada — yeni bir başlangıç doğuyor. Üzerinde bebek varsa: yaratıcı bir doğuma hazırsın. Uçuyorsa: göç ve değişim zamanı.',
    shadow: '"Bir şeyler getirsin" diye pasif beklemek. Leylek getirir ama tohumu sen ekmelisin. Beklemek doğurmak değildir.',
    whenAppears: 'Hamilelik/doğum (gerçek ya da yaratıcı) öncesinde, ev kuruşunda, yeni bir döneme geçişte.',
    traditions: [
      { culture: 'Anadolu',         meaning: '"Hacı leylek" — kutsal yolcunun, hacca giden ruhun adı. Çatıya leylek yuvası: o ev bereketli.' },
      { culture: 'Slav-Alman',      meaning: 'Bebekleri getiren kuş. Doğum hediyesi olarak çocukları evlere taşır.' },
      { culture: 'Mısır',           meaning: 'Ba — insanın ruhu leylek/lekleğe benzer kuş formunda gösterilir. Bedenden ayrılan ruh.' },
      { culture: 'Yunan Mitolojisi', meaning: 'Hera\'nın koruyuculuk simgesi. Anneler için kutsanmış kuş.' },
      { culture: 'İslam Halk',      meaning: 'Hacca gidip dönen kuş olduğuna inanılır. "Hacı leylek" duası — yolculuğun bereketi.' },
    ],
    myths: [
      'Hacı Leylek: Anadolu inanışına göre leylekler her yıl hacca gider, dönerler. Onlara zarar veren bu kutsal yolculuğu bozmuş sayılır — büyük günah.',
      'Babylonia\'da Leylek: Eski Mezopotamya tabletlerinde leylekler tanrı Marduk\'un haberci kuşlarıdır — kuraklığa rağmen suyu bulan rehber.',
    ],
  },

  // ─── a018 Şahin ─────────────────────────────────────────────────────────
  a018: {
    jung: '"Odaklanmış İrade" arketipi. Şahin — net görüş, isabetli karar, hedeflenmiş eylem. Kartal kadar yüksek değil ama daha keskin.',
    dream: 'Şahin rüyada — bir şeye keskinleşmen gerekiyor. Avlanıyorsa: hedefini bul. Eline konuyorsa: gücün geri geliyor, ehlileşmiş halde.',
    shadow: 'Acımasız odak. Hedefe ulaşmak için her şeyi feda etmek. Şahin keskindir ama ısırırsa zalimleşir.',
    whenAppears: 'Bir kararın netleşmesi gerektiğinde, dağılmış enerjini toplaman gerekirken, bir sözünü tutman gereken anda.',
    traditions: [
      { culture: 'Mısır',           meaning: 'Horus — şahin başlı tanrı. Krallığın, göğün ve adaletin sembolü. Firavunun ruhsal protokolü.' },
      { culture: 'Türk Şamanizmi',  meaning: 'Şamanlar şahin formunda göğe yükselir. Sungar (sungur) — av kuşu, hanın gözü.' },
      { culture: 'Arap',            meaning: 'Bedevi geleneğinde en değerli av yoldaşı. Avcılığın sanatı: şahinciliğin (şahincilik) UNESCO\'ya kayıtlı miras.' },
      { culture: 'Vedik',           meaning: 'Garuda\'nın akrabası. Soma\'yı (kutsal içecek) tanrılara taşıyan kuş.' },
      { culture: 'Anadolu',         meaning: 'Yiğit padişahların kolundaki şahin — irade ve sadakatin sembolü. Doğan ve şahinli sancaklar.' },
    ],
    myths: [
      'Horus ve Set: Mısır mitolojisinde şahin başlı Horus, babası Osiris\'i öldüren amcası Set ile uzun savaşa girer. Horus\'un kaybettiği göz — sonradan "Uçat" şifa sembolü olur.',
      'Selçuklu Şahincibaşılığı: Selçuklu sarayında "Emir-i Şikar" — şahincibaşı en yüksek makamlardan biriydi. Padişahın şahini onun gözüdür.',
    ],
  },

  // ─── a019 Pars ──────────────────────────────────────────────────────────
  a019: {
    jung: '"Sessiz Avcı" arketipi. Pars — sessizlikte güç, beklemekte zafer. İçsel disiplinin sembolü.',
    dream: 'Pars rüyada — sabır ve doğru zamanlama hakkında ders. Pusuda yatıyorsa: harekete geçme anı yaklaşıyor. Avlanıyorsa: kararlılıkla ilerle.',
    shadow: 'Aşırı kontrol. Her hamleyi ölçmek, kendiliğindenliği öldürür. Pars hep hesaplıdır, ama insan değildir.',
    whenAppears: 'Stratejik bir bekleyişte, çabuk hareket etmek yerine sezgiyi beklemen gerekirken, yalnız savaşırken.',
    traditions: [
      { culture: 'Pers/Türk',       meaning: '"Pars" Eski Türkçe ve Farsça\'da kaplan/leoparddan ayrı bir hayvan — bağımsız ve yalnız savaşçı.' },
      { culture: 'Yunan Mitolojisi', meaning: 'Dionysos\'un bineği — coşku ve vahşi bilgeliğin birleşimi. Şarap tanrısı parsın sırtında.' },
      { culture: 'Afrika',           meaning: 'Maasai geleneğinde — yalnız avcının onuru. Genç savaşçının olgunluk sınavı.' },
      { culture: 'Hint',             meaning: 'Durga\'nın bineği — kötülüğü mahveden tanrıçanın bir formu.' },
      { culture: 'Çin',              meaning: 'Beş zehrin kovucusu. Tılsım hayvanı — gizli kötülüğü görür ve avlar.' },
    ],
    myths: [
      'Dionysos ve Pars: Yunan mitolojisinde şarap ve coşku tanrısı Dionysos parsın sırtında gezer. Pars\'ın bakışında hem ölüm hem zevk var — yaşam paradoksunun bineği.',
      'Anadolu Parsı: Antik kaynaklarda Toros Dağları\'nda yaşayan Anadolu parsı yiğitliğin simgesiydi. Bugün neredeyse soyu tükenmiş — kaybedilen bilgeliğin sessiz işareti.',
    ],
  },

  // ─── a020 Arı ───────────────────────────────────────────────────────────
  a020: {
    jung: '"Hizmetkâr Yaratıcı" arketipi. Arı — birey ve kolektif aynı bedende. İlhamı tatlıya dönüştüren çalışkanlık.',
    dream: 'Arı rüyada — verimli yaratıcılık çağrısı. Sokuyorsa: bastırdığın bir görev seni uyandırıyor. Bal yapıyorsa: emeklerin meyvesini verecek.',
    shadow: 'Aşırı çalışkanlık. "Ben olmasam kovan çöker" sanrısı. Arı kolektifin parçasıdır, ama tükenmek de mümkündür.',
    whenAppears: 'Verimli bir döneme girerken, ortak bir projede yer alırken, ilham balına çevirmen gerektiğinde.',
    traditions: [
      { culture: 'Mısır',           meaning: 'Ra\'nın gözyaşlarından doğan arılar — güneş tanrısının yeryüzü habercileri. Bal, tanrı kanı.' },
      { culture: 'Yunan Mitolojisi', meaning: 'Melissa — Zeus\'u arılarla emziren nympha. Şair Pythagoras\'ın gizemli arı sembolü.' },
      { culture: 'Kelt',            meaning: 'Bilgi ve ilhamın taşıyıcısı. Bardlar (şairler) "arı dilini" konuşur.' },
      { culture: 'İslam',           meaning: 'Kuran\'da Nahl Suresi — arıya kendine ev yapması, çiçeklerden yemesi vahyedilir. Tanrı\'nın doğrudan rehberlik ettiği yaratık.' },
      { culture: 'Türk Halk',       meaning: 'Anadolu\'da "arı tutmak" — bereketin simgesi. Kovanı olan ailenin ocağı tüter.' },
    ],
    myths: [
      'Melissa ve Zeus: Bebek Zeus dağda saklanmışken nympha Melissa onu arı balıyla besler. Bu yüzden arılar "Melissa\'nın kızları" olur — kutsal şifa taşıyıcıları.',
      'Nahl Suresi: Kuran\'da Allah arıya doğrudan ilham eder: "Dağlardan, ağaçlardan ev edin... çiçeklerden ye." Arı, vahiy alabilecek bilince yakın bir varlık olarak konumlanır.',
    ],
  },

  // ─── a021 Kırlangıç ─────────────────────────────────────────────────────
  a021: {
    jung: '"Bahar Müjdecisi" arketipi. Kırlangıç — yeniden başlayan döngünün, eve dönüşün sembolü.',
    dream: 'Kırlangıç rüyada — uzun bir kıştan sonra ısınma. Yuva yapıyorsa: bir şey kuruyorsun. Uçuyorsa: göç ve serbestlik.',
    shadow: 'Sürekli göç, asla yerleşememek. Kırlangıç döner ama her yerde misafir kalırsa — kök yok olur.',
    whenAppears: 'Uzun bir bekleyiş sonrası başlangıçta, eve dönüş yolunda, mevsimsel/içsel bir geçişte.',
    traditions: [
      { culture: 'Yunan Mitolojisi', meaning: 'Aphrodite\'nin kuşu. Aşkın ve baharın habercisi. "İlk kırlangıç yaz getirmez" deyişi — sabır.' },
      { culture: 'Çin',              meaning: 'Sadakatin kuşu. Bir kez eşleşince yıllarca aynı yuvaya döner.' },
      { culture: 'Anadolu',          meaning: 'Çatıya kırlangıç yuva yaparsa o ev kutsanmıştır. Yuvayı bozan uğursuz sayılır.' },
      { culture: 'Roma',             meaning: 'Penates\'in (ev tanrıları) kuşu — ailenin koruyucusu.' },
      { culture: 'Japonya',          meaning: 'Tsubame — bahar, gençlik ve bereketin simgesi. Çiftçinin dostu.' },
    ],
    myths: [
      'Prokne ve Philomela: Yunan mitolojisinde iki kız kardeş, zulümden kurtulmak için kuşa dönüşür — biri kırlangıç, diğeri bülbül olur. Acının kanatlanması.',
      'Çatı Kırlangıcı: Anadolu\'da "ocağına kırlangıç konsun" duası — en güzel bereket dileği. O yuva yıkılırsa bereket kaybolur.',
    ],
  },

  // ─── a022 Güvercin ──────────────────────────────────────────────────────
  a022: {
    jung: '"Kutsal Ruh/Sulh" arketipi. Güvercin — masum sevgi, barış, ilahi yumuşaklık.',
    dream: 'Güvercin rüyada — bir affediş veya barışın yaklaştığını söyler. Beyaz güvercin: kutsal mesaj. Eline konuyorsa: lütuf seni buldu.',
    shadow: '"Hep barışçıl olmak" baskısı. Güvercin masum ama saf değildir — sınırlarını koruyamamak, kurban moduna kayma.',
    whenAppears: 'Bir çatışmanın bitiminde, affediş anında, kalbinin yumuşadığı ya da yumuşaması gerektiği zamanda.',
    traditions: [
      { culture: 'Hristiyan',       meaning: 'Kutsal Ruh\'un simgesi. Vaftiz sırasında İsa\'nın üzerine inen güvercin. Mesajın saflığı.' },
      { culture: 'Yahudilik',       meaning: 'Nuh\'un gemisinden salınan güvercin zeytin dalıyla döner — tufanın bitimi, barış.' },
      { culture: 'İslam',           meaning: 'Hacerü\'l-Esved\'i taşıyan kuş efsanelerinde geçer. Mevlana\'da "aşk güvercini".' },
      { culture: 'Yunan Mitolojisi', meaning: 'Afrodit\'in kuşu. Aşkın ve şehvetin temsilcisi — sertlik ve yumuşaklığı bir arada.' },
      { culture: 'Sumer',            meaning: 'İnanna\'nın kuşu — aşk ve savaş tanrıçası. Güvercin paradoksu: hem yumuşak hem kararlı.' },
    ],
    myths: [
      'Nuh\'un Güvercini: Tufan sonrası gemiden salınan güvercin geri döner — kara yok. Bir hafta sonra tekrar salınır, ağzında zeytin dalıyla döner. Tufan bitti. İnsanlığın yeniden başlangıcı.',
      'Afrodit\'in Güvercinleri: Kıbrıs\'ta Afrodit tapınağında yüzlerce güvercin yetiştirilirdi. Şiddetli aşk ile yumuşak barışın aynı tanrıçada birleşmesi.',
    ],
  },

  // ─── a023 Bülbül ────────────────────────────────────────────────────────
  a023: {
    jung: '"Aşık Sanatçı" arketipi. Bülbül — acıdan beslenen güzellik. Kalbi yaralı olduğu için en güzel öten kuş.',
    dream: 'Bülbül rüyada — kalbin bir sözü var, söylenmek istiyor. Gül diken üzerinde ötüyorsa: aşkın acısı yaratıcılığa dönüşüyor.',
    shadow: 'Acı romantizmi. Mutsuzluğu sanat için kutsallaştırmak. Bülbül acıdan öter — ama hep yaralı kalmak gerekmez.',
    whenAppears: 'Aşk acısında, sanata dökülmesi gereken bir hisde, yas ile şarkı arasında köprüde.',
    traditions: [
      { culture: 'Sufi-Fars',       meaning: '"Bülbül ve Gül" — mistik aşkın en kadim metaforu. Bülbül âşık, gül maşuk. Aşk hep yaralayan ama hep çağıran.' },
      { culture: 'Türk Divan Şiiri', meaning: 'Fuzuli\'den Nedim\'e — bülbül şairin kendisi. "Aşk derdiyle hoşem el çek ilacımdan tabib."' },
      { culture: 'Yunan Mitolojisi', meaning: 'Philomela — kızını kaybeden anneye dönüşen bülbül. Acının sesi.' },
      { culture: 'Çin',              meaning: 'Saraylarda bülbül beslemek — saray edebinin işareti. Şiirin müzikal hâli.' },
      { culture: 'Anadolu Halk',    meaning: 'Halk türküleri "bülbül kondu dalına" — sevdiğine sözü taşıyan elçi.' },
    ],
    myths: [
      'Bülbül ve Gül: Fars-Türk edebiyatının en derin sembolü. Bülbül her gece güle âşık öter, gül ise dikenleriyle yanıt verir. Aşk — istemek değil, oluş hâli; ulaşmak değil, var olmak.',
      'Philomela\'nın Dilsizleşmesi: Yunan mitolojisinde tecavüze uğrayan Philomela\'nın dili kesilir. Sessizliğini dokumalara işler, sonra bülbüle dönüşür. Dilsiz acının sese kavuşması.',
    ],
  },

  // ─── a024 Kaplan ────────────────────────────────────────────────────────
  a024: {
    jung: '"İlkel Güç" arketipi. Kaplan — bastırılamayan tutku, vahşi yaratıcılık. Aslan kraldır, kaplan tanrıdır.',
    dream: 'Kaplan rüyada — büyük bir güç uyanıyor. Saldırıyorsa: bastırdığın bir tutku patlamak üzere. Yanında yürüyorsa: vahşi tarafınla barıştın.',
    shadow: 'Kontrolsüz öfke, yıkıcı tutku. Kaplan ehlileşmezse evi yakar. Ama ehlileştirilemez de — sadece saygı duyulur.',
    whenAppears: 'Büyük bir tutkunun uyandığı, sınır koymak için kükremek gerektiğinde, yaratıcı bir çağrının dirilişinde.',
    traditions: [
      { culture: 'Çin',              meaning: 'Dört kutsal hayvandan biri (Bai Hu — Ak Kaplan). Batı, sonbahar, metal ve cesaretin koruyucusu.' },
      { culture: 'Hint',             meaning: 'Durga\'nın bineği. Tanrıça kötülüğe karşı kaplanın sırtında savaşır.' },
      { culture: 'Kore',             meaning: 'Kore mitolojisinin en kutsal hayvanı. Dağların ruhu, kahramanların rehberi.' },
      { culture: 'Türk Mitolojisi', meaning: 'Anadolu\'da yok ama Orta Asya kökenli Türklerde "Bars" — savaşçı sembolü, hakanlık alameti.' },
      { culture: 'Şamanik',         meaning: 'Tibetan Bön\'da kaplan dağın koruyucusu — yıkıcı kutsallık.' },
    ],
    myths: [
      'Bai Hu — Ak Kaplan: Çin kozmolojisinde batının koruyucu hayvanı. Kahramanların yetişmesini gözetler. Ölümsüzlük arayan kahraman ondan onay almalıdır.',
      'Durga ve Kaplan: Hint mitolojisinde tanrıça Durga, hiçbir tanrının yenemediği şeytan Mahishasura\'yı kaplan sırtında öldürür. Vahşi gücün adaletle birleşmesi.',
    ],
  },

  // ─── a025 Köpek ─────────────────────────────────────────────────────────
  a025: {
    jung: '"Sadık Yoldaş" arketipi. Köpek — koşulsuz bağlılık, ehlileştirilmiş içgüdü. İnsanın yanındaki vahşi.',
    dream: 'Köpek rüyada — sadakatin testi. Sana saldırıyorsa: hayatında biri sınır çiğniyor. Yanında yürüyorsa: rehberin yakın, içgüdüne güven.',
    shadow: 'Aşırı sadakat — kendini kaybetme pahasına bağlılık. Köpek sahibine bağlıdır ama köle değildir; sevgi ile teslimiyet farkı.',
    whenAppears: 'Bir dostluğun derinleşmesinde, koşulsuz sevgi sınavında, ölüm ya da kayıp eşiklerinde (köpek geçişe eşlik eder).',
    traditions: [
      { culture: 'Mısır',           meaning: 'Anubis — çakal başlı tanrı, ölüleri öbür dünyaya taşır. Geçişin koruyucusu.' },
      { culture: 'Yunan Mitolojisi', meaning: 'Kerberos — Hades\'in üç başlı bekçi köpeği. Ölüler diyarının kapısı.' },
      { culture: 'Türk-İslam',      meaning: 'Eshab-ı Kehf (Mağara Arkadaşları) ile birlikte 309 yıl uyuyan Kıtmir — Kuran\'da geçen tek köpek. Sadakatin kutsallaşması.' },
      { culture: 'Kelt',            meaning: 'Cu Sith — peri köpekleri. Hem rehber hem haberci. Ölümün habercisi.' },
      { culture: 'Vedik',            meaning: 'Yama\'nın (ölüm tanrısı) iki dört gözlü köpeği — ruhun yolculuğunda eşlikçi.' },
    ],
    myths: [
      'Ashab-ı Kehf ve Kıtmir: Kuran\'da geçen mağara arkadaşları zulümden kaçar, mağarada uyurlar. Yanlarında bir köpek de uyur. Üç yüz yıl sonra uyanırlar. Köpeğin adı: Kıtmir. Sadakatin ödüllendirilmesi.',
      'Anubis ve Ölüm: Mısır mitolojisinde Anubis öleninin kalbini Maat tüyüyle tartar. Eğer kalp tüyden hafifse — cennet. Ağırsa — yokluk. Köpek başlı tanrı: adil terazi.',
    ],
  },

  // ─── a026 Çita ──────────────────────────────────────────────────────────
  a026: {
    jung: '"Şimşek Eylem" arketipi. Çita — fırsatı görüp anında harekete geçme. Hız, ama kısa süreli; tüm enerjiyi bir hamlede kullanma.',
    dream: 'Çita rüyada — bir fırsat çok kısa sürede gelip geçecek. Koşuyorsa: harekete geç, beklersen kaçar. Yorgunsa: aşırı acele ediyorsun, dinlen.',
    shadow: 'Sprint yaşamak. Her şeyi bir patlamada yapma takıntısı — sonrasında çöküş. Çita uzun mesafede kazanmaz, yıldız anlarda kazanır.',
    whenAppears: 'Anlık kararlar gerektiğinde, fırsat penceresinin daraldığında, hızlı tepki ya da yenilenme arasında bir seçim anında.',
    traditions: [
      { culture: 'Mısır',           meaning: 'Mafdet — çita başlı tanrıça. Zehirden ve yılandan koruyan. Hızlı adaletin temsilcisi.' },
      { culture: 'Hint',             meaning: 'Hızın ve dikkatin sembolü. Maharaja\'ların av eşlikçisi — kraliyet hızı.' },
      { culture: 'Afrika',           meaning: 'Maasai geleneğinde — annenin yavruları için yaptığı fedakârlığın simgesi. Yalnız savaşan dişi.' },
      { culture: 'Pers',             meaning: 'Yuyutsu — çitaların yetiştirildiği eski av kuralları. Hızın imparatorluğu.' },
      { culture: 'Çin',              meaning: 'Rüzgârın hayvanı. Beş elementten hızla geçen.' },
    ],
    myths: [
      'Mafdet: Mısır mitolojisinde Firavun\'un yatağını yılanlardan koruyan çita-tanrıça. Hıza atfedilen kutsallık: hız ölümden önce davranabilir.',
      'Çita Anneleri: Afrika halk hikâyelerinde çita anne yavruları için aslandan kaçarak ölümü göze alır. Hız, sevginin hizmetinde olduğunda kutsaldır.',
    ],
  },

  // ─── a027 Ejderha ───────────────────────────────────────────────────────
  a027: {
    jung: '"Kozmik Bilinç" arketipi. Ejderha — yıkıcı ve yaratıcı en büyük güç. İçsel hazinenin bekçisi.',
    dream: 'Ejderha rüyada — büyük bir güçle yüzleşiyorsun. Saldırıyorsa: ego seni sınıyor. Üstüne biniyorsan: derin bir gücü taşımayı öğrendin.',
    shadow: 'Hazineyi koruma takıntısı. Ejderha sahip olduklarının üstüne yatar — paylaşmak yerine biriktirir. Egoizmin kozmik formu.',
    whenAppears: 'Devasa bir dönüşümün eşiğinde, kendi gücünle yüzleşmen gereken anda, içsel hazineye inişte.',
    traditions: [
      { culture: 'Çin',              meaning: 'Long — imparatorun simgesi, su, yağmur, bereket. Dört yön ejderhası dünyayı kuşatır.' },
      { culture: 'Türk Mitolojisi', meaning: 'Evren — Türk-Moğol mitolojisinde gökyüzü ejderhası. Bayraklarda, kalkanlarda. Ölümsüzlüğün taşıyıcısı.' },
      { culture: 'Avrupa Hristiyan', meaning: 'Aziz Yorgi\'nin (St. George) öldürdüğü canavar — bastırılması gereken pagan gücü.' },
      { culture: 'İskandinav',       meaning: 'Jörmungandr — dünyayı saran kuyruğunu yiyen ejderha. Sonun başlangıcı.' },
      { culture: 'Vedik',            meaning: 'Vritra — kuraklığın ejderhası. İndra tarafından öldürülünce sular akar — yaratıcı yıkım.' },
    ],
    myths: [
      'Çin Ejderhası ve Yağmur: Çin mitolojisinde ejderhalar nehir ve göllerde yaşar. Yağmur getirir, bereket yağdırır. Kuraklık — ejderhanın kızgınlığıdır, sevgisini geri kazanmak gerek.',
      'St. George ve Ejderha: Hristiyan ikonografisinde Aziz Yorgi, prensesi kurtarmak için ejderhayı öldürür. Doğu\'nun kutsadığı, Batı\'nın bastırdığı — perspektif tartışması.',
    ],
  },

  // ─── a028 Karakulak ─────────────────────────────────────────────────────
  a028: {
    jung: '"Sessiz Sezgi" arketipi. Karakulak — kulağıyla görür, görünmeyeni duyar. Görünmeden gözlemleyen yargıç.',
    dream: 'Karakulak rüyada — duyamadığın bir şeye dikkat çekiyor. Gizli bir mesaj, fısıltı, sezgi. Birinin söylemediği var.',
    shadow: 'Sürekli kuşku. Her şeyin altında bir komplo aramak. Karakulak duyar ama yorumda yanılırsa paranoya doğar.',
    whenAppears: 'Kelimelerin gerçeği örttüğü konuşmalarda, bir hissin doğrulanmasını beklerken, gizli niyetleri okuman gerekirken.',
    traditions: [
      { culture: 'Anadolu Vahşi Yaşam',meaning: 'Anadolu\'nun saklı avcısı. Toroslar\'da, çöllerinde gizlice yaşar. Sessiz biliciliğin sembolü.' },
      { culture: 'Pers/Arap',        meaning: 'Çöl çakallarının kuzeni. Bedevi geleneğinde "uzak haberi getiren" kabul edilir.' },
      { culture: 'Hint',             meaning: 'Şiva\'nın gözünden saklananları gören — gizli adaletin habercisi.' },
      { culture: 'Mısır',            meaning: 'Anubis\'in çakal akrabası. Yer altı dünyasının habercisi.' },
      { culture: 'Bedevi',           meaning: 'Avcılık geleneğinde "sultanın kulağı". Padişaha en yakın av hayvanı.' },
    ],
    myths: [
      'Karakulak ve Tilki: Anadolu masallarında karakulak tilkiden daha sessiz, daha sezgisel hayvan olarak resmedilir. Tilki konuşurken kandırır, karakulak susarak kandırılır mı diye bakar.',
      'Sultan\'ın Karakulağı: Osmanlı sarayında padişaha "duyduklarını gizlice anlatan" yakın adamlara "karakulak" denirdi. Hayvanın saklı kulağı — politikanın metaforu.',
    ],
  },

  // ─── a029 Maral ─────────────────────────────────────────────────────────
  a029: {
    jung: '"Sevda Çağrısı" arketipi. Maral — kederin ve şefkatin birleşimi. Yaralı kalbin sesi.',
    dream: 'Maral rüyada — bir özlemin, bir sevdanın çağrısı. Kaçıyorsa: sevdiğine yetişemiyorsun. Sana yaklaşıyorsa: kalp açılıyor.',
    shadow: '"Yaralı ceylan" rolü. Korunmaya muhtaç pozisyonu hayat tarzı yapmak — şefkat dilenmek.',
    whenAppears: 'Bir sevgilinin uzaklığında, ana-yavru bağında, hayatın yumuşaklığa çağırdığı anda.',
    traditions: [
      { culture: 'Türk Halk Şiiri', meaning: '"Karac\'oğlan\'ın Maralı" — Anadolu aşk şiirinin merkez sembolü. Sevgilinin gözleri, boynunun zarafeti.' },
      { culture: 'Yunan Mitolojisi', meaning: 'Aktaion mitinde — avcı Artemis\'i çıplak görür, ceza olarak geyiğe (maral) dönüştürülür ve kendi köpeklerince parçalanır.' },
      { culture: 'Kelt',             meaning: 'Beyaz maral — ruhlar âleminden gelen mesajcı. Kralı seçen kutsal.' },
      { culture: 'Vedik',            meaning: 'Sarama — tanrıların habercisi. Saf ruhun yer üstündeki formu.' },
      { culture: 'Şamanik',          meaning: 'Sibirya geleneğinde — bedensiz aşk ruhunun temsilcisi.' },
    ],
    myths: [
      'Karac\'oğlan ve Maralı: Anadolu\'nun en lirik halk şiirinde, Karac\'oğlan sevdiğini "marala" benzetir. Maral kaçar, şair kovalar — sevda, yetişilemeyen güzelliktir.',
      'Aktaion\'un Cezası: Yunan mitolojisinde avcı Aktaion, su perisi formundaki Artemis\'i görür. Tanrıça onu cezalandırmak için marala dönüştürür — kendi köpekleri tarafından parçalanır. Görenin görülmesi.',
    ],
  },

  // ─── a030 Timsah ────────────────────────────────────────────────────────
  a030: {
    jung: '"İlkel Bilinçaltı" arketipi. Timsah — sürüngen beynin dipteki sesi. Korkunun bedenleşmiş hâli, ama aynı zamanda hayatta kalmanın koruyucusu.',
    dream: 'Timsah rüyada — bilinçaltında bekleyen bir tehlikenin veya gücün var. Suyun altındaysa: gölge taraf hareketsiz bekliyor. Karaya çıkıyorsa: yüzleşmen gereken bir şey ortaya çıktı.',
    shadow: 'Soğuk zalimlik. Timsah enerjisi bilinçsizleşirse — duygusuz hayatta kalma, başkalarını yutarak yaşama.',
    whenAppears: 'Derin korkularla yüzleşirken, gölge çalışmasında, bilinçaltına dalman gerektiğinde.',
    traditions: [
      { culture: 'Mısır',           meaning: 'Sobek — timsah başlı tanrı. Nil\'in gücü, doğurganlık, ama aynı zamanda korkunun tanrısı. Firavunun yıkıcı yönü.' },
      { culture: 'Vedik',            meaning: 'Makara — Varuna\'nın (su tanrısı) bineği. Suyun bilinçaltı bilgeliği.' },
      { culture: 'Maya/Aztek',       meaning: 'Cipactli — dünyanın üzerinde yaratıldığı dev timsah. Yaratılışın platformu.' },
      { culture: 'Afrika',           meaning: 'Yoruba geleneğinde — adaletin ve nehir tanrılarının habercisi.' },
      { culture: 'Avustralya',       meaning: 'Aborjin rüya zamanında — toprak ve suyun kararlılığını koruyan ata varlık.' },
    ],
    myths: [
      'Sobek ve Nil: Mısırlılar Nil\'in taşmasını Sobek\'in iradesi sayardı. Tanrıyı memnun etmek için timsahlara altın takılır, tapınaklarda bakılırdı — korkulan ama saygı duyulan güç.',
      'Cipactli\'nin Yaratılışı: Aztek mitolojisinde Quetzalcoatl ve Tezcatlipoca, devasa timsah Cipactli\'yi parçalayarak dünyayı yaratır. Gökyüzü onun sırtı, yer onun karnı — yaratılış parçalanmadır.',
    ],
  },

  // ─── a031 Kartal Baykuşu ────────────────────────────────────────────────
  a031: {
    jung: '"Karanlık Bilgelik" arketipi. Kartal baykuşu — gece kralı. Baykuşun sezgisi ve kartalın gücü birleşmiş.',
    dream: 'Kartal baykuşu rüyada — derin bir gece bilgisi sana açılıyor. Hem otorite hem sezgi taşıyor. Karanlıkta görü kazanıyorsun.',
    shadow: 'Yargılayıcı bilgelik. "Ben gördüm, sen göremedin" üstünlüğü. Bilgi otoriteye dönüşürse — yalnız kalır.',
    whenAppears: 'Hem güç hem sezgi gerektiğinde, geceleyin alınması gereken kararlarda, derinlerden gelen liderlik anlarında.',
    traditions: [
      { culture: 'Anadolu',         meaning: 'Toroslar\'ın gece kralı. En büyük baykuş türü — dağ bilgeliğinin somut hâli.' },
      { culture: 'Yunan Mitolojisi', meaning: 'Athena\'nın baykuşunun büyük akrabası. Gerçek bilgeliğin gece görüsü.' },
      { culture: 'Türk Şamanizmi',  meaning: 'Şaman gecesinde göğe yükselen baykuş ruhu — en üst saviyenin sembolü.' },
      { culture: 'Kelt',             meaning: 'Cailleach\'in kuşu — yaşlı tanrıçanın gece habercisi.' },
      { culture: 'Sibirya',          meaning: 'Tundranın bekçisi. Yalnız avcının atası kabul edilir.' },
    ],
    myths: [
      'Kartal Baykuşu ve Avcı: Sibirya halk hikâyelerinde genç bir avcı yıllarca kartal baykuşundan ders alır — gece görüsü, sessiz hareket, doğru zamanlama. Sonunda kendisi gece kralı olur.',
      'Toros Dağları: Anadolu\'da bu kuşa rastlamak çok nadirdir. Onu gören kişinin "ata bilgeliğinden" haber aldığı söylenir. Kayboluşu — kaybedilen sezginin işareti.',
    ],
  },

  // ─── a032 Boğa ──────────────────────────────────────────────────────────
  a032: {
    jung: '"Bedenlenmiş Güç" arketipi. Boğa — toprağa kök salmış erkek/dişil güç. Şehvet, bereket, ama aynı zamanda kontrol edilmesi gereken vahşilik.',
    dream: 'Boğa rüyada — bedenin ve içgüdülerinin sesi. Saldırıyorsa: bastırılmış arzu/öfke patlıyor. Otluyorsa: doyumlu bir döneme giriyorsun.',
    shadow: 'Şiddet ve baskı. Boğa enerjisi kontrol edilmezse — zorbalığa, kıskançlığa, yıkıma dönüşür.',
    whenAppears: 'Bedensel gücünle bağlandığında, cinsel/yaratıcı enerjini doğru yöne çevirmen gerekirken, kararını "ayakta dur" haline getirmen lazımken.',
    traditions: [
      { culture: 'Hitit/Anadolu',   meaning: 'Hattuşa\'da boğa tapınağı. Fırtına tanrısının (Teşup) kutsal bineği. Anadolu medeniyetinin ekseni.' },
      { culture: 'Mısır',           meaning: 'Apis — Memphis\'te yaşatılan kutsal boğa. Yeryüzünde Osiris\'in bedenleşmiş hâli.' },
      { culture: 'Yunan Mitolojisi', meaning: 'Minotaur — yarı insan yarı boğa. Knossos\'taki labirentin ortasındaki bastırılmış doğa.' },
      { culture: 'Vedik',            meaning: 'Nandi — Şiva\'nın bineği. Tapınakların önünde otururken karşı tarafa, ilahi tarafa bakar.' },
      { culture: 'Mitra Kültü',     meaning: 'Mitra\'nın boğayı boğazlaması — kozmik yenilenme ayini. Roma askerinin sırı.' },
    ],
    myths: [
      'Minotaur ve Labirent: Yunan mitolojisinde Kral Minos\'un karısı Pasiphae bir boğaya âşık olur. Doğan çocuk Minotaur — yarı insan yarı boğa. Daedalos\'un labirentinde tutulur — bastırılan şehvetin merkezde saklanması.',
      'Apis ve Memphis: Mısır\'da Apis adlı boğa Osiris\'in dünyadaki vücudu sayılırdı. Doğal ölünce büyük matem tutulur, yeni Apis doğana kadar Mısır yas içinde kalırdı.',
    ],
  },

  // ─── a033 Karınca ───────────────────────────────────────────────────────
  a033: {
    jung: '"Kolektif Sabır" arketipi. Karınca — küçük çabaların toplamı, görünmez emeğin sembolü. Disiplin ve toplumsallık.',
    dream: 'Karınca rüyada — küçük adımların büyük bir yapı kurduğunu söyler. Yığın hâlinde: kolektif yaratım. Sana tırmanıyorsa: sıkıntılar birikiyor, ele al.',
    shadow: 'Robot gibi yaşamak. Bireyselliğini kaybedip sadece "iş" haline gelmek. Karınca büyük bir parça, ama tek başına anlamlıdır.',
    whenAppears: 'Uzun vadeli projelerde, küçük katkıların önemini fark ettiğinde, toplulukta görünmez ama vazgeçilmez rolde olduğun anda.',
    traditions: [
      { culture: 'Süleyman ve Karınca',meaning: 'Kuran\'da Neml Suresi — Süleyman peygamber karıncaların lideriyle konuşur. Karıncanın sesi: "Yuvalarınıza girin ki Süleyman ordusu sizi çiğnemesin."' },
      { culture: 'Afrika',           meaning: 'Anansi masallarında — kolektif aklın sembolü. Tek bireyin yapamadığını topluluk yapar.' },
      { culture: 'Kızılderili',     meaning: 'Hopi geleneğinde karınca-insanlar yer altından geldi. Sabır ve birlik öğretmeni.' },
      { culture: 'Çin',              meaning: 'Konfüçyüsçü gelenekte erdem örneği — disiplin, sadakat, hiyerarşi.' },
      { culture: 'Anadolu Halk',    meaning: '"Karınca kararınca" deyişi — herkes payına düşeni yapsın.' },
    ],
    myths: [
      'Süleyman ve Karınca Vadisi: Kuran\'da Süleyman ordusu karıncalar vadisinden geçerken bir karınca diğerlerini uyarır. Süleyman gülümser ve şükreder. En küçük yaratığın sözünü duyabilmek — gerçek liderliktir.',
      'Hopi Karınca-İnsanları: Hopi yaratılış mitinde, dünyanın yüzeyi bozulunca insanlar yer altına çekilir. Karınca-insanlar onları besler, korur, sonunda yeniden yüzeye taşır — kolektif şifa.',
    ],
  },

  // ─── a034 Hac Leyleği ───────────────────────────────────────────────────
  a034: {
    jung: '"Yolcu Hac\'ı" arketipi. Hac leyleği — ömrü yolculuğa adamış. Her yıl aynı kutsal yolu yenilemek.',
    dream: 'Hac leyleği rüyada — ruhsal bir göç yaklaşıyor. Aynı yere her yıl giden bir döngünün parçasısın. Yola çıkmanın zamanı geldi.',
    shadow: 'Sürekli "yolda" olmak ama hiç varmamak. Hac sembolik bir yolculuktur — eğer asla dönmüyorsan, kaçışa dönüşür.',
    whenAppears: 'Uzun, döngüsel bir göç döneminde, ruhsal bir hac niyetinde, "her yıl bu zamanda hep aynı" hissinde.',
    traditions: [
      { culture: 'Anadolu',         meaning: '"Hacı leylek" — hacca gidip dönen kuş. Çatıdaki yuvası — kutsanmış ev.' },
      { culture: 'İslam Halk',      meaning: 'Yıllık göçü hac olarak yorumlanır. Mekke\'ye gidip dönen ruh.' },
      { culture: 'Slav',             meaning: 'Dolu Çar tanrısının habercisi. Bahar getiren kuş.' },
      { culture: 'Mısır',            meaning: 'Ba ruhunun kuş hâli — bedenden ayrılıp seyahat eden öz.' },
      { culture: 'Anadolu Halk',    meaning: '"Leylek bahar getirir" — döngüsel umut sembolü.' },
    ],
    myths: [
      'Hacca Giden Leylek: Anadolu inanışına göre leylekler her yıl Mekke yönüne göç eder, dönerler. Bu nedenle "hacı leylek" denir. Onlara zarar veren bir kutsalı bozmuş sayılır.',
      'Leyleğin Yuvası: Bir Anadolu hikâyesi: Bir köylü çatısındaki leylek yuvasını yıkar. O yıl yağmur yağmaz, mahsul kurur. Köylü yuvayı tekrar yapana kadar bereket dönmez.',
    ],
  },

  // ─── a035 Ördek ─────────────────────────────────────────────────────────
  a035: {
    jung: '"Akış İçinde Durulluk" arketipi. Ördek — suda yüzer, yağmurda ıslanmaz. Etrafından geçen kaosa karışmayan iç huzur.',
    dream: 'Ördek rüyada — duygusal akıştan etkilenmeden durabilmen gerektiğini söyler. Yüzüyorsa: huzur içinde ilerliyorsun. Uçuyorsa: bir döngüden çıkış zamanı.',
    shadow: 'Aşırı ayrılık. "Etkilenmemek" duyarsızlığa dönüşürse — ördek su kuşu olur ama "kalp" kalmaz.',
    whenAppears: 'Kaotik bir ortamda merkezde kalman gerekirken, başkalarının dramından çıkmak istediğinde, suyun seni temizlediği bir anda.',
    traditions: [
      { culture: 'Çin',              meaning: 'Mandarin ördekleri — sadık eşler. Düğün hediyesi olarak çift verilir.' },
      { culture: 'Kızılderili',     meaning: 'Su ile gök arasında köprü. Hem yüzer hem uçar — iki dünya hayvanı.' },
      { culture: 'Mısır',            meaning: 'Akhenaten döneminde — basitliğin ve halkın hayvanı. Tapınak motiflerinde aile sahnesi.' },
      { culture: 'Anadolu',          meaning: 'Göl köylerinde rızkın simgesi. "Ördek bolsa, ev tok" deyişi.' },
      { culture: 'Slav',             meaning: 'Yumurtasında dünyanın saklandığı kuş — yaratılışın annesi.' },
    ],
    myths: [
      'Mandarin Ördekleri: Çin geleneğinde mandarin ördekleri eşlerini ömür boyu değiştirmez. Eşi ölünce diğeri de bekler. Bu yüzden düğünlerde çift mandarin ördeği hediye edilir — sadakat duası.',
      'Slav Yaratılış Ördekleri: Slav mitolojisinde dünya, suların üstünde yüzen iki ördeğin yumurtaladığı sarı yumurtadan doğdu. Akış üstünde yaratım.',
    ],
  },

  // ─── a036 Kuzgun ────────────────────────────────────────────────────────
  a036: {
    jung: '"Trickster Bilge" arketipi. Kuzgun — kâhin ile soytarı bir bedende. Karanlığın zekası, ölümün haberi, ama aynı zamanda yaratıcılık.',
    dream: 'Kuzgun rüyada — bir uyarı geliyor. Ya da: zekanı saklamayı bırak. Konuşuyorsa: gizli bir bilgi açılıyor.',
    shadow: 'Kara mizah ve alaycılık. Kuzgun her şeyi bilir gibi davranırsa — siniklik. Her şeyin "boş" olduğunu söyleyen ses.',
    whenAppears: 'Uyarı işaretlerini görmen gerekirken, zekanın kara mizahla beslendiği anlarda, ölüm-yas süreçlerinde rehber gibi.',
    traditions: [
      { culture: 'İskandinav',      meaning: 'Odin\'in iki kuzgunu Huginn (düşünce) ve Muninn (hafıza). Her gün dünyayı dolaşır, hanlarına bilgi getirir.' },
      { culture: 'Kelt',            meaning: 'Morrigan — savaş tanrıçası kuzgun formunda görünür. Ölüme yakın olanları işaretler.' },
      { culture: 'Kızılderili',     meaning: 'Haida ve Tlingit geleneğinde — yaratıcı trickster. Güneşi çalan, dünyayı şekillendiren.' },
      { culture: 'Türk-Moğol',      meaning: 'Karakuş — şamanın yardımcısı. Atalardan haber getiren kara haberci.' },
      { culture: 'Hristiyan',        meaning: 'Nuh\'un gemisinden ilk salınan kuş — geri dönmemiş. Sadakatsizliğin simgesi olarak yorumlanmış, ama bağımsızlık olarak da.' },
    ],
    myths: [
      'Odin\'in Kuzgunları: İskandinav baş tanrı Odin\'in omuzlarında iki kuzgun durur — Huginn (düşünce) ve Muninn (hafıza). Her gün dünyayı dolaşır, akşam Odin\'in kulağına haber fısıldarlar. Bilgelik — gözlemleyebilmektir.',
      'Haida Kuzgunu: Haida mitolojisinde kuzgun, kutucu tanrıdan güneşi, ayı ve yıldızları çalar ve dünyaya dağıtır. Yaratıcı hilebaz — kuralı bozarak hayatı veren.',
    ],
  },

  // ─── a037 Ak Kelebek ────────────────────────────────────────────────────
  a037: {
    jung: '"Saf Ruh" arketipi. Ak kelebek — kelebeklerin en hassas, en geçici formu. Ruhun beyaz ışığı.',
    dream: 'Ak kelebek rüyada — bir saflık, bir aydınlık geri geliyor. Ölmüş yakının ruhu, ya da çocuksu özün ziyareti.',
    shadow: 'Aşırı maneviyat — bedeni inkâr. Ak kelebek hep "yüksek titreşim"de yaşamaya çalışırsa, dünya işlerini ihmal eder.',
    whenAppears: 'Bir hafızanın berraklaştığı anda, atalarınla bağlantı kurmak istediğinde, çocuksu temiz neşeyi geri istediğin günlerde.',
    traditions: [
      { culture: 'Anadolu',         meaning: '"Ak kelebek atadan haber" — yas evine giren ak kelebek, gidenden mesaj.' },
      { culture: 'Japonya',          meaning: 'Hakuchō — ölmüş kişinin ruhunun ziyareti. Aile yıldönümlerinde gelir.' },
      { culture: 'Kelt',             meaning: 'Ölmüş çocukların ruhu beyaz kelebek formunda dönermiş. Anneye teselli.' },
      { culture: 'Hristiyan',        meaning: 'Diriliş sembolü. Mezar taşlarında işlenir — ruhun bedeni terk edip yükselişi.' },
      { culture: 'Çin',              meaning: 'Saf aşkın simgesi. Sevdiğine söz vermenin işareti.' },
    ],
    myths: [
      'Atadan Haber: Anadolu\'da ölmüş bir yakının yas haftalarında eve giren ak kelebek, onun ruhunun ziyareti sayılır. "Hoş geldin" denir, kovulmaz. Kelebek çıkana kadar dua edilir.',
      'Hakuchō Geleneği: Japon ailelerinde ölüm yıldönümlerinde evin etrafında dolaşan beyaz kelebekler, atayı temsil eder. Tütsü yakılır, isim anılır — kelebek gelmeden gidemez.',
    ],
  },

  // ─── a038 Deve ──────────────────────────────────────────────────────────
  a038: {
    jung: '"Çöl Yolcusu" arketipi. Deve — uzun yola dayanıklılık, kurak dönemleri içsel kaynakla geçme.',
    dream: 'Deve rüyada — uzun bir dayanıklılık testi var. Yük taşıyorsa: sorumluluk artıyor. Çölde yürüyorsa: ruhsal kuraklıkta da yolunu bulacaksın.',
    shadow: 'Her yükü taşıma takıntısı. Deve "hayır" demeyi bilmeli — sınırsız fedakârlık çöküştür.',
    whenAppears: 'Uzun süreli bir yüke girerken, kıt kaynakla dayanman gerektiğinde, ruhsal çölde içsel kaynakları bulman lazımken.',
    traditions: [
      { culture: 'Arap-İslam',       meaning: 'Hz. Salih\'in mucize devesi — Kuran\'da Naka. Kavmin sınanması; deveyi öldüren toplum cezalandırılır.' },
      { culture: 'Sufi',             meaning: 'Mevlana\'nın Mesnevi\'sinde — sabır ve teslimiyetin sembolü.' },
      { culture: 'Anadolu',          meaning: 'Yörük kültüründe yaşam hattının kendisi. Deve kervansız Anadolu olmaz.' },
      { culture: 'İbrahimi',         meaning: 'İbrahim\'in deve kervanı — peygamberlerin yolunun bineği.' },
      { culture: 'Mısır',             meaning: 'Çölün kapısı — yaşam ve ölüm arasında köprü.' },
    ],
    myths: [
      'Salih\'in Devesi: Kuran\'da Hz. Salih\'in kavmine mucize olarak bir deve verilir. Onu öldürmemeleri ve suyu paylaşmaları istenir. Kavim deveyi öldürür — kavim helak olur. Kutsal yüke saygı testi.',
      'Yörük Devesi: Anadolu Yörüklerinde deve sadece bir hayvan değil, ailenin parçasıdır. İsim verilir, yas tutulur. Devesini kaybeden ev, evladını kaybetmiş kabul edilir.',
    ],
  },

  // ─── a039 Balık ─────────────────────────────────────────────────────────
  a039: {
    jung: '"Bilinçaltı Akış" arketipi. Balık — suyun derinindeki bilgelik. Sezgi, doğurganlık, geçişlerin habercisi.',
    dream: 'Balık rüyada — derin bir bilgi yüzeye çıkıyor. Çok balık görüyorsan: bolluk yakın. Yakalıyorsan: bir hakikati avlıyorsun.',
    shadow: 'Soğukluk, kayganlık. Balık tutulmaz — sezginin bedeni yok olur, eline geçmez.',
    whenAppears: 'Hamilelik (gerçek/yaratıcı), sezginin keskinleştiği, dünyanın altında bir akıntının seni taşıdığı anda.',
    traditions: [
      { culture: 'Hristiyan',       meaning: 'İsa\'nın sembolü. "İkhthys" — Yunanca balık, İsa\'nın adının ilk harfleri. Erken Hristiyanların gizli sembolü.' },
      { culture: 'Vedik',            meaning: 'Matsya — Vishnu\'nun balık avatarı. Tufandan insanlığı kurtarır.' },
      { culture: 'Sumer',            meaning: 'Oannes — balık-insan tanrı, sudan çıkıp insanlara medeniyet öğretti.' },
      { culture: 'Çin',              meaning: 'Bolluğun sembolü. Yeni yılda balık yenir — "yıllar boyu fazlalık" duası.' },
      { culture: 'Anadolu Halk',    meaning: 'Bereket sembolü. Düğünlerde balık motifi — doğurganlık duası.' },
    ],
    myths: [
      'Matsya Avatarı: Hint mitolojisinde tufan yaklaşırken Vishnu küçük bir balık olarak Manu\'ya görünür. Büyür, devleşir, gemiyi çekerek insanlığı kurtarır. Sular bilinçaltı, balık o bilinçaltından çıkan kurtuluş.',
      'İkhthys: Roma\'da Hristiyanlar zulüm altındayken birbirini tanımak için balık sembolünü kumda çizerdi. "Iesous Khristos Theou Yios Soter" baş harfleri — İsa, Tanrının Oğlu, Kurtarıcı.',
    ],
  },

  // ─── a040 Horoz ─────────────────────────────────────────────────────────
  a040: {
    jung: '"Şafak Habercisi" arketipi. Horoz — uyanışı ilan eden, karanlığı yarıp ışığı çağıran ses.',
    dream: 'Horoz rüyada — uyanma vakti! Bilinçaltında gördüğün bir şey gün ışığına çıkmak istiyor. Ötüyorsa: ilan zamanı, sus durmak günah.',
    shadow: 'Kibirli gösteriş. Horoz sabahları ilan eder ama "ben olmasam güneş doğmaz" sanrısı — egonun çiçeklenmesi.',
    whenAppears: 'Uyanmak, ilan etmek, sözünü yüksek sesle söylemek gerektiğinde, karanlık dönem bittiğinde.',
    traditions: [
      { culture: 'Türk Halk',       meaning: 'Sabahın müjdecisi — ezandan önce öten kuş. Anadolu köyünün saatçisi.' },
      { culture: 'Pers',             meaning: 'Zerdüştlükte — kötülüğü kovan, ışığı çağıran kutsal kuş.' },
      { culture: 'Hristiyan',        meaning: 'Petrus\'un üç kez İsa\'yı inkâr etmesi horozun ötüşüyle bağlı — vicdanın sesi.' },
      { culture: 'Çin',              meaning: 'On iki burç hayvanından biri. Dürüstlük, sadakat, çalışkanlığın sembolü.' },
      { culture: 'Kelt',              meaning: 'Yer altı dünyasının uyarıcısı — ruhların uyanış saatini bildirir.' },
    ],
    myths: [
      'Petrus ve Horoz: Hristiyan İncil\'inde Petrus, İsa\'yı korkudan üç kez inkâr eder. Horoz öttüğünde fark eder ve ağlar. Horoz — vicdanın geri dönüş sesi.',
      'Zerdüşt Horozu: Eski Pers geleneğinde horozun ötüşüyle birlikte gece şeytanları kovulurdu. Şafak — kötülüğün geri çekilmesi. Horoz tanrısal düzenin müjdecisi.',
    ],
  },

  // ─── a041 Tavşan ────────────────────────────────────────────────────────
  a041: {
    jung: '"Ay Çocuğu / Trickster" arketipi. Tavşan — sezgiyle hareket eden çevik akıl. Hızla kaybolup hızla geri gelen.',
    dream: 'Tavşan rüyada — bir fırsat hızla geçiyor, dikkatli ol. Kaçıyorsa: korkudan değil, sezgiden hareket et. Çoğalıyorsa: bereket geliyor.',
    shadow: 'Aşırı korku. Her gölgeden ürkmek, hayatı kaçırmak. Tavşan hızlıdır ama gizlenmek hep çözüm değildir.',
    whenAppears: 'Hızlı bir karar gerektiğinde, doğurgan bir döneme girerken, ay döngüsünün başlangıcında.',
    traditions: [
      { culture: 'Çin',              meaning: 'Ay\'da ölümsüzlük iksiri döven yeşim tavşan. Mid-Autumn Festival\'ın sembolü.' },
      { culture: 'Kelt',             meaning: 'Cerridwen\'in kazanından doğan dönüşüm sembolü. Bereket tanrıçasının yoldaşı.' },
      { culture: 'Anadolu Halk',     meaning: '"Tavşan masalı" — zekasıyla kurttan ve tilkiden kurtulan küçük kahraman.' },
      { culture: 'Aztek',            meaning: 'Centzon Totochtin — 400 tavşan tanrı. Pulque (içki) ve coşkunun habercisi.' },
      { culture: 'Hristiyan',        meaning: 'Paskalya tavşanı — dirilişin ve baharın simgesi. Yumurta dağıtan haberci.' },
    ],
    myths: [
      'Ay Tavşanı: Çin mitolojisinde Ay\'da bir tavşan yaşar ve ölümsüzlük iksiri döver. Mid-Autumn Festival\'da çocuklar onun şerefine ay kekleri yer — kozmik bereket.',
      'Tavşan ve Kaplumbağa: Aesop\'un en bilinen fablında hızlı tavşan, yavaş kaplumbağaya yarışta kaybeder. Hız her zaman kazanmaz — sebat kazanır.',
    ],
  },

  // ─── a042 Akrep ─────────────────────────────────────────────────────────
  a042: {
    jung: '"Yıkıcı Dönüştürücü" arketipi. Akrep — Yılan ile aynı boyda, hatta daha derin. Yas ile yenilenmeyi bir ısırışta birleştiren.',
    dream: 'Akrep rüyada — bastırılan bir konu yüzeye çıkıyor. Sokuyorsa: bir gerçek seni dönüştürecek. Sırtında taşıyorsan: zor bir bilgiyi taşıyorsun.',
    shadow: 'Zehir saçmak. Akrep yaralandığında çevresine kuyruğunu sallar — yaralı kişi başkalarını yaralar. İçsel acı tedavi edilmezse zehirleyici olur.',
    whenAppears: 'Yas, yıkım, kıskançlık veya ihanet gibi derin duygu süreçlerinde, dönüştürücü acıyla yüzleşmen gerektiğinde.',
    traditions: [
      { culture: 'Mısır',           meaning: 'Serqet — akrep tanrıça. Ölüleri öbür dünyada koruyan. Zehiri tedaviye dönüştüren.' },
      { culture: 'Yunan Mitolojisi', meaning: 'Orion\'u öldüren akrep — Artemis tarafından gönderilen kozmik adalet. Yıldız takımı oldular.' },
      { culture: 'Astroloji',        meaning: 'Akrep burcu — ölüm ve diriliş, tabu, gizli bilgi. Pluto\'nun ev sahibi.' },
      { culture: 'Anadolu',          meaning: 'Köy efsanelerinde akrebin yuvasını bozan başına iş alır. Sınırlı varlığın saygısı.' },
      { culture: 'İslam',           meaning: 'Hadis-i şerifte cennette zararı olmayan, dünyada koruyucu sayılır — kötülük yalnız kendine değer.' },
    ],
    myths: [
      'Serqet ve Mumya: Mısır firavunları mumyalanırken karaciğer kavanozunu akrep tanrıça Serqet korurdu. Zehrin antiseptik gücü — ölümle yenilenmenin birleşmesi.',
      'Orion ve Akrep: Yunan mitolojisinde dev avcı Orion kibirinden cezalandırılır — küçük bir akrep onu öldürür. İkisi de gökyüzüne yerleşir, biri doğarken diğeri batar — sonsuz kovalama.',
    ],
  },

  // ─── a043 Kurbağa ───────────────────────────────────────────────────────
  a043: {
    jung: '"Eşiğin Habercisi" arketipi. Kurbağa — sudan karaya, çocukluktan yetişkinliğe geçen. Metamorfozun en görünür hâli.',
    dream: 'Kurbağa rüyada — bir geçiş tamamlanıyor. Yağmurda görünüyorsa: temizlenme yaklaşıyor. Vıraklıyorsa: sesini bul, söyle.',
    shadow: 'Yarı-dönüşüm. Bir hayatta hep iribaş kalmak — büyüyemeyen, sudan çıkamayan. Konfor geçişi engeller.',
    whenAppears: 'Bir eşikte (taşınma, evlilik, ayrılık), ruhsal/duygusal temizlenmede, sesini kullanma çağrısında.',
    traditions: [
      { culture: 'Mısır',           meaning: 'Heqet — kurbağa başlı tanrıça. Doğumun ve yenilenmenin koruyucusu. Nil taşkınının habercisi.' },
      { culture: 'Çin',              meaning: 'Üç ayaklı kurbağa Jin Chan — ay ve zenginlik sembolü. Para getiren tılsım.' },
      { culture: 'Anadolu',          meaning: '"Kurbağa öttü, yağmur yağdı" — bereketin habercisi. Köy ekonomisinde belirleyici sayılırdı.' },
      { culture: 'Kelt',              meaning: 'Şifa kuyularının koruyucusu. Toprak ile suyun birleştiği yerin bekçisi.' },
      { culture: 'Aztek',             meaning: 'Tlaltecuhtli — yer tanrıça, kurbağa formunda. Yaratılışın bedeni.' },
    ],
    myths: [
      'Heqet ve Doğum: Mısır mitolojisinde kadın doğum yaparken kurbağa tanrıça Heqet\'in tılsımı bedeninin üzerinde taşınırdı. Suyun ve toprağın doğurgan birleşmesi.',
      'Prens Kurbağa: Grimm masalında prensesin öptüğü kurbağa prense dönüşür. Aşk ve kabul — gerçek kimliği ortaya çıkarır. Görünenin altındakini görmek.',
    ],
  },

  // ─── a044 Karga ─────────────────────────────────────────────────────────
  a044: {
    jung: '"Kolektif Bilge" arketipi. Karga — Kuzgun\'un sürü hâli. Bireysel zekanın paylaşıma açıldığı yer.',
    dream: 'Karga rüyada — kalabalığın akıllıca seçilmiş bir parçası olmaya çağrılıyorsun. Konuşuyorsa: bir mesaj iletmen lazım. Sürü hâlinde: kolektif karar zamanı.',
    shadow: '"Toplum baskısı" — kalabalık zihne kapılma. Karga sürüsü güçlüdür ama tek tek özgün kalmak da gerekir.',
    whenAppears: 'Bir gruba katılırken, fikrini kalabalığa açıkça söylemen gerektiğinde, kolektif bir karara dahil olduğunda.',
    traditions: [
      { culture: 'Tibet',           meaning: 'Mahakala\'nın haberci kuşu. Yıkıcı bilgeliğin habercisi.' },
      { culture: 'Türk Halk',       meaning: 'Karga zekası ile bilinir — bir kayalığa ceviz düşürerek kırması Anadolu masallarında geçer.' },
      { culture: 'Yunan Mitolojisi', meaning: 'Apollon\'un kuşu. Önce beyazdı, kötü haber getirdiği için tanrı tarafından siyaha boyandı.' },
      { culture: 'Avustralya Aborjin',meaning: 'Waa — yaratıcı ata. Ateşi insanlığa getiren trickster.' },
      { culture: 'Hint',             meaning: 'Şani (Satürn) tanrısının bineği. Karma ve adaletin habercisi.' },
    ],
    myths: [
      'Apollon\'un Beyaz Kargası: Yunan mitolojisinde karga eskiden beyazdı. Apollon\'a sevgilisi Koronis\'in sadakatsizliğini söyleyince, tanrı haberin acısını kuşa yansıttı — karganın rengi siyah oldu, sesi cızırdadı.',
      'Waa ve Ateş: Avustralya Aborjin mitolojisinde karga Waa, kadınların gizlediği ateşi çalar ve insanlığa getirir. Trickster yaratıcı — kuralı bozarak hayatı kolaylaştıran.',
    ],
  },

  // ─── a045 Sincap ────────────────────────────────────────────────────────
  a045: {
    jung: '"Mütevazı Hazırlayıcı" arketipi. Sincap — küçük olduğunu bilen, ama planını yapan. Kollektif değil, bireysel hazırlığın sembolü.',
    dream: 'Sincap rüyada — geleceğe hazırlık zamanı. Yiyecek saklıyorsa: ekonomik/duygusal güvenlik için tedbir al. Atlıyorsa: çevik bir hamle gerekiyor.',
    shadow: 'Kaygılı biriktiricilik. "Yetmez" duygusuyla durmadan istiflemek — neşeyi kaçırır. Sincap aynı zamanda oynar; sadece çalışmaz.',
    whenAppears: 'Bir kış dönemine girmeden önce, tasarruf veya enerji birikimine ihtiyaç duyulurken, hayatın size çeviklik gösterdiği anlarda.',
    traditions: [
      { culture: 'İskandinav',      meaning: 'Ratatoskr — dünya ağacı Yggdrasil\'de yukarı aşağı koşan haberci sincap. Tanrılar ile devler arasında mesaj taşır.' },
      { culture: 'Kelt',             meaning: 'Hazırlık ve ileri görüşün sembolü. Druidlerin doğa öğretmenlerinden.' },
      { culture: 'Kızılderili',     meaning: 'Cherokee geleneğinde — küçüklüğünüze rağmen büyük katkı yapabilirsiniz mesajının habercisi.' },
      { culture: 'Anadolu',          meaning: 'Karadeniz ormanlarında sevimli yoldaş. Çocuk masallarının küçük zeki kahramanı.' },
      { culture: 'Vedik',            meaning: 'Rama\'nın köprü inşasına yardım eden küçük sincap — büyük işlerde küçük katkılar.' },
    ],
    myths: [
      'Ratatoskr ve Yggdrasil: İskandinav mitolojisinde dünya ağacı Yggdrasil\'in tepesindeki kartal ile köklerindeki ejderha arasında mesaj taşıyan haberci sincap. Çatışmayı körükler — söylenti yayıcı kötülük mü, gerekli aracı mı?',
      'Rama\'nın Sincabı: Hint destanı Ramayana\'da Rama köprü inşa ederken küçük bir sincap kuma bulanıp suya atlayarak yardım eder. Rama parmaklarıyla sırtını okşar — sincapların sırtındaki üç çizgi o izden gelir. Büyük işte küçük katkı.',
    ],
  },

  // ─── a046 Yarasa ────────────────────────────────────────────────────────
  a046: {
    jung: '"Eşik Bekçisi" arketipi. Yarasa — gece ile gündüz, yer ile gök, ölüm ile hayat arasında. Liminal varlık.',
    dream: 'Yarasa rüyada — bir geçiş eşiğindesin, eski sen ölüyor. Mağaradan çıkıyorsa: gölge çalışmandan dönüyorsun. Sana yaklaşıyorsa: sezgi mesajı taşıyor.',
    shadow: 'Yapışkan korkular. Yarasalardan korkanlar genelde dönüşümden korkar. Yarasa fobisi — eski kimliği bırakmaktan kaçınma.',
    whenAppears: 'Karanlık dönemlerde, ölüm-yas süreçlerinde, sezgini körlemesine kullanman gerekirken (ekolokasyon — görmeden duyma).',
    traditions: [
      { culture: 'Çin',              meaning: 'Fu — "yarasa" ve "şans" aynı sesle telaffuz edilir. Beş yarasa = beş kutsama (uzun ömür, zenginlik, sağlık, erdem, doğal ölüm).' },
      { culture: 'Maya/Aztek',       meaning: 'Camazotz — yarasa tanrı. Geçişin ve gece âleminin habercisi.' },
      { culture: 'Anadolu Halk',     meaning: 'Uğursuz sayılır ama eski Şaman geleneğinde — ata ruhların habercisi.' },
      { culture: 'Hristiyan',        meaning: 'Orta Çağ\'da şeytanın kuşu sayıldı — gece ve karanlıkla özdeşleştirildi.' },
      { culture: 'Kızılderili',      meaning: 'Bazı kabilelerde — eski kişinin ölüp yeni kişinin doğuşu için rehber.' },
    ],
    myths: [
      'Çin\'in Beş Yarasası: Çin geleneğinde beş yarasa motifi (wufu) — şans, zenginlik, uzun ömür, erdem, doğal ölüm. Düğün ve yılbaşı süslemelerinde çok kullanılır. Korkulan hayvan kutsama olur.',
      'Camazotz Mağarası: Maya mitolojisinde kahramanlar ölüler diyarı Xibalba\'da Yarasa Mağarası\'ndan geçmek zorundadır. Yarasalar onları sınar — bilgeliği almak için ölüme yaklaşmak gerek.',
    ],
  },

  // ─── a047 Yengeç ────────────────────────────────────────────────────────
  a047: {
    jung: '"Ana-Kabuk" arketipi. Yengeç — evi bedeninde taşır. Duygusal güvenliğin, içe çekilmenin, sınırın sembolü.',
    dream: 'Yengeç rüyada — bir savunma ihtiyacın var. Kabuğunun içine girmen meşru. Pençeleriyle bir şey tutuyorsa: bırakmıyorsun, bırak mı bırakma mı bir bak.',
    shadow: 'Kabuğa kapanma takıntısı. Yengeç hep içe çekilirse — duygusal hareketsizlik. Pençeler de bir şeyi hiç bırakmamak da olabilir.',
    whenAppears: 'Sınır koymak gerektiğinde, eve dönmek istediğinde, ay döngüsünün etkili olduğu duygusal anlarda, geri çekilme zamanında.',
    traditions: [
      { culture: 'Astroloji',       meaning: 'Yengeç burcu — Ay ile yönetilen ev, anne, duygusal kök. Suyun ilk burcu.' },
      { culture: 'Yunan Mitolojisi', meaning: 'Hera, Herakles\'i öldürmek için bir yengeç gönderir. Yengeç ezilir — Hera onu gökyüzüne, Yengeç takımyıldızına koyar.' },
      { culture: 'Çin',              meaning: 'Sonbahar ve hasat sembolü. Mooncake döneminde yenir.' },
      { culture: 'Vedik',             meaning: 'Karkata rashi — Ay\'ın evi. Anneliğin ve emosyonel zeminin yıldız evi.' },
      { culture: 'Anadolu',          meaning: 'Akdeniz balıkçı köylerinde "kara yengeç" — uğurlu sayılır, asla öldürülmez sadece yakalandığı yere bırakılır.' },
    ],
    myths: [
      'Herakles ve Yengeç: Hera yengeci Herakles\'in topuğunu ısırması için gönderir. Kahraman ezer, ama Hera kuşun sadakatine değer verir ve onu gökyüzüne yerleştirir — Yengeç (Cancer) takımyıldızı. Küçük sadakat bile kutsanır.',
      'Yengeç Hareketi: "Yengeç yürüyüşü" deyimi — geri geri gitmek, dolambaçlı yol. Ama yengeç boş yere geri gitmez; tehlikeyi kabuğuyla geriye iter. Sezgisel savunma.',
    ],
  },

  // ─── a048 Fil ───────────────────────────────────────────────────────────
  a048: {
    jung: '"Büyük Hafıza" arketipi. Fil — yıllar boyu hatırlar, ama hatırlamayla yaşamaz. Yargısız bellek.',
    dream: 'Fil rüyada — geçmişten gelen bir bilgi/duygu yüzeye çıkıyor. Aileyle: kolektif bellek. Yalnız: kişisel ağırlık.',
    shadow: '"Hiçbir şeyi unutmama" yükü. Affediş olmadan bellek hapse dönüşür. Fil hatırlar — ama bilge fil yara izini hayata değil tarihe bırakır.',
    whenAppears: 'Geçmişle yüzleşme zamanlarında, atalardan miras gelen yükleri taşırken, büyük ailedeki rolünü kabul ettiğinde.',
    traditions: [
      { culture: 'Hint',             meaning: 'Ganeşa — fil başlı tanrı. Engellerin kaldırıcısı, başlangıçların koruyucusu.' },
      { culture: 'Budist',           meaning: 'Buddha\'nın annesi Maya, hamile kalırken rüyasında beyaz bir fil görür — kutsal doğumun habercisi.' },
      { culture: 'Vedik',            meaning: 'Airavata — Indra\'nın beyaz fil bineği. Yağmur ve bereketin getiricisi.' },
      { culture: 'Sufi-İslam',       meaning: 'Mevlana\'nın "Karanlıkta Fil" hikayesi — herkes filin farklı parçasına dokunur, farklı şeyler tarif eder. Gerçek — bütünündedir.' },
      { culture: 'Afrika',           meaning: 'Maasai\'de — kabilenin liderliğinin sembolü. Filin yürüyüşü "aile yürüyüşü"dür.' },
    ],
    myths: [
      'Ganeşa\'nın Başı: Hint mitolojisinde Parvati oğlu Ganeşa\'yı yaratır. Şiva, oğlunu tanımayıp başını keser. Pişman olunca ilk gördüğü canlının başını takar — fil. Ganeşa böyle doğar: engellerin kaldırıcısı, başlangıçların tanrısı.',
      'Mevlana\'nın Fili: "Bir karanlık odada filin yanına farklı insanlar girer. Biri hortumuna dokunur, yılan sanır. Biri kulağına, yelpaze. Biri ayağına, sütun." Mevlana\'da: hakikat bir parçayla değil, bütünle bilinir.',
    ],
  },

  // ─── a049 Vaşak ─────────────────────────────────────────────────────────
  a049: {
    jung: '"Sırların Bekçisi" arketipi. Vaşak — gördüklerini söylemeyen, ama hakikati en derinden bilen.',
    dream: 'Vaşak rüyada — bir gerçeği biliyorsun ama henüz söylenmemeli. Gizli gözlemiyorsa: aksiyon zamanı yaklaşıyor. Yaklaşırsa: derin bir bilgi sana açılıyor.',
    shadow: 'Soğuk gizem. Sırrın hayat tarzı olursa — yalnızlık. Vaşak yalnızdır ama küskün değildir; ayrım var.',
    whenAppears: 'Bir sırrı taşıman/saklamian gerektiğinde, derin gözlem zamanında, kalabalıktan çekilip görüye girdiğinde.',
    traditions: [
      { culture: 'Yunan Mitolojisi', meaning: 'Lynx — adından geliyor "lynx eyed" deyimi: keskin bakış. Görünmeyeni gören.' },
      { culture: 'Kuzey Avrupa',     meaning: 'İskandinav, Finlandiya geleneğinde — orman ruhlarının habercisi.' },
      { culture: 'Kızılderili',     meaning: 'Sırların hayvanı. Vaşak bilenlere bilgi verir, bilmeyenlere görünmez.' },
      { culture: 'Anadolu Halk',     meaning: 'Toroslar\'ın gölgesi. Görenin görüldüğü ama söyleyemediği hayvan — saygı sınırı.' },
      { culture: 'Roma',              meaning: 'Vaşak ışığın tüm renklerini görür sanılırdı — gizli olanı bile parça parça çözer.' },
    ],
    myths: [
      'Lynx\'in Bakışı: Antik kaynaklara göre vaşağın bakışı taşları bile delerdi. Onun ışıltısı kıymetli taşların oluşumunu açıklarmış — gizli kırılmanın görüsü.',
      'Anadolu Toros Vaşağı: Modern zamanlarda neredeyse soyu tükenmiş. Onu son görenler "bakışı seni durdurur" dermiş — biliyor olma duygusunun katlanılmaz ağırlığı.',
    ],
  },

  // ─── a050 Örümcek ───────────────────────────────────────────────────────
  a050: {
    jung: '"Yaratıcı Dokumacı" arketipi. Örümcek — kaderini kendi dokuyan. Hem yaratıcı hem avcı; sabırlı sanatçı.',
    dream: 'Örümcek rüyada — yaratım sürecinde dikkatli olmalısın. Ağ kuruyorsa: planlı bir yaratımdasın. Sana yaklaşıyorsa: bir tuzak ya da fırsat — ayırt et.',
    shadow: 'Ağına başkalarını dolama. Manipülatif kontrol. Örümcek yaratır ama bağımlılaştırırsa — kendi ağında boğulur.',
    whenAppears: 'Yaratıcı projelere başlarken, kaderini yeniden örmek istediğinde, sabırla iplik iplik kurman gereken bir hayatta.',
    traditions: [
      { culture: 'İslam',           meaning: 'Sevr Mağarası — Hz. Muhammed ve Ebubekir kaçarken mağaranın ağzında bir örümcek ağ örer, düşmanlar geçer ama kimsenin orada saklanmadığını sanır.' },
      { culture: 'Yunan Mitolojisi', meaning: 'Arakhne — dokumada Athena\'yı yenince tanrıça onu örümceğe çevirir. İlk dokumacı.' },
      { culture: 'Afrika',           meaning: 'Anansi — örümcek-trickster tanrı. Hikayelerin kralı. Akıllı zayıfın gücü.' },
      { culture: 'Kızılderili',     meaning: 'Spider Grandmother — yaratıcı ana. Dünyayı dokuyan ve yıldız haritasını gönderen.' },
      { culture: 'Anadolu Halk',    meaning: '"Örümcek ağı bozulmuş" — terkedilmişliği ifade eder. Ama aynı zamanda örümcek sebatıyla yeniden örer.' },
    ],
    myths: [
      'Sevr Mağarası: İslam tarihinde Hz. Muhammed Mekke\'den Medine\'ye hicret ederken Ebubekir ile Sevr Mağarası\'na sığınır. Bir örümcek mağaranın ağzında hızla ağ örer, bir güvercin yuva yapar. Mekkeli düşmanlar gelir, ağ ve yuva el değmemiş görünür — kimse orada olamaz sanırlar. En küçük yaratık peygamberi korur.',
      'Anansi\'nin Hikayeleri: Batı Afrika geleneğinde dünyanın bütün hikayeleri başlangıçta gök tanrısının elindedir. Örümcek Anansi onları zekasıyla alır ve insanlığa dağıtır — hikaye anlatmanın atası.',
    ],
  },
};

export function getAnimalLore(id: string): AnimalLore | undefined {
  return ANIMAL_LORE[id];
}
