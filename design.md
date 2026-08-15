# PRD / Design Document — Web Undangan Pernikahan
**Mila Saputri & Taufik Hidayatullah**

Versi: 1.0
Status: Draft — untuk direview klien sebelum masuk development

---

## 1. Ringkasan Proyek

Website undangan pernikahan digital (single page, mobile-first) untuk pasangan **Mila Saputri** dan **Taufik Hidayatullah**. Website berfungsi sebagai undangan resmi berisi informasi acara, cerita perjalanan cinta, galeri foto, informasi rekening (angpao digital), dan konfirmasi kehadiran (RSVP).

### Tujuan
- Menyampaikan informasi acara (akad, resepsi utama, resepsi kedua) secara jelas
- Menampilkan foto kedua mempelai sebagai elemen utama (hero section)
- Memberikan pengalaman membuka undangan yang personal (nama tamu bisa disisipkan via URL)
- Memudahkan tamu untuk RSVP dan memberi ucapan/doa
- Memudahkan tamu memberi hadiah digital (transfer bank)

### Target Pengguna
Keluarga, kerabat, dan undangan tamu dari kedua belah pihak mempelai (akses via link WhatsApp/media sosial, dibuka lewat HP).

---

## 2. Data Utama Mempelai

| | Mempelai Wanita | Mempelai Pria |
|---|---|---|
| Nama lengkap | Mila Saputri | Taufik Hidayatullah |
| Anak ke- | 3 (tiga) | 2 (dua) |
| Nama Ayah | Alm. Bapak Mahyudin | Bapak Bakhri Bakar |
| Nama Ibu | Ibu Rosmaini | Ibu Susanti Arita |

> **Catatan konten:** karena ayah mempelai wanita sudah almarhum, penulisan nama orang tua di section "Mempelai" perlu memakai format standar undangan, contoh:
> *"Putri ketiga dari pasangan Alm. Bapak Mahyudin & Ibu Rosmaini"*

**Perlu dari klien:**
- [ ] Foto individu mempelai wanita (portrait, high-res)
- [ ] Foto individu mempelai pria (portrait, high-res)
- [ ] Foto berdua/prewedding untuk hero section
- [ ] Instagram handle kedua mempelai (opsional, untuk ikon sosial)

---

## 3. Struktur Acara

Ada **3 rangkaian acara** — perlu ditampilkan dengan jelas terpisah agar tamu tidak bingung (terutama karena lokasi resepsi kedua berbeda kabupaten).

### 3.1 Akad Nikah
- **Tanggal:** Jumat, 11 September 2026
- **Waktu:** 14.00 WIB s/d selesai
- **Lokasi:** Kediaman mempelai wanita — Pasar Ampalam, Kampuang¹, Nagari Koto Tinggi Kuranji Hilir, Kabupaten Padang Pariaman

### 3.2 Resepsi (Utama)
- **Tanggal:** Sabtu, 12 September 2026
- **Waktu:** 10.00 WIB s/d selesai
- **Lokasi:** Kediaman mempelai wanita — Pasar Ampalam, Kampuang¹, Nagari Koto Tinggi Kuranji Hilir, Kabupaten Padang Pariaman

### 3.3 Resepsi 2 (Pihak Mempelai Pria)
- **Tanggal:** Senin, 14 September 2026
- **Waktu:** 10.00 WIB s/d selesai
- **Lokasi:** Jorong Sungai Tampang, Kecamatan Tanjung Sani, Kabupaten Agam

> ¹ *Perlu konfirmasi ke klien: penulisan "kamumuan" — apakah maksudnya "Kampuang"? Mohon dikonfirmasi ejaan yang benar sebelum naik ke production.*
> **Perlu dari klien:** link Google Maps untuk masing-masing dari 3 lokasi acara (agar tombol "Lihat Lokasi" bisa langsung buka Maps).

---

## 4. Cerita Perjalanan Cinta (Our Story)

Ditampilkan sebagai timeline 4 tahap, masing-masing dengan judul, tahun/waktu, dan narasi.

| Tahap | Waktu | Narasi (ringkas) |
|---|---|---|
| **Pertemuan** | 2019 | Tidak ada yang kebetulan — pertemuan sederhana di 2019 menjadi awal perjalanan panjang. |
| **Pendekatan** | — | Kedekatan tumbuh dari obrolan kecil, hadir rasa nyaman, hingga memutuskan berkomitmen. |
| **Lamaran** | Juni 2026 | Melewati proses dan ujian, semakin yakin satu sama lain, dipertemukan dalam ikatan penuh doa dan restu keluarga. |
| **Pernikahan** | 11 September 2026 | Ikrar janji suci pernikahan, disertai kutipan Ali bin Abi Thalib. |

**Kutipan penutup (quote section):**
> "Apa yang menjadi takdirmu, akan menemukan jalannya untuk menemukanmu."
> — Ali bin Abi Thalib

Teks lengkap dari masing-masing tahap sudah tersedia dari brief klien dan tinggal dipasang apa adanya (hanya perlu dirapikan tanda baca/spasi saat implementasi, tanpa mengubah makna).

---

