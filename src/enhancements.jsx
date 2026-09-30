const waveRoot = document.getElementById('gradient-wave-root');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

if (waveRoot && 'IntersectionObserver' in window) {
  let near = false;
  let loading = false;
  const mountWhenVisible = () => {
    if (!near || loading || reducedMotion.matches || navigator.connection?.saveData) return;
    loading = true;
    observer.disconnect();
    reducedMotion.removeEventListener('change', mountWhenVisible);
    import('./ui/mount-gradient-wave.jsx')
      .then(({ mountGradientWave }) => mountGradientWave(waveRoot))
      .catch(() => { waveRoot.dataset.fallback = 'true'; });
  };
  const observer = new IntersectionObserver(([entry]) => {
    near = entry.isIntersecting;
    mountWhenVisible();
  }, { rootMargin: '120px' });
  observer.observe(waveRoot);
  reducedMotion.addEventListener('change', mountWhenVisible);
}
