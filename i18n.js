(function() {
  function currentLang() {
    return document.documentElement.getAttribute('data-lang') === 'en' ? 'en' : 'es';
  }

  function applyMeta(lang) {
    var title = document.querySelector('title');
    if (title && title.hasAttribute('data-en')) {
      if (!title.hasAttribute('data-es')) title.setAttribute('data-es', title.textContent);
      title.textContent = lang === 'en' ? title.getAttribute('data-en') : title.getAttribute('data-es');
    }
    var desc = document.querySelector('meta[name="description"]');
    if (desc && desc.hasAttribute('data-en')) {
      if (!desc.hasAttribute('data-es')) desc.setAttribute('data-es', desc.getAttribute('content'));
      desc.setAttribute('content', lang === 'en' ? desc.getAttribute('data-en') : desc.getAttribute('data-es'));
    }
    document.querySelectorAll('[data-alt-en]').forEach(function(img) {
      if (!img.hasAttribute('data-alt-es')) img.setAttribute('data-alt-es', img.getAttribute('alt'));
      img.setAttribute('alt', lang === 'en' ? img.getAttribute('data-alt-en') : img.getAttribute('data-alt-es'));
    });
  }

  function setLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    try { localStorage.setItem('lang', lang); } catch (e) {}
    applyMeta(lang);
    var es = document.getElementById('langEs');
    var en = document.getElementById('langEn');
    if (es && en) {
      es.setAttribute('aria-pressed', lang === 'es' ? 'true' : 'false');
      en.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
    }
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
  }

  applyMeta(currentLang());

  document.addEventListener('DOMContentLoaded', function() {
    var es = document.getElementById('langEs');
    var en = document.getElementById('langEn');
    if (!es || !en) return;
    var lang = currentLang();
    es.setAttribute('aria-pressed', lang === 'es' ? 'true' : 'false');
    en.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
    es.addEventListener('click', function() { setLang('es'); });
    en.addEventListener('click', function() { setLang('en'); });
  });
})();
