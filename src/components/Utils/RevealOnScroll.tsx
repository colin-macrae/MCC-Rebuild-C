// document.addEventListener('DOMContentLoaded', () => {
//   const elements = document.querySelectorAll('.slide-up');

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         console.log(
//           `Detecting:`,
//           entry.target,
//           ` Is intersecting?`,
//           entry.isIntersecting
//         );
//         if (entry.isIntersecting) {
//           entry.target.classList.add('visible');
//           observer.unobserve(entry.target); // Stop observing once triggered
//         }
//       });
//     },
//     { threshold: 0.2 } // Adjust if needed
//   );

//   elements.forEach((element) => observer.observe(element));
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const elements = document.querySelectorAll('.slide-up');

//   if (elements.length === 0) {
//     console.error('No .slide-up elements found! Check your HTML.');
//     return;
//   }

//   const observer = new IntersectionObserver(
//     (entries, obs) => {
//       entries.forEach((entry) => {
//         console.log(
//           `Detecting:`,
//           entry.target,
//           ` Is intersecting?`,
//           entry.isIntersecting
//         );

//         if (entry.isIntersecting) {
//           entry.target.classList.add('visible');
//           obs.unobserve(entry.target); // Stop watching once it triggers
//         }
//       });
//     },
//     {
//       threshold: 0.2, // Adjust if needed
//       rootMargin: '0px 0px -50px 0px', // Ensure early triggering
//     }
//   );

//   elements.forEach((element) => observer.observe(element));

//   // Fallback for elements already in view on page load
//   setTimeout(() => {
//     elements.forEach((el) => {
//       if (el.getBoundingClientRect().top < window.innerHeight) {
//         console.log('Applying fallback for:', el);
//         el.classList.add('visible');
//       }
//     });
//   }, 500);
// });

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


