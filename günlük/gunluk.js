const tarih = prompt("Bugünün tarihi nedir?");
const metin = prompt("Günlüğünüzü yazın:");

if (tarih && metin) {
    let günlükler = JSON.parse(localStorage.getItem('gunlukler')) || [];
    günlükler.push({ tarih: tarih, metin: metin });
    localStorage.setItem('gunlukler', JSON.stringify(günlükler));
    alert("Günlük başarıyla kaydedildi!");
} else {
    alert("Lütfen hem tarih hem de metin girin.");
}
