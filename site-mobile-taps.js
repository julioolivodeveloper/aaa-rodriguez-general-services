(function () {
  const businessPhone = '+18632578339';
  const whatsappPhone = '18632578339';
  const maxTapMove = 14;
  const maxTapTime = 800;
  let tapStart = null;
  let lastHandled = 0;
  let lastContactFocus = null;

  const contactCopy = {
    es: {
      close: 'Cerrar',
      kicker: 'Contacto directo',
      title: 'Elige cómo comunicarte con nosotros',
      body: 'Habla directo con AAA Rodriguez General Services. Escoge WhatsApp o mensaje de texto y envía tu solicitud desde el celular.',
      whatsapp: 'WhatsApp',
      whatsappNote: 'Abrir conversación',
      sms: 'Mensaje de texto',
      smsNote: 'Enviar SMS al celular',
      phoneLabel: '863-257-8339',
      message: 'Hola AAA Rodriguez General Services, necesito una cotización. Vi su sitio web y quiero enviar detalles de mi propiedad.'
    },
    en: {
      close: 'Close',
      kicker: 'Direct contact',
      title: 'Choose how to contact us',
      body: 'Talk directly with AAA Rodriguez General Services. Choose WhatsApp or text message and send your request from your phone.',
      whatsapp: 'WhatsApp',
      whatsappNote: 'Open conversation',
      sms: 'Text message',
      smsNote: 'Send SMS to the phone',
      phoneLabel: '863-257-8339',
      message: 'Hello AAA Rodriguez General Services, I need a quote. I saw your website and would like to send details about my property.'
    }
  };

  function getLanguage() {
    return window.SiteTranslator?.getLanguage?.() || localStorage.getItem('aaaRodriguezLanguage') || 'es';
  }

  function getContactCopy() {
    return getLanguage() === 'en' ? contactCopy.en : contactCopy.es;
  }

  function injectContactStyles() {
    if (document.getElementById('aaa-contact-modal-styles')) return;
    const style = document.createElement('style');
    style.id = 'aaa-contact-modal-styles';
    style.textContent = `
      .aaa-contact-modal {
        position: fixed;
        inset: 0;
        z-index: 3000;
        display: grid;
        place-items: center;
        padding: 1.25rem;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.22s ease;
      }

      .aaa-contact-modal.open {
        opacity: 1;
        pointer-events: auto;
      }

      .aaa-contact-backdrop {
        position: absolute;
        inset: 0;
        background: rgba(7,31,16,0.72);
        backdrop-filter: blur(8px);
      }

      .aaa-contact-panel {
        position: relative;
        width: min(100%, 460px);
        background: #ffffff;
        color: #18231b;
        border: 1px solid rgba(36,138,66,0.2);
        border-radius: 12px;
        padding: 2rem;
        box-shadow: 0 28px 80px rgba(7,31,16,0.34);
        transform: translateY(18px) scale(0.98);
        transition: transform 0.22s ease;
        outline: none;
      }

      .aaa-contact-modal.open .aaa-contact-panel {
        transform: translateY(0) scale(1);
      }

      .aaa-contact-close {
        position: absolute;
        top: 0.9rem;
        right: 0.9rem;
        border: 1px solid rgba(36,138,66,0.2);
        border-radius: 999px;
        background: #f8f5ec;
        color: #124521;
        padding: 0.42rem 0.82rem;
        font: inherit;
        font-size: 0.76rem;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        cursor: pointer;
      }

      .aaa-contact-kicker {
        color: #248a42;
        font-size: 0.78rem;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 0.12em;
        margin: 0 5rem 0.75rem 0;
      }

      .aaa-contact-title {
        color: #071f10;
        font-family: 'Oswald', sans-serif;
        font-size: clamp(1.9rem, 7vw, 2.65rem);
        line-height: 1.06;
        margin: 0 0 0.9rem;
      }

      .aaa-contact-body {
        color: #536453;
        font-size: 1rem;
        font-weight: 650;
        line-height: 1.7;
        margin: 0 0 1.5rem;
      }

      .aaa-contact-actions {
        display: grid;
        gap: 0.8rem;
      }

      .aaa-contact-choice {
        display: block;
        border-radius: 10px;
        padding: 1rem 1.1rem;
        text-decoration: none;
        font-weight: 900;
        transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
      }

      .aaa-contact-choice strong {
        display: block;
        font-size: 1.06rem;
      }

      .aaa-contact-choice span {
        display: block;
        margin-top: 0.22rem;
        font-size: 0.82rem;
        font-weight: 800;
        opacity: 0.78;
      }

      .aaa-contact-choice.whatsapp {
        background: #2fb455;
        color: #ffffff;
        box-shadow: 0 12px 30px rgba(47,180,85,0.26);
      }

      .aaa-contact-choice.sms {
        background: #071f10;
        color: #ffffff;
      }

      .aaa-contact-choice:hover,
      .aaa-contact-choice:focus-visible {
        transform: translateY(-2px);
        box-shadow: 0 16px 36px rgba(7,31,16,0.2);
      }

      .aaa-contact-phone {
        margin-top: 1.25rem;
        color: #17602c;
        font-size: 0.9rem;
        font-weight: 900;
        text-align: center;
      }

      body.contact-modal-open {
        overflow: hidden;
      }

      @media (max-width: 520px) {
        .aaa-contact-modal {
          align-items: end;
          padding: 0.75rem;
        }

        .aaa-contact-panel {
          width: 100%;
          padding: 1.55rem;
          border-radius: 14px;
        }

        .aaa-contact-close {
          top: 0.75rem;
          right: 0.75rem;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function createContactModal() {
    let modal = document.getElementById('aaa-contact-modal');
    if (modal) return modal;

    injectContactStyles();
    const copy = getContactCopy();
    modal = document.createElement('div');
    modal.id = 'aaa-contact-modal';
    modal.className = 'aaa-contact-modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
      <div class="aaa-contact-backdrop" data-contact-close></div>
      <div class="aaa-contact-panel" role="dialog" aria-modal="true" aria-labelledby="aaa-contact-title" tabindex="-1">
        <button class="aaa-contact-close" type="button" data-contact-close>${copy.close}</button>
        <p class="aaa-contact-kicker">${copy.kicker}</p>
        <h2 class="aaa-contact-title" id="aaa-contact-title">${copy.title}</h2>
        <p class="aaa-contact-body">${copy.body}</p>
        <div class="aaa-contact-actions">
          <a class="aaa-contact-choice whatsapp" id="aaa-contact-whatsapp" target="_blank" rel="noopener">
            <strong>${copy.whatsapp}</strong>
            <span>${copy.whatsappNote}</span>
          </a>
          <a class="aaa-contact-choice sms" id="aaa-contact-sms">
            <strong>${copy.sms}</strong>
            <span>${copy.smsNote}</span>
          </a>
        </div>
        <p class="aaa-contact-phone">${copy.phoneLabel}</p>
      </div>
    `;

    modal.addEventListener('click', event => {
      if (event.target.closest('[data-contact-close]')) closeContactModal();
    });

    document.body.appendChild(modal);
    return modal;
  }

  function updateContactModal() {
    const modal = createContactModal();
    const copy = getContactCopy();
    modal.querySelector('.aaa-contact-close').textContent = copy.close;
    modal.querySelector('.aaa-contact-kicker').textContent = copy.kicker;
    modal.querySelector('.aaa-contact-title').textContent = copy.title;
    modal.querySelector('.aaa-contact-body').textContent = copy.body;
    modal.querySelector('#aaa-contact-whatsapp strong').textContent = copy.whatsapp;
    modal.querySelector('#aaa-contact-whatsapp span').textContent = copy.whatsappNote;
    modal.querySelector('#aaa-contact-sms strong').textContent = copy.sms;
    modal.querySelector('#aaa-contact-sms span').textContent = copy.smsNote;
    modal.querySelector('.aaa-contact-phone').textContent = copy.phoneLabel;
    modal.querySelector('#aaa-contact-whatsapp').href = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(copy.message)}`;
    modal.querySelector('#aaa-contact-sms').href = `sms:${businessPhone}?&body=${encodeURIComponent(copy.message)}`;
    return modal;
  }

  function openContactModal() {
    const modal = updateContactModal();
    lastContactFocus = document.activeElement;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('contact-modal-open');
    modal.querySelector('.aaa-contact-panel')?.focus();
  }

  function closeContactModal() {
    const modal = document.getElementById('aaa-contact-modal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('contact-modal-open');
    if (lastContactFocus && document.contains(lastContactFocus)) {
      lastContactFocus.focus();
    }
  }

  function isContactHref(href) {
    if (!href) return false;
    try {
      return new URL(href, window.location.href).hash === '#contact';
    } catch (error) {
      return href.trim() === '#contact';
    }
  }

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

    if (anchor.matches('[data-open-contact]') || isContactHref(href)) {
      event.preventDefault();
      openContactModal();
      return true;
    }

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
    if (isContactHref(href) || href.startsWith('#') || /^(tel|sms|mailto):/i.test(href) || anchor.matches('.nav-cta, .service-card, .gallery-portfolio-btn, .related-card, .btn, .btn-primary, .btn-secondary, .btn-white, .btn-outline-white')) {
      followAnchor(anchor, event);
    }
  });

  document.addEventListener('click', event => {
    if (Date.now() - lastHandled < 700) return;
    const trigger = event.target.closest('[data-open-contact]');
    if (!trigger || trigger.matches('a[href]')) return;
    event.preventDefault();
    closeMobileMenus();
    openContactModal();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeContactModal();
  });

  window.AAAContact = {
    open: openContactModal,
    close: closeContactModal
  };
})();
