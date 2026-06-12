// スクロールアニメーション
document.addEventListener('DOMContentLoaded', () => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
});


// 全ページ共通：バーガーメニュー
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.menu-toggle').forEach((button) => {
    const nav = button.closest('.site-nav');
    const menu = nav ? nav.querySelector('.nav-links') : document.querySelector('.nav-links');
    if (!menu) return;

    button.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('is-open');
      button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      button.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
      button.textContent = isOpen ? '×' : '☰';
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.remove('is-open');
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-label', 'メニューを開く');
        button.textContent = '☰';
      });
    });

    document.addEventListener('click', (event) => {
      if (!nav || nav.contains(event.target)) return;
      menu.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'メニューを開く');
      button.textContent = '☰';
    });
  });
});
