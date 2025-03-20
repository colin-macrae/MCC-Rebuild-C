// // document.addEventListener('DOMContentLoaded', () => {
// //   setTimeout(() => {
// //     // Delay execution slightly
// //     const elements = document.querySelectorAll('.slide-up');

// //     if (elements.length === 0) {
// //       console.error(
// //         'No .slide-up elements found! Make sure elements are in the DOM.'
// //       );
// //       return;
// //     }

// //     const observer = new IntersectionObserver(
// //       (entries, obs) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             entry.target.classList.add('visible');
// //             obs.unobserve(entry.target);
// //           }
// //         });
// //       },
// //       { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
// //     );

// //     elements.forEach((element) => observer.observe(element));

// //     // Fallback: Apply .visible to elements already in view
// //     elements.forEach((el) => {
// //       if (el.getBoundingClientRect().top < window.innerHeight) {
// //         el.classList.add('visible');
// //       }
// //     });
// //   }, 500); // Small delay to ensure elements exist
// // });


// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const RevealOnScroll = () => {
//   const location = useLocation(); // Detects route changes

//   useEffect(() => {
//     setTimeout(() => {
//       const elements = document.querySelectorAll('.slide-up');

//       if (elements.length === 0) {
//         console.error(
//           'No .slide-up elements found! Make sure elements are in the DOM.'
//         );
//         return;
//       }

//       // Remove and reapply classes on route change to reset state
//       elements.forEach((el) => {
//         el.classList.remove('visible'); // Ensures fresh animation when navigating back
//       });

//       const observer = new IntersectionObserver(
//         (entries, obs) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               entry.target.classList.add('visible');
//               obs.unobserve(entry.target); // Prevents re-triggering
//             }
//           });
//         },
//         { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
//       );

//       elements.forEach((element) => observer.observe(element));

//       // Fallback: Apply .visible to elements already in view on page load
//       elements.forEach((el) => {
//         if (el.getBoundingClientRect().top < window.innerHeight) {
//           el.classList.add('visible');
//         }
//       });
//     }, 300); // Small delay ensures elements exist before running

//     return () => {
//       const elements = document.querySelectorAll('.slide-up');
//       elements.forEach((el) => el.classList.remove('visible')); // Reset on unmount
//     };
//   }, [location.pathname]); // Runs on route changes

//   return null; // No UI needed, just behavior
// };

// export default RevealOnScroll;




