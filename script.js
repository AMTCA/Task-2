<script>
        // Mendapatkan data dari formulir pada halaman pertama
        const urlParams = new URLSearchParams(window.location.search);
        const nama = urlParams.get('nama');
        const Pinjaman = urlParams.get('Pinjaman');
      
        // Menampilkan hasil input pada halaman kedua
        const hasilElemen = document.getElementById('hasil');
        hasilElemen.innerHTML = nama;
        hasilElemen.innerHTML = Pinjaman;
</script>