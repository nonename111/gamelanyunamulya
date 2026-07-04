# Yuna Mulya Gamelan

Website museum digital modern berbasis Next.js 15, TypeScript, Tailwind CSS, dan Framer Motion.

## Persiapan lokal

```bash
npm install
npm run dev
```

## Checklist sebelum hosting

```bash
npm run check
```

Perintah di atas akan menjalankan:

- `eslint` untuk cek kualitas kode
- `tsc --noEmit` untuk validasi TypeScript
- `next build` untuk memastikan build production lolos

## Deploy ke Vercel

1. Push project ini ke GitHub.
2. Import repository ke Vercel.
3. Set Node.js ke `20.x` atau lebih baru.
4. Set environment variable:

```bash
NEXT_PUBLIC_SITE_URL=https://namadomainkamu.vercel.app
```

5. Gunakan setting default:
   - Framework Preset: `Next.js`
   - Build Command: `npm run build`
   - Install Command: `npm install`
   - Output Directory: default
   - Root Directory: project root ini

6. Jika ingin domain custom:
   - Tambahkan domain di dashboard Vercel
   - Arahkan DNS domain ke Vercel
   - Ubah `NEXT_PUBLIC_SITE_URL` ke domain final, misalnya `https://museumgamelan.com`
   - Redeploy setelah environment variable diperbarui

## Struktur penting

- `app/` untuk route App Router
- `components/` untuk reusable UI dan section
- `data/site-content.json` untuk konten sementara sebelum CMS
- `lib/site.ts` untuk URL dan metadata utilitas
- `vercel.json` untuk konfigurasi deploy ringan

## Catatan

- Project ini sudah siap untuk deploy tanpa database.
- Metadata, sitemap, dan robots sudah menyesuaikan `NEXT_PUBLIC_SITE_URL`.
- File `.nvmrc` sudah disiapkan untuk menyamakan versi Node.js saat development dan deploy.
- Gunakan folder `public/` bila nanti ingin menambahkan aset foto atau video asli.
