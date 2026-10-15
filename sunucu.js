
const http = require("http");
const dayjs = require("dayjs");

const PORT = 3000;
const AGEP_TARIHI = "2026-11-01";

const sunucu = http.createServer((req, res) => {
    const yol = req.url;
    const yontem = req.method;

    console.log(`${yontem} ${yol}`);

    if (yontem !== "GET") {
        res.writeHead(405, {
            "Content-Type": "text/plain; charset=utf-8",
            "Allow": "GET"
        });
        res.end("Bu yöntem desteklenmiyor");
        return;
    }

    if (yol === "/") {
        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });
        res.end(`
            <!DOCTYPE html>
            <html lang="tr">
            <head>
                <meta charset="UTF-8">
                <title>Ana Sayfa</title>
            </head>
            <body>
                <h1>BMH231 Proje Ana Sayfasi</h1>
                <p>Node.js ile hazirladiğim web sunucusuna hoş geldiniz.</p>
                <a href="/hakkimda">Hakkimda sayfasina git</a>
            </body>
            </html>
        `);
        return;
    }

    if (yol === "/hakkimda") {
        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });
        res.end(`
            <!DOCTYPE html>
            <html lang="tr">
            <head>
                <meta charset="UTF-8">
                <title>Hakkimda</title>
            </head>
            <body>
                <h1>Hakkimda</h1>
                <p>Bilgisayar mühendisliği öğrencisiyim.</p>
                <p>Web programlama dersinde Node.js ile bir HTTP sunucusu geliştirdim.</p>
                <p>Bu projede HTTP yöntemlerini ve durum kodlarini öğreniyorum.</p>
                <a href="/">Ana sayfaya dön</a>
            </body>
            </html>
        `);
        return;
    }

    if (yol === "/api/ders") {
        res.writeHead(200, {
            "Content-Type": "application/json; charset=utf-8"
        });
        res.end(JSON.stringify({
            kod: "BMH231",
            ad: "Web Programlama",
            gun: "PDF'de belirtilmemiş"
        }));
        return;
    }

    if (yol === "/api/agep") {
        const bugun = dayjs().startOf("day");
        const teslim = dayjs(AGEP_TARIHI).startOf("day");
        const kalanGun = teslim.diff(bugun, "day");

        res.writeHead(200, {
            "Content-Type": "application/json; charset=utf-8"
        });
        res.end(JSON.stringify({
            teslimTarihi: AGEP_TARIHI,
            kalanGun: kalanGun
        }));
        return;
    }

    res.writeHead(404, {
        "Content-Type": "text/plain; charset=utf-8"
    });
    res.end("Sayfa bulunamadi");
});

sunucu.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde çalişiyor.`);
});
