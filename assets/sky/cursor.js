(() => {
  const motion = matchMedia('(any-pointer: fine) and (prefers-reduced-motion: no-preference)');
  let lastTime = -Infinity;
  document.addEventListener('pointermove', event => {
    if (!motion.matches || event.pointerType !== 'mouse' || event.timeStamp - lastTime < 28) return;
    lastTime = event.timeStamp;
    const spark = document.createElement('span');
    spark.className = 'cursor-spark';
    spark.setAttribute('aria-hidden', 'true');
    spark.style.left = event.clientX + 'px';
    spark.style.top = event.clientY + 'px';
    spark.style.setProperty('--size', (5 + Math.random() * 6) + 'px');
    spark.style.setProperty('--dx', (Math.random() * 12 - 6) + 'px');
    const layer = event.target.closest?.('dialog[open]') || document.body;
    layer.append(spark);
    setTimeout(() => spark.remove(), 560);
  }, { passive: true });
})();
