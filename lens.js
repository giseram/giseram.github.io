/* Lupa de zoom sobre las imágenes de los casos (.figure img).
   Solo en dispositivos con cursor; en touch no aplica. */
(function () {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  var Z = 2.5;   // factor de zoom
  var W = 300;   // ancho de la lupa
  var H = 210;   // alto de la lupa

  document.querySelectorAll('.figure img').forEach(function (img) {
    var fig = img.closest('figure');
    if (!fig) return;

    var lens = document.createElement('div');
    lens.className = 'figure-lens';
    fig.appendChild(lens);

    function move(e) {
      var r = img.getBoundingClientRect();
      var x = e.clientX - r.left;
      var y = e.clientY - r.top;
      lens.style.left = (img.offsetLeft + x - W / 2) + 'px';
      lens.style.top = (img.offsetTop + y - H / 2) + 'px';
      lens.style.backgroundImage = 'url("' + (img.currentSrc || img.src) + '")';
      lens.style.backgroundSize = (r.width * Z) + 'px ' + (r.height * Z) + 'px';
      lens.style.backgroundPosition = (W / 2 - x * Z) + 'px ' + (H / 2 - y * Z) + 'px';
    }

    img.addEventListener('mouseenter', function (e) { lens.style.opacity = '1'; move(e); });
    img.addEventListener('mousemove', move);
    img.addEventListener('mouseleave', function () { lens.style.opacity = '0'; });
  });
})();
