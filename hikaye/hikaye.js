const hikayeBaslangici = "Yıl 2077'desin ve dünya tamamen cyberpunk'a dönmüş halde, çevrendeki her şey robotlaşmış..."

alert("Hikayenin başlangıcı: " + hikayeBaslangici);


const hikayeDevami = prompt("Hikayeyi tamamlayın:");

if (hikayeDevami) {
    const tamamlananHikaye = {
        baslangic: hikayeBaslangici,
        devam: hikayeDevami
    };

   
    localStorage.setItem('hikaye', JSON.stringify(tamamlananHikaye));

    
    alert("Hikaye başarıyla kaydedildi!\n\nTamamlanan Hikaye:\n" + tamamlananHikaye.baslangic + " " + tamamlananHikaye.devam);
} else {
    alert("Hikaye tamamlanmadı.");
}
