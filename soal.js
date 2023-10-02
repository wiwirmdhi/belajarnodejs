// soal1.js

// Impor modul geometry.js
const persegi = require("./persegi1");

// Menggunakan fungsi-fungsi dari modul geometry.js
const sisiPersegi = 5;
console.log(
  `Luas Persegi dengan sisi ${sisiPersegi}: ${persegi.luasPersegi(sisiPersegi)}`
);
console.log(
  `Keliling Persegi dengan sisi ${sisiPersegi}: ${persegi.kelilingPersegi(
    sisiPersegi
  )}`
);

const panjangPersegiPanjang = 6;
const lebarPersegiPanjang = 4;
console.log(
  `Luas Persegi Panjang dengan panjang ${panjangPersegiPanjang} dan lebar ${lebarPersegiPanjang}: ${persegi.luasPersegiPanjang(
    panjangPersegiPanjang,
    lebarPersegiPanjang
  )}`
);
console.log(
  `Keliling Persegi Panjang dengan panjang ${panjangPersegiPanjang} dan lebar ${lebarPersegiPanjang}: ${persegi.kelilingPersegiPanjang(
    panjangPersegiPanjang,
    lebarPersegiPanjang
  )}`
);
