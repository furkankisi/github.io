const fikir = prompt("Bir hediye fikri girin:");

if (fikir) {
    let hediyeFikirleri = JSON.parse(localStorage.getItem('hediyeFikirleri')) || [];
    hediyeFikirleri.push(fikir);
    localStorage.setItem('hediyeFikirleri', JSON.stringify(hediyeFikirleri));
    alert("Hediye fikriniz başarıyla kaydedildi!");
} else {
    alert("Hiç hediye fikri girilmedi.");
}
