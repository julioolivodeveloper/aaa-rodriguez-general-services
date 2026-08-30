(function () {
  const maxTapMove = 14;
  const maxTapTime = 800;
  let tapStart = null;
  let lastHandled = 0;

  function closeMobileMenus() {
    document.getElementById('navLinks')?.classList.remove('open');
    document.getElementById('menuOverlay')?.classList.remove('open');
    document.getElementById('mobilePanel')?.classList.remove('open');
    document.body.classList.remove('menu-open');
  }

  function isModifiedEvent(event) {
    return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button > 0;
  }

  function scrollToHash(hash) {
    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (!target) return false;

    const navHeight = document.querySelector('nav')?.offsetHeight || 0;
    const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.history.pushState(null, '', hash);
    window.scrollTo({ top, behavior: 'smooth' });
    return true;
  }

  function isSamePage(url) {
    return url.origin === window.location.origin &&
      url.pathname === window.location.pathname &&
      url.search === window.location.search;
  }

  function followAnchor(anchor, event) {
    const rawHref = anchor.getAttribute('href');
    if (!rawHref || rawHref === '#') return false;
    if (anchor.target && anchor.target !== '_self') return false;

    const href = rawHref.trim();
    closeMobileMenus();

    if (/^(tel|sms|mailto):/i.test(href)) {
      event.preventDefault();
      window.location.href = href;
      return true;
    }

    const url = new URL(href, window.location.href);
    if (url.hash && isSamePage(url) && scrollToHash(url.hash)) {
      event.preventDefault();
      return true;
    }

    event.preventDefault();
    window.location.assign(url.href);
    return true;
  }

  document.addEventListener('touchstart', event => {
    if (event.touches.length !== 1) {
      tapStart = null;
      return;
    }

    const anchor = event.target.closest('a[href]');
    if (!anchor) {
      tapStart = null;
      return;
    }

    const touch = event.touches[0];
    tapStart = {
      anchor,
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    };
  }, { passive: true });

  document.addEventListener('touchend', event => {
    if (!tapStart) return;

    const touch = event.changedTouches[0];
    const moved = Math.hypot(touch.clientX - tapStart.x, touch.clientY - tapStart.y);
    const elapsed = Date.now() - tapStart.time;
    const anchor = tapStart.anchor;
    tapStart = null;

    if (moved > maxTapMove || elapsed > maxTapTime || !document.contains(anchor)) return;
    if (followAnchor(anchor, event)) lastHandled = Date.now();
  }, { passive: false });

  document.addEventListener('click', event => {
    if (Date.now() - lastHandled < 700 || isModifiedEvent(event)) return;

    const anchor = event.target.closest('a[href]');
    if (!anchor) return;

    const rawHref = anchor.getAttribute('href');
    if (!rawHref) return;

    const href = rawHref.trim();
    if (href.startsWith('#') || /^(tel|sms|mailto):/i.test(href) || anchor.matches('.service-card, .gallery-portfolio-btn, .related-card, .btn, .btn-primary, .btn-secondary, .btn-white, .btn-outline-white')) {
      followAnchor(anchor, event);
    }
  });
})();
