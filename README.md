# Task Management App

A simple **Task Management Application** built with **React**, **TailwindCSS**, and **ExpressJS**.  
This app provides core features for managing tasks efficiently, including authentication, task operations, and real-time feedback.

---

## Features

- User Authentication (Login / Register)
- CRUD Operations for Tasks
- Filter Tasks by Status
- Sort Tasks by Deadline or Creation Date
- Responsive UI Design
- Real-Time Notifications

---

## Installation & Setup (Using Docker Compose)

Metode ini adalah cara yang direkomendasikan untuk menjalankan aplikasi karena mengelola _frontend_, _backend_, dan _database_ secara otomatis dalam kontainer terisolasi.

### Prerequisites

- **Docker**: Pastikan Docker Engine dan Docker Compose sudah terinstal di sistem Anda. Anda bisa mengunduhnya dari [situs resmi Docker](https://www.docker.com/products/docker-desktop/).
- **Git**: Untuk mengkloning _repository_.

### Steps

1.  **Clone Repository:**
    Buka terminal atau _command prompt_ Anda dan jalankan perintah berikut:

    ```bash
    git clone [https://github.com/ajidwi02/task-management.git](https://github.com/ajidwi02/task-management.git)
    cd task-management
    ```

2.  **Pastikan File `db-tm.sql` Ada:**
    File ini berisi skema dan data awal _database_. Pastikan file `db-tm.sql` berada di _root_ direktori proyek Anda. File ini akan secara otomatis digunakan oleh Docker Compose untuk menginisialisasi _database_.

3.  **Jalankan dengan Docker Compose:**
    Dari _root_ direktori proyek (`task-management`), jalankan perintah:

    ```bash
    docker-compose up --build -d
    ```

    - `--build`: Membangun _image_ Docker untuk _frontend_ dan _backend_ jika belum ada atau jika `Dockerfile` berubah.
    - `-d`: Menjalankan kontainer di _background_ (_detached mode_).

    Tunggu beberapa saat hingga semua kontainer (_frontend_, _backend_, _db_) selesai dibangun dan dimulai. Proses inisialisasi _database_ mungkin memerlukan waktu sekitar 30 detik hingga 1 menit saat pertama kali dijalankan.

4.  **Akses Aplikasi:**

    - **Frontend**: Buka _browser_ Anda dan akses `http://localhost:5173`.
    - **Backend API**: _Base URL_ API adalah `http://localhost:3000/api`.

5.  **Menghentikan Aplikasi:**
    Untuk menghentikan semua kontainer, jalankan perintah berikut dari _root_ direktori proyek:
    ```bash
    docker-compose down
    ```
    Jika Anda ingin menghapus _volume database_ juga (menghapus semua data), gunakan:
    ```bash
    docker-compose down -v
    ```

---

_Catatan: Konfigurasi database seperti host (`db`), user (`user`), password (`user`), dan nama database (`db-tm`) sudah diatur di dalam file `docker-compose.yaml` dan tidak perlu lagi diatur melalui file `.env` saat menjalankan via Docker Compose_. _File `.dockerignore` juga sudah ditambahkan untuk optimasi build Docker_.

---

## Tech Stack

| Layer        | Technologies                                                         |
| ------------ | -------------------------------------------------------------------- |
| **Frontend** | React 18, Vite, TailwindCSS, Axios, React Router DOM, React Toastify |
| **Backend**  | ExpressJS, bcrypt, cors, dotenv, jsonwebtoken                        |
| **Database** | MySQL                                                                |

---

## Dummy Login Account

Use the following credentials to log in:

| Field        | Value            |
| ------------ | ---------------- |
| **Email**    | `user@gmail.com` |
| **Password** | `user`           |

---

## Database Structure

**Database Name:** `db-tm`

### Table: `users`

| Column       | Type         | Attributes                  | Description                     |
| ------------ | ------------ | --------------------------- | ------------------------------- |
| `user_id`    | INT          | PRIMARY KEY, AUTO_INCREMENT | Unique identifier for each user |
| `name`       | VARCHAR(100) | NOT NULL                    | User's full name                |
| `username`   | VARCHAR(50)  | UNIQUE, NOT NULL            | Username for login              |
| `email`      | VARCHAR(100) | UNIQUE, NOT NULL            | User's email address            |
| `password`   | VARCHAR(255) | NOT NULL                    | Hashed user password            |
| `created_at` | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP   | Record creation time            |

---

### Table: `tasks`

| Column        | Type                               | Attributes                                            | Description                     |
| ------------- | ---------------------------------- | ----------------------------------------------------- | ------------------------------- |
| `task_id`     | INT                                | PRIMARY KEY, AUTO_INCREMENT                           | Unique identifier for each task |
| `user_id`     | INT                                | FOREIGN KEY (`users.user_id`)                         | Owner of the task               |
| `title`       | VARCHAR(255)                       | NOT NULL                                              | Task title                      |
| `description` | TEXT                               | NULLABLE                                              | Task details                    |
| `status`      | ENUM('To Do','In Progress','Done') | DEFAULT 'To Do'                                       | Current task status             |
| `deadline`    | DATE                               | NULLABLE                                              | Task deadline date              |
| `created_at`  | TIMESTAMP                          | DEFAULT CURRENT_TIMESTAMP                             | Task creation time              |
| `updated_at`  | TIMESTAMP                          | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Last modification time          |

---

**Relationships:**

- Each **user** can have multiple **tasks** (`1:N` relationship).
- Deleting a user will automatically delete their associated tasks (`ON DELETE CASCADE`).

---

## Main Interface Screenshot

![Main Dashboard Screenshot](./screenshots/dashboard.png)

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

### Author

Developed by [Aji Dwi](https://github.com/ajidwi02)
