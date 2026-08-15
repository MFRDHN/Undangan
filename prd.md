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
