# Belajar Vibe Coding

Backend service dibangun menggunakan **Bun**, **ElysiaJS**, **Drizzle ORM**, dan database **MySQL**.

## 🚀 Persyaratan
- [Bun](https://bun.sh/) (v1.0+)
- MySQL database server

## 📦 Instalasi Dependency
```bash
bun install
```

## ⚙️ Environment Variables
Salin file template `.env.example` ke `.env` dan sesuaikan koneksi database MySQL:
```bash
cp .env.example .env
```

Isi default:
```env
PORT=3000
DATABASE_URL=mysql://root:root@localhost:3306/belajar_vibe_coding
```

## 🗄️ Database Commands (Drizzle)
- **Generate Migrations:**
  ```bash
  bun run db:generate
  ```
- **Run Migrations:**
  ```bash
  bun run db:migrate
  ```
- **Push Schema directly (Development):**
  ```bash
  bun run db:push
  ```
- **Drizzle Studio (Database GUI):**
  ```bash
  bun run db:studio
  ```

## 🏃 Menjalankan Aplikasi
- **Development (Watch Mode):**
  ```bash
  bun run dev
  ```
- **Production Mode:**
  ```bash
  bun run start
  ```

## 🧪 Endpoint
- `GET http://localhost:3000/` : Sambutan & status API
- `GET http://localhost:3000/health` : Health check endpoint
