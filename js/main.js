(() => {
  'use strict';

  /* ---------- Nama tamu dari URL (?to=Nama) ---------- */
  const guestName = document.getElementById('guest-name-text');
  if (guestName) {
    const name = new URLSearchParams(location.search).get('to');
    if (name && name.trim()) {
      guestName.textContent = name.trim().replace(/-/g, ' & ');
      document.getElementById('guest-name').hidden = false;
      document.getElementById('guest-note').hidden = false;
    }
  }

  /* ---------- Cover: open ---------- */
  const cover = document.getElementById('cover');
  const content = document.getElementById('content');
  document.getElementById('btn-open').addEventListener('click', () => {
    cover.classList.add('is-open');
    content.hidden = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    startMusic();
    setTimeout(() => cover.remove(), 1100);
  });

  /* ---------- Countdown ---------- */
  const target = new Date(document.querySelector('.countdown').dataset.target).getTime();
  const pad = n => String(n).padStart(2, '0');
  const cd = {
    days: document.getElementById('cd-days'),
    hours: document.getElementById('cd-hours'),
    minutes: document.getElementById('cd-minutes'),
    seconds: document.getElementById('cd-seconds'),
  };
  let lastSec = null;
  function tick() {
    const diff = target - Date.now();
    if (diff <= 0) {
      cd.days.textContent = cd.hours.textContent = cd.minutes.textContent = cd.seconds.textContent = '00';
      return;
    }
    const d = pad(Math.floor(diff / 86400000));
    const h = pad(Math.floor(diff / 3600000) % 24);
    const m = pad(Math.floor(diff / 60000) % 60);
    const s = pad(Math.floor(diff / 1000) % 60);
    const changed = [];
    if (cd.days.textContent !== d) { cd.days.textContent = d; changed.push(cd.days); }
    if (cd.hours.textContent !== h) { cd.hours.textContent = h; changed.push(cd.hours); }
    if (cd.minutes.textContent !== m) { cd.minutes.textContent = m; changed.push(cd.minutes); }
    if (cd.seconds.textContent !== s) { cd.seconds.textContent = s; changed.push(cd.seconds); }
    if (s !== lastSec) {
      lastSec = s;
      cd.seconds.classList.add('pop');
      setTimeout(() => cd.seconds.classList.remove('pop'), 350);
    }
  }
  tick();
  setInterval(tick, 1000);

  /* ---------- Reveal on scroll (data-anim) ---------- */
  const animEls = document.querySelectorAll('[data-anim]');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  animEls.forEach(el => io.observe(el));

  /* ---------- Fade out when leaving viewport (keluar) ---------- */
  const fadeOutEls = document.querySelectorAll('.hero__text, .event-card, .gift-card, .gallery__item');
  const ioOut = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) e.target.classList.add('out');
      else e.target.classList.remove('out');
    });
  }, { threshold: 0.25 });
  fadeOutEls.forEach(el => ioOut.observe(el));

  /* ---------- Hero parallax ---------- */
  const hero = document.getElementById('hero');
  const heroFrame = hero.querySelector('.hero__photo-frame');
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const rect = hero.getBoundingClientRect();
      const mid = rect.top + rect.height / 2;
      const dist = mid - window.innerHeight / 2;
      heroFrame.style.transform = `translateY(${dist * -0.04}px)`;
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Copy rekening ---------- */
  document.querySelectorAll('.btn--copy').forEach(btn => {
    btn.addEventListener('click', async () => {
      const text = btn.dataset.copy;
      const label = btn.textContent;
      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = 'Tersalin!';
      } catch {
        btn.textContent = 'Gagal salin';
      }
      setTimeout(() => { btn.textContent = label; }, 2000);
    });
  });

  /* ---------- Gallery lightbox ---------- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  document.querySelectorAll('.gallery__item').forEach(fig => {
    fig.addEventListener('click', () => {
      lightboxImg.src = fig.dataset.full;
      lightbox.hidden = false;
    });
  });
  lightbox.addEventListener('click', () => { lightbox.hidden = true; });

  /* ---------- Back to top ---------- */
  document.getElementById('btn-back-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- Music (stub) ---------- */
  let audio = null;
  const musicBtn = document.getElementById('music-toggle');
  const MUSIC_URL = 'assets/perangtelahusaireff.mpeg';

  function startMusic() {
    if (audio) return; // sudah diinisialisasi
    audio = new Audio(MUSIC_URL);
    audio.loop = true;
    audio.play().then(() => {
      musicBtn.hidden = false;
      musicBtn.classList.add('playing');
    }).catch(() => {
      // Autoplay diblokir browser — tampilkan tombol agar user bisa klik manual
      musicBtn.hidden = false;
    });
  }
  musicBtn.addEventListener('click', () => {
    if (audio.paused) { audio.play(); musicBtn.classList.add('playing'); }
    else { audio.pause(); musicBtn.classList.remove('playing'); }
  });
})();