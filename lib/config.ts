/* ============================================
   KAVİ İLETİŞİM — iletişim bilgileri
   Telefon, WhatsApp, adres veya çalışma
   saatlerini değiştirmek için yalnızca bu
   dosyayı düzenleyin.
   ============================================ */

export const CONFIG = {
  name: "KAVİ İLETİŞİM",
  phoneDisplay: "0544 786 55 26",
  phoneTel: "+905447865526",
  whatsappUrl: "https://wa.me/905447865526",
  address: "Gökalp Mah. 51. Sokak No: 9-11 Zeytinburnu / İstanbul",
  mapQuery: "Gökalp Mah. 51. Sokak No: 9-11 Zeytinburnu İstanbul",
  hours: {
    weekdaysOpen: "09:00",
    weekdaysClose: "18:00",
    saturdayOpen: "10:00",
    saturdayClose: "15:00",
    sundayClosed: true,
  },
} as const;

export type Lang = "tr" | "ru" | "en";

export function formatHours(lang: Lang): string {
  const h = CONFIG.hours;
  if (lang === "en") {
    return `Monday–Friday ${h.weekdaysOpen}–${h.weekdaysClose}, Saturday ${h.saturdayOpen}–${h.saturdayClose}, Sunday closed`;
  }
  if (lang === "ru") {
    return `Пн–Пт ${h.weekdaysOpen}–${h.weekdaysClose}, сб ${h.saturdayOpen}–${h.saturdayClose}, вс выходной`;
  }
  return `Hafta içi ${h.weekdaysOpen}–${h.weekdaysClose}, Cumartesi ${h.saturdayOpen}–${h.saturdayClose}, Pazar kapalı`;
}

export function formatFaqHours(lang: Lang): string {
  if (lang === "en") {
    return `${CONFIG.address}. Across the street from Kristal Döviz, next to Merve Kozmetik. ${formatHours("en")}.`;
  }
  if (lang === "ru") {
    return `Gökalp Mah. 51. Sokak No: 9-11, Зейтинбурну / Стамбул. Напротив Kristal Döviz, рядом с Merve Kozmetik. ${formatHours("ru")}.`;
  }
  return `${CONFIG.address}. Kristal Döviz karşı sokağı, Merve Kozmetik yanı. ${formatHours("tr")}.`;
}

export function mapSrc(lang: Lang): string {
  const hl = lang === "ru" ? "ru" : lang;
  return (
    "https://maps.google.com/maps?q=" +
    encodeURIComponent(CONFIG.mapQuery) +
    "&hl=" +
    encodeURIComponent(hl) +
    "&z=17&output=embed"
  );
}
