# KAVİ İLETİŞİM tanıtım sitesi

Zeytinburnu'ndaki para transferi dükkânı için Next.js ile üretilmiş statik tanıtım sitesi.

Canlı adres: https://volkan191-sys.github.io/kavi-iletisim/

## İletişim bilgilerini değiştirmek

Telefon, WhatsApp, adres veya çalışma saatlerini değiştirmek için yalnızca `lib/config.ts` dosyasındaki `CONFIG` bölümünü düzenleyin:

- `phoneDisplay`: Ekranda görünen numara
- `phoneTel`: Arama bağlantısı (`+905447865526`)
- `whatsappUrl`: WhatsApp bağlantısı
- `address` ve `mapQuery`: Açık adres ve harita araması
- `hours`: Hafta içi / Cumartesi saatleri

Saatlerin Türkçe, İngilizce ve Rusça metinleri bu değerlerden otomatik üretilir.

## Geliştirme

```bash
npm install
npm run dev
```

Yerel adres: http://localhost:3000/kavi-iletisim/

Yayın için `npm run build` statik dosyaları `docs/` klasörüne kopyalar. GitHub Pages, `main` dalındaki `/docs` klasöründen yayınlanır.
