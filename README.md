# KAVİ İLETİŞİM tanıtım sitesi

Zeytinburnu'ndaki para transferi dükkânı için sade, statik tanıtım sitesi.

Canlı adres: https://volkan191-sys.github.io/kavi-iletisim/

## İletişim bilgilerini değiştirmek

Telefon, WhatsApp, adres veya çalışma saatlerini değiştirmek için yalnızca `js/app.js` dosyasının en üstündeki `CONFIG` bölümünü düzenleyin:

- `phoneDisplay`: Ekranda görünen numara (ör. 0544 786 55 26)
- `phoneTel`: Arama bağlantısı, başında + ve ülke kodu (ör. +905447865526)
- `whatsappUrl`: WhatsApp bağlantısı (ör. https://wa.me/905447865526)
- `address`: Açık adres
- `mapQuery`: Haritada aranacak metin
- `hours`: Hafta içi / Cumartesi açılış-kapanış saatleri (`sundayClosed: true` Pazar kapalı demektir)

Saatlerin Türkçe, İngilizce ve Rusça metinleri bu değerlerden otomatik üretilir.

## Dil

Site Türkçe başlar. Sağ üstteki TR / RU / EN düğmeleri çeviriyi tarayıcıda değiştirir. Seçim `localStorage` içinde saklanır.

## Yayın

GitHub Pages, `main` dalının kökünden yayınlanır. Değişiklik sonrası `git push` yeterlidir.
