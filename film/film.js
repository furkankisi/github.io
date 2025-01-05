const izlenecekFilm = prompt("İzlemek istediğiniz filmi girin:");

if (izlenecekFilm) {
    let filmListesi = JSON.parse(localStorage.getItem('filmListesi')) || [];
    filmListesi.push(izlenecekFilm);
    localStorage.setItem('filmListesi', JSON.stringify(filmListesi));
    alert(`${izlenecekFilm} filmi izlenecek listesine eklendi!`);
} else {
    alert("Film ismi girilmedi.");
}

window.onload = function() {
    const filmListesi = JSON.parse(localStorage.getItem('filmListesi')) || [];
    if (filmListesi.length > 0) {
        alert("İzlenecek Filmler:\n" + filmListesi.join("\n"));
    } else {
        alert("Henüz izlenecek film eklenmedi.");
    }
};
