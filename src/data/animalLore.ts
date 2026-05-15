// Multi-tradition mythological depth for animal guides.
// Layered ON TOP of Ayşe Nilgün Fırat's daily guidance — never replaces it.
// Each animal can be progressively enriched; missing fields render gracefully.

type Bilingual = { tr: string; en: string };
type BilingualTradition = { culture: Bilingual; meaning: Bilingual };

export interface AnimalLore {
  jung?: Bilingual;
  dream?: Bilingual;
  shadow?: Bilingual;
  traditions?: BilingualTradition[];
  myths?: Bilingual[];
  whenAppears?: Bilingual;
}

export interface Tradition {
  culture: string;
  meaning: string;
}

export const ANIMAL_LORE: Record<string, AnimalLore> = {
  // ─── a001 Bozkurt ───────────────────────────────────────────────────────
  a001: {
    jung: {
      tr: 'Bozkurt, kolektif bilinçaltında "Yol Gösteren Lider" arketipidir — kaybolmuş benliği eve döndüren içsel ses. Karanlık ormanda ışığı bulduran içgüdü.',
      en: 'The Grey Wolf is the "Guiding Leader" archetype within the Collective Unconscious — the inner voice that returns the lost Self home. The instinct that finds light in the dark forest.',
    },
    dream: {
      tr: 'Rüyada bozkurt — yolunu kaybettiğini ama içsel pusulanın hâlâ çalıştığını söyler. Sürünün sesi geliyor; dinle.',
      en: 'A wolf in dream — tells you that you have lost your way, but your inner compass still works. The call of the pack is coming; listen.',
    },
    shadow: {
      tr: 'Sürü zihniyetinde kaybolma. Bozkurt enerjisi kontrol edilemezse otoriter sertlik, kurt sürüsünün acımasızlığı çıkar.',
      en: 'Losing oneself in pack mentality. If the wolf energy goes unchecked, it manifests as authoritarian harshness and the ruthlessness of the wolf pack.',
    },
    whenAppears: {
      tr: 'Yalnız kaldığında, liderlik testinde, ailene/topluluğuna döndüğünde.',
      en: 'When you are alone, facing a test of leadership, returning to your family or community.',
    },
    traditions: [
      { culture: { tr: 'Türk Şamanizmi', en: 'Turkic Shamanism' }, meaning: { tr: 'Asena/Bozkurt — kutsal ata. Göktürk efsanesinde kaybolan halkı kurtaran ana. Devlet kurucu enerji.', en: 'Asena/Grey Wolf — the sacred ancestor. In the Göktürk legend, the mother who saved the lost people. State-founding energy.' } },
      { culture: { tr: 'Roma Mitolojisi', en: 'Roman Mythology' }, meaning: { tr: 'Lupa — Romulus ve Remus\'u emziren dişi kurt. Şehir kurucu, medeniyet besleyici.', en: 'Lupa — the she-wolf who suckled Romulus and Remus. City-founder, nurturer of civilization.' } },
      { culture: { tr: 'İskandinav', en: 'Norse' }, meaning: { tr: 'Fenrir — kontrol edilemeyen kozmik güç. Aynı zamanda Odin\'in iki yol arkadaşı Geri ve Freki.', en: 'Fenrir — uncontrollable cosmic force. Also Odin\'s two companions, Geri and Freki.' } },
      { culture: { tr: 'Kızılderili', en: 'Native American' }, meaning: { tr: 'Lakota geleneğinde "öğretmen". Sürü, aile, sadakat dersleri verir.', en: 'In Lakota tradition, the "teacher". Imparts lessons of pack, family, and loyalty.' } },
      { culture: { tr: 'Kelt', en: 'Celtic' }, meaning: { tr: 'Cu Chulainn\'in koruyucusu. Ay\'ın bekçisi, geçişlerin habercisi.', en: 'Protector of Cú Chulainn. Guardian of the Moon, herald of transitions.' } },
    ],
    myths: [
      { tr: 'Göktürk Efsanesi: Düşman tarafından yok edilen Türk soyundan sağ kalan tek çocuğu Asena dişi kurdu kurtarır, mağarada büyütür. Türk halkı bu çocuğun soyundan türer.', en: 'Göktürk Legend: Asena, the she-wolf, rescues the sole surviving child of the Turkic lineage destroyed by enemies and raises him in a cave. The Turkic people descend from this child.' },
      { tr: 'Roma\'nın Kuruluşu: Romulus ve Remus\'u nehre bırakılınca dişi kurt Lupa bulup emzirir. Roma şehri bu çocuklar tarafından kurulur.', en: 'The Founding of Rome: When Romulus and Remus were left by the river, the she-wolf Lupa found and suckled them. The city of Rome was founded by these children.' },
    ],
  },

  // ─── a002 Kartal ────────────────────────────────────────────────────────
  a002: {
    jung: { tr: 'Kartal, "Yüksek Benlik" arketipidir. Egodan kopup ruhsal perspektife geçişin sembolü. Üçüncü gözün hayvan formu.', en: 'The Eagle is the "Higher Self" archetype. A symbol of detaching from ego into spiritual perspective. The animal form of the third eye.' },
    dream: { tr: 'Kartalın uçtuğunu görmek — düşüncenin yükseldiğine, sorunun küçüldüğüne işaret. Kartal seni avlıyorsa: yüksek bir gerçek aşağıdan seni yakalamaya geliyor.', en: 'Seeing an eagle in flight — indicates that thought is rising and the problem is shrinking. If the eagle is hunting you: a higher truth is coming from above to catch you.' },
    shadow: { tr: 'Soğuk uzaklık. Toprağa bağlanmamış zihinsellik. Mesafeden bakmak insandan kopmaya dönüşürse — kartal düşer.', en: 'Cold distance. Mentality unrooted from the earth. When viewing from afar turns into disconnection from humanity — the eagle falls.' },
    whenAppears: { tr: 'Büyük kararlar öncesi, perspektif kaybettiğinde, hayalle gerçek arasında köprü kurarken.', en: 'Before major decisions, when you have lost perspective, while bridging dream and reality.' },
    traditions: [
      { culture: { tr: 'Yunan Mitolojisi', en: 'Greek Mythology' }, meaning: { tr: 'Zeus\'un kuşu. Tanrının iradesini taşıyan haberci. Ganimedes\'i Olympos\'a taşıyan ruhsal yükselici.', en: 'Zeus\'s bird. The messenger carrying the god\'s will. The spiritual ascender who carried Ganymede to Olympus.' } },
      { culture: { tr: 'Hitit', en: 'Hittite' }, meaning: { tr: 'Çift başlı kartal — gökle yerin birleşim noktası. Anadolu\'nun en kadim devlet sembolü.', en: 'The double-headed eagle — the meeting point of sky and earth. Anatolia\'s most ancient symbol of statehood.' } },
      { culture: { tr: 'Kızılderili', en: 'Native American' }, meaning: { tr: 'Wakan Tanka\'nın (Büyük Ruh) habercisi. Tüy en kutsal hediye.', en: 'Messenger of Wakan Tanka (the Great Spirit). The feather is the most sacred gift.' } },
      { culture: { tr: 'Hristiyan', en: 'Christian' }, meaning: { tr: 'Aziz Yuhanna\'nın sembolü. Diriliş ve ilahi vahiy.', en: 'Symbol of Saint John. Resurrection and divine revelation.' } },
      { culture: { tr: 'Vedik', en: 'Vedic' }, meaning: { tr: 'Garuda — Vishnu\'nun bineği. Yılan-bilgisini taşıyan ruhsal güç.', en: 'Garuda — Vishnu\'s mount. The spiritual force bearing serpent-wisdom.' } },
    ],
    myths: [
      { tr: 'Prometheus: Tanrılardan ateşi çalan Prometheus\'u her gün kartal yer. Burada kartal — ego cezalandırıcı, ama aynı zamanda yenilenme döngüsünün taşıyıcısı.', en: 'Prometheus: The eagle daily devours Prometheus, who stole fire from the gods. Here the eagle is the ego-punisher, yet also the bearer of the cycle of renewal.' },
      { tr: 'Hitit Çifte Kartalı: Selçuklu\'dan modern Türk devletine kadar — iki yöne bakan tek kartal. Geçmiş ve gelecek.', en: 'The Hittite Double Eagle: From the Seljuks to the modern Turkish state — a single eagle gazing in two directions. Past and future.' },
    ],
  },

  // ─── a003 At ────────────────────────────────────────────────────────────
  a003: {
    jung: { tr: '"Yaşam Gücü/Libido" arketipi. At, içsel enerjinin sembolüdür — eyerlenmiş hâli irade, vahşi hâli içgüdü. Animanın bineği.', en: 'The "Life Force/Libido" archetype. The horse symbolizes inner energy — saddled it is will, wild it is instinct. The Anima\'s mount.' },
    dream: { tr: 'Rüyada at — özgürlük çağrısı. Beyaz at: yükselen ruhsallık. Siyah at: bastırılmış arzu. At dizginsizse: hayatın seni sürüklüyor.', en: 'A horse in dream — a call to freedom. White horse: rising spirituality. Black horse: repressed desire. If the horse is unbridled: life is dragging you along.' },
    shadow: { tr: 'Kontrolsüz tutku. Atın gemini bırakmak — disiplinsiz tutkuyla harcanan ömür. Ya da: hep eyerli kalmak, asla koşamamak.', en: 'Uncontrolled passion. To let go of the reins — a life spent on undisciplined passion. Or: always staying saddled, never being able to run.' },
    whenAppears: { tr: 'Bir yola çıkma anında, büyük göç/seyahat öncesi, içsel bir tutkunun uyanışında, özgürleşme zamanı.', en: 'At the moment of setting out, before a great migration or journey, at the awakening of an inner passion, in time of liberation.' },
    traditions: [
      { culture: { tr: 'Türk Mitolojisi', en: 'Turkic Mythology' }, meaning: { tr: 'At "yiğidin kanadı" — Dede Korkut destanlarında ayrılmaz yoldaş. Tulpar — uçan kanatlı at, Tanrı bineği.', en: 'The horse is "the hero\'s wing" — the inseparable companion in the Dede Korkut epics. Tulpar — the flying winged horse, the divine mount.' } },
      { culture: { tr: 'Yunan Mitolojisi', en: 'Greek Mythology' }, meaning: { tr: 'Pegasus — Medusa\'nın kanından doğan kanatlı at. İlham perilerinin bineği. Şair-savaşçı sembolü.', en: 'Pegasus — the winged horse born of Medusa\'s blood. Mount of the Muses. Symbol of the poet-warrior.' } },
      { culture: { tr: 'Kelt', en: 'Celtic' }, meaning: { tr: 'Epona — at tanrıçası. Ölülerin ruhlarını öteye taşıyan rehber.', en: 'Epona — the horse goddess. The guide who carries the souls of the dead to the beyond.' } },
      { culture: { tr: 'Vedik', en: 'Vedic' }, meaning: { tr: 'Ashvamedha — at kurbanı kralın kozmik egemenliği için. Vishnu\'nun Kalki avatarı beyaz at üstündedir.', en: 'Ashvamedha — the horse sacrifice for the king\'s cosmic sovereignty. Vishnu\'s Kalki avatar rides a white horse.' } },
      { culture: { tr: 'Hristiyan', en: 'Christian' }, meaning: { tr: 'Vahiy kitabında dört atlı — fetih, savaş, kıtlık, ölüm. Apokaliptik haberci.', en: 'The four horsemen of Revelation — conquest, war, famine, death. Apocalyptic messengers.' } },
    ],
    myths: [
      { tr: 'Pegasus ve Bellerophon: Bellerophon kanatlı Pegasus\'u ehlileştirir, Khimera canavarını öldürür. Ama Olympos\'a çıkmaya kalkınca Zeus onu düşürür — kibrin cezası.', en: 'Pegasus and Bellerophon: Bellerophon tames the winged Pegasus and slays the Chimera. But when he tries to ascend to Olympus, Zeus throws him down — the punishment of hubris.' },
      { tr: 'Dede Korkut\'ta At: "Yiğidin başı omuzun üstünde, yiğidin atı yanı başında." Anadolu kahramanı ile atı arasındaki kardeşlik.', en: 'The Horse in Dede Korkut: "The hero\'s head upon his shoulders, the hero\'s horse at his side." The brotherhood between the Anatolian hero and his horse.' },
    ],
  },

  // ─── a004 Turna ─────────────────────────────────────────────────────────
  a004: {
    jung: { tr: '"Sadık Hac Yolcusu" arketipi. Turna, döngüsel uzun yolculuğun, kararlılığın ve sadakatin sembolü. Aşk için göç eden kalp.', en: 'The "Faithful Pilgrim" archetype. The crane is a symbol of the cyclical long journey, determination, and loyalty. The heart that migrates for love.' },
    dream: { tr: 'Turna rüyada — uzun bekleyişlerin meyvesinin yaklaştığını söyler. Sürü hâlinde uçuyorsa: dostluk/topluluk bir şey kuruyor. Yalnızsa: sevdiğine yöneliş.', en: 'A crane in dream — tells you the fruit of long waiting is near. Flying in a flock: friendship/community is building something. Alone: turning toward your beloved.' },
    shadow: { tr: 'Bir ümitle ömür boyu beklemek. Turna döngüsü kararlılık olabilir, ama gerçeklikten kaçışsa — donmuş hayat.', en: 'Waiting a lifetime on a single hope. The crane\'s cycle may be determination, but if it is flight from reality — a frozen life.' },
    whenAppears: { tr: 'Uzun ayrılık sonrası kavuşmada, evlilik/sözleşme öncesinde, sabırla beklenmiş bir habere yakın.', en: 'At a reunion after long separation, before marriage or covenant, near news patiently awaited.' },
    traditions: [
      { culture: { tr: 'Alevi-Bektaşi', en: 'Alevi-Bektashi' }, meaning: { tr: 'Hz. Ali\'nin kutsal kuşu. Semah\'ta turna duruşu — kanatların aşk için açılışı. Cemde rehber kuş.', en: 'The sacred bird of Imam Ali. The crane posture in the Semah — wings opening for love. The guide-bird of the cem ceremony.' } },
      { culture: { tr: 'Türk Halk', en: 'Turkish Folk' }, meaning: { tr: '"Turnalar geldi" ezgisi — sevdiğine haber, gurbet kavuşması. Anadolu\'nun en içli kuşu.', en: 'The "Cranes have come" song — news to the beloved, reunion from exile. Anatolia\'s most soulful bird.' } },
      { culture: { tr: 'Japonya', en: 'Japanese' }, meaning: { tr: 'Tsuru — 1000 yıl yaşar, uzun ömür sembolü. 1000 turna katlamak (senbazuru) — bir dileğin kabulü.', en: 'Tsuru — lives 1,000 years, symbol of longevity. Folding 1,000 cranes (senbazuru) — the granting of a wish.' } },
      { culture: { tr: 'Çin', en: 'Chinese' }, meaning: { tr: 'Taoist ölümsüzlerin bineği. Erdem ve bilgelik sembolü.', en: 'Mount of the Taoist immortals. Symbol of virtue and wisdom.' } },
      { culture: { tr: 'Yunan Mitolojisi', en: 'Greek Mythology' }, meaning: { tr: 'Hermes\'in alfabesi turnaların uçuş dizilişinden. Yazının habercisi.', en: 'Hermes\'s alphabet came from the flight formations of cranes. Herald of writing.' } },
    ],
    myths: [
      { tr: 'Pir Sultan ve Turnalar: "Yürü bre Hızır Paşa / Senin de çarkın kırılır" — Anadolu\'da turnalar Pir Sultan\'a haber taşıyan, sözü ileten kuşlar.', en: 'Pir Sultan and the Cranes: "Go forth, Hızır Pasha / Your wheel too shall break" — in Anatolia, cranes are the birds that bear news and carry the word to Pir Sultan.' },
      { tr: 'Senbazuru: Hiroshima\'da bombadan etkilenen Sadako adlı kız iyileşmek için 1000 turna katlamaya başlar. Hikayesi dünyada barış sembolü olur.', en: 'Senbazuru: Sadako, a girl affected by the Hiroshima bombing, begins folding 1,000 cranes to heal. Her story becomes a worldwide symbol of peace.' },
    ],
  },

  // ─── a005 Hüma Kuşu ─────────────────────────────────────────────────────
  a005: {
    jung: { tr: '"Kutsal Kader" arketipi. Hüma, kişiyi seçen ilahi mukadderatın sembolü — gölgesi başına düşene saltanat veren mitik kuş.', en: 'The "Sacred Destiny" archetype. Huma is the symbol of divine fate that chooses a person — the mythic bird that bestows sovereignty upon whoever its shadow falls on.' },
    dream: { tr: 'Hüma rüyada — bir lütfun, beklenmedik bir nimetin yaklaştığını söyler. Üstüne konuyorsa: kaderin sana yöneliyor. Yüksekten geçiyorsa: izle, takip et.', en: 'Huma in dream — tells you a grace, an unexpected blessing, is near. If it lands on you: destiny turns toward you. If it passes overhead: watch, follow.' },
    shadow: { tr: 'Kaderi beklemek için hareket etmemek. "Hüma kuşum nerede?" diye oturup hayatı kaçırmak. Mistik bir bahane.', en: 'Not acting while waiting for fate. Sitting and asking "Where is my Huma?" while missing life. A mystical excuse.' },
    whenAppears: { tr: 'Beklenmedik bir fırsat çıkmadan önce, hak ettiğin tanınma anında, kader anlarında.', en: 'Before an unexpected opportunity arises, at the moment of the recognition you deserve, in moments of destiny.' },
    traditions: [
      { culture: { tr: 'Pers/İran', en: 'Persian/Iranian' }, meaning: { tr: 'Hümay-i Saadet — saadet kuşu. Asla yere konmaz, hep havadadır. Gölgesi başa düşene padişahlık nasip olur.', en: 'Humay-i Saadet — the bird of felicity. Never lands, ever airborne. Whoever its shadow falls upon is destined for kingship.' } },
      { culture: { tr: 'Türk-İslam', en: 'Turco-Islamic' }, meaning: { tr: 'Osmanlı sarayında "Hüma" bahtın simgesi. Tahta çıkacak şehzadeyi belirleyen kutsal kuş.', en: 'In the Ottoman court, Huma was the symbol of fortune. The sacred bird that designated which prince would ascend the throne.' } },
      { culture: { tr: 'Sufi', en: 'Sufi' }, meaning: { tr: 'Yüksekte uçar, asla durmaz — "tarikat-ı seyr" sembolü. Aşkın kuşu hep yolda.', en: 'Flies high, never stopping — the symbol of "the path of wayfaring". The bird of love is ever on the road.' } },
      { culture: { tr: 'Hint', en: 'Hindu' }, meaning: { tr: 'Garuda\'nın akrabası — gökyüzü tanrılarının habercisi.', en: 'A kin of Garuda — herald of the sky gods.' } },
      { culture: { tr: 'Anadolu Halk', en: 'Anatolian Folk' }, meaning: { tr: '"Hüma kuşunun gölgesi başına düşsün" duası — büyük kısmet temennisi.', en: '"May the shadow of the Huma fall upon you" — a blessing wishing great fortune.' } },
    ],
    myths: [
      { tr: 'Hüma ve Sultan: Anadolu efsanesinde tahta çıkacak şehzadeyi seçmek için Hüma kuşu salınır. Kimin başına gölgesi düşerse o sultan olur — kader önceden bellidir, ama kuşun seçimine güven gerekir.', en: 'Huma and the Sultan: In Anatolian legend, the Huma bird is released to choose which prince will ascend the throne. Whoever its shadow falls upon becomes sultan — destiny is foreordained, yet one must trust the bird\'s choice.' },
      { tr: 'Attar\'ın Hüması: "Mantık-üt Tayr"da Hüma ölümsüzlüğün ve göklerin kuşudur — Simurg\'a ulaşmaya çalışan otuz kuşun rehberlerinden.', en: 'Attar\'s Huma: In "The Conference of the Birds," Huma is the bird of immortality and the heavens — one of the guides for the thirty birds seeking the Simurgh.' },
    ],
  },

  // ─── a006 Anka ──────────────────────────────────────────────────────────
  a006: {
    jung: { tr: '"Ölüm-Diriliş" arketipi. En radikal dönüşüm sembolü. Eski benlik ölmeden yeni doğamaz — ateş hem yıkıcı hem yaratıcı.', en: 'The "Death-Rebirth" archetype. The most radical symbol of transformation. The new cannot be born until the old Self dies — fire is both destroyer and creator.' },
    dream: { tr: 'Anka rüyada — bir döngünün sona ermesi gerekiyor. Yanıyorsa: dirilişin eşiğindesin. Küllerden çıkıyorsa: çoktan dönüştün, sadece bunu kabul et.', en: 'Phoenix in dream — a cycle must end. If it burns: you are on the threshold of resurrection. If it rises from ashes: you have already transformed, only accept it.' },
    shadow: { tr: 'Sürekli kriz yaratma. "Kendini yakıp yeniden doğmak" bir yaşam biçimi olursa — stabilite kaybedilir. Drama bağımlılığı.', en: 'Constantly creating crisis. If "burning oneself and being reborn" becomes a way of life — stability is lost. Addiction to drama.' },
    whenAppears: { tr: 'Ciddi bir kayıp sonrası, mesleki çöküşte, kimlik krizinde, "bu kadar yeter" dediğin anda.', en: 'After a serious loss, in professional collapse, in identity crisis, at the moment you say "enough".' },
    traditions: [
      { culture: { tr: 'Yunan Mitolojisi', en: 'Greek Mythology' }, meaning: { tr: 'Phoenix — 500 yılda bir kendini yakıp küllerinden doğan kuş. Helios\'a adanmış.', en: 'Phoenix — the bird that immolates itself and is reborn from its ashes every 500 years. Dedicated to Helios.' } },
      { culture: { tr: 'Mısır', en: 'Egyptian' }, meaning: { tr: 'Bennu — Ra\'nın kuşu. Heliopolis tapınağında her gün yeniden doğan güneş ruhu.', en: 'Bennu — Ra\'s bird. The solar spirit reborn each day in the temple of Heliopolis.' } },
      { culture: { tr: 'İslam-Sufi', en: 'Islamic-Sufi' }, meaning: { tr: 'Simurg — Attar\'ın eserinde 30 kuş Simurg\'u arar. Sonunda fark ederler ki: 30 kuş kendileridir (Si=30, Murg=kuş).', en: 'Simurgh — in Attar\'s work, thirty birds seek the Simurgh. In the end they realize: the thirty birds are themselves (Si = thirty, Murgh = bird).' } },
      { culture: { tr: 'Çin', en: 'Chinese' }, meaning: { tr: 'Fenghuang — uyum, erdem ve barış sembolü. İmparatoriçenin kuşu.', en: 'Fenghuang — symbol of harmony, virtue, and peace. The empress\'s bird.' } },
      { culture: { tr: 'Türk Mitolojisi', en: 'Turkic Mythology' }, meaning: { tr: 'Tuğrul/Anka — Türk hanedanlarının amblemi. Saltanatın ölümsüzlüğü.', en: 'Tuğrul/Anka — emblem of the Turkic dynasties. The immortality of sovereignty.' } },
    ],
    myths: [
      { tr: 'Attar\'ın Simurg\'u: Dünyanın bütün kuşları kralları Simurg\'u bulmak için yolculuğa çıkar. Tehlikeli vadileri geçerler, çoğu ölür. Sonunda 30 kuş kalır ve aynaya bakarlar — Simurg kendileridir. Sufi\'de "kendini bulma"nın en güçlü metaforu.', en: 'Attar\'s Simurgh: All the world\'s birds set out to find their king, the Simurgh. They cross perilous valleys; most perish. In the end, thirty birds remain and look into a mirror — the Simurgh is themselves. In Sufism, the most powerful metaphor for self-realization.' },
      { tr: 'Mısır Bennu Kuşu: Her sabah Heliopolis tapınağında güneşle birlikte doğan, akşam ölüp tekrar dirilen kutsal kuş. Tanrı Ra\'nın ruhu.', en: 'The Egyptian Bennu Bird: The sacred bird reborn each morning with the sun in the temple of Heliopolis, dying each evening only to rise again. The soul of the god Ra.' },
    ],
  },

  // ─── a007 Geyik ─────────────────────────────────────────────────────────
  a007: {
    jung: { tr: '"Kalbin Habercisi" arketipi. Geyik anima/animus köprüsü — vahşi olduğu kadar nazik, kaçtığı kadar yaklaşan. Maskülen-feminen dengesinin sembolü.', en: 'The "Herald of the Heart" archetype. The deer is the Anima/Animus bridge — as wild as it is gentle, as fleeing as it is approaching. Symbol of the masculine-feminine balance.' },
    dream: { tr: 'Geyik rüyada görünürse — kalp meselesi açılıyor demektir. Geyiği takip ediyorsan, ruhun bir sevgiye yönlendiriliyor. Kaçıyorsa, korkuyorsun.', en: 'If a deer appears in dream — a matter of the heart is opening. If you follow the deer, your soul is being guided toward a love. If it flees, you are afraid.' },
    shadow: { tr: 'Aşırı hassasiyet. Hep tetikte yaşamak. Sürekli kaçış halinde olmak savunma değil, hapis olur.', en: 'Excessive sensitivity. Living always on edge. Being in constant flight becomes not defense but imprisonment.' },
    whenAppears: { tr: 'Şefkat sınavında, vahşi ile nazik arasında seçim yaparken, sürpriz bir aşk veya kalp açılışında.', en: 'In a test of tenderness, while choosing between wild and gentle, at a surprise love or opening of the heart.' },
    traditions: [
      { culture: { tr: 'Türk Mitolojisi', en: 'Turkic Mythology' }, meaning: { tr: 'Hakan Oğuz Han\'a yol gösteren kutsal ak geyik. Devleti kuran rehber.', en: 'The sacred white deer that guided Oğuz Khan. The guide who founded the state.' } },
      { culture: { tr: 'Kelt', en: 'Celtic' }, meaning: { tr: 'Cernunnos — boynuzlu geyik tanrısı. Vahşi doğanın kralı, döngüsel ölüm-doğum.', en: 'Cernunnos — the horned stag god. King of wild nature, cyclical death and birth.' } },
      { culture: { tr: 'Hristiyan', en: 'Christian' }, meaning: { tr: 'Aziz Eustace\'in görmesi — boynuzları arasında haç taşıyan geyik. İlahi çağrı.', en: 'The vision of Saint Eustace — a stag bearing a cross between its antlers. The divine summons.' } },
      { culture: { tr: 'Şamanik', en: 'Shamanic' }, meaning: { tr: 'Sibirya şamanları ruhlar alemine geyikle yolculuk eder. Üç dünya arasında köprü.', en: 'Siberian shamans journey to the spirit realm on the deer. A bridge between the three worlds.' } },
      { culture: { tr: 'Yunan Mitolojisi', en: 'Greek Mythology' }, meaning: { tr: 'Artemis\'in kutsal hayvanı. Bakire avcı tanrıçanın bineği ve simgesi.', en: 'Artemis\'s sacred animal. Mount and emblem of the virgin huntress goddess.' } },
    ],
    myths: [
      { tr: 'Oğuz Han Destanı: Oğuz Han avlanırken karşısına bir ak geyik çıkar, onu izleyerek yeni topraklara ulaşır ve devletini kurar.', en: 'The Oğuz Khan Epic: While hunting, Oğuz Khan encounters a white deer; following it, he reaches new lands and founds his state.' },
      { tr: 'Aziz Eustace: Romalı bir general avlanırken bir geyikle karşılaşır, boynuzları arasında haç görür — bu görüntüyle Hristiyanlığa geçer.', en: 'Saint Eustace: While hunting, a Roman general encounters a stag and sees a cross between its antlers — by this vision he converts to Christianity.' },
    ],
  },

  // ─── a008 Baykuş ────────────────────────────────────────────────────────
  a008: {
    jung: { tr: '"Bilge Yaşlı" arketipi — Senex. Karanlıkta görme yeteneği; bilinçaltını okuma kapasitesi. Gece zekası.', en: 'The "Wise Elder" archetype — Senex. The ability to see in darkness; the capacity to read the unconscious. Nocturnal intelligence.' },
    dream: { tr: 'Baykuş rüyada — bir sırrın çözülmek üzere olduğunu söyler. Ya da bir aldatma fark ediliyor. Baykuşun bakışı: gerçeği görme zamanı geldi.', en: 'Owl in dream — says a secret is about to be unraveled. Or a deception is being noticed. The owl\'s gaze: the time to see the truth has come.' },
    shadow: { tr: 'Kötümser bilgelik. Her şeyi "görmek" insanı yalnızlaştırırsa baykuş — küskün münzeviye dönüşür. Bilgi acıya dönüşür.', en: 'Pessimistic wisdom. If "seeing everything" isolates a person, the owl turns into a resentful hermit. Knowledge becomes pain.' },
    whenAppears: { tr: 'Aldatıldığında, gizli bir gerçek hissettiğinde, içe çekilme döneminde, sezgin keskinleştiğinde.', en: 'When you are deceived, when you sense a hidden truth, in a period of withdrawal, when your intuition sharpens.' },
    traditions: [
      { culture: { tr: 'Yunan Mitolojisi', en: 'Greek Mythology' }, meaning: { tr: 'Athena\'nın kuşu. Bilgelik tanrıçasının zeka simgesi. Atina sikkelerinde basılı.', en: 'Athena\'s bird. Symbol of the wisdom goddess\'s intellect. Stamped on Athenian coins.' } },
      { culture: { tr: 'Mısır', en: 'Egyptian' }, meaning: { tr: 'Ölüler diyarının bekçisi. Geçişin ve gece âleminin hayvanı.', en: 'Guardian of the land of the dead. Animal of transition and the nocturnal realm.' } },
      { culture: { tr: 'Kızılderili', en: 'Native American' }, meaning: { tr: 'Hopi geleneğinde uyarıcı — kötü haberi taşıyan ama doğruyu söyleyen.', en: 'In Hopi tradition, the warner — bearer of bad news yet speaker of truth.' } },
      { culture: { tr: 'Türk Halk İnancı', en: 'Turkish Folk Belief' }, meaning: { tr: 'Anadolu\'da uğursuz sayılan ama gerçekte kadim bilgeliği taşıyan. Atalardan miras zihinsel direnç.', en: 'In Anatolia regarded as ill-omened, yet truly the bearer of ancient wisdom. Mental endurance inherited from the ancestors.' } },
      { culture: { tr: 'Hint', en: 'Hindu' }, meaning: { tr: 'Lakshmi\'nin bineği. Bolluk tanrıçasının gözleri — karanlıkta bile bereketi görür.', en: 'Lakshmi\'s mount. The eyes of the goddess of abundance — sees prosperity even in darkness.' } },
    ],
    myths: [
      { tr: 'Athena ve Baykuş: Bilgelik tanrıçası Athena\'nın omzunda taşıdığı baykuş, sahibinin sezgilerini ve görüsünü taşır. Atina\'nın sembolü.', en: 'Athena and the Owl: The owl carried on the shoulder of Athena, goddess of wisdom, bears its mistress\'s intuition and vision. Symbol of Athens.' },
      { tr: 'Anadolu\'da Baykuş: "Baykuş öttü, kötü oldu" inanışı yüzyıllar boyu sürmüş — ama gerçek şaman geleneğinde baykuş atadan haberdir.', en: 'The Owl in Anatolia: The belief "the owl hooted, ill has come" lasted centuries — but in true shamanic tradition the owl is a message from the ancestors.' },
    ],
  },

  // ─── a009 Aslan ─────────────────────────────────────────────────────────
  a009: {
    jung: { tr: '"Kral" arketipi. Sezar, Pir, Hükümdar. İçsel otoritenin sembolü. Egoyu hizmete dönüştürme gücü.', en: 'The "King" archetype. Caesar, Pir, Sovereign. Symbol of inner authority. The power to transform ego into service.' },
    dream: { tr: 'Aslan rüyada — içindeki kral uyanıyor. Üzerine atıyor mu? Bastırdığın bir gücün geri istiyor. Yanında yatıyor mu? Otoritene barıştın.', en: 'Lion in dream — the king within you awakens. Does it pounce? A force you have suppressed wants itself back. Does it lie beside you? You have made peace with your authority.' },
    shadow: { tr: 'Kibir ve narsisizm. Kral arketipi denetlenmezse — tiranlık, açlık doymayan ego, gösteriş için var olma.', en: 'Arrogance and narcissism. When the King archetype goes unchecked — tyranny, an ego whose hunger is never sated, existing for display.' },
    whenAppears: { tr: 'Otorite sınavında, lider olarak çıkma zamanında, haksızlığa uğradığında, sesini yükseltmen gerekirken.', en: 'In a test of authority, when it is time to rise as a leader, when you have been wronged, when you must raise your voice.' },
    traditions: [
      { culture: { tr: 'Mısır', en: 'Egyptian' }, meaning: { tr: 'Sekhmet — aslan başlı tanrıça. Şiddetli iyileştirici. Sahmet adaletin koruyucusu.', en: 'Sekhmet — the lion-headed goddess. Fierce healer. Sekhmet, guardian of justice.' } },
      { culture: { tr: 'Hitit', en: 'Hittite' }, meaning: { tr: 'Tapınak bekçisi. Anadolu\'da Hattuşa kapılarında taş aslanlar — sınırın koruyucuları.', en: 'Temple guardian. In Anatolia, the stone lions at the gates of Hattusa — protectors of the threshold.' } },
      { culture: { tr: 'Hristiyan', en: 'Christian' }, meaning: { tr: 'Aziz Markos\'un sembolü. Diriliş ve İsa\'nın krallığı. "Yahuda\'nın aslanı".', en: 'Symbol of Saint Mark. Resurrection and the kingship of Christ. The "Lion of Judah".' } },
      { culture: { tr: 'Vedik', en: 'Vedic' }, meaning: { tr: 'Narasimha — Vishnu\'nun aslan-insan avatarı. Adaletsizliği yıkıcı kutsal öfke.', en: 'Narasimha — Vishnu\'s lion-man avatar. Holy wrath destructive of injustice.' } },
      { culture: { tr: 'Yunan Mitolojisi', en: 'Greek Mythology' }, meaning: { tr: 'Nemea aslanı — Herakles\'in ilk işi. Bastırılması gereken vahşi güç.', en: 'The Nemean Lion — Heracles\'s first labor. The wild force that must be subdued.' } },
    ],
    myths: [
      { tr: 'Sekhmet: Mısır mitolojisinde insanları kötülüklerinden temizlemek için gönderilen aslan başlı tanrıça. Hem yıkıcı hem de şifa veren güç.', en: 'Sekhmet: In Egyptian mythology, the lion-headed goddess sent to purge humanity of its evils. A force both destructive and healing.' },
      { tr: 'Hitit Aslan Kapısı: Bu aslanlar 3500 yıldır şehri korumaya devam ediyor — Anadolu\'nun ilk kralları aslanı sınırın bekçisi yaptı.', en: 'The Hittite Lion Gate: These lions have guarded the city for 3,500 years — the first kings of Anatolia made the lion the keeper of the threshold.' },
    ],
  },

  // ─── a010 Ayı ──────────────────────────────────────────────────────────
  a010: {
    jung: { tr: '"Büyük Ana" arketipi — kollayıcı, besleyici, ama sınırını çiğnemeye gelen olursa yıkıcı. İçsel kaynaklara çekilme.', en: 'The "Great Mother" archetype — protective, nourishing, yet destructive if her boundary is crossed. Withdrawal into inner resources.' },
    dream: { tr: 'Ayı rüyada — uyku, dinlenme, içe dönüşe çağrı. Saldırıyorsa: bir sınırın çiğneniyor. Yavrularını koruyorsa: kendine ait olanı savunmalısın.', en: 'Bear in dream — a call to sleep, rest, turning inward. If attacking: a boundary of yours is being crossed. If protecting cubs: you must defend what is yours.' },
    shadow: { tr: 'Aşırı içekapanma, depresyon, hibernasyonun bitmemesi. Ayı uyandığında çıkmazsa — soğukta donar.', en: 'Excessive withdrawal, depression, hibernation that never ends. If the bear does not emerge when it wakes — it freezes in the cold.' },
    whenAppears: { tr: 'Sosyal yorgunlukta, bir krizden sonra şifaya çekildiğinde, koruyucu enerjini bulman gerekirken.', en: 'In social exhaustion, when withdrawing to heal after a crisis, when you must find your protective energy.' },
    traditions: [
      { culture: { tr: 'Kızılderili', en: 'Native American' }, meaning: { tr: 'Şifa hayvanı. Tıp adamları "Ayı Tıbbı" toplar. Mağaraya çekilip rüyada öğrenme.', en: 'The healing animal. Medicine people gather "Bear Medicine". Withdrawing into the cave to learn in dream.' } },
      { culture: { tr: 'Kelt', en: 'Celtic' }, meaning: { tr: 'Artos — savaşçı kraliçenin sembolü. Kral Arthur\'un adı buradan gelir.', en: 'Artos — symbol of the warrior queen. The name of King Arthur derives from this.' } },
      { culture: { tr: 'Sibirya/Şamanik', en: 'Siberian/Shamanic' }, meaning: { tr: 'Ayı törenleri — avlandıktan sonra ruhuna saygı duruşu. Atalar ayıdan türemiş kabul edilir.', en: 'Bear ceremonies — a salute to the bear\'s spirit after the hunt. Ancestors are held to descend from the bear.' } },
      { culture: { tr: 'Yunan Mitolojisi', en: 'Greek Mythology' }, meaning: { tr: 'Artemis\'in formu. Kalypso\'nun mağarası — ayı annenin sığınağı.', en: 'A form of Artemis. Calypso\'s cave — the sanctuary of the bear-mother.' } },
      { culture: { tr: 'İskandinav', en: 'Norse' }, meaning: { tr: 'Berserkir — savaşçılar ayı postu giyerek savaş çılgınlığına girer. Vahşi koruyucu güç.', en: 'Berserkir — warriors entering battle-frenzy by donning bear skins. Wild protective power.' } },
    ],
    myths: [
      { tr: 'Kallisto: Yunan mitolojisinde Artemis\'in nymph\'i. Zeus\'la birleştiği için ayıya dönüştürülüp gökyüzüne fırlatılır — Büyük Ayı takımyıldızı olur.', en: 'Callisto: In Greek mythology, a nymph of Artemis. For uniting with Zeus, she is transformed into a bear and cast into the sky — becoming the constellation Ursa Major.' },
      { tr: 'Şamanik Ayı Töreni: Sibirya\'da avlanan ayının ruhuna özür dilenir, eti törensel paylaşılır. Ayı atadır, kabul edilir.', en: 'The Shamanic Bear Ceremony: In Siberia, apology is offered to the soul of the hunted bear, and its meat is shared ceremonially. The bear is acknowledged as ancestor.' },
    ],
  },

  // ─── a011 Tilki ─────────────────────────────────────────────────────────
  a011: {
    jung: { tr: '"Hilebaz/Trickster" arketipi. Kuralları sorgulayan, beklenmedik yoldan çözüm bulan zeka. Logosa karşı mythos.', en: 'The "Trickster" archetype. An intelligence that questions rules and finds solutions on unexpected paths. Mythos against Logos.' },
    dream: { tr: 'Tilki rüyada — bir durumda dolambaçlı yola gitmeni söylüyor. Direkt yaklaşma çözmüyor. Ya da: biri seni kandırıyor, gözünü aç.', en: 'Fox in dream — tells you to take the indirect path in a situation. The direct approach is not working. Or: someone is deceiving you — open your eyes.' },
    shadow: { tr: 'Manipülasyon ve sahtekarlık. Zeka etik olmaksızın kullanılırsa tilki — yolsuz politikacı, dolandırıcı.', en: 'Manipulation and dishonesty. Intelligence used without ethics turns the fox into the corrupt politician, the swindler.' },
    whenAppears: { tr: 'Doğrudan yaklaşımın işe yaramadığı bir durumda, yaratıcı stratejiye ihtiyaç duyduğunda, oyunun kurallarını yeniden yazman gereken anda.', en: 'In a situation where the direct approach fails, when you need creative strategy, when you must rewrite the rules of the game.' },
    traditions: [
      { culture: { tr: 'Japonya', en: 'Japanese' }, meaning: { tr: 'Kitsune — dokuz kuyruklu tilki ruhu. Şekil değiştirir, ya yardım eder ya tuzak kurar. İnari tanrıçanın habercisi.', en: 'Kitsune — the nine-tailed fox spirit. A shapeshifter who either aids or sets traps. Messenger of the goddess Inari.' } },
      { culture: { tr: 'Kızılderili', en: 'Native American' }, meaning: { tr: 'Coyote (kuzen ruh) — yaratıcı ve yıkıcı. Dünyaya hem akıl hem kaos getiren.', en: 'Coyote (kin-spirit) — creator and destroyer. The one who brought both reason and chaos to the world.' } },
      { culture: { tr: 'Kelt', en: 'Celtic' }, meaning: { tr: 'Diplomasi ve sezginin sembolü. Druidler tilki tüyüyle rüya gönderir.', en: 'Symbol of diplomacy and intuition. The Druids sent dreams using fox fur.' } },
      { culture: { tr: 'Anadolu', en: 'Anatolian' }, meaning: { tr: 'Halk masallarında daima kazanan zeki kahraman. "Aklını kullanan tilki, zorlukları aşar."', en: 'In folk tales, the clever hero who always wins. "The fox who uses its wits overcomes hardship."' } },
      { culture: { tr: 'Çin', en: 'Chinese' }, meaning: { tr: 'Hu jing — bin yaşına ulaşan tilki insana dönüşür. Şehvet ve hile sembolü.', en: 'Hu jing — a fox that reaches a thousand years turns into a human. Symbol of lust and deceit.' } },
    ],
    myths: [
      { tr: 'Kitsune Efsaneleri: Japonya\'da bir tilkinin 100 yaşına gelince beyaz olduğu, 1000 yaşına gelince 9 kuyruk açtığı ve tanrısallaştığı söylenir.', en: 'Kitsune Legends: In Japan it is said that at 100 years a fox turns white, and at 1,000 years it unfurls nine tails and becomes divine.' },
      { tr: 'Aesop\'un Tilkisi: "Üzümlere ulaşamayınca ekşi olduğunu söyleyen tilki" — Batı medeniyetinin en eski hilebaz hikayesi.', en: 'Aesop\'s Fox: "The fox who, unable to reach the grapes, calls them sour" — Western civilization\'s oldest trickster tale.' },
    ],
  },

  // ─── a012 Yunus ─────────────────────────────────────────────────────────
  a012: {
    jung: { tr: '"Sevinç Rehberi" arketipi. Yunus, duygu denizinde özgürce yüzen bilinç — neşeyle bilgelik aynı bedende.', en: 'The "Joy-Guide" archetype. The dolphin is consciousness swimming freely in the sea of feeling — joy and wisdom in one body.' },
    dream: { tr: 'Yunus rüyada — duygusal akış geri geldi. Suyun üzerinden atlıyorsa: kalbin neşeleniyor. Sana eşlik ediyorsa: yalnız değilsin, ruh dostları yakın.', en: 'Dolphin in dream — emotional flow has returned. Leaping above the water: your heart is rejoicing. Accompanying you: you are not alone, soul friends are near.' },
    shadow: { tr: 'Hep iyimser görünme baskısı. Her şeyi "neşeyle" karşılamaya çalışmak, gerçek acıyı bastırırsa — yunus boğulur.', en: 'The pressure to always appear optimistic. If meeting everything "with joy" suppresses real pain — the dolphin drowns.' },
    whenAppears: { tr: 'Uzun bir hüzünden sonra, çocuksu sevincini geri istediğinde, suyla/denizle iletişiminin açıldığı anda.', en: 'After a long sorrow, when you want your childlike joy back, at the moment communion with water or sea opens.' },
    traditions: [
      { culture: { tr: 'Yunan Mitolojisi', en: 'Greek Mythology' }, meaning: { tr: 'Apollon\'un kutsal hayvanı. Boğulanları kurtaran rehber. Delphi tapınağının habercisi.', en: 'Apollo\'s sacred animal. The guide who rescues the drowning. Herald of the temple of Delphi.' } },
      { culture: { tr: 'Sumer', en: 'Sumerian' }, meaning: { tr: 'Enki — bilgelik tanrısı yunusla yolculuk eder. Tatlı su ve bilgeliğin kuşağı.', en: 'Enki — the god of wisdom travels with the dolphin. The companion of fresh water and wisdom.' } },
      { culture: { tr: 'Hristiyan', en: 'Christian' }, meaning: { tr: 'Mesih sembolü — denizden insanı çıkaran kurtarıcı. Erken katakomblarda sık çizilen motif.', en: 'Symbol of the Messiah — the savior who draws humanity from the sea. A frequent motif in the early catacombs.' } },
      { culture: { tr: 'Maori', en: 'Maori' }, meaning: { tr: 'Taniwha — denizin ruhu, kabilenin koruyucusu. Yardım çağrısına gelir.', en: 'Taniwha — spirit of the sea, protector of the tribe. Comes when called for aid.' } },
      { culture: { tr: 'Anadolu', en: 'Anatolian' }, meaning: { tr: 'Akdeniz halklarının dost ruhu. Balıkçılara yol gösteren akrabası.', en: 'Friend-spirit of Mediterranean peoples. A kin who guides fishermen.' } },
    ],
    myths: [
      { tr: 'Arion ve Yunus: Yunan şairi Arion gemiciler tarafından denize atılır, bir yunus onu sırtında alıp kıyıya götürür. Sanat ve doğa arasındaki kardeşliğin sembolü.', en: 'Arion and the Dolphin: The Greek poet Arion is thrown into the sea by sailors; a dolphin takes him on its back to shore. A symbol of the kinship between art and nature.' },
      { tr: 'Yunus Emre ve Adı: Bir rivayete göre Yunus Emre adını, Yunus peygamberin balıktan çıkışı gibi içsel bir dirilişten alır — derinden yüzeye gelen aşk.', en: 'Yunus Emre and His Name: According to one tradition, the Sufi poet Yunus Emre takes his name from an inner resurrection like the prophet Jonah\'s emergence from the fish — love rising from the depths to the surface.' },
    ],
  },

  // ─── a013 Kaplumbağa ────────────────────────────────────────────────────
  a013: {
    jung: { tr: '"Kadim Bilge" arketipi. Yavaş, sabırlı, uzun ömürlü. Kabuğunu evine taşıyan — içsel istikrarın sembolü.', en: 'The "Ancient Sage" archetype. Slow, patient, long-lived. The one who carries its home as its shell — symbol of inner stability.' },
    dream: { tr: 'Kaplumbağa rüyada — acele etmemen gerekiyor. Kabuğuna çekiliyorsa: korunma zamanı. Yumurtluyorsa: uzun vadeli tohumlar atıyorsun.', en: 'Turtle in dream — you must not rush. Withdrawing into its shell: time for protection. Laying eggs: you are planting long-term seeds.' },
    shadow: { tr: 'Aşırı temkin. "Sonra"ya erteleyerek ömrü tamamlamak. Kaplumbağa hızlıdır kendi yolunda — ama hiç çıkmazsa hapse dönüşür.', en: 'Excessive caution. Completing a lifetime by postponing to "later". The turtle is swift on its own path — but if it never emerges, the shell becomes a prison.' },
    whenAppears: { tr: 'Acele kararlardan vazgeçmen gerektiğinde, uzun soluklu projelerde, yaşlılık bilgeliğine açıldığında.', en: 'When you must renounce hasty decisions, in long-haul projects, when opening to the wisdom of age.' },
    traditions: [
      { culture: { tr: 'Çin', en: 'Chinese' }, meaning: { tr: 'Dört kutsal hayvandan biri (Xuanwu). Kuzey, kış, su ve uzun ömrün koruyucusu. Yaratılışın temeli.', en: 'One of the Four Sacred Animals (Xuanwu). Guardian of the north, winter, water, and longevity. The foundation of creation.' } },
      { culture: { tr: 'Hint', en: 'Hindu' }, meaning: { tr: 'Vishnu\'nun Kurma avatarı — okyanus çalkalanırken dünyayı sırtında taşıyan kaplumbağa.', en: 'Vishnu\'s Kurma avatar — the turtle bearing the world on its back during the churning of the ocean.' } },
      { culture: { tr: 'Kızılderili', en: 'Native American' }, meaning: { tr: '"Kaplumbağa Adası" — Kuzey Amerika kıtasının atası. Dünyanın kendisi onun sırtında.', en: '"Turtle Island" — the ancestor of the North American continent. The world itself rests on its back.' } },
      { culture: { tr: 'Afrika', en: 'African' }, meaning: { tr: 'Anansi masallarında zeki kahraman. Yavaşlığın altında gizli akıl.', en: 'In Anansi tales, the clever hero. Hidden cunning beneath slowness.' } },
      { culture: { tr: 'Japonya', en: 'Japanese' }, meaning: { tr: '"Minogame" — 10000 yıl yaşayan kaplumbağa. Uzun ömür ve şansın simgesi.', en: '"Minogame" — the turtle that lives 10,000 years. Symbol of longevity and luck.' } },
    ],
    myths: [
      { tr: 'Kurma Avatarı: Hint mitolojisinde tanrılar ve şeytanlar ölümsüzlük iksiri için okyanusu çalkalar. Vishnu kaplumbağa olur, dağı sırtında destekler — yaratılışın sabit ekseni.', en: 'The Kurma Avatar: In Hindu mythology, gods and demons churn the ocean for the elixir of immortality. Vishnu becomes a turtle and supports the mountain on his back — the steady axis of creation.' },
      { tr: 'Kaplumbağa Adası: Kızılderili kozmolojisinde dünya sular üzerinde yüzen bir kaplumbağanın sırtında durur. Toprak — onun zırhının üstünde toplanmış çamur.', en: 'Turtle Island: In Native American cosmology, the world rests on the back of a turtle floating upon the waters. The earth is mud gathered atop its shell.' },
    ],
  },

  // ─── a014 Yılan ─────────────────────────────────────────────────────────
  a014: {
    jung: { tr: '"Dönüşüm" arketipi. Ouroboros — kuyruğunu yiyen yılan. Ölüm ve doğum aynı ağzın iki ucu. Kundalini enerjisinin omurga boyunca yükseliş hayvanı.', en: 'The "Transformation" archetype. Ouroboros — the serpent devouring its own tail. Death and birth are two ends of the same mouth. The animal of Kundalini energy rising along the spine.' },
    dream: { tr: 'Yılan rüyada — derin bir dönüşüm sürecindesin. Isırıyorsa: bastırdığın bir gerçek seni uyandırıyor. Deri değiştiriyorsa: eski sen ölüyor.', en: 'Serpent in dream — you are in a profound process of transformation. If it bites: a truth you have suppressed is waking you. If it sheds skin: the old self is dying.' },
    shadow: { tr: 'Aldatma, manipülasyon, zehir. Yılan enerjisi dönüştürülmezse — pasif-agresif kontrol, gizli sokuş.', en: 'Deception, manipulation, venom. If serpent energy is not transmuted — passive-aggressive control, hidden striking.' },
    whenAppears: { tr: 'Kimlik değişiminde, eski bir kalıbı bırakırken, derin şifa sürecinde, cinsel uyanışta, ölüm-yas süreçlerinde.', en: 'In identity change, when releasing an old pattern, in deep healing, in sexual awakening, in death-grief processes.' },
    traditions: [
      { culture: { tr: 'Yunan Mitolojisi', en: 'Greek Mythology' }, meaning: { tr: 'Asklepios\'un asası — şifa tanrısının iki yılanı. Modern tıp sembolü.', en: 'The staff of Asclepius — the two serpents of the god of healing. The modern symbol of medicine.' } },
      { culture: { tr: 'Mısır', en: 'Egyptian' }, meaning: { tr: 'Wadjet — kobra tanrıça. Firavunların alın koruyucusu. Bilgeliğin gözü.', en: 'Wadjet — the cobra goddess. Protector of the pharaohs\' brow. The eye of wisdom.' } },
      { culture: { tr: 'Vedik', en: 'Vedic' }, meaning: { tr: 'Kundalini — omurganın dibinde uyuyan ilahi enerji. Yedi çakra boyunca yükseliş.', en: 'Kundalini — the divine energy asleep at the base of the spine. Ascent through the seven chakras.' } },
      { culture: { tr: 'Hristiyan', en: 'Christian' }, meaning: { tr: 'Cennetten kovulma — bilginin acı meyvesi. Aynı zamanda Musa\'nın tunç yılanı: şifa.', en: 'Expulsion from Eden — the bitter fruit of knowledge. Yet also Moses\'s bronze serpent: healing.' } },
      { culture: { tr: 'Türk Mitolojisi', en: 'Turkic Mythology' }, meaning: { tr: 'Şahmeran — yılan kraliçesi. Bilgelik, şifa, ölümsüzlük sırrını bilen kadın-yılan.', en: 'Shahmaran — the serpent queen. The woman-serpent who knows the secrets of wisdom, healing, and immortality.' } },
      { culture: { tr: 'Aztek', en: 'Aztec' }, meaning: { tr: 'Quetzalcoatl — tüylü yılan tanrı. Bilgelik, kültür, dönüşümün getiricisi.', en: 'Quetzalcoatl — the feathered serpent god. Bringer of wisdom, culture, and transformation.' } },
    ],
    myths: [
      { tr: 'Şahmeran Efsanesi: Anadolu\'nun en kadim mitlerinden. Mağarada yaşayan, yarı kadın yarı yılan bilgelik kraliçesi. İhanetle ölür, ama suyunu içen kişi büyük bir şifacı olur.', en: 'The Shahmaran Legend: One of Anatolia\'s most ancient myths. The half-woman half-serpent queen of wisdom who lives in a cave. She dies by betrayal, yet whoever drinks her water becomes a great healer.' },
      { tr: 'Kundalini: Hint geleneğinde insanın kuyruk sokumunda uyuyan yılan. Meditasyon ve nefesle uyandırılır, omurga boyunca yükselip taç çakrada aydınlanmaya ulaştırır.', en: 'Kundalini: In Hindu tradition, the serpent asleep at the base of the human spine. Awakened through meditation and breath, it ascends along the spine and brings enlightenment at the crown chakra.' },
    ],
  },

  // ─── a015 Kelebek ───────────────────────────────────────────────────────
  a015: {
    jung: { tr: '"Yeniden Doğan Ruh" arketipi. Psyche — Yunanca hem "ruh" hem "kelebek" anlamına gelir. Bilincin metamorfozu.', en: 'The "Reborn Soul" archetype. Psyche — in Greek means both "soul" and "butterfly". The metamorphosis of consciousness.' },
    dream: { tr: 'Kelebek rüyada — bir dönüşümün tamamlandığını söyler. Yumurtadan tırtıla, krizalitten kelebeğe — şu an hangi aşamadasın?', en: 'Butterfly in dream — tells you a transformation is being completed. Egg to caterpillar, chrysalis to butterfly — which stage are you in now?' },
    shadow: { tr: 'Hafiflik kaçıngana dönüşmek. "Sadece güzelin tarafını al" tutumu — derinliği kaçırma. Kelebek kanat çırpar ama yer çekimini unutur.', en: 'Lightness turning into avoidance. The "only take the beautiful side" stance — missing depth. The butterfly flutters but forgets gravity.' },
    whenAppears: { tr: 'Bir kişilik dönemini bitirip yenisine geçerken, depresyon sonrası uyanışta, yaratıcılığın yeniden açılışında.', en: 'When ending one phase of personality and crossing into another, in awakening after depression, at the reopening of creativity.' },
    traditions: [
      { culture: { tr: 'Yunan Mitolojisi', en: 'Greek Mythology' }, meaning: { tr: 'Psyche — ruhun bizzat kendisi. Eros\'la aşkı: ruhun aşkı arayışı.', en: 'Psyche — the soul itself. Her love with Eros: the soul\'s search for love.' } },
      { culture: { tr: 'Çin', en: 'Chinese' }, meaning: { tr: 'İki kelebek — Zhuangzi\'nin meşhur rüyası: "Ben kelebek mi olduğumu rüyada gören insanım, yoksa insan olduğunu rüyada gören kelebek miyim?"', en: 'Two butterflies — Zhuangzi\'s famous dream: "Am I a man who dreamed of being a butterfly, or a butterfly dreaming of being a man?"' } },
      { culture: { tr: 'Aztek', en: 'Aztec' }, meaning: { tr: 'Itzpapalotl — obsidyen kelebek tanrıça. Savaşçı ruhların eşlikçisi.', en: 'Itzpapalotl — the obsidian butterfly goddess. Companion of warrior souls.' } },
      { culture: { tr: 'Anadolu', en: 'Anatolian' }, meaning: { tr: 'Ölmüş yakının ruhunun ziyareti. Mezarlıkta kelebek görmek — atalar konuşuyor.', en: 'The visit of a deceased loved one\'s soul. To see a butterfly in a cemetery — the ancestors are speaking.' } },
      { culture: { tr: 'Japonya', en: 'Japanese' }, meaning: { tr: 'Aşkın simgesi. İki kelebek bir arada — sadık eşler.', en: 'Symbol of love. Two butterflies together — faithful spouses.' } },
    ],
    myths: [
      { tr: 'Eros ve Psyche: Aşk tanrısı Eros\'a aşık olan ölümlü kız Psyche\'nin sınavları. Aşk ruhu arıyor, ruh aşkı arıyor — sonunda Olympos\'a yükseliyor.', en: 'Eros and Psyche: The trials of the mortal girl Psyche, in love with the god of love Eros. Love seeks the soul, the soul seeks love — at last she ascends to Olympus.' },
      { tr: 'Zhuangzi\'nin Rüyası: Çinli Taocu filozofun en ünlü hikayesi — rüyada kelebek olur, uyandığında hangisinin gerçek olduğundan emin olamaz.', en: 'Zhuangzi\'s Dream: The most famous story of the Chinese Taoist philosopher — he becomes a butterfly in dream, and upon waking cannot be sure which is real.' },
    ],
  },

  // ─── a016 Tavus ─────────────────────────────────────────────────────────
  a016: {
    jung: { tr: '"Görkemli Benlik" arketipi. Tavus kuşu — ifşa edilmiş güzellik, görünmeye cesaret eden ego.', en: 'The "Magnificent Self" archetype. The peacock — beauty unveiled, the ego that dares to be seen.' },
    dream: { tr: 'Tavus rüyada — kendini göstermek için izin alıyorsun. Kuyruğunu açıyorsa: sahip olduğun değeri kabul et. Kapalıysa: gücünü saklıyorsun.', en: 'Peacock in dream — you are seeking permission to show yourself. Spreading its tail: accept the worth you possess. Closed: you are hiding your power.' },
    shadow: { tr: 'Kibir, gösteriş, sahte parlaklık. Tavus enerjisi savunmasızlığını kaybederse — yalnız gösterişin içinde donar.', en: 'Vanity, display, false brilliance. If peacock energy loses its vulnerability — it freezes within mere show.' },
    whenAppears: { tr: 'Sahneye çıkma anında, görünür olma fırsatında, içsel güzelliğin tanınma talebinde.', en: 'At the moment of stepping onto the stage, at the chance to become visible, in the demand for inner beauty to be recognized.' },
    traditions: [
      { culture: { tr: 'Hint', en: 'Hindu' }, meaning: { tr: 'Sarasvati\'nin bineği — sanat ve bilgi tanrıçası. Kartikeya\'nın da kuşu.', en: 'Mount of Saraswati — goddess of arts and knowledge. Also the bird of Kartikeya.' } },
      { culture: { tr: 'Yezidi', en: 'Yazidi' }, meaning: { tr: 'Melek Tavus — Yezidiliğin merkezi figürü. Tanrı\'nın yeryüzündeki yansıması.', en: 'Melek Taus — the central figure of Yazidism. The reflection of God upon earth.' } },
      { culture: { tr: 'Yunan Mitolojisi', en: 'Greek Mythology' }, meaning: { tr: 'Hera\'nın kuşu. Argos\'un yüz gözünü tüylerine işler — uyanıklık ve sadakat.', en: 'Hera\'s bird. She weaves Argus\'s hundred eyes into its feathers — vigilance and loyalty.' } },
      { culture: { tr: 'Hristiyan', en: 'Christian' }, meaning: { tr: 'Ölümsüzlük ve diriliş. Bizans mozaiklerinde sık görülür — kanatlarındaki "gözler" ilahi bakış.', en: 'Immortality and resurrection. Often seen in Byzantine mosaics — the "eyes" in its feathers are the divine gaze.' } },
      { culture: { tr: 'Türk-İslam', en: 'Turco-Islamic' }, meaning: { tr: 'Cennet kuşu. Sufi metinlerinde "tavus-i ervah" — ruhların gösterişli formu.', en: 'Bird of paradise. In Sufi texts, "tavus-i ervah" — the splendid form of souls.' } },
    ],
    myths: [
      { tr: 'Hera ve Argos: Hera, sadık dev bekçisi Argos öldürülünce yüz gözünü tavusun kuyruğuna işler. O günden beri tavus, sadakatin ve uyanıklığın taşıyıcısıdır.', en: 'Hera and Argus: When her faithful giant watchman Argus is slain, Hera weaves his hundred eyes into the peacock\'s tail. Since that day, the peacock has been the bearer of loyalty and vigilance.' },
      { tr: 'Melek Tavus: Yezidi geleneğinde Melek Tavus, Tanrı\'nın yedi meleğinden en büyüğüdür. Diğer dinlerde "düşmüş melek" olarak yorumlanmış ama Yezidilerce yücedir — perspektif meselesi.', en: 'Melek Taus: In Yazidi tradition, Melek Taus is the greatest of God\'s seven angels. Interpreted as a "fallen angel" in other religions but exalted by Yazidis — a matter of perspective.' },
    ],
  },

  // ─── a017 Leylek ────────────────────────────────────────────────────────
  a017: {
    jung: { tr: '"Doğum/Yeni Başlangıç" arketipi. Leylek, eski döngünün bitimi ve yeni ruhun gelişinin habercisi.', en: 'The "Birth/New Beginning" archetype. The stork is the herald of the old cycle\'s end and the new soul\'s arrival.' },
    dream: { tr: 'Leylek rüyada — yeni bir başlangıç doğuyor. Üzerinde bebek varsa: yaratıcı bir doğuma hazırsın. Uçuyorsa: göç ve değişim zamanı.', en: 'Stork in dream — a new beginning is being born. With a baby upon it: you are ready for a creative birth. Flying: time of migration and change.' },
    shadow: { tr: '"Bir şeyler getirsin" diye pasif beklemek. Leylek getirir ama tohumu sen ekmelisin. Beklemek doğurmak değildir.', en: 'Waiting passively "for something to be brought". The stork delivers, but you must plant the seed. Waiting is not giving birth.' },
    whenAppears: { tr: 'Hamilelik/doğum (gerçek ya da yaratıcı) öncesinde, ev kuruşunda, yeni bir döneme geçişte.', en: 'Before pregnancy/birth (literal or creative), in establishing a home, in transition to a new period.' },
    traditions: [
      { culture: { tr: 'Anadolu', en: 'Anatolian' }, meaning: { tr: '"Hacı leylek" — kutsal yolcunun, hacca giden ruhun adı. Çatıya leylek yuvası: o ev bereketli.', en: '"Hacı leylek" — the name of the sacred pilgrim, the soul that goes on hajj. A stork\'s nest on the roof: that house is blessed.' } },
      { culture: { tr: 'Slav-Alman', en: 'Slavic-Germanic' }, meaning: { tr: 'Bebekleri getiren kuş. Doğum hediyesi olarak çocukları evlere taşır.', en: 'The bird that brings babies. It carries children to homes as a birth-gift.' } },
      { culture: { tr: 'Mısır', en: 'Egyptian' }, meaning: { tr: 'Ba — insanın ruhu leylek/lekleğe benzer kuş formunda gösterilir. Bedenden ayrılan ruh.', en: 'Ba — the human soul depicted as a stork-like bird. The soul departing the body.' } },
      { culture: { tr: 'Yunan Mitolojisi', en: 'Greek Mythology' }, meaning: { tr: 'Hera\'nın koruyuculuk simgesi. Anneler için kutsanmış kuş.', en: 'Symbol of Hera\'s protection. A bird blessed for mothers.' } },
      { culture: { tr: 'İslam Halk', en: 'Islamic Folk' }, meaning: { tr: 'Hacca gidip dönen kuş olduğuna inanılır. "Hacı leylek" duası — yolculuğun bereketi.', en: 'Believed to be the bird that travels to Mecca and returns. The "Hacı leylek" blessing — the journey\'s benediction.' } },
    ],
    myths: [
      { tr: 'Hacı Leylek: Anadolu inanışına göre leylekler her yıl hacca gider, dönerler. Onlara zarar veren bu kutsal yolculuğu bozmuş sayılır — büyük günah.', en: 'The Pilgrim Stork: According to Anatolian belief, storks go on hajj every year and return. To harm them is to disrupt this sacred journey — a great sin.' },
      { tr: 'Babylonia\'da Leylek: Eski Mezopotamya tabletlerinde leylekler tanrı Marduk\'un haberci kuşlarıdır — kuraklığa rağmen suyu bulan rehber.', en: 'The Stork in Babylonia: In ancient Mesopotamian tablets, storks are the messenger birds of the god Marduk — the guide that finds water despite drought.' },
    ],
  },

  // ─── a018 Şahin ─────────────────────────────────────────────────────────
  a018: {
    jung: { tr: '"Odaklanmış İrade" arketipi. Şahin — net görüş, isabetli karar, hedeflenmiş eylem. Kartal kadar yüksek değil ama daha keskin.', en: 'The "Focused Will" archetype. The falcon — clear sight, precise decision, targeted action. Not as high as the eagle, but sharper.' },
    dream: { tr: 'Şahin rüyada — bir şeye keskinleşmen gerekiyor. Avlanıyorsa: hedefini bul. Eline konuyorsa: gücün geri geliyor, ehlileşmiş halde.', en: 'Falcon in dream — you must sharpen toward something. Hunting: find your target. Landing on your hand: your power is returning, tamed.' },
    shadow: { tr: 'Acımasız odak. Hedefe ulaşmak için her şeyi feda etmek. Şahin keskindir ama ısırırsa zalimleşir.', en: 'Ruthless focus. Sacrificing everything to reach the goal. The falcon is sharp, but if it bites, it becomes cruel.' },
    whenAppears: { tr: 'Bir kararın netleşmesi gerektiğinde, dağılmış enerjini toplaman gerekirken, bir sözünü tutman gereken anda.', en: 'When a decision must become clear, when you must gather your scattered energy, at the moment you must keep your word.' },
    traditions: [
      { culture: { tr: 'Mısır', en: 'Egyptian' }, meaning: { tr: 'Horus — şahin başlı tanrı. Krallığın, göğün ve adaletin sembolü. Firavunun ruhsal protokolü.', en: 'Horus — the falcon-headed god. Symbol of kingship, sky, and justice. The pharaoh\'s spiritual protocol.' } },
      { culture: { tr: 'Türk Şamanizmi', en: 'Turkic Shamanism' }, meaning: { tr: 'Şamanlar şahin formunda göğe yükselir. Sungar (sungur) — av kuşu, hanın gözü.', en: 'Shamans ascend to the sky in falcon form. Sungar — the hunting bird, the khan\'s eye.' } },
      { culture: { tr: 'Arap', en: 'Arabic' }, meaning: { tr: 'Bedevi geleneğinde en değerli av yoldaşı. Avcılığın sanatı: şahinciliğin (şahincilik) UNESCO\'ya kayıtlı miras.', en: 'In Bedouin tradition, the most prized hunting companion. The art of falconry is UNESCO-listed heritage.' } },
      { culture: { tr: 'Vedik', en: 'Vedic' }, meaning: { tr: 'Garuda\'nın akrabası. Soma\'yı (kutsal içecek) tanrılara taşıyan kuş.', en: 'A kin of Garuda. The bird that carries Soma (the sacred draught) to the gods.' } },
      { culture: { tr: 'Anadolu', en: 'Anatolian' }, meaning: { tr: 'Yiğit padişahların kolundaki şahin — irade ve sadakatin sembolü. Doğan ve şahinli sancaklar.', en: 'The falcon on the arm of valiant sultans — symbol of will and loyalty. Banners bearing falcons and hawks.' } },
    ],
    myths: [
      { tr: 'Horus ve Set: Mısır mitolojisinde şahin başlı Horus, babası Osiris\'i öldüren amcası Set ile uzun savaşa girer. Horus\'un kaybettiği göz — sonradan "Uçat" şifa sembolü olur.', en: 'Horus and Set: In Egyptian mythology, the falcon-headed Horus wages a long war against his uncle Set, who killed his father Osiris. The eye Horus loses — later becomes the "Udjat" symbol of healing.' },
      { tr: 'Selçuklu Şahincibaşılığı: Selçuklu sarayında "Emir-i Şikar" — şahincibaşı en yüksek makamlardan biriydi. Padişahın şahini onun gözüdür.', en: 'The Seljuk Master of Falcons: In the Seljuk court, the "Emir-i Şikar" — master of falcons — was one of the highest offices. The sultan\'s falcon is his eye.' },
    ],
  },

  // ─── a019 Pars ──────────────────────────────────────────────────────────
  a019: {
    jung: { tr: '"Sessiz Avcı" arketipi. Pars — sessizlikte güç, beklemekte zafer. İçsel disiplinin sembolü.', en: 'The "Silent Hunter" archetype. The leopard — power in silence, victory in waiting. Symbol of inner discipline.' },
    dream: { tr: 'Pars rüyada — sabır ve doğru zamanlama hakkında ders. Pusuda yatıyorsa: harekete geçme anı yaklaşıyor. Avlanıyorsa: kararlılıkla ilerle.', en: 'Leopard in dream — a lesson in patience and right timing. Lying in ambush: the moment to act draws near. Hunting: advance with resolve.' },
    shadow: { tr: 'Aşırı kontrol. Her hamleyi ölçmek, kendiliğindenliği öldürür. Pars hep hesaplıdır, ama insan değildir.', en: 'Excessive control. Measuring every move kills spontaneity. The leopard is always calculating — but it is not human.' },
    whenAppears: { tr: 'Stratejik bir bekleyişte, çabuk hareket etmek yerine sezgiyi beklemen gerekirken, yalnız savaşırken.', en: 'In a strategic wait, when you must await intuition rather than act quickly, when fighting alone.' },
    traditions: [
      { culture: { tr: 'Pers/Türk', en: 'Persian/Turkic' }, meaning: { tr: '"Pars" Eski Türkçe ve Farsça\'da kaplan/leoparddan ayrı bir hayvan — bağımsız ve yalnız savaşçı.', en: 'In Old Turkic and Persian, "pars" is an animal distinct from the tiger/leopard — the independent, solitary warrior.' } },
      { culture: { tr: 'Yunan Mitolojisi', en: 'Greek Mythology' }, meaning: { tr: 'Dionysos\'un bineği — coşku ve vahşi bilgeliğin birleşimi. Şarap tanrısı parsın sırtında.', en: 'Dionysus\'s mount — the union of ecstasy and wild wisdom. The wine god rides upon the leopard.' } },
      { culture: { tr: 'Afrika', en: 'African' }, meaning: { tr: 'Maasai geleneğinde — yalnız avcının onuru. Genç savaşçının olgunluk sınavı.', en: 'In Maasai tradition — the honor of the solitary hunter. The young warrior\'s test of maturity.' } },
      { culture: { tr: 'Hint', en: 'Hindu' }, meaning: { tr: 'Durga\'nın bineği — kötülüğü mahveden tanrıçanın bir formu.', en: 'Durga\'s mount — a form of the goddess who destroys evil.' } },
      { culture: { tr: 'Çin', en: 'Chinese' }, meaning: { tr: 'Beş zehrin kovucusu. Tılsım hayvanı — gizli kötülüğü görür ve avlar.', en: 'The repeller of the five poisons. A talismanic animal — sees and hunts hidden evil.' } },
    ],
    myths: [
      { tr: 'Dionysos ve Pars: Yunan mitolojisinde şarap ve coşku tanrısı Dionysos parsın sırtında gezer. Pars\'ın bakışında hem ölüm hem zevk var — yaşam paradoksunun bineği.', en: 'Dionysus and the Leopard: In Greek mythology, the god of wine and ecstasy rides upon the leopard. In the leopard\'s gaze are both death and delight — the mount of life\'s paradox.' },
      { tr: 'Anadolu Parsı: Antik kaynaklarda Toros Dağları\'nda yaşayan Anadolu parsı yiğitliğin simgesiydi. Bugün neredeyse soyu tükenmiş — kaybedilen bilgeliğin sessiz işareti.', en: 'The Anatolian Leopard: In ancient sources, the Anatolian leopard of the Taurus Mountains was the symbol of valor. Today nearly extinct — the silent sign of lost wisdom.' },
    ],
  },

  // ─── a020 Arı ───────────────────────────────────────────────────────────
  a020: {
    jung: { tr: '"Hizmetkâr Yaratıcı" arketipi. Arı — birey ve kolektif aynı bedende. İlhamı tatlıya dönüştüren çalışkanlık.', en: 'The "Servant-Creator" archetype. The bee — individual and collective in one body. The diligence that turns inspiration into sweetness.' },
    dream: { tr: 'Arı rüyada — verimli yaratıcılık çağrısı. Sokuyorsa: bastırdığın bir görev seni uyandırıyor. Bal yapıyorsa: emeklerin meyvesini verecek.', en: 'Bee in dream — a call to fruitful creativity. If it stings: a duty you have suppressed is waking you. Making honey: your labors will bear fruit.' },
    shadow: { tr: 'Aşırı çalışkanlık. "Ben olmasam kovan çöker" sanrısı. Arı kolektifin parçasıdır, ama tükenmek de mümkündür.', en: 'Excessive industriousness. The delusion "without me the hive collapses". The bee is part of the collective, yet burnout is possible too.' },
    whenAppears: { tr: 'Verimli bir döneme girerken, ortak bir projede yer alırken, ilham balına çevirmen gerektiğinde.', en: 'When entering a fertile period, while joining a shared project, when you must turn inspiration into honey.' },
    traditions: [
      { culture: { tr: 'Mısır', en: 'Egyptian' }, meaning: { tr: 'Ra\'nın gözyaşlarından doğan arılar — güneş tanrısının yeryüzü habercileri. Bal, tanrı kanı.', en: 'Bees born from Ra\'s tears — earthly messengers of the sun god. Honey is the gods\' blood.' } },
      { culture: { tr: 'Yunan Mitolojisi', en: 'Greek Mythology' }, meaning: { tr: 'Melissa — Zeus\'u arılarla emziren nympha. Şair Pythagoras\'ın gizemli arı sembolü.', en: 'Melissa — the nymph who suckled Zeus with bees. The mystic bee-symbol of the poet Pythagoras.' } },
      { culture: { tr: 'Kelt', en: 'Celtic' }, meaning: { tr: 'Bilgi ve ilhamın taşıyıcısı. Bardlar (şairler) "arı dilini" konuşur.', en: 'Bearer of knowledge and inspiration. The bards (poets) speak "the language of the bee".' } },
      { culture: { tr: 'İslam', en: 'Islamic' }, meaning: { tr: 'Kuran\'da Nahl Suresi — arıya kendine ev yapması, çiçeklerden yemesi vahyedilir. Tanrı\'nın doğrudan rehberlik ettiği yaratık.', en: 'In the Qur\'an, Surah An-Nahl — it is revealed to the bee to build its house and feed on flowers. A creature directly guided by God.' } },
      { culture: { tr: 'Türk Halk', en: 'Turkish Folk' }, meaning: { tr: 'Anadolu\'da "arı tutmak" — bereketin simgesi. Kovanı olan ailenin ocağı tüter.', en: 'In Anatolia, to "keep bees" — a symbol of abundance. The hearth of the family with a hive smokes well.' } },
    ],
    myths: [
      { tr: 'Melissa ve Zeus: Bebek Zeus dağda saklanmışken nympha Melissa onu arı balıyla besler. Bu yüzden arılar "Melissa\'nın kızları" olur — kutsal şifa taşıyıcıları.', en: 'Melissa and Zeus: While the infant Zeus is hidden on the mountain, the nymph Melissa feeds him with honey from the bees. Thus bees become "Melissa\'s daughters" — bearers of sacred healing.' },
      { tr: 'Nahl Suresi: Kuran\'da Allah arıya doğrudan ilham eder: "Dağlardan, ağaçlardan ev edin... çiçeklerden ye." Arı, vahiy alabilecek bilince yakın bir varlık olarak konumlanır.', en: 'Surah An-Nahl: In the Qur\'an, God directly inspires the bee: "Take houses in the mountains, in the trees... eat of the flowers." The bee is positioned as a being near to a consciousness capable of receiving revelation.' },
    ],
  },

  // ─── a021 Kırlangıç ─────────────────────────────────────────────────────
  a021: {
    jung: { tr: '"Bahar Müjdecisi" arketipi. Kırlangıç — yeniden başlayan döngünün, eve dönüşün sembolü.', en: 'The "Herald of Spring" archetype. The swallow — symbol of the cycle that begins anew, of homecoming.' },
    dream: { tr: 'Kırlangıç rüyada — uzun bir kıştan sonra ısınma. Yuva yapıyorsa: bir şey kuruyorsun. Uçuyorsa: göç ve serbestlik.', en: 'Swallow in dream — warming after a long winter. Building a nest: you are establishing something. In flight: migration and freedom.' },
    shadow: { tr: 'Sürekli göç, asla yerleşememek. Kırlangıç döner ama her yerde misafir kalırsa — kök yok olur.', en: 'Constant migration, never able to settle. The swallow returns, but if it remains a guest everywhere — its roots vanish.' },
    whenAppears: { tr: 'Uzun bir bekleyiş sonrası başlangıçta, eve dönüş yolunda, mevsimsel/içsel bir geçişte.', en: 'At a beginning after long waiting, on the way home, in a seasonal or inner transition.' },
    traditions: [
      { culture: { tr: 'Yunan Mitolojisi', en: 'Greek Mythology' }, meaning: { tr: 'Aphrodite\'nin kuşu. Aşkın ve baharın habercisi. "İlk kırlangıç yaz getirmez" deyişi — sabır.', en: 'Aphrodite\'s bird. Herald of love and spring. The saying "one swallow does not make a summer" — patience.' } },
      { culture: { tr: 'Çin', en: 'Chinese' }, meaning: { tr: 'Sadakatin kuşu. Bir kez eşleşince yıllarca aynı yuvaya döner.', en: 'The bird of loyalty. Once paired, it returns to the same nest for years.' } },
      { culture: { tr: 'Anadolu', en: 'Anatolian' }, meaning: { tr: 'Çatıya kırlangıç yuva yaparsa o ev kutsanmıştır. Yuvayı bozan uğursuz sayılır.', en: 'If a swallow nests on a roof, that house is blessed. Whoever destroys the nest is deemed ill-fortuned.' } },
      { culture: { tr: 'Roma', en: 'Roman' }, meaning: { tr: 'Penates\'in (ev tanrıları) kuşu — ailenin koruyucusu.', en: 'The bird of the Penates (household gods) — protector of the family.' } },
      { culture: { tr: 'Japonya', en: 'Japanese' }, meaning: { tr: 'Tsubame — bahar, gençlik ve bereketin simgesi. Çiftçinin dostu.', en: 'Tsubame — symbol of spring, youth, and abundance. The farmer\'s friend.' } },
    ],
    myths: [
      { tr: 'Prokne ve Philomela: Yunan mitolojisinde iki kız kardeş, zulümden kurtulmak için kuşa dönüşür — biri kırlangıç, diğeri bülbül olur. Acının kanatlanması.', en: 'Procne and Philomela: In Greek mythology, two sisters transform into birds to escape cruelty — one becomes a swallow, the other a nightingale. The wing-taking of pain.' },
      { tr: 'Çatı Kırlangıcı: Anadolu\'da "ocağına kırlangıç konsun" duası — en güzel bereket dileği. O yuva yıkılırsa bereket kaybolur.', en: 'The Roof Swallow: In Anatolia, the blessing "may a swallow alight on your hearth" — the finest wish of abundance. If that nest falls, the blessing departs.' },
    ],
  },

  // ─── a022 Güvercin ──────────────────────────────────────────────────────
  a022: {
    jung: { tr: '"Kutsal Ruh/Sulh" arketipi. Güvercin — masum sevgi, barış, ilahi yumuşaklık.', en: 'The "Holy Spirit/Peace" archetype. The dove — innocent love, peace, divine gentleness.' },
    dream: { tr: 'Güvercin rüyada — bir affediş veya barışın yaklaştığını söyler. Beyaz güvercin: kutsal mesaj. Eline konuyorsa: lütuf seni buldu.', en: 'Dove in dream — tells you a forgiveness or peace is near. White dove: sacred message. Landing on your hand: grace has found you.' },
    shadow: { tr: '"Hep barışçıl olmak" baskısı. Güvercin masum ama saf değildir — sınırlarını koruyamamak, kurban moduna kayma.', en: 'The pressure of "always being peaceful". The dove is innocent but not naive — failure to defend boundaries slides into victim mode.' },
    whenAppears: { tr: 'Bir çatışmanın bitiminde, affediş anında, kalbinin yumuşadığı ya da yumuşaması gerektiği zamanda.', en: 'At the end of a conflict, in the moment of forgiveness, when your heart softens or must soften.' },
    traditions: [
      { culture: { tr: 'Hristiyan', en: 'Christian' }, meaning: { tr: 'Kutsal Ruh\'un simgesi. Vaftiz sırasında İsa\'nın üzerine inen güvercin. Mesajın saflığı.', en: 'Symbol of the Holy Spirit. The dove descending upon Christ at his baptism. The purity of the message.' } },
      { culture: { tr: 'Yahudilik', en: 'Judaism' }, meaning: { tr: 'Nuh\'un gemisinden salınan güvercin zeytin dalıyla döner — tufanın bitimi, barış.', en: 'The dove released from Noah\'s ark returns with an olive branch — the end of the flood, peace.' } },
      { culture: { tr: 'İslam', en: 'Islamic' }, meaning: { tr: 'Hacerü\'l-Esved\'i taşıyan kuş efsanelerinde geçer. Mevlana\'da "aşk güvercini".', en: 'Appears in legends as the bird that carried the Black Stone. In Rumi, "the dove of love".' } },
      { culture: { tr: 'Yunan Mitolojisi', en: 'Greek Mythology' }, meaning: { tr: 'Afrodit\'in kuşu. Aşkın ve şehvetin temsilcisi — sertlik ve yumuşaklığı bir arada.', en: 'Aphrodite\'s bird. Representative of love and desire — firmness and gentleness together.' } },
      { culture: { tr: 'Sumer', en: 'Sumerian' }, meaning: { tr: 'İnanna\'nın kuşu — aşk ve savaş tanrıçası. Güvercin paradoksu: hem yumuşak hem kararlı.', en: 'Inanna\'s bird — the goddess of love and war. The dove\'s paradox: both soft and resolute.' } },
    ],
    myths: [
      { tr: 'Nuh\'un Güvercini: Tufan sonrası gemiden salınan güvercin geri döner — kara yok. Bir hafta sonra tekrar salınır, ağzında zeytin dalıyla döner. Tufan bitti. İnsanlığın yeniden başlangıcı.', en: 'Noah\'s Dove: After the flood, the dove released from the ark returns — no land. A week later released again, it returns with an olive branch in its beak. The flood is over. Humanity\'s new beginning.' },
      { tr: 'Afrodit\'in Güvercinleri: Kıbrıs\'ta Afrodit tapınağında yüzlerce güvercin yetiştirilirdi. Şiddetli aşk ile yumuşak barışın aynı tanrıçada birleşmesi.', en: 'Aphrodite\'s Doves: Hundreds of doves were raised in Aphrodite\'s temple on Cyprus. Fierce love and gentle peace united in one goddess.' },
    ],
  },

  // ─── a023 Bülbül ────────────────────────────────────────────────────────
  a023: {
    jung: { tr: '"Aşık Sanatçı" arketipi. Bülbül — acıdan beslenen güzellik. Kalbi yaralı olduğu için en güzel öten kuş.', en: 'The "Lover-Artist" archetype. The nightingale — beauty nourished by pain. The bird that sings most beautifully because its heart is wounded.' },
    dream: { tr: 'Bülbül rüyada — kalbin bir sözü var, söylenmek istiyor. Gül diken üzerinde ötüyorsa: aşkın acısı yaratıcılığa dönüşüyor.', en: 'Nightingale in dream — your heart has a word that wants to be said. Singing upon a rose-thorn: the pain of love is turning into creativity.' },
    shadow: { tr: 'Acı romantizmi. Mutsuzluğu sanat için kutsallaştırmak. Bülbül acıdan öter — ama hep yaralı kalmak gerekmez.', en: 'The romanticism of pain. Sacralizing unhappiness for the sake of art. The nightingale sings from pain — but one need not remain forever wounded.' },
    whenAppears: { tr: 'Aşk acısında, sanata dökülmesi gereken bir hisde, yas ile şarkı arasında köprüde.', en: 'In the pain of love, in a feeling that must be poured into art, on the bridge between grief and song.' },
    traditions: [
      { culture: { tr: 'Sufi-Fars', en: 'Sufi-Persian' }, meaning: { tr: '"Bülbül ve Gül" — mistik aşkın en kadim metaforu. Bülbül âşık, gül maşuk. Aşk hep yaralayan ama hep çağıran.', en: '"The Nightingale and the Rose" — the most ancient metaphor of mystical love. The nightingale is the lover, the rose the beloved. Love always wounds, yet always calls.' } },
      { culture: { tr: 'Türk Divan Şiiri', en: 'Turkish Divan Poetry' }, meaning: { tr: 'Fuzuli\'den Nedim\'e — bülbül şairin kendisi. "Aşk derdiyle hoşem el çek ilacımdan tabib."', en: 'From Fuzuli to Nedim — the nightingale is the poet himself. "I am content with love\'s ailment; physician, withhold your cure."' } },
      { culture: { tr: 'Yunan Mitolojisi', en: 'Greek Mythology' }, meaning: { tr: 'Philomela — kızını kaybeden anneye dönüşen bülbül. Acının sesi.', en: 'Philomela — the nightingale into which a mother who lost her daughter is transformed. The voice of pain.' } },
      { culture: { tr: 'Çin', en: 'Chinese' }, meaning: { tr: 'Saraylarda bülbül beslemek — saray edebinin işareti. Şiirin müzikal hâli.', en: 'Keeping nightingales in palaces — a sign of courtly refinement. The musical form of poetry.' } },
      { culture: { tr: 'Anadolu Halk', en: 'Anatolian Folk' }, meaning: { tr: 'Halk türküleri "bülbül kondu dalına" — sevdiğine sözü taşıyan elçi.', en: 'Folk songs of "the nightingale alighting on the branch" — the envoy who carries word to the beloved.' } },
    ],
    myths: [
      { tr: 'Bülbül ve Gül: Fars-Türk edebiyatının en derin sembolü. Bülbül her gece güle âşık öter, gül ise dikenleriyle yanıt verir. Aşk — istemek değil, oluş hâli; ulaşmak değil, var olmak.', en: 'The Nightingale and the Rose: The deepest symbol of Persian-Turkish literature. Each night the nightingale sings to the rose; the rose replies with its thorns. Love is not desiring but being; not arriving but existing.' },
      { tr: 'Philomela\'nın Dilsizleşmesi: Yunan mitolojisinde tecavüze uğrayan Philomela\'nın dili kesilir. Sessizliğini dokumalara işler, sonra bülbüle dönüşür. Dilsiz acının sese kavuşması.', en: 'The Silencing of Philomela: In Greek mythology, Philomela, after being raped, has her tongue cut out. She weaves her silence into a tapestry and is then transformed into a nightingale. The voiceless pain finding its voice.' },
    ],
  },

  // ─── a024 Kaplan ────────────────────────────────────────────────────────
  a024: {
    jung: { tr: '"İlkel Güç" arketipi. Kaplan — bastırılamayan tutku, vahşi yaratıcılık. Aslan kraldır, kaplan tanrıdır.', en: 'The "Primal Power" archetype. The tiger — irrepressible passion, wild creativity. The lion is king; the tiger is god.' },
    dream: { tr: 'Kaplan rüyada — büyük bir güç uyanıyor. Saldırıyorsa: bastırdığın bir tutku patlamak üzere. Yanında yürüyorsa: vahşi tarafınla barıştın.', en: 'Tiger in dream — a great power is awakening. Attacking: a passion you have suppressed is about to erupt. Walking beside you: you have made peace with your wild side.' },
    shadow: { tr: 'Kontrolsüz öfke, yıkıcı tutku. Kaplan ehlileşmezse evi yakar. Ama ehlileştirilemez de — sadece saygı duyulur.', en: 'Uncontrolled rage, destructive passion. Untamed, the tiger burns the house. Yet it cannot be tamed — only respected.' },
    whenAppears: { tr: 'Büyük bir tutkunun uyandığı, sınır koymak için kükremek gerektiğinde, yaratıcı bir çağrının dirilişinde.', en: 'When a great passion awakens, when you must roar to set a boundary, at the resurrection of a creative summons.' },
    traditions: [
      { culture: { tr: 'Çin', en: 'Chinese' }, meaning: { tr: 'Dört kutsal hayvandan biri (Bai Hu — Ak Kaplan). Batı, sonbahar, metal ve cesaretin koruyucusu.', en: 'One of the Four Sacred Animals (Bai Hu — White Tiger). Guardian of the west, autumn, metal, and courage.' } },
      { culture: { tr: 'Hint', en: 'Hindu' }, meaning: { tr: 'Durga\'nın bineği. Tanrıça kötülüğe karşı kaplanın sırtında savaşır.', en: 'Durga\'s mount. The goddess battles evil from the tiger\'s back.' } },
      { culture: { tr: 'Kore', en: 'Korean' }, meaning: { tr: 'Kore mitolojisinin en kutsal hayvanı. Dağların ruhu, kahramanların rehberi.', en: 'The most sacred animal of Korean mythology. Spirit of the mountains, guide of heroes.' } },
      { culture: { tr: 'Türk Mitolojisi', en: 'Turkic Mythology' }, meaning: { tr: 'Anadolu\'da yok ama Orta Asya kökenli Türklerde "Bars" — savaşçı sembolü, hakanlık alameti.', en: 'Absent in Anatolia, but among the Central Asian Turks "Bars" — symbol of the warrior, emblem of the khanate.' } },
      { culture: { tr: 'Şamanik', en: 'Shamanic' }, meaning: { tr: 'Tibetan Bön\'da kaplan dağın koruyucusu — yıkıcı kutsallık.', en: 'In Tibetan Bön, the tiger is the guardian of the mountain — destructive holiness.' } },
    ],
    myths: [
      { tr: 'Bai Hu — Ak Kaplan: Çin kozmolojisinde batının koruyucu hayvanı. Kahramanların yetişmesini gözetler. Ölümsüzlük arayan kahraman ondan onay almalıdır.', en: 'Bai Hu — the White Tiger: In Chinese cosmology, the western guardian. He watches over heroes\' maturation. The hero seeking immortality must have his approval.' },
      { tr: 'Durga ve Kaplan: Hint mitolojisinde tanrıça Durga, hiçbir tanrının yenemediği şeytan Mahishasura\'yı kaplan sırtında öldürür. Vahşi gücün adaletle birleşmesi.', en: 'Durga and the Tiger: In Hindu mythology, the goddess Durga slays the demon Mahishasura, whom no god could defeat, from the back of the tiger. The union of wild power with justice.' },
    ],
  },

  // ─── a025 Köpek ─────────────────────────────────────────────────────────
  a025: {
    jung: { tr: '"Sadık Yoldaş" arketipi. Köpek — koşulsuz bağlılık, ehlileştirilmiş içgüdü. İnsanın yanındaki vahşi.', en: 'The "Faithful Companion" archetype. The dog — unconditional bond, tamed instinct. The wild one beside the human.' },
    dream: { tr: 'Köpek rüyada — sadakatin testi. Sana saldırıyorsa: hayatında biri sınır çiğniyor. Yanında yürüyorsa: rehberin yakın, içgüdüne güven.', en: 'Dog in dream — a test of loyalty. Attacking you: someone in your life is crossing a boundary. Walking beside you: your guide is near, trust your instinct.' },
    shadow: { tr: 'Aşırı sadakat — kendini kaybetme pahasına bağlılık. Köpek sahibine bağlıdır ama köle değildir; sevgi ile teslimiyet farkı.', en: 'Excessive loyalty — devotion at the cost of self-loss. The dog is bonded to its master but is not a slave; the difference between love and submission.' },
    whenAppears: { tr: 'Bir dostluğun derinleşmesinde, koşulsuz sevgi sınavında, ölüm ya da kayıp eşiklerinde (köpek geçişe eşlik eder).', en: 'In the deepening of a friendship, in a test of unconditional love, on the thresholds of death or loss (the dog accompanies the passage).' },
    traditions: [
      { culture: { tr: 'Mısır', en: 'Egyptian' }, meaning: { tr: 'Anubis — çakal başlı tanrı, ölüleri öbür dünyaya taşır. Geçişin koruyucusu.', en: 'Anubis — the jackal-headed god who carries the dead to the otherworld. Guardian of the passage.' } },
      { culture: { tr: 'Yunan Mitolojisi', en: 'Greek Mythology' }, meaning: { tr: 'Kerberos — Hades\'in üç başlı bekçi köpeği. Ölüler diyarının kapısı.', en: 'Cerberus — Hades\'s three-headed watchdog. The gate of the land of the dead.' } },
      { culture: { tr: 'Türk-İslam', en: 'Turco-Islamic' }, meaning: { tr: 'Eshab-ı Kehf (Mağara Arkadaşları) ile birlikte 309 yıl uyuyan Kıtmir — Kuran\'da geçen tek köpek. Sadakatin kutsallaşması.', en: 'Qitmir, who slept 309 years with the Companions of the Cave (Ashab al-Kahf) — the only dog mentioned in the Qur\'an. The sanctification of loyalty.' } },
      { culture: { tr: 'Kelt', en: 'Celtic' }, meaning: { tr: 'Cu Sith — peri köpekleri. Hem rehber hem haberci. Ölümün habercisi.', en: 'Cù-sìth — fairy dogs. Both guide and messenger. Herald of death.' } },
      { culture: { tr: 'Vedik', en: 'Vedic' }, meaning: { tr: 'Yama\'nın (ölüm tanrısı) iki dört gözlü köpeği — ruhun yolculuğunda eşlikçi.', en: 'The two four-eyed dogs of Yama (the god of death) — companions on the soul\'s journey.' } },
    ],
    myths: [
      { tr: 'Ashab-ı Kehf ve Kıtmir: Kuran\'da geçen mağara arkadaşları zulümden kaçar, mağarada uyurlar. Yanlarında bir köpek de uyur. Üç yüz yıl sonra uyanırlar. Köpeğin adı: Kıtmir. Sadakatin ödüllendirilmesi.', en: 'The Companions of the Cave and Qitmir: The Cave Companions in the Qur\'an flee persecution and sleep in a cave. A dog sleeps with them. They wake after three hundred years. The dog\'s name: Qitmir. The reward of loyalty.' },
      { tr: 'Anubis ve Ölüm: Mısır mitolojisinde Anubis öleninin kalbini Maat tüyüyle tartar. Eğer kalp tüyden hafifse — cennet. Ağırsa — yokluk. Köpek başlı tanrı: adil terazi.', en: 'Anubis and Death: In Egyptian mythology, Anubis weighs the deceased\'s heart against the feather of Maat. If the heart is lighter than the feather — paradise. Heavier — oblivion. The dog-headed god: the just scale.' },
    ],
  },

  // ─── a026 Çita ──────────────────────────────────────────────────────────
  a026: {
    jung: { tr: '"Şimşek Eylem" arketipi. Çita — fırsatı görüp anında harekete geçme. Hız, ama kısa süreli; tüm enerjiyi bir hamlede kullanma.', en: 'The "Lightning Action" archetype. The cheetah — seeing an opportunity and acting at once. Speed, but brief; spending all energy in a single move.' },
    dream: { tr: 'Çita rüyada — bir fırsat çok kısa sürede gelip geçecek. Koşuyorsa: harekete geç, beklersen kaçar. Yorgunsa: aşırı acele ediyorsun, dinlen.', en: 'Cheetah in dream — an opportunity will come and go quickly. Running: act, if you wait it escapes. Tired: you are rushing too much, rest.' },
    shadow: { tr: 'Sprint yaşamak. Her şeyi bir patlamada yapma takıntısı — sonrasında çöküş. Çita uzun mesafede kazanmaz, yıldız anlarda kazanır.', en: 'Living in sprints. The compulsion to do everything in one burst — followed by collapse. The cheetah does not win the long distance; it wins the star moments.' },
    whenAppears: { tr: 'Anlık kararlar gerektiğinde, fırsat penceresinin daraldığında, hızlı tepki ya da yenilenme arasında bir seçim anında.', en: 'When instant decisions are required, when the window of opportunity narrows, at a moment of choice between swift response and renewal.' },
    traditions: [
      { culture: { tr: 'Mısır', en: 'Egyptian' }, meaning: { tr: 'Mafdet — çita başlı tanrıça. Zehirden ve yılandan koruyan. Hızlı adaletin temsilcisi.', en: 'Mafdet — the cheetah-headed goddess. Protector from venom and serpents. Representative of swift justice.' } },
      { culture: { tr: 'Hint', en: 'Hindu' }, meaning: { tr: 'Hızın ve dikkatin sembolü. Maharaja\'ların av eşlikçisi — kraliyet hızı.', en: 'Symbol of speed and attention. Hunting companion of the maharajas — royal velocity.' } },
      { culture: { tr: 'Afrika', en: 'African' }, meaning: { tr: 'Maasai geleneğinde — annenin yavruları için yaptığı fedakârlığın simgesi. Yalnız savaşan dişi.', en: 'In Maasai tradition — symbol of the mother\'s sacrifice for her cubs. The lone-fighting female.' } },
      { culture: { tr: 'Pers', en: 'Persian' }, meaning: { tr: 'Yuyutsu — çitaların yetiştirildiği eski av kuralları. Hızın imparatorluğu.', en: 'Yuyutsu — the ancient hunting codes by which cheetahs were raised. The empire of speed.' } },
      { culture: { tr: 'Çin', en: 'Chinese' }, meaning: { tr: 'Rüzgârın hayvanı. Beş elementten hızla geçen.', en: 'The animal of the wind. The one that passes swiftly through the five elements.' } },
    ],
    myths: [
      { tr: 'Mafdet: Mısır mitolojisinde Firavun\'un yatağını yılanlardan koruyan çita-tanrıça. Hıza atfedilen kutsallık: hız ölümden önce davranabilir.', en: 'Mafdet: In Egyptian mythology, the cheetah-goddess who guarded the pharaoh\'s bed from serpents. The holiness attributed to speed: speed can act before death.' },
      { tr: 'Çita Anneleri: Afrika halk hikâyelerinde çita anne yavruları için aslandan kaçarak ölümü göze alır. Hız, sevginin hizmetinde olduğunda kutsaldır.', en: 'Cheetah Mothers: In African folk tales, the cheetah mother risks death fleeing from the lion for her cubs. Speed is sacred when it serves love.' },
    ],
  },

  // ─── a027 Ejderha ───────────────────────────────────────────────────────
  a027: {
    jung: { tr: '"Kozmik Bilinç" arketipi. Ejderha — yıkıcı ve yaratıcı en büyük güç. İçsel hazinenin bekçisi.', en: 'The "Cosmic Consciousness" archetype. The dragon — the greatest power, destructive and creative. Guardian of the inner treasure.' },
    dream: { tr: 'Ejderha rüyada — büyük bir güçle yüzleşiyorsun. Saldırıyorsa: ego seni sınıyor. Üstüne biniyorsan: derin bir gücü taşımayı öğrendin.', en: 'Dragon in dream — you are confronting a great power. Attacking: the ego is testing you. Riding it: you have learned to carry a deep force.' },
    shadow: { tr: 'Hazineyi koruma takıntısı. Ejderha sahip olduklarının üstüne yatar — paylaşmak yerine biriktirir. Egoizmin kozmik formu.', en: 'The compulsion to guard the hoard. The dragon lies upon what it owns — hoarding rather than sharing. The cosmic form of egoism.' },
    whenAppears: { tr: 'Devasa bir dönüşümün eşiğinde, kendi gücünle yüzleşmen gereken anda, içsel hazineye inişte.', en: 'On the threshold of a vast transformation, at the moment you must face your own power, in the descent to the inner treasure.' },
    traditions: [
      { culture: { tr: 'Çin', en: 'Chinese' }, meaning: { tr: 'Long — imparatorun simgesi, su, yağmur, bereket. Dört yön ejderhası dünyayı kuşatır.', en: 'Long — emblem of the emperor, water, rain, abundance. The four-direction dragons encircle the world.' } },
      { culture: { tr: 'Türk Mitolojisi', en: 'Turkic Mythology' }, meaning: { tr: 'Evren — Türk-Moğol mitolojisinde gökyüzü ejderhası. Bayraklarda, kalkanlarda. Ölümsüzlüğün taşıyıcısı.', en: 'Evren — the sky dragon of Turco-Mongol mythology. On banners and shields. Bearer of immortality.' } },
      { culture: { tr: 'Avrupa Hristiyan', en: 'European Christian' }, meaning: { tr: 'Aziz Yorgi\'nin (St. George) öldürdüğü canavar — bastırılması gereken pagan gücü.', en: 'The beast slain by Saint George — the pagan power that must be subdued.' } },
      { culture: { tr: 'İskandinav', en: 'Norse' }, meaning: { tr: 'Jörmungandr — dünyayı saran kuyruğunu yiyen ejderha. Sonun başlangıcı.', en: 'Jörmungandr — the dragon encircling the world, devouring its own tail. The beginning of the end.' } },
      { culture: { tr: 'Vedik', en: 'Vedic' }, meaning: { tr: 'Vritra — kuraklığın ejderhası. İndra tarafından öldürülünce sular akar — yaratıcı yıkım.', en: 'Vritra — the dragon of drought. When slain by Indra, the waters flow — creative destruction.' } },
    ],
    myths: [
      { tr: 'Çin Ejderhası ve Yağmur: Çin mitolojisinde ejderhalar nehir ve göllerde yaşar. Yağmur getirir, bereket yağdırır. Kuraklık — ejderhanın kızgınlığıdır, sevgisini geri kazanmak gerek.', en: 'The Chinese Dragon and Rain: In Chinese mythology, dragons dwell in rivers and lakes. They bring rain and pour abundance. Drought is the dragon\'s anger — one must win back its love.' },
      { tr: 'St. George ve Ejderha: Hristiyan ikonografisinde Aziz Yorgi, prensesi kurtarmak için ejderhayı öldürür. Doğu\'nun kutsadığı, Batı\'nın bastırdığı — perspektif tartışması.', en: 'St. George and the Dragon: In Christian iconography, Saint George slays the dragon to save the princess. What the East sanctifies, the West subdues — a question of perspective.' },
    ],
  },

  // ─── a028 Karakulak ─────────────────────────────────────────────────────
  a028: {
    jung: { tr: '"Sessiz Sezgi" arketipi. Karakulak — kulağıyla görür, görünmeyeni duyur. Görünmeden gözlemleyen yargıç.', en: 'The "Silent Intuition" archetype. The caracal — sees with its ears, hears the unseen. The judge who observes without being seen.' },
    dream: { tr: 'Karakulak rüyada — duyamadığın bir şeye dikkat çekiyor. Gizli bir mesaj, fısıltı, sezgi. Birinin söylemediği var.', en: 'Caracal in dream — draws attention to what you cannot hear. A hidden message, whisper, intuition. Someone has something they are not saying.' },
    shadow: { tr: 'Sürekli kuşku. Her şeyin altında bir komplo aramak. Karakulak duyar ama yorumda yanılırsa paranoya doğar.', en: 'Constant suspicion. Searching for a conspiracy beneath everything. The caracal hears, but errors in interpretation give birth to paranoia.' },
    whenAppears: { tr: 'Kelimelerin gerçeği örttüğü konuşmalarda, bir hissin doğrulanmasını beklerken, gizli niyetleri okuman gerekirken.', en: 'In conversations where words conceal the truth, while awaiting confirmation of a feeling, when you must read hidden intentions.' },
    traditions: [
      { culture: { tr: 'Anadolu Vahşi Yaşam', en: 'Anatolian Wildlife' }, meaning: { tr: 'Anadolu\'nun saklı avcısı. Toroslar\'da, çöllerinde gizlice yaşar. Sessiz biliciliğin sembolü.', en: 'Anatolia\'s hidden hunter. Lives secretly in the Taurus mountains and the deserts. Symbol of silent knowing.' } },
      { culture: { tr: 'Pers/Arap', en: 'Persian/Arabic' }, meaning: { tr: 'Çöl çakallarının kuzeni. Bedevi geleneğinde "uzak haberi getiren" kabul edilir.', en: 'Cousin to the desert jackals. In Bedouin tradition, regarded as "the one who brings news from afar".' } },
      { culture: { tr: 'Hint', en: 'Hindu' }, meaning: { tr: 'Şiva\'nın gözünden saklananları gören — gizli adaletin habercisi.', en: 'The one who sees what is hidden from Shiva\'s eye — herald of hidden justice.' } },
      { culture: { tr: 'Mısır', en: 'Egyptian' }, meaning: { tr: 'Anubis\'in çakal akrabası. Yer altı dünyasının habercisi.', en: 'Jackal-kin to Anubis. Messenger of the underworld.' } },
      { culture: { tr: 'Bedevi', en: 'Bedouin' }, meaning: { tr: 'Avcılık geleneğinde "sultanın kulağı". Padişaha en yakın av hayvanı.', en: 'In the hunting tradition, "the sultan\'s ear". The hunting animal closest to the ruler.' } },
    ],
    myths: [
      { tr: 'Karakulak ve Tilki: Anadolu masallarında karakulak tilkiden daha sessiz, daha sezgisel hayvan olarak resmedilir. Tilki konuşurken kandırır, karakulak susarak kandırılır mı diye bakar.', en: 'The Caracal and the Fox: In Anatolian tales, the caracal is depicted as quieter, more intuitive than the fox. The fox deceives by speaking; the caracal, by being silent, watches to see if it is being deceived.' },
      { tr: 'Sultan\'ın Karakulağı: Osmanlı sarayında padişaha "duyduklarını gizlice anlatan" yakın adamlara "karakulak" denirdi. Hayvanın saklı kulağı — politikanın metaforu.', en: 'The Sultan\'s Caracal: In the Ottoman court, close attendants who "secretly conveyed what they heard" to the sultan were called "karakulak". The animal\'s hidden ear — a metaphor for politics.' },
    ],
  },

  // ─── a029 Maral ─────────────────────────────────────────────────────────
  a029: {
    jung: { tr: '"Sevda Çağrısı" arketipi. Maral — kederin ve şefkatin birleşimi. Yaralı kalbin sesi.', en: 'The "Call of Longing" archetype. The doe — union of sorrow and tenderness. The voice of the wounded heart.' },
    dream: { tr: 'Maral rüyada — bir özlemin, bir sevdanın çağrısı. Kaçıyorsa: sevdiğine yetişemiyorsun. Sana yaklaşıyorsa: kalp açılıyor.', en: 'Doe in dream — the call of a longing, a love. Fleeing: you cannot catch up to your beloved. Approaching you: the heart is opening.' },
    shadow: { tr: '"Yaralı ceylan" rolü. Korunmaya muhtaç pozisyonu hayat tarzı yapmak — şefkat dilenmek.', en: 'The "wounded gazelle" role. Making the posture of needing protection a way of life — begging for tenderness.' },
    whenAppears: { tr: 'Bir sevgilinin uzaklığında, ana-yavru bağında, hayatın yumuşaklığa çağırdığı anda.', en: 'In a beloved\'s distance, in the mother-child bond, at the moment life calls you to gentleness.' },
    traditions: [
      { culture: { tr: 'Türk Halk Şiiri', en: 'Turkish Folk Poetry' }, meaning: { tr: '"Karac\'oğlan\'ın Maralı" — Anadolu aşk şiirinin merkez sembolü. Sevgilinin gözleri, boynunun zarafeti.', en: '"Karacaoğlan\'s Doe" — the central symbol of Anatolian love poetry. The beloved\'s eyes, the grace of her neck.' } },
      { culture: { tr: 'Yunan Mitolojisi', en: 'Greek Mythology' }, meaning: { tr: 'Aktaion mitinde — avcı Artemis\'i çıplak görür, ceza olarak geyiğe (maral) dönüştürülür ve kendi köpeklerince parçalanır.', en: 'In the Actaeon myth — the hunter sees Artemis naked; in punishment he is turned into a stag and torn apart by his own hounds.' } },
      { culture: { tr: 'Kelt', en: 'Celtic' }, meaning: { tr: 'Beyaz maral — ruhlar âleminden gelen mesajcı. Kralı seçen kutsal.', en: 'The white doe — messenger from the spirit realm. The sacred one who chooses the king.' } },
      { culture: { tr: 'Vedik', en: 'Vedic' }, meaning: { tr: 'Sarama — tanrıların habercisi. Saf ruhun yer üstündeki formu.', en: 'Sarama — messenger of the gods. The earthly form of the pure soul.' } },
      { culture: { tr: 'Şamanik', en: 'Shamanic' }, meaning: { tr: 'Sibirya geleneğinde — bedensiz aşk ruhunun temsilcisi.', en: 'In Siberian tradition — representative of the bodiless spirit of love.' } },
    ],
    myths: [
      { tr: 'Karac\'oğlan ve Maralı: Anadolu\'nun en lirik halk şiirinde, Karac\'oğlan sevdiğini "marala" benzetir. Maral kaçar, şair kovalar — sevda, yetişilemeyen güzelliktir.', en: 'Karacaoğlan and His Doe: In Anatolia\'s most lyric folk poetry, Karacaoğlan likens his beloved to a doe. The doe flees, the poet pursues — love is the unattainable beauty.' },
      { tr: 'Aktaion\'un Cezası: Yunan mitolojisinde avcı Aktaion, su perisi formundaki Artemis\'i görür. Tanrıça onu cezalandırmak için marala dönüştürür — kendi köpekleri tarafından parçalanır. Görenin görülmesi.', en: 'Actaeon\'s Punishment: In Greek mythology, the hunter Actaeon sees Artemis in her water-nymph form. To punish him, the goddess transforms him into a stag — he is torn apart by his own hounds. The seer is seen.' },
    ],
  },

  // ─── a030 Timsah ────────────────────────────────────────────────────────
  a030: {
    jung: { tr: '"İlkel Bilinçaltı" arketipi. Timsah — sürüngen beynin dipteki sesi. Korkunun bedenleşmiş hâli, ama aynı zamanda hayatta kalmanın koruyucusu.', en: 'The "Primal Unconscious" archetype. The crocodile — the deep voice of the reptilian brain. The embodied form of fear, yet also the guardian of survival.' },
    dream: { tr: 'Timsah rüyada — bilinçaltında bekleyen bir tehlikenin veya gücün var. Suyun altındaysa: gölge taraf hareketsiz bekliyor. Karaya çıkıyorsa: yüzleşmen gereken bir şey ortaya çıktı.', en: 'Crocodile in dream — a danger or a power lies waiting in your unconscious. Underwater: the shadow side waits motionless. Coming ashore: something you must face has surfaced.' },
    shadow: { tr: 'Soğuk zalimlik. Timsah enerjisi bilinçsizleşirse — duygusuz hayatta kalma, başkalarını yutarak yaşama.', en: 'Cold cruelty. When crocodile energy turns unconscious — emotionless survival, living by devouring others.' },
    whenAppears: { tr: 'Derin korkularla yüzleşirken, gölge çalışmasında, bilinçaltına dalman gerektiğinde.', en: 'While confronting deep fears, in shadow work, when you must descend into the unconscious.' },
    traditions: [
      { culture: { tr: 'Mısır', en: 'Egyptian' }, meaning: { tr: 'Sobek — timsah başlı tanrı. Nil\'in gücü, doğurganlık, ama aynı zamanda korkunun tanrısı. Firavunun yıkıcı yönü.', en: 'Sobek — the crocodile-headed god. The Nile\'s force, fertility, yet also the god of fear. The pharaoh\'s destructive aspect.' } },
      { culture: { tr: 'Vedik', en: 'Vedic' }, meaning: { tr: 'Makara — Varuna\'nın (su tanrısı) bineği. Suyun bilinçaltı bilgeliği.', en: 'Makara — the mount of Varuna (god of waters). The unconscious wisdom of the waters.' } },
      { culture: { tr: 'Maya/Aztek', en: 'Mayan/Aztec' }, meaning: { tr: 'Cipactli — dünyanın üzerinde yaratıldığı dev timsah. Yaratılışın platformu.', en: 'Cipactli — the giant crocodile upon which the world was created. The platform of creation.' } },
      { culture: { tr: 'Afrika', en: 'African' }, meaning: { tr: 'Yoruba geleneğinde — adaletin ve nehir tanrılarının habercisi.', en: 'In Yoruba tradition — herald of justice and the river gods.' } },
      { culture: { tr: 'Avustralya', en: 'Australian' }, meaning: { tr: 'Aborjin rüya zamanında — toprak ve suyun kararlılığını koruyan ata varlık.', en: 'In Aboriginal Dreamtime — the ancestral being who guards the steadiness of earth and water.' } },
    ],
    myths: [
      { tr: 'Sobek ve Nil: Mısırlılar Nil\'in taşmasını Sobek\'in iradesi sayardı. Tanrıyı memnun etmek için timsahlara altın takılır, tapınaklarda bakılırdı — korkulan ama saygı duyulan güç.', en: 'Sobek and the Nile: The Egyptians considered the Nile\'s flooding to be Sobek\'s will. To please the god, crocodiles were adorned with gold and tended in temples — a power feared yet revered.' },
      { tr: 'Cipactli\'nin Yaratılışı: Aztek mitolojisinde Quetzalcoatl ve Tezcatlipoca, devasa timsah Cipactli\'yi parçalayarak dünyayı yaratır. Gökyüzü onun sırtı, yer onun karnı — yaratılış parçalanmadır.', en: 'Cipactli\'s Creation: In Aztec mythology, Quetzalcoatl and Tezcatlipoca create the world by dismembering the giant crocodile Cipactli. The sky is its back, the earth its belly — creation is dismemberment.' },
    ],
  },

  // ─── a031 Kartal Baykuşu ────────────────────────────────────────────────
  a031: {
    jung: { tr: '"Karanlık Bilgelik" arketipi. Kartal baykuşu — gece kralı. Baykuşun sezgisi ve kartalın gücü birleşmiş.', en: 'The "Dark Wisdom" archetype. The eagle owl — king of the night. The owl\'s intuition and the eagle\'s power united.' },
    dream: { tr: 'Kartal baykuşu rüyada — derin bir gece bilgisi sana açılıyor. Hem otorite hem sezgi taşıyor. Karanlıkta görü kazanıyorsun.', en: 'Eagle owl in dream — a deep nocturnal knowledge is opening to you. It carries both authority and intuition. You are gaining vision in darkness.' },
    shadow: { tr: 'Yargılayıcı bilgelik. "Ben gördüm, sen göremedin" üstünlüğü. Bilgi otoriteye dönüşürse — yalnız kalır.', en: 'Judgmental wisdom. The superiority of "I saw, you could not". When knowledge turns to authority — it ends alone.' },
    whenAppears: { tr: 'Hem güç hem sezgi gerektiğinde, geceleyin alınması gereken kararlarda, derinlerden gelen liderlik anlarında.', en: 'When both power and intuition are required, in decisions that must be made at night, in moments of leadership rising from the depths.' },
    traditions: [
      { culture: { tr: 'Anadolu', en: 'Anatolian' }, meaning: { tr: 'Toroslar\'ın gece kralı. En büyük baykuş türü — dağ bilgeliğinin somut hâli.', en: 'King of the Taurus night. The largest of the owl species — the embodied form of mountain wisdom.' } },
      { culture: { tr: 'Yunan Mitolojisi', en: 'Greek Mythology' }, meaning: { tr: 'Athena\'nın baykuşunun büyük akrabası. Gerçek bilgeliğin gece görüsü.', en: 'Larger kin to Athena\'s owl. The nocturnal vision of true wisdom.' } },
      { culture: { tr: 'Türk Şamanizmi', en: 'Turkic Shamanism' }, meaning: { tr: 'Şaman gecesinde göğe yükselen baykuş ruhu — en üst saviyenin sembolü.', en: 'The owl-spirit ascending to the sky in the shaman\'s night — symbol of the highest realm.' } },
      { culture: { tr: 'Kelt', en: 'Celtic' }, meaning: { tr: 'Cailleach\'in kuşu — yaşlı tanrıçanın gece habercisi.', en: 'The Cailleach\'s bird — the night-messenger of the old goddess.' } },
      { culture: { tr: 'Sibirya', en: 'Siberian' }, meaning: { tr: 'Tundranın bekçisi. Yalnız avcının atası kabul edilir.', en: 'Guardian of the tundra. Held to be the ancestor of the solitary hunter.' } },
    ],
    myths: [
      { tr: 'Kartal Baykuşu ve Avcı: Sibirya halk hikâyelerinde genç bir avcı yıllarca kartal baykuşundan ders alır — gece görüsü, sessiz hareket, doğru zamanlama. Sonunda kendisi gece kralı olur.', en: 'The Eagle Owl and the Hunter: In Siberian folk tales, a young hunter studies for years under the eagle owl — night vision, silent movement, right timing. At last he himself becomes king of the night.' },
      { tr: 'Toros Dağları: Anadolu\'da bu kuşa rastlamak çok nadirdir. Onu gören kişinin "ata bilgeliğinden" haber aldığı söylenir. Kayboluşu — kaybedilen sezginin işareti.', en: 'The Taurus Mountains: To encounter this bird in Anatolia is very rare. Those who see it are said to receive word from "ancestral wisdom". Its disappearance — a sign of lost intuition.' },
    ],
  },

  // ─── a032 Boğa ──────────────────────────────────────────────────────────
  a032: {
    jung: { tr: '"Bedenlenmiş Güç" arketipi. Boğa — toprağa kök salmış erkek/dişil güç. Şehvet, bereket, ama aynı zamanda kontrol edilmesi gereken vahşilik.', en: 'The "Embodied Power" archetype. The bull — masculine/feminine force rooted in the earth. Lust, fertility, yet also a wildness that must be controlled.' },
    dream: { tr: 'Boğa rüyada — bedenin ve içgüdülerinin sesi. Saldırıyorsa: bastırılmış arzu/öfke patlıyor. Otluyorsa: doyumlu bir döneme giriyorsun.', en: 'Bull in dream — the voice of body and instinct. Charging: a repressed desire or anger is exploding. Grazing: you are entering a period of contentment.' },
    shadow: { tr: 'Şiddet ve baskı. Boğa enerjisi kontrol edilmezse — zorbalığa, kıskançlığa, yıkıma dönüşür.', en: 'Violence and dominance. Uncontrolled, bull energy turns into bullying, jealousy, destruction.' },
    whenAppears: { tr: 'Bedensel gücünle bağlandığında, cinsel/yaratıcı enerjini doğru yöne çevirmen gerekirken, kararını "ayakta dur" haline getirmen lazımken.', en: 'When you connect with your bodily power, when you must direct sexual/creative energy rightly, when you must turn your decision into a "stand your ground".' },
    traditions: [
      { culture: { tr: 'Hitit/Anadolu', en: 'Hittite/Anatolian' }, meaning: { tr: 'Hattuşa\'da boğa tapınağı. Fırtına tanrısının (Teşup) kutsal bineği. Anadolu medeniyetinin ekseni.', en: 'The bull temple at Hattusa. Sacred mount of the storm god (Teshub). The axis of Anatolian civilization.' } },
      { culture: { tr: 'Mısır', en: 'Egyptian' }, meaning: { tr: 'Apis — Memphis\'te yaşatılan kutsal boğa. Yeryüzünde Osiris\'in bedenleşmiş hâli.', en: 'Apis — the sacred bull kept at Memphis. The earthly incarnation of Osiris.' } },
      { culture: { tr: 'Yunan Mitolojisi', en: 'Greek Mythology' }, meaning: { tr: 'Minotaur — yarı insan yarı boğa. Knossos\'taki labirentin ortasındaki bastırılmış doğa.', en: 'Minotaur — half man, half bull. The repressed nature at the center of the labyrinth at Knossos.' } },
      { culture: { tr: 'Vedik', en: 'Vedic' }, meaning: { tr: 'Nandi — Şiva\'nın bineği. Tapınakların önünde otururken karşı tarafa, ilahi tarafa bakar.', en: 'Nandi — Shiva\'s mount. Seated before temples, he gazes across to the divine side.' } },
      { culture: { tr: 'Mitra Kültü', en: 'Mithraic Cult' }, meaning: { tr: 'Mitra\'nın boğayı boğazlaması — kozmik yenilenme ayini. Roma askerinin sırı.', en: 'Mithras\'s slaying of the bull — the cosmic renewal rite. The secret of the Roman soldier.' } },
    ],
    myths: [
      { tr: 'Minotaur ve Labirent: Yunan mitolojisinde Kral Minos\'un karısı Pasiphae bir boğaya âşık olur. Doğan çocuk Minotaur — yarı insan yarı boğa. Daedalos\'un labirentinde tutulur — bastırılan şehvetin merkezde saklanması.', en: 'The Minotaur and the Labyrinth: In Greek mythology, Pasiphae, wife of King Minos, falls in love with a bull. The child born is the Minotaur — half man, half bull. He is kept in Daedalus\'s labyrinth — the repressed desire concealed at the center.' },
      { tr: 'Apis ve Memphis: Mısır\'da Apis adlı boğa Osiris\'in dünyadaki vücudu sayılırdı. Doğal ölünce büyük matem tutulur, yeni Apis doğana kadar Mısır yas içinde kalırdı.', en: 'Apis and Memphis: In Egypt, the bull called Apis was considered the earthly body of Osiris. Upon his natural death, great mourning was held, and Egypt remained in grief until a new Apis was born.' },
    ],
  },

  // ─── a033 Karınca ───────────────────────────────────────────────────────
  a033: {
    jung: { tr: '"Kolektif Sabır" arketipi. Karınca — küçük çabaların toplamı, görünmez emeğin sembolü. Disiplin ve toplumsallık.', en: 'The "Collective Patience" archetype. The ant — the sum of small efforts, symbol of invisible labor. Discipline and sociality.' },
    dream: { tr: 'Karınca rüyada — küçük adımların büyük bir yapı kurduğunu söyler. Yığın hâlinde: kolektif yaratım. Sana tırmanıyorsa: sıkıntılar birikiyor, ele al.', en: 'Ant in dream — tells you that small steps are building a great structure. In great numbers: collective creation. Climbing on you: troubles are accumulating — address them.' },
    shadow: { tr: 'Robot gibi yaşamak. Bireyselliğini kaybedip sadece "iş" haline gelmek. Karınca büyük bir parça, ama tek başına anlamlıdır.', en: 'Living like a robot. Losing individuality and becoming only "work". The ant is part of a great whole, yet meaningful in itself.' },
    whenAppears: { tr: 'Uzun vadeli projelerde, küçük katkıların önemini fark ettiğinde, toplulukta görünmez ama vazgeçilmez rolde olduğun anda.', en: 'In long-term projects, when you grasp the importance of small contributions, at the moment you hold an invisible yet indispensable role in a community.' },
    traditions: [
      { culture: { tr: 'Süleyman ve Karınca', en: 'Solomon and the Ant' }, meaning: { tr: 'Kuran\'da Neml Suresi — Süleyman peygamber karıncaların lideriyle konuşur. Karıncanın sesi: "Yuvalarınıza girin ki Süleyman ordusu sizi çiğnemesin."', en: 'In the Qur\'an, Surah An-Naml — the prophet Solomon speaks with the leader of the ants. The ant\'s voice: "Enter your dwellings, lest Solomon and his hosts crush you."' } },
      { culture: { tr: 'Afrika', en: 'African' }, meaning: { tr: 'Anansi masallarında — kolektif aklın sembolü. Tek bireyin yapamadığını topluluk yapar.', en: 'In Anansi tales — symbol of the collective mind. What no single being can do, the community accomplishes.' } },
      { culture: { tr: 'Kızılderili', en: 'Native American' }, meaning: { tr: 'Hopi geleneğinde karınca-insanlar yer altından geldi. Sabır ve birlik öğretmeni.', en: 'In Hopi tradition, the Ant People came from below the earth. Teacher of patience and unity.' } },
      { culture: { tr: 'Çin', en: 'Chinese' }, meaning: { tr: 'Konfüçyüsçü gelenekte erdem örneği — disiplin, sadakat, hiyerarşi.', en: 'In the Confucian tradition, an example of virtue — discipline, loyalty, hierarchy.' } },
      { culture: { tr: 'Anadolu Halk', en: 'Anatolian Folk' }, meaning: { tr: '"Karınca kararınca" deyişi — herkes payına düşeni yapsın.', en: 'The saying "ant by ant\'s measure" — let each do their share.' } },
    ],
    myths: [
      { tr: 'Süleyman ve Karınca Vadisi: Kuran\'da Süleyman ordusu karıncalar vadisinden geçerken bir karınca diğerlerini uyarır. Süleyman gülümser ve şükreder. En küçük yaratığın sözünü duyabilmek — gerçek liderliktir.', en: 'Solomon and the Valley of the Ants: In the Qur\'an, as Solomon\'s army passes through the valley of the ants, one ant warns the others. Solomon smiles and gives thanks. To hear the speech of the smallest creature — that is true leadership.' },
      { tr: 'Hopi Karınca-İnsanları: Hopi yaratılış mitinde, dünyanın yüzeyi bozulunca insanlar yer altına çekilir. Karınca-insanlar onları besler, korur, sonunda yeniden yüzeye taşır — kolektif şifa.', en: 'The Hopi Ant People: In the Hopi creation myth, when the surface of the world is corrupted, humans retreat underground. The Ant People feed and protect them, and finally bring them back to the surface — collective healing.' },
    ],
  },

  // ─── a034 Hac Leyleği ───────────────────────────────────────────────────
  a034: {
    jung: { tr: '"Yolcu Hac\'ı" arketipi. Hac leyleği — ömrü yolculuğa adamış. Her yıl aynı kutsal yolu yenilemek.', en: 'The "Pilgrim Wayfarer" archetype. The pilgrim stork — a life devoted to journey. Renewing the same sacred path each year.' },
    dream: { tr: 'Hac leyleği rüyada — ruhsal bir göç yaklaşıyor. Aynı yere her yıl giden bir döngünün parçasısın. Yola çıkmanın zamanı geldi.', en: 'Pilgrim stork in dream — a spiritual migration approaches. You are part of a cycle returning to the same place each year. The time has come to set out.' },
    shadow: { tr: 'Sürekli "yolda" olmak ama hiç varmamak. Hac sembolik bir yolculuktur — eğer asla dönmüyorsan, kaçışa dönüşür.', en: 'Always being "on the way" but never arriving. The pilgrimage is a symbolic journey — if you never return, it becomes flight.' },
    whenAppears: { tr: 'Uzun, döngüsel bir göç döneminde, ruhsal bir hac niyetinde, "her yıl bu zamanda hep aynı" hissinde.', en: 'In a long, cyclical period of migration, in the intention of a spiritual pilgrimage, in the feeling "every year at this time, the same again".' },
    traditions: [
      { culture: { tr: 'Anadolu', en: 'Anatolian' }, meaning: { tr: '"Hacı leylek" — hacca gidip dönen kuş. Çatıdaki yuvası — kutsanmış ev.', en: '"Hacı leylek" — the bird that goes on pilgrimage and returns. Its rooftop nest — a blessed home.' } },
      { culture: { tr: 'İslam Halk', en: 'Islamic Folk' }, meaning: { tr: 'Yıllık göçü hac olarak yorumlanır. Mekke\'ye gidip dönen ruh.', en: 'Its yearly migration is interpreted as pilgrimage. The soul that travels to Mecca and returns.' } },
      { culture: { tr: 'Slav', en: 'Slavic' }, meaning: { tr: 'Dolu Çar tanrısının habercisi. Bahar getiren kuş.', en: 'Messenger of the god Tsar of Hail. The bird that brings spring.' } },
      { culture: { tr: 'Mısır', en: 'Egyptian' }, meaning: { tr: 'Ba ruhunun kuş hâli — bedenden ayrılıp seyahat eden öz.', en: 'The bird-form of the Ba soul — the essence that leaves the body and travels.' } },
      { culture: { tr: 'Anadolu Halk', en: 'Anatolian Folk' }, meaning: { tr: '"Leylek bahar getirir" — döngüsel umut sembolü.', en: '"The stork brings spring" — symbol of cyclical hope.' } },
    ],
    myths: [
      { tr: 'Hacca Giden Leylek: Anadolu inanışına göre leylekler her yıl Mekke yönüne göç eder, dönerler. Bu nedenle "hacı leylek" denir. Onlara zarar veren bir kutsalı bozmuş sayılır.', en: 'The Stork that Goes on Hajj: According to Anatolian belief, storks migrate each year toward Mecca and return. For this reason they are called "hacı leylek". To harm them is to break a sacred thing.' },
      { tr: 'Leyleğin Yuvası: Bir Anadolu hikâyesi: Bir köylü çatısındaki leylek yuvasını yıkar. O yıl yağmur yağmaz, mahsul kurur. Köylü yuvayı tekrar yapana kadar bereket dönmez.', en: 'The Stork\'s Nest: An Anatolian tale: a peasant destroys the stork\'s nest on his roof. That year no rain falls and the crop withers. Abundance does not return until the peasant rebuilds the nest.' },
    ],
  },

  // ─── a035 Ördek ─────────────────────────────────────────────────────────
  a035: {
    jung: { tr: '"Akış İçinde Durulluk" arketipi. Ördek — suda yüzer, yağmurda ıslanmaz. Etrafından geçen kaosa karışmayan iç huzur.', en: 'The "Stillness Within Flow" archetype. The duck — swims on water, untouched by rain. The inner peace that does not mingle with the chaos passing through.' },
    dream: { tr: 'Ördek rüyada — duygusal akıştan etkilenmeden durabilmen gerektiğini söyler. Yüzüyorsa: huzur içinde ilerliyorsun. Uçuyorsa: bir döngüden çıkış zamanı.', en: 'Duck in dream — tells you that you must remain unaffected by emotional currents. Swimming: you are moving forward in peace. Flying: time to exit a cycle.' },
    shadow: { tr: 'Aşırı ayrılık. "Etkilenmemek" duyarsızlığa dönüşürse — ördek su kuşu olur ama "kalp" kalmaz.', en: 'Excessive detachment. If "not being affected" turns into insensitivity — the duck remains a water bird, but the heart is gone.' },
    whenAppears: { tr: 'Kaotik bir ortamda merkezde kalman gerekirken, başkalarının dramından çıkmak istediğinde, suyun seni temizlediği bir anda.', en: 'When you must stay centered in a chaotic environment, when you wish to exit another\'s drama, in a moment when water cleanses you.' },
    traditions: [
      { culture: { tr: 'Çin', en: 'Chinese' }, meaning: { tr: 'Mandarin ördekleri — sadık eşler. Düğün hediyesi olarak çift verilir.', en: 'Mandarin ducks — faithful spouses. Given in pairs as wedding gifts.' } },
      { culture: { tr: 'Kızılderili', en: 'Native American' }, meaning: { tr: 'Su ile gök arasında köprü. Hem yüzer hem uçar — iki dünya hayvanı.', en: 'A bridge between water and sky. It swims and flies — a two-world animal.' } },
      { culture: { tr: 'Mısır', en: 'Egyptian' }, meaning: { tr: 'Akhenaten döneminde — basitliğin ve halkın hayvanı. Tapınak motiflerinde aile sahnesi.', en: 'In the Akhenaten period — the animal of simplicity and the people. A family scene in temple motifs.' } },
      { culture: { tr: 'Anadolu', en: 'Anatolian' }, meaning: { tr: 'Göl köylerinde rızkın simgesi. "Ördek bolsa, ev tok" deyişi.', en: 'In lakeside villages, the symbol of sustenance. The saying "where ducks are plenty, the home is fed".' } },
      { culture: { tr: 'Slav', en: 'Slavic' }, meaning: { tr: 'Yumurtasında dünyanın saklandığı kuş — yaratılışın annesi.', en: 'The bird whose egg conceals the world — the mother of creation.' } },
    ],
    myths: [
      { tr: 'Mandarin Ördekleri: Çin geleneğinde mandarin ördekleri eşlerini ömür boyu değiştirmez. Eşi ölünce diğeri de bekler. Bu yüzden düğünlerde çift mandarin ördeği hediye edilir — sadakat duası.', en: 'Mandarin Ducks: In Chinese tradition, mandarin ducks never change partners. When one dies, the other waits. For this reason a pair of mandarin ducks is given at weddings — a prayer of faithfulness.' },
      { tr: 'Slav Yaratılış Ördekleri: Slav mitolojisinde dünya, suların üstünde yüzen iki ördeğin yumurtaladığı sarı yumurtadan doğdu. Akış üstünde yaratım.', en: 'The Slavic Creation Ducks: In Slavic mythology, the world was born from the yellow egg laid by two ducks floating on the waters. Creation upon flow.' },
    ],
  },

  // ─── a036 Kuzgun ────────────────────────────────────────────────────────
  a036: {
    jung: { tr: '"Trickster Bilge" arketipi. Kuzgun — kâhin ile soytarı bir bedende. Karanlığın zekası, ölümün haberi, ama aynı zamanda yaratıcılık.', en: 'The "Trickster Sage" archetype. The raven — seer and jester in one body. The intelligence of darkness, the news of death, yet also creativity.' },
    dream: { tr: 'Kuzgun rüyada — bir uyarı geliyor. Ya da: zekanı saklamayı bırak. Konuşuyorsa: gizli bir bilgi açılıyor.', en: 'Raven in dream — a warning is coming. Or: stop hiding your intelligence. Speaking: a hidden knowledge is opening.' },
    shadow: { tr: 'Kara mizah ve alaycılık. Kuzgun her şeyi bilir gibi davranırsa — siniklik. Her şeyin "boş" olduğunu söyleyen ses.', en: 'Black humor and mockery. If the raven acts as though it knows everything — cynicism. The voice saying that all is "empty".' },
    whenAppears: { tr: 'Uyarı işaretlerini görmen gerekirken, zekanın kara mizahla beslendiği anlarda, ölüm-yas süreçlerinde rehber gibi.', en: 'When you must see the warning signs, in moments when intelligence is fed by dark humor, as a guide in death-grief processes.' },
    traditions: [
      { culture: { tr: 'İskandinav', en: 'Norse' }, meaning: { tr: 'Odin\'in iki kuzgunu Huginn (düşünce) ve Muninn (hafıza). Her gün dünyayı dolaşır, hanlarına bilgi getirir.', en: 'Odin\'s two ravens, Huginn (thought) and Muninn (memory). Every day they fly across the world and bring news back to their lord.' } },
      { culture: { tr: 'Kelt', en: 'Celtic' }, meaning: { tr: 'Morrigan — savaş tanrıçası kuzgun formunda görünür. Ölüme yakın olanları işaretler.', en: 'The Morrigan — the war goddess appears in raven form. She marks those near to death.' } },
      { culture: { tr: 'Kızılderili', en: 'Native American' }, meaning: { tr: 'Haida ve Tlingit geleneğinde — yaratıcı trickster. Güneşi çalan, dünyayı şekillendiren.', en: 'In Haida and Tlingit tradition — the creative trickster. The one who stole the sun and shaped the world.' } },
      { culture: { tr: 'Türk-Moğol', en: 'Turco-Mongol' }, meaning: { tr: 'Karakuş — şamanın yardımcısı. Atalardan haber getiren kara haberci.', en: 'Karakuş — the shaman\'s helper. The dark messenger who brings word from the ancestors.' } },
      { culture: { tr: 'Hristiyan', en: 'Christian' }, meaning: { tr: 'Nuh\'un gemisinden ilk salınan kuş — geri dönmemiş. Sadakatsizliğin simgesi olarak yorumlanmış, ama bağımsızlık olarak da.', en: 'The first bird released from Noah\'s ark — it did not return. Interpreted as a symbol of disloyalty, yet also of independence.' } },
    ],
    myths: [
      { tr: 'Odin\'in Kuzgunları: İskandinav baş tanrı Odin\'in omuzlarında iki kuzgun durur — Huginn (düşünce) ve Muninn (hafıza). Her gün dünyayı dolaşır, akşam Odin\'in kulağına haber fısıldarlar. Bilgelik — gözlemleyebilmektir.', en: 'Odin\'s Ravens: Two ravens perch on the shoulders of the Norse high god Odin — Huginn (thought) and Muninn (memory). Each day they roam the world and at evening whisper news in Odin\'s ear. Wisdom is the capacity to observe.' },
      { tr: 'Haida Kuzgunu: Haida mitolojisinde kuzgun, kutucu tanrıdan güneşi, ayı ve yıldızları çalar ve dünyaya dağıtır. Yaratıcı hilebaz — kuralı bozarak hayatı veren.', en: 'The Haida Raven: In Haida mythology, the raven steals the sun, moon, and stars from the hoarder-god and distributes them to the world. The creative trickster — the one who gives life by breaking the rule.' },
    ],
  },

  // ─── a037 Ak Kelebek ────────────────────────────────────────────────────
  a037: {
    jung: { tr: '"Saf Ruh" arketipi. Ak kelebek — kelebeklerin en hassas, en geçici formu. Ruhun beyaz ışığı.', en: 'The "Pure Soul" archetype. The white butterfly — the most delicate, most fleeting form of butterflies. The white light of the soul.' },
    dream: { tr: 'Ak kelebek rüyada — bir saflık, bir aydınlık geri geliyor. Ölmüş yakının ruhu, ya da çocuksu özün ziyareti.', en: 'White butterfly in dream — a purity, a clarity is returning. The soul of a deceased loved one, or a visit from your childlike essence.' },
    shadow: { tr: 'Aşırı maneviyat — bedeni inkâr. Ak kelebek hep "yüksek titreşim"de yaşamaya çalışırsa, dünya işlerini ihmal eder.', en: 'Excessive spirituality — denial of the body. If the white butterfly tries to live always at "high vibration", it neglects worldly matters.' },
    whenAppears: { tr: 'Bir hafızanın berraklaştığı anda, atalarınla bağlantı kurmak istediğinde, çocuksu temiz neşeyi geri istediğin günlerde.', en: 'At the moment a memory clarifies, when you wish to connect with your ancestors, in the days you want your pure childlike joy back.' },
    traditions: [
      { culture: { tr: 'Anadolu', en: 'Anatolian' }, meaning: { tr: '"Ak kelebek atadan haber" — yas evine giren ak kelebek, gidenden mesaj.', en: '"The white butterfly is news from the ancestor" — a white butterfly entering a house in mourning is a message from the departed.' } },
      { culture: { tr: 'Japonya', en: 'Japanese' }, meaning: { tr: 'Hakuchō — ölmüş kişinin ruhunun ziyareti. Aile yıldönümlerinde gelir.', en: 'Hakuchō — the visit of a deceased person\'s soul. It comes on family anniversaries.' } },
      { culture: { tr: 'Kelt', en: 'Celtic' }, meaning: { tr: 'Ölmüş çocukların ruhu beyaz kelebek formunda dönermiş. Anneye teselli.', en: 'The souls of deceased children were said to return in the form of white butterflies. A consolation to the mother.' } },
      { culture: { tr: 'Hristiyan', en: 'Christian' }, meaning: { tr: 'Diriliş sembolü. Mezar taşlarında işlenir — ruhun bedeni terk edip yükselişi.', en: 'Symbol of resurrection. Carved on tombstones — the soul leaving the body to ascend.' } },
      { culture: { tr: 'Çin', en: 'Chinese' }, meaning: { tr: 'Saf aşkın simgesi. Sevdiğine söz vermenin işareti.', en: 'Symbol of pure love. The sign of pledging oneself to the beloved.' } },
    ],
    myths: [
      { tr: 'Atadan Haber: Anadolu\'da ölmüş bir yakının yas haftalarında eve giren ak kelebek, onun ruhunun ziyareti sayılır. "Hoş geldin" denir, kovulmaz. Kelebek çıkana kadar dua edilir.', en: 'Word from the Ancestor: In Anatolia, a white butterfly entering the home during the mourning weeks of a deceased loved one is considered a visit from their soul. It is greeted with "welcome" and not driven away. Prayers are offered until the butterfly leaves.' },
      { tr: 'Hakuchō Geleneği: Japon ailelerinde ölüm yıldönümlerinde evin etrafında dolaşan beyaz kelebekler, atayı temsil eder. Tütsü yakılır, isim anılır — kelebek gelmeden gidemez.', en: 'The Hakuchō Tradition: In Japanese families, white butterflies circling the home on death anniversaries represent the ancestor. Incense is lit, the name is spoken — the butterfly cannot depart until it has come.' },
    ],
  },

  // ─── a038 Deve ──────────────────────────────────────────────────────────
  a038: {
    jung: { tr: '"Çöl Yolcusu" arketipi. Deve — uzun yola dayanıklılık, kurak dönemleri içsel kaynakla geçme.', en: 'The "Desert Wayfarer" archetype. The camel — endurance on the long road, traversing dry seasons by inner resource.' },
    dream: { tr: 'Deve rüyada — uzun bir dayanıklılık testi var. Yük taşıyorsa: sorumluluk artıyor. Çölde yürüyorsa: ruhsal kuraklıkta da yolunu bulacaksın.', en: 'Camel in dream — a long test of endurance lies ahead. Bearing a load: responsibility is growing. Walking in the desert: you will find your way even through spiritual drought.' },
    shadow: { tr: 'Her yükü taşıma takıntısı. Deve "hayır" demeyi bilmeli — sınırsız fedakârlık çöküştür.', en: 'The compulsion to carry every burden. The camel must know how to say "no" — limitless sacrifice is collapse.' },
    whenAppears: { tr: 'Uzun süreli bir yüke girerken, kıt kaynakla dayanman gerektiğinde, ruhsal çölde içsel kaynakları bulman lazımken.', en: 'When taking on a long-lasting burden, when you must endure with scarce resources, when you must find inner reserves in the spiritual desert.' },
    traditions: [
      { culture: { tr: 'Arap-İslam', en: 'Arab-Islamic' }, meaning: { tr: 'Hz. Salih\'in mucize devesi — Kuran\'da Naka. Kavmin sınanması; deveyi öldüren toplum cezalandırılır.', en: 'The miracle she-camel of the prophet Salih — Naqah in the Qur\'an. The trial of his people; the community that slays the camel is punished.' } },
      { culture: { tr: 'Sufi', en: 'Sufi' }, meaning: { tr: 'Mevlana\'nın Mesnevi\'sinde — sabır ve teslimiyetin sembolü.', en: 'In Rumi\'s Masnavi — symbol of patience and surrender.' } },
      { culture: { tr: 'Anadolu', en: 'Anatolian' }, meaning: { tr: 'Yörük kültüründe yaşam hattının kendisi. Deve kervansız Anadolu olmaz.', en: 'In Yörük culture, the very line of life. Anatolia is unthinkable without the camel caravan.' } },
      { culture: { tr: 'İbrahimi', en: 'Abrahamic' }, meaning: { tr: 'İbrahim\'in deve kervanı — peygamberlerin yolunun bineği.', en: 'Abraham\'s camel caravan — the mount of the prophets\' way.' } },
      { culture: { tr: 'Mısır', en: 'Egyptian' }, meaning: { tr: 'Çölün kapısı — yaşam ve ölüm arasında köprü.', en: 'The gate of the desert — bridge between life and death.' } },
    ],
    myths: [
      { tr: 'Salih\'in Devesi: Kuran\'da Hz. Salih\'in kavmine mucize olarak bir deve verilir. Onu öldürmemeleri ve suyu paylaşmaları istenir. Kavim deveyi öldürür — kavim helak olur. Kutsal yüke saygı testi.', en: 'Salih\'s She-Camel: In the Qur\'an, a she-camel is given as a miracle to the people of the prophet Salih. They are commanded not to slay her and to share the water. The people kill the camel — the people are destroyed. A test of respect for the sacred burden.' },
      { tr: 'Yörük Devesi: Anadolu Yörüklerinde deve sadece bir hayvan değil, ailenin parçasıdır. İsim verilir, yas tutulur. Devesini kaybeden ev, evladını kaybetmiş kabul edilir.', en: 'The Yörük Camel: Among Anatolian Yörüks, the camel is not merely an animal but part of the family. It is named, mourned. A household that loses its camel is held to have lost a child.' },
    ],
  },

  // ─── a039 Balık ─────────────────────────────────────────────────────────
  a039: {
    jung: { tr: '"Bilinçaltı Akış" arketipi. Balık — suyun derinindeki bilgelik. Sezgi, doğurganlık, geçişlerin habercisi.', en: 'The "Unconscious Flow" archetype. The fish — the wisdom in the depths of water. Intuition, fertility, herald of transitions.' },
    dream: { tr: 'Balık rüyada — derin bir bilgi yüzeye çıkıyor. Çok balık görüyorsan: bolluk yakın. Yakalıyorsan: bir hakikati avlıyorsun.', en: 'Fish in dream — a deep knowledge is surfacing. Seeing many fish: abundance is near. Catching them: you are hunting a truth.' },
    shadow: { tr: 'Soğukluk, kayganlık. Balık tutulmaz — sezginin bedeni yok olur, eline geçmez.', en: 'Coldness, slipperiness. The fish cannot be held — intuition has no body, never quite reaches your hand.' },
    whenAppears: { tr: 'Hamilelik (gerçek/yaratıcı), sezginin keskinleştiği, dünyanın altında bir akıntının seni taşıdığı anda.', en: 'In pregnancy (literal/creative), when intuition sharpens, at the moment an underground current is carrying you.' },
    traditions: [
      { culture: { tr: 'Hristiyan', en: 'Christian' }, meaning: { tr: 'İsa\'nın sembolü. "İkhthys" — Yunanca balık, İsa\'nın adının ilk harfleri. Erken Hristiyanların gizli sembolü.', en: 'Symbol of Christ. "Ichthys" — Greek for fish, an acronym of Christ\'s name. The secret symbol of the early Christians.' } },
      { culture: { tr: 'Vedik', en: 'Vedic' }, meaning: { tr: 'Matsya — Vishnu\'nun balık avatarı. Tufandan insanlığı kurtarır.', en: 'Matsya — Vishnu\'s fish avatar. He saves humanity from the flood.' } },
      { culture: { tr: 'Sumer', en: 'Sumerian' }, meaning: { tr: 'Oannes — balık-insan tanrı, sudan çıkıp insanlara medeniyet öğretti.', en: 'Oannes — the fish-man god who emerged from the waters to teach civilization to humanity.' } },
      { culture: { tr: 'Çin', en: 'Chinese' }, meaning: { tr: 'Bolluğun sembolü. Yeni yılda balık yenir — "yıllar boyu fazlalık" duası.', en: 'Symbol of abundance. Fish is eaten at New Year — the wish "surplus through the years".' } },
      { culture: { tr: 'Anadolu Halk', en: 'Anatolian Folk' }, meaning: { tr: 'Bereket sembolü. Düğünlerde balık motifi — doğurganlık duası.', en: 'Symbol of abundance. The fish motif at weddings — a blessing of fertility.' } },
    ],
    myths: [
      { tr: 'Matsya Avatarı: Hint mitolojisinde tufan yaklaşırken Vishnu küçük bir balık olarak Manu\'ya görünür. Büyür, devleşir, gemiyi çekerek insanlığı kurtarır. Sular bilinçaltı, balık o bilinçaltından çıkan kurtuluş.', en: 'The Matsya Avatar: In Hindu mythology, as the flood nears, Vishnu appears to Manu as a small fish. He grows immense and tows the ship, saving humanity. The waters are the unconscious; the fish is the salvation emerging from it.' },
      { tr: 'İkhthys: Roma\'da Hristiyanlar zulüm altındayken birbirini tanımak için balık sembolünü kumda çizerdi. "Iesous Khristos Theou Yios Soter" baş harfleri — İsa, Tanrının Oğlu, Kurtarıcı.', en: 'Ichthys: While Christians were persecuted in Rome, they drew the fish symbol in the sand to recognize one another. The initials of "Iesous Khristos Theou Yios Soter" — Jesus Christ, Son of God, Savior.' },
    ],
  },

  // ─── a040 Horoz ─────────────────────────────────────────────────────────
  a040: {
    jung: { tr: '"Şafak Habercisi" arketipi. Horoz — uyanışı ilan eden, karanlığı yarıp ışığı çağıran ses.', en: 'The "Herald of Dawn" archetype. The rooster — the voice that announces awakening, that splits darkness and summons light.' },
    dream: { tr: 'Horoz rüyada — uyanma vakti! Bilinçaltında gördüğün bir şey gün ışığına çıkmak istiyor. Ötüyorsa: ilan zamanı, sus durmak günah.', en: 'Rooster in dream — time to wake! Something you have seen in your unconscious wants to come to daylight. Crowing: time to declare; staying silent is sin.' },
    shadow: { tr: 'Kibirli gösteriş. Horoz sabahları ilan eder ama "ben olmasam güneş doğmaz" sanrısı — egonun çiçeklenmesi.', en: 'Conceited display. The rooster heralds the mornings, but the delusion "without me the sun would not rise" — the ego in bloom.' },
    whenAppears: { tr: 'Uyanmak, ilan etmek, sözünü yüksek sesle söylemek gerektiğinde, karanlık dönem bittiğinde.', en: 'When you must wake, declare, speak your word aloud, when a dark period has ended.' },
    traditions: [
      { culture: { tr: 'Türk Halk', en: 'Turkish Folk' }, meaning: { tr: 'Sabahın müjdecisi — ezandan önce öten kuş. Anadolu köyünün saatçisi.', en: 'Herald of the morning — the bird that crows before the call to prayer. The clockkeeper of the Anatolian village.' } },
      { culture: { tr: 'Pers', en: 'Persian' }, meaning: { tr: 'Zerdüştlükte — kötülüğü kovan, ışığı çağıran kutsal kuş.', en: 'In Zoroastrianism — the sacred bird that drives off evil and summons light.' } },
      { culture: { tr: 'Hristiyan', en: 'Christian' }, meaning: { tr: 'Petrus\'un üç kez İsa\'yı inkâr etmesi horozun ötüşüyle bağlı — vicdanın sesi.', en: 'Peter\'s threefold denial of Christ is bound to the rooster\'s crow — the voice of conscience.' } },
      { culture: { tr: 'Çin', en: 'Chinese' }, meaning: { tr: 'On iki burç hayvanından biri. Dürüstlük, sadakat, çalışkanlığın sembolü.', en: 'One of the twelve zodiac animals. Symbol of honesty, loyalty, and diligence.' } },
      { culture: { tr: 'Kelt', en: 'Celtic' }, meaning: { tr: 'Yer altı dünyasının uyarıcısı — ruhların uyanış saatini bildirir.', en: 'The warner of the underworld — announcer of the hour the souls awaken.' } },
    ],
    myths: [
      { tr: 'Petrus ve Horoz: Hristiyan İncil\'inde Petrus, İsa\'yı korkudan üç kez inkâr eder. Horoz öttüğünde fark eder ve ağlar. Horoz — vicdanın geri dönüş sesi.', en: 'Peter and the Rooster: In the Christian Gospel, Peter denies Christ three times out of fear. When the rooster crows, he realizes and weeps. The rooster — the voice of conscience\'s return.' },
      { tr: 'Zerdüşt Horozu: Eski Pers geleneğinde horozun ötüşüyle birlikte gece şeytanları kovulurdu. Şafak — kötülüğün geri çekilmesi. Horoz tanrısal düzenin müjdecisi.', en: 'The Zoroastrian Rooster: In ancient Persian tradition, the night demons were driven out at the rooster\'s crow. The dawn — the retreat of evil. The rooster, herald of divine order.' },
    ],
  },

  // ─── a041 Tavşan ────────────────────────────────────────────────────────
  a041: {
    jung: { tr: '"Ay Çocuğu / Trickster" arketipi. Tavşan — sezgiyle hareket eden çevik akıl. Hızla kaybolup hızla geri gelen.', en: 'The "Moon Child / Trickster" archetype. The rabbit — the agile intellect moving by intuition. The one who vanishes swiftly and returns swiftly.' },
    dream: { tr: 'Tavşan rüyada — bir fırsat hızla geçiyor, dikkatli ol. Kaçıyorsa: korkudan değil, sezgiden hareket et. Çoğalıyorsa: bereket geliyor.', en: 'Rabbit in dream — an opportunity is passing quickly, be alert. Fleeing: move by intuition, not by fear. Multiplying: abundance is coming.' },
    shadow: { tr: 'Aşırı korku. Her gölgeden ürkmek, hayatı kaçırmak. Tavşan hızlıdır ama gizlenmek hep çözüm değildir.', en: 'Excessive fear. Startling at every shadow, missing life. The rabbit is swift, but hiding is not always the answer.' },
    whenAppears: { tr: 'Hızlı bir karar gerektiğinde, doğurgan bir döneme girerken, ay döngüsünün başlangıcında.', en: 'When a swift decision is needed, when entering a fertile period, at the start of a lunar cycle.' },
    traditions: [
      { culture: { tr: 'Çin', en: 'Chinese' }, meaning: { tr: 'Ay\'da ölümsüzlük iksiri döven yeşim tavşan. Mid-Autumn Festival\'ın sembolü.', en: 'The jade rabbit pounding the elixir of immortality on the moon. Symbol of the Mid-Autumn Festival.' } },
      { culture: { tr: 'Kelt', en: 'Celtic' }, meaning: { tr: 'Cerridwen\'in kazanından doğan dönüşüm sembolü. Bereket tanrıçasının yoldaşı.', en: 'A symbol of transformation born from Cerridwen\'s cauldron. Companion of the goddess of abundance.' } },
      { culture: { tr: 'Anadolu Halk', en: 'Anatolian Folk' }, meaning: { tr: '"Tavşan masalı" — zekasıyla kurttan ve tilkiden kurtulan küçük kahraman.', en: '"The Rabbit\'s Tale" — the small hero who, by his wits, escapes the wolf and the fox.' } },
      { culture: { tr: 'Aztek', en: 'Aztec' }, meaning: { tr: 'Centzon Totochtin — 400 tavşan tanrı. Pulque (içki) ve coşkunun habercisi.', en: 'Centzon Totochtin — the four hundred rabbit gods. Heralds of pulque (drink) and ecstasy.' } },
      { culture: { tr: 'Hristiyan', en: 'Christian' }, meaning: { tr: 'Paskalya tavşanı — dirilişin ve baharın simgesi. Yumurta dağıtan haberci.', en: 'The Easter Bunny — symbol of resurrection and spring. The herald who distributes eggs.' } },
    ],
    myths: [
      { tr: 'Ay Tavşanı: Çin mitolojisinde Ay\'da bir tavşan yaşar ve ölümsüzlük iksiri döver. Mid-Autumn Festival\'da çocuklar onun şerefine ay kekleri yer — kozmik bereket.', en: 'The Moon Rabbit: In Chinese mythology, a rabbit lives on the moon and pounds the elixir of immortality. At the Mid-Autumn Festival, children eat mooncakes in its honor — cosmic abundance.' },
      { tr: 'Tavşan ve Kaplumbağa: Aesop\'un en bilinen fablında hızlı tavşan, yavaş kaplumbağaya yarışta kaybeder. Hız her zaman kazanmaz — sebat kazanır.', en: 'The Hare and the Tortoise: In Aesop\'s best-known fable, the swift hare loses the race to the slow tortoise. Speed does not always win — perseverance does.' },
    ],
  },

  // ─── a042 Akrep ─────────────────────────────────────────────────────────
  a042: {
    jung: { tr: '"Yıkıcı Dönüştürücü" arketipi. Akrep — Yılan ile aynı boyda, hatta daha derin. Yas ile yenilenmeyi bir ısırışta birleştiren.', en: 'The "Destructive Transformer" archetype. The scorpion — equal to or deeper than the serpent. The one who unites mourning and renewal in a single sting.' },
    dream: { tr: 'Akrep rüyada — bastırılan bir konu yüzeye çıkıyor. Sokuyorsa: bir gerçek seni dönüştürecek. Sırtında taşıyorsan: zor bir bilgiyi taşıyorsun.', en: 'Scorpion in dream — a suppressed matter is surfacing. Stinging: a truth will transform you. Carrying it on your back: you are bearing a difficult knowledge.' },
    shadow: { tr: 'Zehir saçmak. Akrep yaralandığında çevresine kuyruğunu sallar — yaralı kişi başkalarını yaralar. İçsel acı tedavi edilmezse zehirleyici olur.', en: 'Spreading venom. Wounded, the scorpion swings its tail at all around — the wounded one wounds others. Inner pain untreated becomes toxic.' },
    whenAppears: { tr: 'Yas, yıkım, kıskançlık veya ihanet gibi derin duygu süreçlerinde, dönüştürücü acıyla yüzleşmen gerektiğinde.', en: 'In deep emotional processes such as grief, destruction, jealousy, or betrayal, when you must face transformative pain.' },
    traditions: [
      { culture: { tr: 'Mısır', en: 'Egyptian' }, meaning: { tr: 'Serqet — akrep tanrıça. Ölüleri öbür dünyada koruyan. Zehiri tedaviye dönüştüren.', en: 'Serqet — the scorpion goddess. Protector of the dead in the otherworld. The one who turns venom into cure.' } },
      { culture: { tr: 'Yunan Mitolojisi', en: 'Greek Mythology' }, meaning: { tr: 'Orion\'u öldüren akrep — Artemis tarafından gönderilen kozmik adalet. Yıldız takımı oldular.', en: 'The scorpion that killed Orion — cosmic justice sent by Artemis. They became constellations.' } },
      { culture: { tr: 'Astroloji', en: 'Astrology' }, meaning: { tr: 'Akrep burcu — ölüm ve diriliş, tabu, gizli bilgi. Pluto\'nun ev sahibi.', en: 'The sign of Scorpio — death and resurrection, taboo, hidden knowledge. The house of Pluto.' } },
      { culture: { tr: 'Anadolu', en: 'Anatolian' }, meaning: { tr: 'Köy efsanelerinde akrebin yuvasını bozan başına iş alır. Sınırlı varlığın saygısı.', en: 'In village legends, whoever disturbs the scorpion\'s nest brings trouble upon themselves. The reverence due to bounded being.' } },
      { culture: { tr: 'İslam', en: 'Islamic' }, meaning: { tr: 'Hadis-i şerifte cennette zararı olmayan, dünyada koruyucu sayılır — kötülük yalnız kendine değer.', en: 'In hadith, harmless in paradise and a protector in this world — evil reaches only itself.' } },
    ],
    myths: [
      { tr: 'Serqet ve Mumya: Mısır firavunları mumyalanırken karaciğer kavanozunu akrep tanrıça Serqet korurdu. Zehrin antiseptik gücü — ölümle yenilenmenin birleşmesi.', en: 'Serqet and the Mummy: When Egyptian pharaohs were mummified, the jar of the liver was guarded by the scorpion goddess Serqet. The antiseptic power of venom — the union of death and renewal.' },
      { tr: 'Orion ve Akrep: Yunan mitolojisinde dev avcı Orion kibirinden cezalandırılır — küçük bir akrep onu öldürür. İkisi de gökyüzüne yerleşir, biri doğarken diğeri batar — sonsuz kovalama.', en: 'Orion and the Scorpion: In Greek mythology, the giant hunter Orion is punished for his arrogance — a small scorpion kills him. Both are placed in the sky, one rising as the other sets — eternal pursuit.' },
    ],
  },

  // ─── a043 Kurbağa ───────────────────────────────────────────────────────
  a043: {
    jung: { tr: '"Eşiğin Habercisi" arketipi. Kurbağa — sudan karaya, çocukluktan yetişkinliğe geçen. Metamorfozun en görünür hâli.', en: 'The "Herald of the Threshold" archetype. The frog — the one who passes from water to land, from childhood to adulthood. The most visible form of metamorphosis.' },
    dream: { tr: 'Kurbağa rüyada — bir geçiş tamamlanıyor. Yağmurda görünüyorsa: temizlenme yaklaşıyor. Vıraklıyorsa: sesini bul, söyle.', en: 'Frog in dream — a transition is being completed. Appearing in rain: cleansing approaches. Croaking: find your voice and speak.' },
    shadow: { tr: 'Yarı-dönüşüm. Bir hayatta hep iribaş kalmak — büyüyemeyen, sudan çıkamayan. Konfor geçişi engeller.', en: 'Half-transformation. Remaining a tadpole all one\'s life — unable to grow, unable to leave the water. Comfort prevents passage.' },
    whenAppears: { tr: 'Bir eşikte (taşınma, evlilik, ayrılık), ruhsal/duygusal temizlenmede, sesini kullanma çağrısında.', en: 'At a threshold (moving, marriage, separation), in spiritual/emotional cleansing, at the call to use your voice.' },
    traditions: [
      { culture: { tr: 'Mısır', en: 'Egyptian' }, meaning: { tr: 'Heqet — kurbağa başlı tanrıça. Doğumun ve yenilenmenin koruyucusu. Nil taşkınının habercisi.', en: 'Heqet — the frog-headed goddess. Protector of birth and renewal. Herald of the Nile flood.' } },
      { culture: { tr: 'Çin', en: 'Chinese' }, meaning: { tr: 'Üç ayaklı kurbağa Jin Chan — ay ve zenginlik sembolü. Para getiren tılsım.', en: 'The three-legged frog Jin Chan — symbol of the moon and wealth. A talisman that draws money.' } },
      { culture: { tr: 'Anadolu', en: 'Anatolian' }, meaning: { tr: '"Kurbağa öttü, yağmur yağdı" — bereketin habercisi. Köy ekonomisinde belirleyici sayılırdı.', en: '"The frog croaked, the rain came" — herald of abundance. Considered decisive in the village economy.' } },
      { culture: { tr: 'Kelt', en: 'Celtic' }, meaning: { tr: 'Şifa kuyularının koruyucusu. Toprak ile suyun birleştiği yerin bekçisi.', en: 'Guardian of healing wells. Keeper of the place where earth and water meet.' } },
      { culture: { tr: 'Aztek', en: 'Aztec' }, meaning: { tr: 'Tlaltecuhtli — yer tanrıça, kurbağa formunda. Yaratılışın bedeni.', en: 'Tlaltecuhtli — the earth goddess in frog form. The body of creation.' } },
    ],
    myths: [
      { tr: 'Heqet ve Doğum: Mısır mitolojisinde kadın doğum yaparken kurbağa tanrıça Heqet\'in tılsımı bedeninin üzerinde taşınırdı. Suyun ve toprağın doğurgan birleşmesi.', en: 'Heqet and Birth: In Egyptian mythology, while a woman gave birth, the talisman of the frog goddess Heqet was worn on her body. The fertile union of water and earth.' },
      { tr: 'Prens Kurbağa: Grimm masalında prensesin öptüğü kurbağa prense dönüşür. Aşk ve kabul — gerçek kimliği ortaya çıkarır. Görünenin altındakini görmek.', en: 'The Frog Prince: In the Grimm tale, the frog the princess kisses turns into a prince. Love and acceptance — reveal the true identity. To see beneath what appears.' },
    ],
  },

  // ─── a044 Karga ─────────────────────────────────────────────────────────
  a044: {
    jung: { tr: '"Kolektif Bilge" arketipi. Karga — Kuzgun\'un sürü hâli. Bireysel zekanın paylaşıma açıldığı yer.', en: 'The "Collective Sage" archetype. The crow — the raven in its flock form. The place where individual intelligence opens to sharing.' },
    dream: { tr: 'Karga rüyada — kalabalığın akıllıca seçilmiş bir parçası olmaya çağrılıyorsun. Konuşuyorsa: bir mesaj iletmen lazım. Sürü hâlinde: kolektif karar zamanı.', en: 'Crow in dream — you are being called to become a wisely chosen part of the crowd. Speaking: you must convey a message. In flock: time for a collective decision.' },
    shadow: { tr: '"Toplum baskısı" — kalabalık zihne kapılma. Karga sürüsü güçlüdür ama tek tek özgün kalmak da gerekir.', en: '"Social pressure" — being swept by the crowd mind. The murder of crows is strong, yet each must remain its own.' },
    whenAppears: { tr: 'Bir gruba katılırken, fikrini kalabalığa açıkça söylemen gerektiğinde, kolektif bir karara dahil olduğunda.', en: 'While joining a group, when you must speak your view openly to the crowd, when you are included in a collective decision.' },
    traditions: [
      { culture: { tr: 'Tibet', en: 'Tibetan' }, meaning: { tr: 'Mahakala\'nın haberci kuşu. Yıkıcı bilgeliğin habercisi.', en: 'The messenger bird of Mahakala. Herald of destructive wisdom.' } },
      { culture: { tr: 'Türk Halk', en: 'Turkish Folk' }, meaning: { tr: 'Karga zekası ile bilinir — bir kayalığa ceviz düşürerek kırması Anadolu masallarında geçer.', en: 'Known for the crow\'s wit — breaking a walnut by dropping it on a rock is told in Anatolian tales.' } },
      { culture: { tr: 'Yunan Mitolojisi', en: 'Greek Mythology' }, meaning: { tr: 'Apollon\'un kuşu. Önce beyazdı, kötü haber getirdiği için tanrı tarafından siyaha boyandı.', en: 'Apollo\'s bird. Once white, painted black by the god for bringing bad news.' } },
      { culture: { tr: 'Avustralya Aborjin', en: 'Australian Aboriginal' }, meaning: { tr: 'Waa — yaratıcı ata. Ateşi insanlığa getiren trickster.', en: 'Waa — the creator ancestor. The trickster who brought fire to humanity.' } },
      { culture: { tr: 'Hint', en: 'Hindu' }, meaning: { tr: 'Şani (Satürn) tanrısının bineği. Karma ve adaletin habercisi.', en: 'The mount of the god Shani (Saturn). Herald of karma and justice.' } },
    ],
    myths: [
      { tr: 'Apollon\'un Beyaz Kargası: Yunan mitolojisinde karga eskiden beyazdı. Apollon\'a sevgilisi Koronis\'in sadakatsizliğini söyleyince, tanrı haberin acısını kuşa yansıttı — karganın rengi siyah oldu, sesi cızırdadı.', en: 'Apollo\'s White Crow: In Greek mythology, the crow was once white. When it told Apollo of his beloved Coronis\'s unfaithfulness, the god transferred the pain of the news onto the bird — the crow\'s color became black and its voice grew harsh.' },
      { tr: 'Waa ve Ateş: Avustralya Aborjin mitolojisinde karga Waa, kadınların gizlediği ateşi çalar ve insanlığa getirir. Trickster yaratıcı — kuralı bozarak hayatı kolaylaştıran.', en: 'Waa and Fire: In Australian Aboriginal mythology, the crow Waa steals the fire hidden by the women and brings it to humanity. The trickster-creator — the one who eases life by breaking the rule.' },
    ],
  },

  // ─── a045 Sincap ────────────────────────────────────────────────────────
  a045: {
    jung: { tr: '"Mütevazı Hazırlayıcı" arketipi. Sincap — küçük olduğunu bilen, ama planını yapan. Kollektif değil, bireysel hazırlığın sembolü.', en: 'The "Humble Preparer" archetype. The squirrel — knowing it is small, yet making its plan. Symbol of individual, not collective, preparation.' },
    dream: { tr: 'Sincap rüyada — geleceğe hazırlık zamanı. Yiyecek saklıyorsa: ekonomik/duygusal güvenlik için tedbir al. Atlıyorsa: çevik bir hamle gerekiyor.', en: 'Squirrel in dream — time to prepare for the future. Hoarding food: take measures for economic/emotional security. Leaping: an agile move is needed.' },
    shadow: { tr: 'Kaygılı biriktiricilik. "Yetmez" duygusuyla durmadan istiflemek — neşeyi kaçırır. Sincap aynı zamanda oynar; sadece çalışmaz.', en: 'Anxious hoarding. Stockpiling endlessly out of the feeling of "not enough" — joy is missed. The squirrel also plays; it does not only work.' },
    whenAppears: { tr: 'Bir kış dönemine girmeden önce, tasarruf veya enerji birikimine ihtiyaç duyulurken, hayatın size çeviklik gösterdiği anlarda.', en: 'Before entering a winter season, when savings or energy reserves are needed, in moments when life shows you agility.' },
    traditions: [
      { culture: { tr: 'İskandinav', en: 'Norse' }, meaning: { tr: 'Ratatoskr — dünya ağacı Yggdrasil\'de yukarı aşağı koşan haberci sincap. Tanrılar ile devler arasında mesaj taşır.', en: 'Ratatoskr — the messenger squirrel running up and down the world-tree Yggdrasil. Carries messages between the gods and the giants.' } },
      { culture: { tr: 'Kelt', en: 'Celtic' }, meaning: { tr: 'Hazırlık ve ileri görüşün sembolü. Druidlerin doğa öğretmenlerinden.', en: 'Symbol of preparation and foresight. One of the nature-teachers of the Druids.' } },
      { culture: { tr: 'Kızılderili', en: 'Native American' }, meaning: { tr: 'Cherokee geleneğinde — küçüklüğünüze rağmen büyük katkı yapabilirsiniz mesajının habercisi.', en: 'In Cherokee tradition — the herald of the message that you can make a great contribution despite your smallness.' } },
      { culture: { tr: 'Anadolu', en: 'Anatolian' }, meaning: { tr: 'Karadeniz ormanlarında sevimli yoldaş. Çocuk masallarının küçük zeki kahramanı.', en: 'A beloved companion in the Black Sea forests. The small clever hero of children\'s tales.' } },
      { culture: { tr: 'Vedik', en: 'Vedic' }, meaning: { tr: 'Rama\'nın köprü inşasına yardım eden küçük sincap — büyük işlerde küçük katkılar.', en: 'The small squirrel that helps Rama build the bridge — small contributions to great works.' } },
    ],
    myths: [
      { tr: 'Ratatoskr ve Yggdrasil: İskandinav mitolojisinde dünya ağacı Yggdrasil\'in tepesindeki kartal ile köklerindeki ejderha arasında mesaj taşıyan haberci sincap. Çatışmayı körükler — söylenti yayıcı kötülük mü, gerekli aracı mı?', en: 'Ratatoskr and Yggdrasil: In Norse mythology, the messenger squirrel that carries messages between the eagle atop the world-tree Yggdrasil and the dragon at its roots. He stirs conflict — is he a gossip-spreading evil, or a necessary intermediary?' },
      { tr: 'Rama\'nın Sincabı: Hint destanı Ramayana\'da Rama köprü inşa ederken küçük bir sincap kuma bulanıp suya atlayarak yardım eder. Rama parmaklarıyla sırtını okşar — sincapların sırtındaki üç çizgi o izden gelir. Büyük işte küçük katkı.', en: 'Rama\'s Squirrel: In the Hindu epic Ramayana, while Rama is building the bridge, a small squirrel helps by rolling in sand and leaping into the water. Rama strokes its back with his fingers — the three stripes on squirrels\' backs come from that touch. A small contribution to a great work.' },
    ],
  },

  // ─── a046 Yarasa ────────────────────────────────────────────────────────
  a046: {
    jung: { tr: '"Eşik Bekçisi" arketipi. Yarasa — gece ile gündüz, yer ile gök, ölüm ile hayat arasında. Liminal varlık.', en: 'The "Threshold Keeper" archetype. The bat — between night and day, earth and sky, death and life. A liminal being.' },
    dream: { tr: 'Yarasa rüyada — bir geçiş eşiğindesin, eski sen ölüyor. Mağaradan çıkıyorsa: gölge çalışmandan dönüyorsun. Sana yaklaşıyorsa: sezgi mesajı taşıyor.', en: 'Bat in dream — you are at a threshold of passage, the old self is dying. Coming out of the cave: you are returning from shadow work. Approaching you: it carries an intuitive message.' },
    shadow: { tr: 'Yapışkan korkular. Yarasalardan korkanlar genelde dönüşümden korkar. Yarasa fobisi — eski kimliği bırakmaktan kaçınma.', en: 'Clinging fears. Those who fear bats generally fear transformation. Bat-phobia — avoidance of releasing the old identity.' },
    whenAppears: { tr: 'Karanlık dönemlerde, ölüm-yas süreçlerinde, sezgini körlemesine kullanman gerekirken (ekolokasyon — görmeden duyma).', en: 'In dark periods, in death-grief processes, when you must use your intuition blindly (echolocation — hearing without seeing).' },
    traditions: [
      { culture: { tr: 'Çin', en: 'Chinese' }, meaning: { tr: 'Fu — "yarasa" ve "şans" aynı sesle telaffuz edilir. Beş yarasa = beş kutsama (uzun ömür, zenginlik, sağlık, erdem, doğal ölüm).', en: 'Fu — "bat" and "fortune" are pronounced alike. Five bats = the five blessings (longevity, wealth, health, virtue, a natural death).' } },
      { culture: { tr: 'Maya/Aztek', en: 'Mayan/Aztec' }, meaning: { tr: 'Camazotz — yarasa tanrı. Geçişin ve gece âleminin habercisi.', en: 'Camazotz — the bat god. Herald of passage and the nocturnal realm.' } },
      { culture: { tr: 'Anadolu Halk', en: 'Anatolian Folk' }, meaning: { tr: 'Uğursuz sayılır ama eski Şaman geleneğinde — ata ruhların habercisi.', en: 'Considered ill-omened, yet in the old shamanic tradition — the messenger of ancestral spirits.' } },
      { culture: { tr: 'Hristiyan', en: 'Christian' }, meaning: { tr: 'Orta Çağ\'da şeytanın kuşu sayıldı — gece ve karanlıkla özdeşleştirildi.', en: 'In the Middle Ages, considered the devil\'s bird — identified with night and darkness.' } },
      { culture: { tr: 'Kızılderili', en: 'Native American' }, meaning: { tr: 'Bazı kabilelerde — eski kişinin ölüp yeni kişinin doğuşu için rehber.', en: 'In some tribes — the guide for the death of the old self and the birth of the new.' } },
    ],
    myths: [
      { tr: 'Çin\'in Beş Yarasası: Çin geleneğinde beş yarasa motifi (wufu) — şans, zenginlik, uzun ömür, erdem, doğal ölüm. Düğün ve yılbaşı süslemelerinde çok kullanılır. Korkulan hayvan kutsama olur.', en: 'China\'s Five Bats: In Chinese tradition, the motif of five bats (wufu) — fortune, wealth, longevity, virtue, a natural death. Widely used in wedding and New Year decorations. The feared animal becomes a blessing.' },
      { tr: 'Camazotz Mağarası: Maya mitolojisinde kahramanlar ölüler diyarı Xibalba\'da Yarasa Mağarası\'ndan geçmek zorundadır. Yarasalar onları sınar — bilgeliği almak için ölüme yaklaşmak gerek.', en: 'The Cave of Camazotz: In Mayan mythology, heroes must pass through the Bat Cave in Xibalba, the land of the dead. The bats test them — to receive wisdom, one must draw near to death.' },
    ],
  },

  // ─── a047 Yengeç ────────────────────────────────────────────────────────
  a047: {
    jung: { tr: '"Ana-Kabuk" arketipi. Yengeç — evi bedeninde taşır. Duygusal güvenliğin, içe çekilmenin, sınırın sembolü.', en: 'The "Mother-Shell" archetype. The crab — carrying its home on its body. Symbol of emotional safety, withdrawal, and boundary.' },
    dream: { tr: 'Yengeç rüyada — bir savunma ihtiyacın var. Kabuğunun içine girmen meşru. Pençeleriyle bir şey tutuyorsa: bırakmıyorsun, bırak mı bırakma mı bir bak.', en: 'Crab in dream — you have a need for defense. To withdraw into your shell is legitimate. Holding something in its claws: you are not letting go — look at whether you should release it or not.' },
    shadow: { tr: 'Kabuğa kapanma takıntısı. Yengeç hep içe çekilirse — duygusal hareketsizlik. Pençeler de bir şeyi hiç bırakmamak da olabilir.', en: 'The compulsion to close into the shell. If the crab always withdraws — emotional paralysis. The claws may also mean never letting anything go.' },
    whenAppears: { tr: 'Sınır koymak gerektiğinde, eve dönmek istediğinde, ay döngüsünün etkili olduğu duygusal anlarda, geri çekilme zamanında.', en: 'When you must set a boundary, when you wish to return home, in emotional moments under the moon\'s influence, in a time of withdrawal.' },
    traditions: [
      { culture: { tr: 'Astroloji', en: 'Astrology' }, meaning: { tr: 'Yengeç burcu — Ay ile yönetilen ev, anne, duygusal kök. Suyun ilk burcu.', en: 'The sign of Cancer — moon-ruled home, mother, emotional root. The first water sign.' } },
      { culture: { tr: 'Yunan Mitolojisi', en: 'Greek Mythology' }, meaning: { tr: 'Hera, Herakles\'i öldürmek için bir yengeç gönderir. Yengeç ezilir — Hera onu gökyüzüne, Yengeç takımyıldızına koyar.', en: 'Hera sends a crab to kill Heracles. The crab is crushed — Hera places it in the sky as the constellation Cancer.' } },
      { culture: { tr: 'Çin', en: 'Chinese' }, meaning: { tr: 'Sonbahar ve hasat sembolü. Mooncake döneminde yenir.', en: 'Symbol of autumn and harvest. Eaten in the mooncake season.' } },
      { culture: { tr: 'Vedik', en: 'Vedic' }, meaning: { tr: 'Karkata rashi — Ay\'ın evi. Anneliğin ve emosyonel zeminin yıldız evi.', en: 'Karkata rashi — the Moon\'s house. The stellar house of motherhood and emotional ground.' } },
      { culture: { tr: 'Anadolu', en: 'Anatolian' }, meaning: { tr: 'Akdeniz balıkçı köylerinde "kara yengeç" — uğurlu sayılır, asla öldürülmez sadece yakalandığı yere bırakılır.', en: 'In Mediterranean fishing villages, the "black crab" — considered fortunate; never killed, only returned to where it was caught.' } },
    ],
    myths: [
      { tr: 'Herakles ve Yengeç: Hera yengeci Herakles\'in topuğunu ısırması için gönderir. Kahraman ezer, ama Hera kuşun sadakatine değer verir ve onu gökyüzüne yerleştirir — Yengeç (Cancer) takımyıldızı. Küçük sadakat bile kutsanır.', en: 'Heracles and the Crab: Hera sends the crab to bite Heracles\'s heel. The hero crushes it, but Hera values the creature\'s loyalty and places it in the sky — the constellation Cancer. Even small loyalty is blessed.' },
      { tr: 'Yengeç Hareketi: "Yengeç yürüyüşü" deyimi — geri geri gitmek, dolambaçlı yol. Ama yengeç boş yere geri gitmez; tehlikeyi kabuğuyla geriye iter. Sezgisel savunma.', en: 'The Crab\'s Movement: The expression "crab walk" — moving backward, on a winding path. Yet the crab does not retreat in vain; it pushes danger back with its shell. Intuitive defense.' },
    ],
  },

  // ─── a048 Fil ───────────────────────────────────────────────────────────
  a048: {
    jung: { tr: '"Büyük Hafıza" arketipi. Fil — yıllar boyu hatırlar, ama hatırlamayla yaşamaz. Yargısız bellek.', en: 'The "Great Memory" archetype. The elephant — remembers across years, yet does not live by remembering. Memory without judgment.' },
    dream: { tr: 'Fil rüyada — geçmişten gelen bir bilgi/duygu yüzeye çıkıyor. Aileyle: kolektif bellek. Yalnız: kişisel ağırlık.', en: 'Elephant in dream — a knowledge or feeling from the past is surfacing. With family: collective memory. Alone: personal weight.' },
    shadow: { tr: '"Hiçbir şeyi unutmama" yükü. Affediş olmadan bellek hapse dönüşür. Fil hatırlar — ama bilge fil yara izini hayata değil tarihe bırakır.', en: 'The burden of "forgetting nothing". Without forgiveness, memory becomes a prison. The elephant remembers — but the wise elephant leaves the scar to history, not to life.' },
    whenAppears: { tr: 'Geçmişle yüzleşme zamanlarında, atalardan miras gelen yükleri taşırken, büyük ailedeki rolünü kabul ettiğinde.', en: 'In times of facing the past, while carrying burdens inherited from the ancestors, when you accept your role in the larger family.' },
    traditions: [
      { culture: { tr: 'Hint', en: 'Hindu' }, meaning: { tr: 'Ganeşa — fil başlı tanrı. Engellerin kaldırıcısı, başlangıçların koruyucusu.', en: 'Ganesha — the elephant-headed god. Remover of obstacles, protector of beginnings.' } },
      { culture: { tr: 'Budist', en: 'Buddhist' }, meaning: { tr: 'Buddha\'nın annesi Maya, hamile kalırken rüyasında beyaz bir fil görür — kutsal doğumun habercisi.', en: 'Buddha\'s mother Maya, while conceiving, dreams of a white elephant — herald of the sacred birth.' } },
      { culture: { tr: 'Vedik', en: 'Vedic' }, meaning: { tr: 'Airavata — Indra\'nın beyaz fil bineği. Yağmur ve bereketin getiricisi.', en: 'Airavata — Indra\'s white elephant mount. Bringer of rain and abundance.' } },
      { culture: { tr: 'Sufi-İslam', en: 'Sufi-Islamic' }, meaning: { tr: 'Mevlana\'nın "Karanlıkta Fil" hikayesi — herkes filin farklı parçasına dokunur, farklı şeyler tarif eder. Gerçek — bütünündedir.', en: 'Rumi\'s story "The Elephant in the Dark" — each touches a different part of the elephant and describes different things. The truth lies in the whole.' } },
      { culture: { tr: 'Afrika', en: 'African' }, meaning: { tr: 'Maasai\'de — kabilenin liderliğinin sembolü. Filin yürüyüşü "aile yürüyüşü"dür.', en: 'Among the Maasai — symbol of tribal leadership. The elephant\'s walk is the "family walk".' } },
    ],
    myths: [
      { tr: 'Ganeşa\'nın Başı: Hint mitolojisinde Parvati oğlu Ganeşa\'yı yaratır. Şiva, oğlunu tanımayıp başını keser. Pişman olunca ilk gördüğü canlının başını takar — fil. Ganeşa böyle doğar: engellerin kaldırıcısı, başlangıçların tanrısı.', en: 'Ganesha\'s Head: In Hindu mythology, Parvati creates her son Ganesha. Not recognizing his son, Shiva severs his head. Repenting, he attaches the head of the first creature he sees — an elephant. Thus Ganesha is born: remover of obstacles, god of beginnings.' },
      { tr: 'Mevlana\'nın Fili: "Bir karanlık odada filin yanına farklı insanlar girer. Biri hortumuna dokunur, yılan sanır. Biri kulağına, yelpaze. Biri ayağına, sütun." Mevlana\'da: hakikat bir parçayla değil, bütünle bilinir.', en: 'Rumi\'s Elephant: "Different people enter a dark room where an elephant stands. One touches its trunk and takes it for a snake. Another, its ear, and calls it a fan. Another, its leg, and calls it a pillar." For Rumi: truth is known not by a part but by the whole.' },
    ],
  },

  // ─── a049 Vaşak ─────────────────────────────────────────────────────────
  a049: {
    jung: { tr: '"Sırların Bekçisi" arketipi. Vaşak — gördüklerini söylemeyen, ama hakikati en derinden bilen.', en: 'The "Keeper of Secrets" archetype. The lynx — the one who does not tell what it sees, yet knows the truth most deeply.' },
    dream: { tr: 'Vaşak rüyada — bir gerçeği biliyorsun ama henüz söylenmemeli. Gizli gözlemiyorsa: aksiyon zamanı yaklaşıyor. Yaklaşırsa: derin bir bilgi sana açılıyor.', en: 'Lynx in dream — you know a truth, but it must not yet be told. Watching in secret: the time of action approaches. Drawing near: a deep knowledge is opening to you.' },
    shadow: { tr: 'Soğuk gizem. Sırrın hayat tarzı olursa — yalnızlık. Vaşak yalnızdır ama küskün değildir; ayrım var.', en: 'Cold mystery. If the secret becomes a way of life — loneliness. The lynx is solitary but not resentful; there is a distinction.' },
    whenAppears: { tr: 'Bir sırrı taşıman/saklamian gerektiğinde, derin gözlem zamanında, kalabalıktan çekilip görüye girdiğinde.', en: 'When you must carry or keep a secret, in a time of deep observation, when withdrawing from the crowd into vision.' },
    traditions: [
      { culture: { tr: 'Yunan Mitolojisi', en: 'Greek Mythology' }, meaning: { tr: 'Lynx — adından geliyor "lynx eyed" deyimi: keskin bakış. Görünmeyeni gören.', en: 'Lynx — from its name comes the expression "lynx-eyed": piercing sight. The one who sees the unseen.' } },
      { culture: { tr: 'Kuzey Avrupa', en: 'Northern European' }, meaning: { tr: 'İskandinav, Finlandiya geleneğinde — orman ruhlarının habercisi.', en: 'In Scandinavian and Finnish tradition — messenger of the forest spirits.' } },
      { culture: { tr: 'Kızılderili', en: 'Native American' }, meaning: { tr: 'Sırların hayvanı. Vaşak bilenlere bilgi verir, bilmeyenlere görünmez.', en: 'The animal of secrets. The lynx gives knowledge to those who know; to those who do not, it remains invisible.' } },
      { culture: { tr: 'Anadolu Halk', en: 'Anatolian Folk' }, meaning: { tr: 'Toroslar\'ın gölgesi. Görenin görüldüğü ama söyleyemediği hayvan — saygı sınırı.', en: 'The shadow of the Taurus. An animal whose sighter is seen but cannot tell — the boundary of reverence.' } },
      { culture: { tr: 'Roma', en: 'Roman' }, meaning: { tr: 'Vaşak ışığın tüm renklerini görür sanılırdı — gizli olanı bile parça parça çözer.', en: 'The lynx was thought to see all the colors of light — unraveling even the hidden, piece by piece.' } },
    ],
    myths: [
      { tr: 'Lynx\'in Bakışı: Antik kaynaklara göre vaşağın bakışı taşları bile delerdi. Onun ışıltısı kıymetli taşların oluşumunu açıklarmış — gizli kırılmanın görüsü.', en: 'The Lynx\'s Gaze: According to ancient sources, the lynx\'s gaze could pierce even stones. Its luster was said to explain the formation of precious gems — the vision of hidden refraction.' },
      { tr: 'Anadolu Toros Vaşağı: Modern zamanlarda neredeyse soyu tükenmiş. Onu son görenler "bakışı seni durdurur" dermiş — biliyor olma duygusunun katlanılmaz ağırlığı.', en: 'The Anatolian Taurus Lynx: Nearly extinct in modern times. Those who last saw it said "its gaze stops you" — the unbearable weight of being known.' },
    ],
  },

  // ─── a050 Örümcek ───────────────────────────────────────────────────────
  a050: {
    jung: { tr: '"Yaratıcı Dokumacı" arketipi. Örümcek — kaderini kendi dokuyan. Hem yaratıcı hem avcı; sabırlı sanatçı.', en: 'The "Creative Weaver" archetype. The spider — the one who weaves her own fate. Both creator and hunter; the patient artist.' },
    dream: { tr: 'Örümcek rüyada — yaratım sürecinde dikkatli olmalısın. Ağ kuruyorsa: planlı bir yaratımdasın. Sana yaklaşıyorsa: bir tuzak ya da fırsat — ayırt et.', en: 'Spider in dream — you must be careful in your creative process. Spinning a web: you are in a planned creation. Approaching you: a trap or an opportunity — discern between them.' },
    shadow: { tr: 'Ağına başkalarını dolama. Manipülatif kontrol. Örümcek yaratır ama bağımlılaştırırsa — kendi ağında boğulur.', en: 'Entangling others in your web. Manipulative control. The spider creates, but if she fosters dependence — she drowns in her own web.' },
    whenAppears: { tr: 'Yaratıcı projelere başlarken, kaderini yeniden örmek istediğinde, sabırla iplik iplik kurman gereken bir hayatta.', en: 'When beginning creative projects, when you wish to reweave your fate, in a life you must build thread by thread with patience.' },
    traditions: [
      { culture: { tr: 'İslam', en: 'Islamic' }, meaning: { tr: 'Sevr Mağarası — Hz. Muhammed ve Ebubekir kaçarken mağaranın ağzında bir örümcek ağ örer, düşmanlar geçer ama kimsenin orada saklanmadığını sanır.', en: 'The Cave of Thawr — as the Prophet Muhammad and Abu Bakr flee, a spider weaves a web at the cave\'s mouth; the enemies pass by, thinking no one could be hiding there.' } },
      { culture: { tr: 'Yunan Mitolojisi', en: 'Greek Mythology' }, meaning: { tr: 'Arakhne — dokumada Athena\'yı yenince tanrıça onu örümceğe çevirir. İlk dokumacı.', en: 'Arachne — when she surpasses Athena at weaving, the goddess turns her into a spider. The first weaver.' } },
      { culture: { tr: 'Afrika', en: 'African' }, meaning: { tr: 'Anansi — örümcek-trickster tanrı. Hikayelerin kralı. Akıllı zayıfın gücü.', en: 'Anansi — the spider-trickster god. King of stories. The power of the clever underdog.' } },
      { culture: { tr: 'Kızılderili', en: 'Native American' }, meaning: { tr: 'Spider Grandmother — yaratıcı ana. Dünyayı dokuyan ve yıldız haritasını gönderen.', en: 'Spider Grandmother — the creator mother. The one who weaves the world and sends the star map.' } },
      { culture: { tr: 'Anadolu Halk', en: 'Anatolian Folk' }, meaning: { tr: '"Örümcek ağı bozulmuş" — terkedilmişliği ifade eder. Ama aynı zamanda örümcek sebatıyla yeniden örer.', en: '"The spider\'s web is broken" — expresses abandonment. Yet the spider, with perseverance, weaves it again.' } },
    ],
    myths: [
      { tr: 'Sevr Mağarası: İslam tarihinde Hz. Muhammed Mekke\'den Medine\'ye hicret ederken Ebubekir ile Sevr Mağarası\'na sığınır. Bir örümcek mağaranın ağzında hızla ağ örer, bir güvercin yuva yapar. Mekkeli düşmanlar gelir, ağ ve yuva el değmemiş görünür — kimse orada olamaz sanırlar. En küçük yaratık peygamberi korur.', en: 'The Cave of Thawr: In Islamic history, as the Prophet Muhammad emigrates from Mecca to Medina with Abu Bakr, he takes refuge in the Cave of Thawr. A spider swiftly weaves a web at the cave\'s mouth, and a dove builds a nest. The Meccan pursuers arrive; the web and nest appear untouched — they think no one could be inside. The smallest creature protects the prophet.' },
      { tr: 'Anansi\'nin Hikayeleri: Batı Afrika geleneğinde dünyanın bütün hikayeleri başlangıçta gök tanrısının elindedir. Örümcek Anansi onları zekasıyla alır ve insanlığa dağıtır — hikaye anlatmanın atası.', en: 'Anansi\'s Stories: In West African tradition, all the world\'s stories were originally in the hands of the sky god. The spider Anansi takes them by his cleverness and gives them to humanity — the ancestor of storytelling.' },
    ],
  },

};

export function getAnimalLore(id: string): AnimalLore | undefined {
  return ANIMAL_LORE[id];
}