## 5. Amplop Digital / Wedding Gift

Ditampilkan sebagai section tersendiri dengan tombol "salin nomor rekening" per bank.

| Pemilik Rekening | Bank | No. Rekening |
|---|---|---|
| Mila Saputri *(perlu konfirmasi nama pemilik rekening)* | UOB | 7353773759 |
| Taufik Hidayatullah | Mandiri | 1090019887397 |
| Taufik Hidayatullah | BCA | 8550838771 |

> **Perlu dari klien:** konfirmasi atas nama pemilik rekening UOB (asumsi sementara: Mila Saputri — mohon dikoreksi jika salah).

---

## 6. Struktur Halaman & Section (Section Map)

Single-page scroll, urutan section sebagai berikut:

1. **Cover / Opening Screen**
   - Nama kedua mempelai, tanggal pernikahan
   - Nama tamu undangan (dari parameter URL, contoh `?to=Budi`)
   - Tombol "Buka Undangan" (trigger musik + animasi masuk)
2. **Hero Section — Foto Kedua Mempelai**
   - Foto utama berdua (full-bleed atau framed)
   - Nama lengkap kedua mempelai + ayat/quote pembuka Islami
3. **Mempelai (Bride & Groom Profile)**
   - Foto individu + nama + anak ke berapa + nama orang tua (kiri: wanita, kanan: pria, atau stack di mobile)
4. **Our Story / Perjalanan Cinta**
   - Timeline 4 tahap (Pertemuan → Pendekatan → Lamaran → Pernikahan)
   - Quote penutup Ali bin Abi Thalib
5. **Acara**
   - 3 card/tab acara: Akad, Resepsi, Resepsi 2 — masing-masing tanggal, jam, lokasi, tombol Maps
   - Countdown timer ke acara Akad (11 Sept 2026, 14:00 WIB)
6. **Galeri Foto**
   - Grid foto prewedding/kegiatan (jumlah & foto menyusul dari klien)
7. **Amplop Digital**
   - Card per rekening dengan tombol salin nomor
8. **RSVP & Ucapan**
   - Form: Nama, Konfirmasi Kehadiran (Hadir/Tidak/Ragu), Jumlah tamu, Ucapan/doa
   - List ucapan dari tamu lain (realtime, urut terbaru)
9. **Penutup**
   - Ucapan terima kasih, tombol "Tutup Undangan" / kembali ke atas

---

## 7. Fitur Teknis

| Fitur | Prioritas | Catatan |
|---|---|---|
| Nama tamu dinamis via URL parameter | Wajib | `domain.com/?to=NamaTamu` |
| Musik latar (play/pause toggle) | Wajib | Perlu file musik dari klien atau royalty-free |
| Countdown timer ke hari Akad | Wajib | |
| RSVP form + list ucapan tersimpan (database) | Wajib | Perlu backend/DB (mis. Google Sheets, Firebase, atau Supabase) |
| Tombol "Lihat Lokasi" → Google Maps | Wajib | Perlu 3 link maps dari klien |
| Salin nomor rekening (copy to clipboard) | Wajib | |
| Galeri foto (lightbox) | Wajib | |
| Animasi buka amplop / cover masuk | Nice-to-have | |
| Bagikan ke WhatsApp (share link otomatis + nama tamu) | Nice-to-have | |
| Mode tema warna (opsional pilihan klien) | Nice-to-have | |
| Responsive (mobile-first, karena mayoritas dibuka dari WA) | Wajib | |

---

## 8. Checklist Data yang Masih Dibutuhkan dari Klien

- [ ] Konfirmasi ejaan lokasi akad/resepsi ("kamumuan" → Kampuang?)
- [ ] Link Google Maps untuk 3 lokasi acara
- [ ] Foto individu mempelai wanita & pria
- [ ] Foto hero (berdua/prewedding)
- [ ] Foto-foto galeri (jumlah + file)
- [ ] Konfirmasi nama pemilik rekening bank UOB
- [ ] Pilihan musik latar (judul lagu atau file)
- [ ] Preferensi warna/tema desain (contoh referensi undangan lain jika ada)
- [ ] Format nama tamu di link undangan (per orang / per keluarga)

---

## 9. Arahan Desain Visual (UI/UX Direction)

Brief dari klien: dasar putih (karena foto-foto berlatar biru), tampilan simpel & modern, ditambah beberapa ornamen dan animasi. Arahan di bawah ini menerjemahkan brief tersebut jadi sistem desain yang konkret, sekaligus digroundingkan ke konteks budaya acara (adat Minangkabau, Padang Pariaman & Agam) supaya ornamennya tidak generik.

### 9.1 Palet Warna

