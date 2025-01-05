let kitapListesi = JSON.parse(localStorage.getItem('kitapListesi')) || [];


function kitapEkle() {
    const isim = prompt('Kitap ismini girin:');
    const yazar = prompt('Yazar ismini girin:');
    const tur = prompt('Kitap türünü girin:');

    if (isim && yazar && tur) {
        const yeniKitap = { isim, yazar, tur };
        kitapListesi.push(yeniKitap); 
        localStorage.setItem('kitapListesi', JSON.stringify(kitapListesi)); 
        console.log(`Kitap eklendi: ${isim}`);
    } else {
        console.log('Tüm bilgileri eksiksiz doldurmanız gerekiyor!');
    }
}


function kitaplariListele() {
    if (kitapListesi.length > 0) {
        console.log('Kitap Listesi:');
        kitapListesi.forEach((kitap, index) => {
            console.log(`${index + 1}. İsim: ${kitap.isim}, Yazar: ${kitap.yazar}, Tür: ${kitap.tur}`);
        });
    } else {
        console.log('Henüz kitap eklenmedi.');
    }
}


function kitapSil() {
    kitaplariListele(); 
    const silIndex = prompt('Silmek istediğiniz kitabın numarasını girin:');
    const parsedIndex = parseInt(silIndex, 10) - 1; 

    if (!isNaN(parsedIndex) && parsedIndex >= 0 && parsedIndex < kitapListesi.length) {
        const silinenKitap = kitapListesi.splice(parsedIndex, 1); 
        localStorage.setItem('kitapListesi', JSON.stringify(kitapListesi)); 
        console.log(`Silinen kitap: ${silinenKitap[0].isim}`);
    } else {
        console.log('Geçersiz seçim!');
    }
}


let secim = prompt(`
Kitap Yönetim Uygulaması:
1. Kitap Ekle
2. Kitapları Listele
3. Kitap Sil
4. Çıkış
Lütfen bir seçenek girin (1-4):
`);

switch (secim) {
    case '1':
        kitapEkle();
        break;
    case '2':
        kitaplariListele();
        break;
    case '3':
        kitapSil();
        break;
    case '4':
        console.log('Uygulama kapatıldı.');
        break;
    default:
        console.log('Geçersiz bir seçim yaptınız. Lütfen tekrar deneyin.');
}
