'use strict';
document.documentElement.classList.add('js');
const toggle = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');
toggle.hidden = false;
function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu(); toggle.focus();
  }
});
const copyButton = document.getElementById('copy-phone');
copyButton.hidden = false;
copyButton.addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText('956 716 402');
    document.getElementById('manual-copy').hidden = true;
    status.textContent = 'Teléfono copiado: 956 716 402';
  } catch {
    const fallback = document.getElementById('manual-copy');
    fallback.hidden = false;
    const input = document.getElementById('phone-value');
    input.focus(); input.select();
    status.textContent = 'Puedes copiar el número seleccionado manualmente.';
  }
});
document.getElementById('year').textContent = String(new Date().getFullYear());
