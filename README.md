# Undangan Pernikahan — Mila & Taufik

Single-page undangan pernikahan mobile-first (HTML/CSS/JS statis) sesuai `design.md` & `prd.md`.

## Struktur

```
index.html            — 9 section: cover, hero, mempelai, our story, acara, galeri, amplop, rsvp, penutup
css/style.css         — design tokens (9.1), font, ornament gonjong, responsive
js/main.js            — cover, countdown, reveal-on-scroll, salin rekening, lightbox, musik
js/supabase-config.js — isi kredensial Supabase di sini
js/rsvp.js            — simpan + tampilkan RSVP/ucapan dari Supabase (realtime)
assets/               — foto (di-copy dari "Assets foto")
```

## Setup RSVP (Supabase, gratis)

1. Buat project di https://supabase.com
2. SQL Editor → jalankan:

```sql
create table rsvp (
  id uuid primary key default gen_random_uuid(),
  nama text not null,
  kehadiran text not null,
  jumlah int not null default 1,
  ucapan text,
  created_at timestamptz not null default now()
);
```

3. Table `rsvp` → **Realtime** → Enable (biar ucapan tampil live tanpa refresh).
4. Salin `Project URL` dan `anon public key` dari **Settings → API** ke `js/supabase-config.js`.
5. Tanpa key terisi, form RSVP otomatis nonaktif dengan pesan — aman di-deploy duluan.

## Konten yang masih perlu diisi klien (dari PRD Bab 8)

- Link Google Maps per lokasi → ganti `href` tombol "Lihat Lokasi" di `index.html`
- Musik latar → taruh file di `assets/music.mp3`
- Foto galeri → file `sesi1.jpg`–`sesi7.jpg` sudah terpakai, tinggal ganti gambarnya

## Deploy ke Vercel

1. Push repo ke GitHub
2. Import di https://vercel.com (framework: **Other** / statis — tanpa konfigurasi)
3. Deploy. Selesai.

Test lokal: jalankan server statis dari folder ini (mis. `python -m http.server 8000`) lalu buka `http://localhost:8000`.
