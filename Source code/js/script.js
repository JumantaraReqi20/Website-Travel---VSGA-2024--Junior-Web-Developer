document.addEventListener('DOMContentLoaded', function() {
  const konfirmasiButton = document.getElementById('konfirmasi-pesanan');
  const editButton = document.getElementById('edit-pesanan');

  konfirmasiButton.addEventListener('click', function() {
    // Ambil nilai dari form
    const nama = document.getElementById('nama-pelanggan').value;
    const nomorHp = document.getElementById('nomor-hp').value;
    const tanggal = document.getElementById('book-date').value;
    const jumlahPeserta = document.getElementById('jumlah-peserta').value;

    // Isi nilai ke dalam review
    document.getElementById('review-nama').textContent = nama;
    document.getElementById('review-nomor-hp').textContent = nomorHp;
    document.getElementById('review-tanggal').textContent = tanggal;
    document.getElementById('review-jumlah-peserta').textContent = jumlahPeserta;

    // Ambil paket perjalanan yang dipilih
    const paketList = document.getElementById('review-paket');
    paketList.innerHTML = '';
    const paketOptions = ['penginapan', 'transportasi', 'makanan'];
    paketOptions.forEach(function(option) {
      if (document.getElementById(option).checked) {
        const li = document.createElement('li');
        li.textContent = option.charAt(0).toUpperCase() + option.slice(1);
        paketList.appendChild(li);
      }
    });

    // Tampilkan review pesanan
    document.querySelector('.review-pesanan').style.display = 'block';
  });

  editButton.addEventListener('click', function() {
    // Sembunyikan review pesanan dan tampilkan form kembali
    document.querySelector('.review-pesanan').style.display = 'none';
    // Anda mungkin perlu menambahkan logika untuk menampilkan form kembali
  });
});