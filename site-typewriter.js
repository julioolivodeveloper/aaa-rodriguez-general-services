(function () {
  const targets = document.querySelectorAll('[data-typewriter]');
  if (!targets.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

  async function typeLoop(target) {
    const phrases = (target.dataset.phrases || target.textContent)
      .split('|')
      .map(phrase => phrase.trim())
      .filter(Boolean);

    if (!phrases.length) return;
    if (reduceMotion) {
      target.textContent = phrases[0];
      return;
    }

    let phraseIndex = 0;
    while (true) {
      const phrase = phrases[phraseIndex % phrases.length];

      for (let i = 0; i <= phrase.length; i += 1) {
        target.textContent = phrase.slice(0, i);
        await wait(42);
      }

      await wait(1500);

      for (let i = phrase.length; i >= 0; i -= 1) {
        target.textContent = phrase.slice(0, i);
        await wait(24);
      }

      await wait(260);
      phraseIndex += 1;
    }
  }

  targets.forEach(target => typeLoop(target));
})();
