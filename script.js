const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if ('IntersectionObserver' in window && !reduceMotion.matches) {
  const revealItems = document.querySelectorAll('.reveal, .journey-step, .journey-connector, .wall-card');
  const observer = new IntersectionObserver((entries, currentObserver) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    }
  }, { threshold: 0.15 });

  // Keep the default document fully visible unless observation can run.
  document.documentElement.classList.add('js-motion');
  revealItems.forEach((item) => observer.observe(item));

  const staffSection = document.querySelector('.gym-section');
  if (staffSection) observer.observe(staffSection);
}
