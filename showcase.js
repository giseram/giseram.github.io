/* Recorrido animado de pantallas (.showcase): las slides pasan solas,
   suave, una por vez. Se pausa con el cursor o el foco encima y con el
   botón de pausa (WCAG 2.2.2); con prefers-reduced-motion no avanza sola. */
(function () {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var ICON_PAUSE = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M3.5 1.5V10.5M8.5 1.5V10.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  var ICON_PLAY = '<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 1.8V10.2C2.5 10.9 3.3 11.3 3.9 10.9L10.3 6.7C10.8 6.4 10.8 5.6 10.3 5.3L3.9 1.1C3.3 0.7 2.5 1.1 2.5 1.8Z" fill="currentColor"/></svg>';

  function lang() {
    return document.documentElement.getAttribute('data-lang') === 'en' ? 'en' : 'es';
  }

  function captionFor(slide) {
    if (lang() === 'en') {
      var en = slide.getAttribute('data-caption-en');
      if (en) return en;
    }
    return slide.getAttribute('data-caption') || '';
  }

  document.querySelectorAll('.showcase').forEach(function (sc) {
    var slides = Array.prototype.slice.call(sc.querySelectorAll('.showcase__slide'));
    if (!slides.length) return;

    var caption = sc.querySelector('.showcase__caption');
    var dotsWrap = sc.querySelector('.showcase__dots');
    var bar = sc.querySelector('.showcase__bar');
    var interval = parseInt(sc.getAttribute('data-interval'), 10) || 4500;
    var idx = 0;
    var timer = null;
    var paused = false;

    var dots = slides.map(function (_, i) {
      var b = document.createElement('button');
      b.className = 'showcase__dot';
      b.type = 'button';
      b.setAttribute('aria-label', (lang() === 'en' ? 'View screen ' + (i + 1) + ' of ' + slides.length : 'Ver pantalla ' + (i + 1) + ' de ' + slides.length));
      b.addEventListener('click', function () { go(i); play(); });
      if (dotsWrap) dotsWrap.appendChild(b);
      return b;
    });

    // Botón pausa/reproducir: solo si hay rotación automática que pausar
    var pauseBtn = null;
    if (bar && !reduced && slides.length > 1) {
      pauseBtn = document.createElement('button');
      pauseBtn.type = 'button';
      pauseBtn.className = 'showcase__toggle';
      pauseBtn.addEventListener('click', function () {
        paused = !paused;
        updatePauseBtn();
        play();
      });
      bar.appendChild(pauseBtn);
      updatePauseBtn();
    }

    function updatePauseBtn() {
      if (!pauseBtn) return;
      pauseBtn.innerHTML = paused ? ICON_PLAY : ICON_PAUSE;
      pauseBtn.setAttribute('aria-label', paused ? (lang() === 'en' ? 'Play tour' : 'Reproducir recorrido') : (lang() === 'en' ? 'Pause tour' : 'Pausar recorrido'));
      pauseBtn.setAttribute('aria-pressed', paused ? 'true' : 'false');
    }

    function go(i) {
      idx = i;
      slides.forEach(function (s, j) {
        s.classList.toggle('is-active', j === i);
        s.setAttribute('aria-hidden', j === i ? 'false' : 'true');
      });
      dots.forEach(function (d, j) { d.classList.toggle('is-active', j === i); });
      if (caption) caption.textContent = captionFor(slides[i]);
    }

    document.addEventListener('langchange', function () {
      dots.forEach(function (d, i) {
        d.setAttribute('aria-label', (lang() === 'en' ? 'View screen ' + (i + 1) + ' of ' + slides.length : 'Ver pantalla ' + (i + 1) + ' de ' + slides.length));
      });
      updatePauseBtn();
      go(idx);
    });

    function next() { go((idx + 1) % slides.length); }

    function stop() {
      if (timer) clearInterval(timer);
      timer = null;
    }

    function play() {
      stop();
      if (!reduced && !paused && slides.length > 1) timer = setInterval(next, interval);
    }

    sc.addEventListener('mouseenter', stop);
    sc.addEventListener('mouseleave', play);
    sc.addEventListener('focusin', stop);
    sc.addEventListener('focusout', play);

    go(0);
    play();
  });
})();
