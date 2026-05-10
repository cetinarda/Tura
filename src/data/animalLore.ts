// Multi-tradition mythological depth for animal guides.
// Layered ON TOP of the existing daily-guidance voice — never replaces it.
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
  a001: {
    jung: 'Bozkurt, kolektif bilinçaltında "Yol Gösteren Lider" arketipidir — kaybolmuş benliği eve döndüren içsel ses. Karanlık ormanda ışığı buldurun içgüdü.',
    dream: 'Rüyada bozkurt görmek — yolunu kaybettiğini ama içsel pusulanın hâlâ çalıştığını söyler. Sürünün sesi geliyor; dinle.',
    shadow: 'Gölge tarafı: Sürü zihniyetinde kaybolma. Bozkurt enerjisi kontrol edilemezse kuru otoriter sertlik, kurt sürüsünün acımasızlığı çıkar.',
    whenAppears: 'Yalnız kaldığında, liderlik testinde, ailene/topluluğuna döndüğünde.',
    traditions: [
      { culture: 'Türk Şamanizmi',  meaning: 'Asena/Bozkurt — kutsal ata. Göktürk efsanesinde kaybolan halkı kurtaran ana. Devlet kurucu enerji.' },
      { culture: 'Roma Mitolojisi', meaning: 'Lupa — Romulus ve Remus\'u emziren dişi kurt. Şehir kurucu, medeniyet besleyici.' },
      { culture: 'İskandinav',      meaning: 'Fenrir — kontrol edilemeyen kozmik güç. Aynı zamanda Odin\'in iki yol arkadaşı Geri ve Freki.' },
      { culture: 'Kızılderili',     meaning: 'Lakota geleneğinde "öğretmen". Sürü, aile, sadakat dersleri verir.' },
      { culture: 'Kelt',            meaning: 'Cu Chulainn\'in koruyucusu. Ay\'ın bekçisi, geçişlerin habercisi.' }
    ],
    myths: [
      'Göktürk Efsanesi: Düşman tarafından yok edilen Türk soyundan sağ kalan tek çocuğu Asena dişi kurdu kurtarır, mağarada büyütür. Türk halkı bu çocuğun soyundan türer.',
      'Roma\'nın Kuruluşu: Romulus ve Remus\'u nehre bırakılınca dişi kurt Lupa bulup emzirir. Roma şehri bu çocuklar tarafından kurulur.'
    ]
  },
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
      { culture: 'Vedik',            meaning: 'Garuda — Vishnu\'nun bineği. Yılan-bilgisini taşıyan ruhsal güç.' }
    ],
    myths: [
      'Prometheus: Tanrılardan ateşi çalan Prometheus\'u her gün kartal yer. Burada kartal — ego cezalandırıcı, ama aynı zamanda yenilenme döngüsünün taşıyıcısı.'
    ]
  }
};

export function getAnimalLore(id: string): AnimalLore | undefined {
  return ANIMAL_LORE[id];
}