| Token | Hex | Peran |
|---|---|---|
| `--bg-base` | `#FDFDFB` | Dasar putih gading (bukan putih pure #FFF, biar foto biru tidak "tabrakan" dan tetap hangat) |
| `--ink` | `#1E2A33` | Warna teks utama (biru gelap keabuan, bukan hitam pekat — selaras dengan tone foto) |
| `--accent-deep` | `#1B3A5C` | Biru navy dalam — dipetik langsung dari tone latar foto prewedding, dipakai di heading besar & garis ornamen |
| `--accent-gold` | `#B08D57` | Gold muted (bukan gold ngejreng) — untuk detail seremonial: garis pembatas tipis, ikon, quote |
| `--accent-soft` | `#E7ECEF` | Biru sangat muda — untuk background section selang-seling, card, divider halus |
| `--success` | `#4A7C59` | Sage hijau — status "Hadir" di RSVP |

**Alasan:** dasar putih gading + navy + gold muted memberi kesan simpel-modern tapi tetap elegan/seremonial, dan navy-nya senada dengan latar foto biru sehingga foto menyatu dengan section, bukan seperti ditempel di atas web.

### 9.2 Tipografi

| Role | Font | Pemakaian |
|---|---|---|
| Display (nama mempelai, heading besar) | **Playfair Display** atau **Cormorant Garamond** (serif elegan, kontras tinggi) | Nama mempelai di cover & hero, judul section |
| Body | **Inter** atau **Plus Jakarta Sans** (sans modern, netral) | Paragraf cerita, detail acara, form |
| Aksen/kutipan | **Cormorant Garamond Italic** | Kutipan Ali bin Abi Thalib, sub-judul romantis |

Skala tipe dibuat generous untuk heading (mis. nama mempelai besar di hero, letter-spacing lebar untuk kesan "undangan", bukan skala default UI app.

### 9.3 Konsep Layout

```
[ COVER ]         → penuh 1 layar, foto berdua sebagai background/tekstur
                    tipis di belakang, nama + tanggal center, garis
                    ornamen atas-bawah, tombol "Buka Undangan"

[ HERO ]          → foto berdua full-bleed dengan frame ornamen garis
                    (bukan kotak foto biasa — pakai lengkung/gonjong)

[ MEMPELAI ]      → 2 kolom (stack di mobile), tiap kolom: foto bulat/
                    lengkung + garis ornamen tipis di bawah nama

[ OUR STORY ]     → timeline vertikal dengan garis penghubung tipis
                    warna gold, tiap tahap punya ikon kecil bertema
                    (bukan angka 01/02/03 — karena isinya bukan
                    proses teknis, tapi babak cerita)

[ ACARA ]         → 3 card acara sejajar (scroll horizontal di mobile),
                    dibedakan warna aksen tipis per card

[ GALERI ]        → grid foto dengan sedikit rotasi acak halus per foto
                    (kesan "ditempel", bukan grid kaku)

[ AMPLOP DIGITAL ]→ card minimal, ikon bank, tombol salin

[ RSVP ]          → form simpel 1 kolom, list ucapan di bawahnya

[ PENUTUP ]       → ornamen garis besar menutup, ucapan terima kasih
```

### 9.4 Ornamen

Alih-alih ornamen generik (bunga/daun template), ornamen mengambil bentuk **garis lengkung gonjong** — siluet atap Rumah Gadang khas Minangkabau (relevan karena lokasi acara di Padang Pariaman & Agam) — digambar tipis (1px, warna gold/navy) sebagai:
- Frame di sekeliling foto hero & foto mempelai
- Divider antar section (pengganti garis lurus biasa)
- Elemen dekoratif pojok di card acara & amplop digital

Ornamen dipakai **secukupnya** (di cover, hero, dan divider besar saja) — bukan di setiap section, supaya tetap terasa "simpel modern" sesuai brief, bukan ramai.

### 9.5 Animasi

Prinsip: animasi melayani momen, bukan hiasan yang berulang di semua tempat.

| Momen | Animasi |
|---|---|
| Cover → buka undangan | Transisi halus: cover fade/slide ke atas, musik mulai, hero muncul dengan fade-in foto |
| Scroll antar section | Fade-up halus (translate 20px + opacity) saat section masuk viewport — sekali per section, tidak berulang |
| Garis ornamen gonjong | "Draw-in" tipis (seperti garis digambar) saat pertama muncul di viewport |
| Hover card acara/galeri | Elevasi halus + scale 1.02 |
| Countdown timer | Angka berganti dengan transisi halus (bukan flip kasar) |
| Reduced motion | Semua animasi di atas otomatis nonaktif jika user set `prefers-reduced-motion` |

### 9.6 Elemen Signature

**Satu elemen yang paling diingat dari desain ini:** siluet garis gonjong tipis yang membingkai foto hero kedua mempelai di dasar putih gading — jadi titik temu antara "modern-minimalis" (garis tipis, banyak whitespace) dan "identitas lokal" (bentuk atap Rumah Gadang), sekaligus secara teknis membuat foto berlatar biru terlihat menyatu, bukan seperti kotak foto ditempel.

---

## 10. Next Steps

1. Klien konfirmasi checklist di Bab 8
2. Finalisasi wireframe/UI per section (bisa lanjut ke tahap desain visual setelah PRD ini disetujui)
3. Setup struktur project (frontend + storage RSVP)
4. Development section demi section sesuai urutan di Bab 6
5. Review konten bersama klien sebelum go-live
6. Testing di berbagai device (fokus mobile karena dibuka via WhatsApp)