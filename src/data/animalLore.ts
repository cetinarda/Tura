// Multi-tradition mythological depth for animal guides.
// Layered ON TOP of Ayşe Nilgün Fırat's daily guidance — never replaces it.
// Each animal can be progressively enriched; missing fields render gracefully.

export interface AnimalLore {
  jung?: string;                    // Jungian archetype reading
  dream?: string;                   // Appearance in dreams
  shadow?: string;                  // Shadow aspect / warning
  traditions?: Tradition[];         // Cross-cultural meanings
  myths?: string[];                 // Specific mythological stories
  whenAppears?: string;             // Life-phase pattern
}

export interface Tradition {
  culture: string;   // "Türk Şamanizmi" · "Yunan Mitolojisi" · "Kelt" · "Mısır" · "Vedik" · "Kızılderili" · "Çin" · "İskandinav" · "İslam Tasavvufu" · "Hristiyan"
  meaning: string;   // 1-2 sentence interpretation in that tradition
}

export const ANIMAL_LORE: Record<string, AnimalLore> = {
  // ─── Bozkurt ─────────────────────────────────────────────────────────────
  a001: {
    jung: 'Bozkurt, kolektif bilinçaltında "Yol Gösteren Lider" arketipidir — kaybolmuş benliği eve döndüren içsel ses. Karanlık ormanda ışığı bulduran içgüdü.',
    dream: 'Rüyada bozkurt görmek — yolunu kaybettiğini ama içsel pusulanın hâlâ çalıştığını söyler. Sürünün sesi geliyor; dinle.',
    shadow: 'Gölge tarafı: Sürü zihniyetinde kaybolma. Bozkurt enerjisi kontrol edilemezse kuru otoriter sertlik, kurt sürüsünün acımasızlığı çıkar.',
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

  // ─── Kartal ──────────────────────────────────────────────────────────────
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

  // ─── Geyik ───────────────────────────────────────────────────────────────
  a007: {
    jung: '"Kalbin Habercisi" arketipi. Geyik anima/animus köprüsü — vahşi olduğu kadar nazik, kaçtığı kadar yaklaşan. Ruhun maskülen-feminen dengesinin sembolü.',
    dream: 'Geyik rüyada görünürse — kalp meselesi açılıyor demektir. Geyiği takip ediyorsan, ruhun bir sevgiye yönlendiriliyor. Kaçıyorsa, korkuyorsun.',
    shadow: 'Aşırı hassasiyet. Hep tetikte yaşamak. İnci tanesi gibi titreyen ürkek varlık — sürekli kaçış halinde olmak savunma değil, hapis olur.',
    whenAppears: 'Şefkat sınavında, vahşi ile nazik olan arasında seçim yaparken, sürpriz bir aşk veya kalp açılışında.',
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

  // ─── Baykuş ──────────────────────────────────────────────────────────────
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

  // ─── Aslan ───────────────────────────────────────────────────────────────
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

  // ─── Yılan ───────────────────────────────────────────────────────────────
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

  // ─── Kelebek ─────────────────────────────────────────────────────────────
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

  // ─── Anka / Phoenix ──────────────────────────────────────────────────────
  a006: {
    jung: '"Ölüm-Diriliş" arketipi. En radikal dönüşüm sembolü. Eski benlik ölmeden yeni doğamaz — ateş hem yıkıcı hem yaratıcı.',
    dream: 'Anka rüyada — bir döngünün sona ermesi gerekiyor. Yanıyorsa: dirilişin eşiğindesin. Küllerden çıkıyorsa: çoktan dönüştün, sadece bunu kabul et.',
    shadow: 'Sürekli kriz yaratma. "Kendini yakıp yeniden doğmak" bir yaşam biçimi olursa — stabilite kaybedilir. Drama bağımlılığı.',
    whenAppears: 'Ciddi bir kayıp sonrası, mesleki çöküşte, kimlik krizinde, "bu kadar yeter" dediğin anda.',
    traditions: [
      { culture: 'Yunan Mitolojisi', meaning: 'Phoenix — 500 yılda bir kendini yakıp küllerinden doğan kuş. Helios\'a adanmış.' },
      { culture: 'Mısır',           meaning: 'Bennu — Ra\'nın kuşu. Heliopolis tapınağında her gün yeniden doğan güneş ruhu.' },
      { culture: 'İslam-Sufi',      meaning: 'Simurg — Attar\'ın Mantık-üt Tayr eserinde 30 kuş Simurg\'u aramaya çıkar. Sonunda fark ederler ki: 30 kuş kendileridir (Si=30, Murg=kuş). Hak — kendindedir.' },
      { culture: 'Çin',             meaning: 'Fenghuang — uyum, erdem ve barış sembolü. İmparatoriçenin kuşu.' },
      { culture: 'Türk Mitolojisi', meaning: 'Tuğrul/Anka — Türk hanedanlarının amblemi. Saltanatın ölümsüzlüğü.' },
    ],
    myths: [
      'Attar\'ın Simurg\'u: Dünyanın bütün kuşları kralları olan Simurg\'u bulmak için yolculuğa çıkar. Tehlikeli vadileri geçerler, çoğu ölür. Sonunda 30 kuş kalır ve aynaya bakarlar — Simurg kendileridir. Sufi tasavvufunda "kendini bulma" yolculuğunun en güçlü metaforu.',
      'Mısır Bennu Kuşu: Her sabah Heliopolis tapınağında güneşle birlikte doğan, akşam ölüp tekrar dirilen kutsal kuş. Tanrı Ra\'nın ruhu.',
    ],
  },

  // ─── Tilki ───────────────────────────────────────────────────────────────
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

  // ─── Ayı ─────────────────────────────────────────────────────────────────
  a010: {
    jung: '"Büyük Ana" arketipi — kollayıcı, besleyici, ama sınırını çiğnemeye gelen olursa yıkıcı. İçsel kaynaklara çekilme.',
    dream: 'Ayı rüyada — uyku, dinlenme, içe dönüşe çağrı. Saldırıyorsa: bir sınırın çiğneniyor. Yavrularını koruyorsa: kendine ait olanı savunmalısın.',
    shadow: 'Aşırı içekapanma, depresyon, hibernasyonun bitmemesi. Ayı uyandığında çıkmazsa — soğukta donar.',
    whenAppears: 'Sosyal yorgunlukta, bir krizden sonra şifaya çekildiğinde, "kovukma" döneminde, koruyucu enerjini bulman gerekirken.',
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
};

export function getAnimalLore(id: string): AnimalLore | undefined {
  return ANIMAL_LORE[id];
}
