(() => {
  'use strict';
  const SUPABASE_URL = window.SUPABASE_URL || '';
  const SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY || '';

  const form = document.getElementById('rsvp-form');
  const msg = document.getElementById('rsvp-msg');
  const list = document.getElementById('ucapan-list');

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    form.querySelector('button[type="submit"]').textContent =
      'RSVP belum aktif — isi js/supabase-config.js';
    form.querySelector('button[type="submit"]').disabled = true;
    return;
  }

  const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  const statusLabel = {
    hadir: 'Hadir',
    tidak: 'Tidak Hadir',
    ragu: 'Masih Ragu',
  };
  const statusClass = {
    hadir: '',
    tidak: '--no',
    ragu: '--ragu',
  };

  function render(items) {
    list.innerHTML = items
      .map(u => `
        <div class="ucapan-item">
          <div class="ucapan-item__head">
            <span class="ucapan-item__name">${escapeHtml(u.nama)}</span>
            <span class="ucapan-item__status${statusClass[u.kehadiran] || ''}">${statusLabel[u.kehadiran] || u.kehadiran}</span>
          </div>
          ${u.ucapan ? `<p class="ucapan-item__text">${escapeHtml(u.ucapan)}</p>` : ''}
        </div>`)
      .join('');
  }

  function escapeHtml(s) {
    const d = document.createElement('div');
    d.textContent = s == null ? '' : String(s);
    return d.innerHTML;
  }

  async function load() {
    const { data, error } = await supabase
      .from('rsvp')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(200);
    if (!error) render(data);
  }

  supabase.channel('rsvp').on(
    'postgres_changes',
    { event: 'INSERT', schema: 'public', table: 'rsvp' },
    () => load()
  ).subscribe();

  form.addEventListener('submit', async e => {
    e.preventDefault();
    msg.textContent = '';
    const fd = new FormData(form);
    const body = {
      nama: fd.get('nama'),
      kehadiran: fd.get('kehadiran'),
      jumlah: parseInt(fd.get('jumlah'), 10) || 1,
      ucapan: fd.get('ucapan') || null,
    };
    let error;
    try {
      ({ error } = await supabase.from('rsvp').insert([body]));
    } catch (err) {
      error = err;
    }
    if (error) {
      console.error(error);
      msg.className = 'rsvp__msg err';
      msg.textContent = 'Gagal mengirim: ' + (error.message || error.details || 'coba lagi.');
      return;
    }
    msg.className = 'rsvp__msg ok';
    msg.textContent = 'Terima kasih, ucapan Anda telah terkirim.';
    form.reset();
  });

  load();
})();