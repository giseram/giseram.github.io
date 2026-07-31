(function () {
  var ZOOM_ICON = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>';
  var CLOSE_ICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';

  var images = Array.prototype.slice.call(document.querySelectorAll('.figure img'));
  if (!images.length) return;

  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = '<button type="button" class="lightbox-overlay__close" aria-label="Cerrar / Close">' + CLOSE_ICON + '</button><img alt="">';
  document.body.appendChild(overlay);
  var overlayImg = overlay.querySelector('img');
  var closeBtn = overlay.querySelector('.lightbox-overlay__close');

  function open(img) {
    overlayImg.src = img.currentSrc || img.src;
    overlayImg.alt = img.alt || '';
    overlay.classList.add('is-open');
    document.documentElement.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('is-open');
    document.documentElement.style.overflow = '';
  }

  images.forEach(function (img) {
    var fig = img.closest('figure');
    if (fig && !fig.querySelector('.figure__zoom-hint')) {
      var hint = document.createElement('span');
      hint.className = 'figure__zoom-hint';
      hint.setAttribute('aria-hidden', 'true');
      hint.innerHTML = ZOOM_ICON;
      fig.appendChild(hint);
    }
    img.addEventListener('click', function () { open(img); });
  });

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) close();
  });
})();
