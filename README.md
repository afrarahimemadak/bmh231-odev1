# BMH231 Web Programlama – Ödev 1

## Projenin Amacı

Bu proje, BMH231 Web Programlama dersi Ödev 1 kapsamında geliştirilmiş küçük bir web sunucusudur. Express kullanılmadan, yalnızca Node.js'in yerleşik `http` modülü ve `dayjs` paketiyle yazılmıştır. Amaç; HTTP istek ve yanıtlarını, durum kodlarını (200, 404, 405), `Content-Type` başlıklarını, npm ile paket yönetimini ve Git ile sürüm kontrolünü uygulamalı olarak öğrenmektir.

## Gereksinimler

- Node.js (LTS sürümü) ve npm
- Git

## Kurulum ve Çalıştırma

```bash
git clone https://github.com/afrarahimemadak/bmh231-odev1.git
cd bmh231-odev1
npm install
npm start
```

Sunucu `http://localhost:3000` adresinde çalışır. Durdurmak için terminalde `Ctrl+C` tuşlarına basın.

## Sunucunun Desteklediği Yollar

| Yöntem | Yol | Durum kodu | Yanıt |
|---|---|---|---|
| GET | `/` | 200 | HTML ana sayfa, `/hakkimda` bağlantısı |
| GET | `/hakkimda` | 200 | HTML tanıtım sayfası |
| GET | `/api/ders` | 200 | JSON: ders kodu, adı ve günü |
| GET | `/api/agep` | 200 | JSON: AGEP son teslim tarihi (01.11.2026) ve kalan gün sayısı (dayjs ile) |
| GET | Diğer tüm yollar | 404 | Düz metin: "Sayfa bulunamadı" |
| GET dışındaki tüm yöntemler | Herhangi bir yol | 405 | Düz metin, `Allow: GET` başlığıyla |

Sunucu, gelen her isteğin yöntemini ve yolunu terminale yazar.

## Test Komutları

Windows PowerShell'de `curl` yerine `curl.exe` kullanılmalıdır. Türkçe karakterlerin düzgün görünmesi için önce `chcp 65001` çalıştırılabilir.

```bash
curl.exe -i http://localhost:3000/
curl.exe -i http://localhost:3000/hakkimda
curl.exe -i http://localhost:3000/api/ders
curl.exe -i http://localhost:3000/api/agep
curl.exe -i http://localhost:3000/olmayan-sayfa
curl.exe -i -X POST http://localhost:3000/api/ders
```

## Proje Yapısı

```
bmh231-odev1/
├── sunucu.js          # HTTP sunucusu
├── package.json       # Proje bilgileri, start betiği ve bağımlılıklar
├── package-lock.json  # Bağımlılıkların kilitli sürümleri
├── .gitignore         # node_modules/ ve .env dışarıda bırakılır
└── README.md
```

`node_modules/` klasörü depoya eklenmez; `npm install` komutu bağımlılıkları `package.json` ve `package-lock.json` dosyalarına göre yeniden kurar.