document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    // Delay execution slightly
    const elements = document.querySelectorAll('.slide-up');

    if (elements.length === 0) {
      console.error(
        'No .slide-up elements found! Make sure elements are in the DOM.'
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    elements.forEach((element) => observer.observe(element));

    // Fallback: Apply .visible to elements already in view
    elements.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('visible');
      }
    });
  }, 500); // Small delay to ensure elements exist
});


