(function() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  function isInternalNav(a) {
    if (!a || a.target === '_blank' || a.hasAttribute('download')) return false;
    var href = a.getAttribute('href');
    if (!href || href.charAt(0) === '#') return false;
    if (/^(mailto:|tel:|https?:\/\/|\/\/)/i.test(href)) return false;
    return true;
  }

  document.addEventListener('click', function(e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest('a');
    if (!isInternalNav(a)) return;
    e.preventDefault();
    document.body.classList.add('is-leaving');
    setTimeout(function() { window.location.href = a.href; }, 220);
  });
})();
