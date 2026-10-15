# BMH231 Web Programlama Ödevi 1

## Proje Hakkında

Bu proje, Node.js kullanılarak Express olmadan geliştirilen basit bir HTTP sunucusudur.

## Kullanılan Teknolojiler

- Node.js
- npm
- Git ve GitHub
- dayjs

## Kurulum

Bağımlılıkları yüklemek için:

    npm install

Sunucuyu başlatmak için:

    npm start

Sunucu adresi: http://localhost:3000

## Sunucu Yolları

- / : Ana sayfa (200)
- /hakkimda : Hakkımda sayfası (200)
- /api/ders : Ders bilgileri (200)
- /api/agep : AGEP kalan gün hesabı (200)
- /olmayan-sayfa : Sayfa bulunamadı (404)
- POST /api/ders : Yöntem desteklenmiyor (405)

## Git Çalışması

main, hakkimda ve baslik dalları kullanılmış, birleştirme çakışması oluşturulup çözülmüştür.
## Test Komutları

Ana sayfayı test etmek için:

    curl.exe -i http://localhost:3000/

Hakkımda sayfasını test etmek için:

    curl.exe -i http://localhost:3000/hakkimda

404 yanıtını test etmek için:

    curl.exe -i http://localhost:3000/olmayan-sayfa

405 yanıtını test etmek için:

    curl.exe -i -X POST http://localhost:3000/api/ders