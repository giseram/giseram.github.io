/* Subrayado animado: los h2 de los casos se subrayan al entrar en pantalla. */
(function () {
  var heads = document.querySelectorAll('.case-content h2');
  if (!heads.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    heads.forEach(function (h) { h.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -15% 0px', threshold: 0.4 });

  heads.forEach(function (h) { observer.observe(h); });
})();
