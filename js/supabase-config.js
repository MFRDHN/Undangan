// Konfigurasi Supabase — isi dari dashboard.supabase.com lalu buat tabel:
//   create table rsvp (
//     id uuid primary key default gen_random_uuid(),
//     nama text not null,
//     kehadiran text not null,
//     jumlah int not null default 1,
//     ucapan text,
//     created_at timestamptz not null default now()
//   );
// aktifkan "Realtime" untuk tabel rsvp di Supabase (Table > Realtime > Enable).
window.SUPABASE_URL = "https://kbzgpzrzrjueuegjsolc.supabase.co";
window.SUPABASE_ANON_KEY = "sb_publishable_Rw62h4nAVqJXd1P15NuOyA_nQfnrwsq";
