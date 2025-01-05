let bloglarim = JSON.parse(localStorage.getItem('bloglarim')) || [];


function addBlog() {
    const isim = prompt('Lütfen adınızı girin:');
    const soyisim = prompt('Lütfen soyadınızı girin:');
    const baslik = prompt('Blog başlığını girin:');
    const yazi = prompt('Blog yazısını girin:');

    if (isim && soyisim && baslik && yazi) {
        const yeniBlog = {
            isim,
            soyisim,
            baslik,
            yazi,
        };
        bloglarim.push(yeniBlog); 
        localStorage.setItem('bloglarim', JSON.stringify(bloglarim));
        console.log('Yeni blog başarıyla eklendi.');
    } else {
        console.log('Tüm bilgileri eksiksiz doldurmanız gerekiyor!');
    }
}


function showBlogs() {
    if (bloglarim.length > 0) {
        console.log('Kayıtlı Blog Başlıkları:');
        bloglarim.forEach((blog, index) => {
            console.log(`${index + 1}: ${blog.baslik}`);
        });

        const secim = prompt('Hangi blog yazısını görmek istiyorsunuz? (Numarasını girin):');
        const secilenIndex = parseInt(secim, 10) - 1;

        if (!isNaN(secilenIndex) && secilenIndex >= 0 && secilenIndex < bloglarim.length) {
            const secilenBlog = bloglarim[secilenIndex];
            console.log(`Başlık: ${secilenBlog.baslik}`);
            console.log(`Yazar: ${secilenBlog.isim} ${secilenBlog.soyisim}`);
            console.log(`Yazı: ${secilenBlog.yazi}`);
        } else {
            console.log('Geçersiz seçim!');
        }
    } else {
        console.log('Henüz blog eklenmedi.');
    }
}


let secim = prompt(`
Blog Yönetim Uygulaması:
1. Yeni Blog Ekle
2. Blogları Görüntüle
3. Çıkış
Lütfen bir seçenek girin (1-3):
`);

switch (secim) {
    case '1':
        addBlog();
        break;
    case '2':
        showBlogs();
        break;
    case '3':
        console.log('Uygulama kapatıldı.');
        break;
    default:
        console.log('Geçersiz bir seçim yaptınız. Lütfen tekrar deneyin.');
}
