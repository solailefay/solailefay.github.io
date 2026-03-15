/* nav.js — shared navigation for all pages */
(function () {
  const path = window.location.pathname.split('/').pop() || 'index.html';

  const pages = [
    { href: 'index.html',        label: 'Home' },
    { href: 'about.html',        label: 'About' },
    { href: 'research.html',     label: 'Research' },
    { href: 'publications.html', label: 'Publications' },
    { href: 'outreach.html',     label: 'Outreach' },
    { href: 'cv.html',           label: 'CV' },
    { href: 'contact.html',      label: 'Contact' },
  ];

  const links = pages.map(p =>
    `<li><a href="${p.href}"${path === p.href ? ' class="active"' : ''}>${p.label}</a></li>`
  ).join('');

  document.write(`
    <nav>
      <a href="index.html" class="nav-name">
        <img src="favicon.png" alt="favicon" style="width:22px;height:22px;object-fit:contain;vertical-align:middle;margin-right:0.4rem;"/>
      Solai Le Fay</a>
      <button class="nav-hamburger" id="nav-btn" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links" id="nav-menu">${links}</ul>
    </nav>
  `);

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('nav-btn');
    const menu = document.getElementById('nav-menu');
    if (btn && menu) btn.addEventListener('click', () => menu.classList.toggle('open'));
  });
})();
