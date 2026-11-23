// ===== FOR LOOP =====
// Sintaks: for (inisialisasi; kondisi; update)
for (let i = 1; i <= 5; i++) {
    console.log(`Perulangan ke-${i}`);
}
// Output: Perulangan ke-1, ke-2, ke-3, ke-4, ke-5

// Menjumlahkan angka 1 sampai 100
let total = 0;
for (let i = 1; i <= 100; i++) {
    total += i;
}
console.log(`Jumlah 1-100: ${total}`); // 5050

// Iterasi array dengan for...of
let mataPelajaran = ['HTML', 'CSS', 'JavaScript', 'PHP'];
for (let mapel of mataPelajaran) {
    console.log(`Belajar ${mapel}`);
}

// ===== WHILE LOOP =====
// Sintaks: while (kondisi) { ... }
let angka = 1;
while (angka <= 5) {
    console.log(`Angka: ${angka}`);
    angka++; // JANGAN lupa update, atau akan loop selamanya!
}

// ===== DO...WHILE LOOP =====
// Blok kode dijalankan MINIMAL SATU KALI
let tebakan;
do {
    tebakan = prompt('Tebak angka 1-10:');
} while (tebakan != '7');
alert('Tebakan benar!');

// ===== BREAK & CONTINUE =====
for (let i = 1; i <= 10; i++) {
    if (i === 6) break;          // Hentikan loop saat i=6
    if (i % 2 === 0) continue; // Lewati angka genap
    console.log(i);            // Hanya cetak 1, 3, 5
}