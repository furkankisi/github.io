const not = prompt("Bir not girin:");

if (not) {
    localStorage.setItem('not', not);
    alert("Not başarıyla kaydedildi!");
} else {
    alert("Not girilmedi.");
}

