function toggleMobileMenu() {
  const panel = document.getElementById('mobilePanel');
  if (panel) panel.classList.toggle('open');
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    const panel = document.getElementById('mobilePanel');
    if (panel) panel.classList.remove('open');
  }
});
