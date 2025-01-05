let anketler = JSON.parse(localStorage.getItem('anketler')) || [];

function anketiBaslat() {
    const isim = prompt("Adınızı girin:");
    const soyisim = prompt("Soyadınızı girin:");

    let cevaplar = [];
    
    const soru1 = prompt("Bugün nasılsınız?");
    cevaplar.push({ soru: "Bugün nasılsınız?", cevap: soru1 });

    const soru2 = prompt("Sınavdan kaç aldınız?");
    cevaplar.push({ soru: "Sınavdan kaç aldınız?", cevap: soru2 });

    const anket = {
        isim: isim,
        soyisim: soyisim,
        cevaplar: cevaplar
    };

    anketler.push(anket);
    localStorage.setItem('anketler', JSON.stringify(anketler));

    alert("Anketiniz başarıyla kaydedildi!");
}

anketiBaslat();
