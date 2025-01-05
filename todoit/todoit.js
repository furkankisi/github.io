const isyapilacakIs = prompt("Yapılacak işin adını girin:");
const tarih = prompt("İşin yapılacağı tarihi girin:");

if (isyapilacakIs && tarih) {
    let isler = JSON.parse(localStorage.getItem('isler')) || [];
    isler.push({ is: isyapilacakIs, tarih: tarih });
    localStorage.setItem('isler', JSON.stringify(isler));
    alert("İş başarıyla kaydedildi!");
} else {
    alert("Lütfen işin adı ve tarihi girin.");
}
