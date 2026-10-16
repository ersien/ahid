# Ahid

Küçük işler için iki taraf arasında basit bir iş sözü: işin tanımı, ücret, peşinat ve teslim tarihi tek sayfada. Belge müşteriye WhatsApp'tan resim olarak gider, müşteri "Onaylıyorum" yazınca mühürlenir.

**Canlı:** https://ersinbardakci.com/ahid/

## Neler yapar

- **Tek seferlik iş:** toplam ücret, peşinat oranı, iş süresi (gün). Teslim ve kalan ödeme tarihi kendiliğinden hesaplanır.
- **Aylık iş:** aylık ücret × ay sayısı. Her ayın ödeme tarihi ayrı satırda yazar. Kısmi ödeme ve geçmişte başlamış iş desteklenir.
- Birden fazla iş türü seçilebilir (web sitesi, online katalog, SEO, yapay zeka geliştirme…).
- Firma adı ve yetkili kişi, hem hizmet veren hem müşteri için.
- Tutar yazıyla da yazılır ("Yalnız yirmi bin Türk lirası").
- **Resim olarak gönderme:** belge JPEG'e çevrilir, telefonun paylaş menüsüyle WhatsApp'a gider.
- **Mühür:** müşteri onaylayınca kırmızı onay mührü basılır. Hizmet verenin logolu mührü vardır.
- **Linkle onay:** isteyen müşteri belgeyi linkten açıp kendisi onaylayabilir.
- PDF olarak indirme, özeti kopyalama.
- Form taslağı telefonda saklanır, sayfa yenilense de kaldığı yerden devam eder.
- **Uygulama olarak yüklenir (PWA):** ana ekrana eklenir, tam ekran açılır, internetsiz çalışır.

## Nasıl çalışır

Sunucu ve veritabanı yoktur. Belgenin bütün bilgisi linkin `#` sonrasındaki kısmında taşınır. Belge kodu (ör. `AHD-U2BE-A5KV`) içerikten hesaplanır, içerik değiştirilirse kod da değişir ve onaylı belgede uyarı çıkar.

## Dosyalar

| Dosya | Ne işe yarar |
|---|---|
| `index.html` | Uygulamanın tamamı (HTML, CSS, JavaScript tek dosyada) |
| `manifest.webmanifest` | Uygulama olarak yükleme bilgileri |
| `sw.js` | İnternetsiz çalışma (service worker) |
| `favicon.ico`, `img/` | Simgeler, fotoğraf ve logo |

## Yayınlama

Klasördeki dosyaları herhangi bir statik barındırmaya koymak yeterli (kendi siteniz, GitHub Pages, Netlify). `sw.js` dosyası `index.html` ile aynı klasörde olmalıdır. Simge veya resimleri değiştirirseniz `sw.js` içindeki `CACHE` sürümünü artırın.

## Not

Ahid, tarafların neyde anlaştığının kaydıdır. Hukuki bir sözleşmenin yerini tutmaz.

## Lisans

Kod [MIT lisansı](LICENSE) ile açıktır: kullanabilir, değiştirebilir ve dağıtabilirsiniz.

Kişisel fotoğraf (`img/ersin.webp`, `img/ersin-og.jpg`) ve kişisel logo (`img/logo.jpg`, ayrıca `index.html` içinde hizmet veren mührü olarak gömülü) lisansa dahil değildir. Kendi sitenize koyarken bunları kendinizinkiyle değiştirin. Bunun için `index.html` içindeki `OWNER` bilgisini (ad, site, fotoğraf, logo) güncellemeniz yeterli.

El sıkışma simgesi [Lucide](https://lucide.dev) projesinden alınmıştır (ISC lisansı). Resim çıktısı için [html2canvas](https://html2canvas.hertzen.com) kullanılır (MIT lisansı).

---

Ersin Bardakçı · [ersinbardakci.com](https://ersinbardakci.com)
