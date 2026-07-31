(function() {
  var burger = document.getElementById('navBurger');
  var links = document.getElementById('navLinks');
  if (!burger || !links) return;

  function close() {
    links.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  }

  burger.addEventListener('click', function() {
    var open = links.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  links.addEventListener('click', function(e) {
    if (e.target.closest('a')) close();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') close();
  });

  window.addEventListener('resize', function() {
    if (window.innerWidth > 640) close();
  });
})();
