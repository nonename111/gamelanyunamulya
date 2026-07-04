# Deploy ke Vercel

## 0. Validasi project

Jalankan dulu:

```bash
npm install
npm run check
```

Kalau semua lolos, project aman untuk dipush dan dihosting.

## 1. Push ke GitHub

```bash
git init -b main
git add .
git commit -m "feat: initialize Vercel-ready digital museum site"
git remote add origin https://github.com/username/nama-repo.git
git push -u origin main
```

Jika repo GitHub sudah dibuat duluan, cukup sesuaikan URL `origin`.

## 2. Import ke Vercel

1. Login ke [Vercel](https://vercel.com/)
2. Klik `Add New Project`
3. Pilih repository GitHub project ini
4. Pastikan preset terdeteksi sebagai `Next.js`

## 3. Environment Variable

Tambahkan:

```bash
NEXT_PUBLIC_SITE_URL=https://nama-project-kamu.vercel.app
```

Jika sudah memakai domain custom:

```bash
NEXT_PUBLIC_SITE_URL=https://domainkamu.com
```

## 4. Build Settings

- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: kosongkan/default
- Node.js Version: `20.x` atau lebih baru
- Root Directory: folder project ini

## 5. Domain Custom

Setelah deploy pertama berhasil:

1. Buka project di Vercel
2. Masuk ke `Settings` -> `Domains`
3. Tambahkan domain utama
4. Update DNS sesuai instruksi Vercel
5. Ganti `NEXT_PUBLIC_SITE_URL` ke domain final
6. Redeploy

## 6. Checklist Sebelum Publish

- `npm run check` berhasil
- `NEXT_PUBLIC_SITE_URL` sudah benar
- Link sosial dan kontak di `data/site-content.json` sudah final
- Jika ada aset asli, simpan ke `public/`
- Cek hasil `robots.txt` dan `sitemap.xml`
