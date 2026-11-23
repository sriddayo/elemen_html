// Deklarasi variabel
let nama = 'Andi Pratama';       // String
let usia = 16;                   // Number
let nilaiRata = 88.5;            // Number (desimal)
let lulus = true;                // Boolean
let alamat = null;               // Null (sengaja kosong)
let hobi;                        // Undefined (belum diisi)

const NAMA_SEKOLAH = 'SMK TJP Tuban'; // Konstanta
const PI = 3.14159;

// Mengubah nilai let (boleh)
nama = 'Budi Santoso';
usia = usia + 1;

// Mengubah nilai const (TIDAK BOLEH - akan error!)
// NAMA_SEKOLAH = 'SMK Lain'; // TypeError!

// Cek tipe data dengan typeof
console.log(typeof nama);       // 'string'
console.log(typeof usia);       // 'number'
console.log(typeof lulus);      // 'boolean'
console.log(typeof alamat);     // 'object' (keunikan JS)
console.log(typeof hobi);       // 'undefined'