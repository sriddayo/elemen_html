// Template Literal (backtick) - cara modern menulis string
let namaSiswa = 'Andi';
let kelas = 'X RPL 1';

// Cara lama (konkatenasi)
let pesan1 = 'Halo, ' + namaSiswa + '! Kamu di kelas ' + kelas;

// Cara modern (template literal) - lebih mudah dibaca
let pesan2 = `Halo, ${namaSiswa}! Kamu di kelas ${kelas}`;

console.log(pesan1); // Halo, Andi! Kamu di kelas X RPL 1
console.log(pesan2); // Halo, Andi! Kamu di kelas X RPL 1

// Array - indeks mulai dari 0
let buah = ['Apel', 'Mangga', 'Jeruk'];
console.log(buah[0]);    // 'Apel'
console.log(buah[2]);    // 'Jeruk'
console.log(buah.length); // 3

// Object
let siswa = {
    nama: 'Siti Rahayu',
    usia: 15,
    kelas: 'X RPL 1',
    aktif: true
};
console.log(siswa.nama);        // 'Siti Rahayu'
console.log(siswa['kelas']);    // 'X RPL 1'