// Menambahkan event listener ketika link diklik
document.querySelector('a').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah link langsung membuka halaman baru
    alert('You clicked the link! Taking you to the cool website...');
    window.location.href = this.href; // Mengarahkan ke URL setelah alert ditampilkan
});

// Menambahkan event listener ketika gambar di-hover
document.querySelector('img').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.2)'; // Zoom gambar saat di-hover
});

document.querySelector('img').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)'; // Mengembalikan gambar ke ukuran normal saat tidak di-hover
});
