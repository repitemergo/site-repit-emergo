/* ═══════════════════════════════════════════════════
   RÉPIT EMERGO — Mode Pictogrammes (ARASAAC)
   Toggle between text and pictogram views
   ═══════════════════════════════════════════════════ */

(function() {
  'use strict';

  var saved = localStorage.getItem('emergo-picto-mode');

  function togglePictoMode() {
    var btn = document.getElementById('pictoToggleBtn');
    var body = document.body;
    var isActive = body.classList.toggle('picto-active');

    if (btn) {
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      btn.title = isActive ? 'Désactiver le mode pictogrammes' : 'Mode Pictogrammes';
    }

    localStorage.setItem('emergo-picto-mode', isActive ? 'on' : 'off');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('pictoToggleBtn');
    if (btn) {
      btn.addEventListener('click', togglePictoMode);

      if (saved === 'on') {
        document.body.classList.add('picto-active');
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        btn.title = 'Désactiver le mode pictogrammes';
      }
    }
  });

  window.togglePictoMode = togglePictoMode;
})();
