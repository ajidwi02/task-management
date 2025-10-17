# Backend Task Management

Backend dari aplikasi **Task Management** — bertanggung jawab atas API untuk autentikasi, manajemen tugas, dan interaksi dengan database.

---

## Fitur Utama API

- Autentikasi dengan JWT (login, register)
- CRUD untuk entitas Task
- Middleware untuk proteksi rute (autentikasi)
- Validasi input & error handling
- Koneksi ke database SQL

---

## Instalasi & Menjalankan API

1. Clone repo ini

   ```bash
   git clone https://github.com/ajidwi02/backend-task-management.git
   cd backend-task-management
   ```

2. Buat file `.env` (gunakan `.env.example` sebagai referensi). Contoh isi:

   ```env
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=
   DB_NAME=db-tm
   JWT_SECRET=your_jwt_secret
   ```

3. Install dependensi

   ```bash
   npm install
   ```

4. Jalankan server

   ```bash
   npm start
   ```

   Atau (jika tersedia):

   ```bash
   npm run dev
   ```

5. Endpoint API akan berjalan di:
   ```
   http://localhost:<PORT>
   ```

---

## Teknologi yang Digunakan

| Layer           | Teknologi                             |
| --------------- | ------------------------------------- |
| Backend         | Node.js, Express.js                   |
| Auth / Keamanan | jsonwebtoken, bcrypt, cors, helmet    |
| Database        | MySQL / MariaDB                       |
| Lingkungan      | dotenv                                |
| Testing / Utils | (opsional) jest, supertest, validator |

---

## Struktur Direktori (Backend)

```
backend-task-management/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── config/
├── utils/
├── .env.example
├── db.sql
├── package.json
└── server.js
```

---

## Contoh Endpoint API

| Metode | Endpoint         | Deskripsi                               | Proteksi  |
| ------ | ---------------- | --------------------------------------- | --------- |
| POST   | `/auth/register` | Mendaftar user baru                     | Public    |
| POST   | `/auth/login`    | Login & mendapatkan token JWT           | Public    |
| GET    | `/tasks`         | Mendapatkan list tugas user             | Protected |
| POST   | `/tasks`         | Membuat tugas baru                      | Protected |
| GET    | `/tasks/:id`     | Mendapatkan detail tugas berdasarkan id | Protected |
| PUT    | `/tasks/:id`     | Memperbarui tugas                       | Protected |
| DELETE | `/tasks/:id`     | Menghapus tugas                         | Protected |

---

## Catatan Tambahan

- Pastikan migrasi / import `db.sql` sudah dilakukan sebelum menjalankan server.
- Pastikan variabel environment seperti DB_HOST, DB_USER, JWT_SECRET sudah benar.
- Untuk pengembangan, bisa jalankan dengan `nodemon` atau script dev (jika tersedia).
- Dokumentasikan API (Postman / Swagger) agar frontend dapat berinteraksi dengan lancar.

---

## Lisensi & Penulis

```
MIT License

Developed by Aji Dwi Prakoso (https://github.com/ajidwi02)
```
