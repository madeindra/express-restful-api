# RESTful API Server dengan Express (Proof of Concept)

## Cara Menjalankan

1. Clone repository ini
```
git clone https://github.com/madeindra/express-restful-api.git
```

2. Masuk ke direoktori 
```
cd express-restful-api
```

3. Buat file `.env` dengan isi sesuai contoh (lihat `.env.example`)

4. Jalankan program
```
npm start
```

### Penerapan Best Practice

1. Tujuan fungsi disesuaikan dengan Method HTTP [referensi](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
* GET: Ambil data
* POST: Buat data baru
* PUT: Gantikan data yang ada / buat data baru
* PATCH: Perbarui data
* DELET: Hapus data

2. Penulisan endpoint
* Gunakan kata benda, bukan kata kerja
* Jika dalam bahasa inggris, gunakan bentuk jamak (plural)
* Hanya menggunakan huruf kecil
* Jika ada penggunaan lebih dari 1 suku kata, ganti spasi dengan tanda strip (-)
* Gunakan hirarki pada alamat (misal notifikasi milik user, berarti hirarki alamat menjadi `/users/:id/notifications`)

3. HTTP Status Response disesuaikan dengan aturan [referensi](https://www.restapitutorial.com/httpstatuscodes.html)

1. Bentuk Response Body konsisten

2. Terdapat versioning pada alamat API