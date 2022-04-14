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

## Penerapan Best Practice

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

4. Bentuk Response Body konsisten

5. Terdapat versioning pada alamat API

## API Route
| No | Method   | Path                                      | Penjelasan                                                                         |
|----|----------|-------------------------------------------|------------------------------------------------------------------------------------|
| 1  | `GET`    | `/api/v1/users`                           | Mengambil semua data user                                                          |
| 2  | `GET`    | `/api/v2/users?name=&email=&page=&limit=` | Mengambil semua data user dengan filter                                            |
| 3  | `GET`    | `/api/v1/users/:id`                       | Mengambil 1 data user                                                              |
| 4  | `GET`    | `/api/v1/users/:id/notifications`         | Mengambil semua data notification milik 1 user                                     |
| 5  | `POST`   | `/api/v1/users`                           | Membuat 1 user baru                                                                |
| 6  | `PUT`    | `/api/v1/users/:id`                       | Membuat 1 user baru (jika belum ada) / Mengganti data 1 user lama (jika sudah ada) |
| 7  | `PATCH`  | `/api/v1/users/:id`                       | Memperbarui data 1 user                                                            |
| 8  | `DELETE` | `/api/v1/users/:id`                       | Menghapus data 1 user                                                              |

## API Documentation
Download [postman.json](./docs/postman.json) & import ke postman