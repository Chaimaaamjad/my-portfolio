/* ============================================
   NEON PORTFOLIO - JAVASCRIPT
   Chaimaa Amjad - Typewriter, Tabs, Animations
   ============================================ */

// === TYPEWRITER EFFECT ===
const typewriterElement = document.getElementById('typewriter');
const sentences = [
  "Creating modern, user-friendly web experiences.",
  "Combining software engineering and network skills.",
  "Open to PFE internship opportunities."
];

let sentenceIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typewriterDelay = 100;

function typewriter() {
  const currentSentence = sentences[sentenceIndex];

  if (isDeleting) {
    typewriterElement.textContent = currentSentence.substring(0, charIndex - 1);
    charIndex--;
    typewriterDelay = 50;
  } else {
    typewriterElement.textContent = currentSentence.substring(0, charIndex + 1);
    charIndex++;
    typewriterDelay = 100;
  }

  // When sentence is complete
  if (!isDeleting && charIndex === currentSentence.length) {
    typewriterDelay = 2000; // Pause at end
    isDeleting = true;
  }

  // When sentence is fully deleted
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    sentenceIndex = (sentenceIndex + 1) % sentences.length;
    typewriterDelay = 500; // Pause before next sentence
  }

  setTimeout(typewriter, typewriterDelay);
}

// Start typewriter effect when page loads
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(typewriter, 1000);
});


// === TAB SYSTEM ===
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetTab = button.getAttribute('data-tab');

    // Remove active class from all buttons and contents
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add active class to clicked button and corresponding content
    button.classList.add('active');
    document.getElementById(`tab-${targetTab}`).classList.add('active');
  });
});


// === NAVIGATION ACTIVE STATE ===
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section-fullscreen');

function updateActiveNav() {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - 200) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

// Update on scroll
window.addEventListener('scroll', updateActiveNav);


// === SMOOTH SCROLL FOR NAVIGATION ===
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


// === SCROLL REVEAL ANIMATIONS ===
function revealOnScroll() {
  const reveals = document.querySelectorAll('.project-card, .cert-card, .tech-card, .timeline-item, .contact-btn');

  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);


// === FORM SUBMISSION ===
// Form submission is handled by FormSubmit.co
// Messages are automatically sent to amjadchaimaa9@gmail.com


// === YEAR IN FOOTER ===
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}


// === PERFORMANCE: REDUCE ANIMATIONS ON MOBILE ===
function checkMobile() {
  if (window.innerWidth < 768) {
    // Reduce animation duration on mobile for better performance
    document.documentElement.style.setProperty('--animation-duration', '0.3s');
  } else {
    document.documentElement.style.setProperty('--animation-duration', '1s');
  }
}

window.addEventListener('DOMContentLoaded', checkMobile);
window.addEventListener('resize', checkMobile);


// === PARALLAX EFFECT FOR FLOATING ELEMENTS (OPTIONAL) ===
const floatingElements = document.querySelectorAll('.avatar-floating, .illustration-3d');

window.addEventListener('mousemove', (e) => {
  if (window.innerWidth > 968) {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    floatingElements.forEach(element => {
      const speed = 20;
      const x = (mouseX - 0.5) * speed;
      const y = (mouseY - 0.5) * speed;

      element.style.transform = `translate(${x}px, ${y}px)`;
    });
  }
});


// === INTERSECTION OBSERVER FOR PERFORMANCE ===
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.project-card, .cert-card, .tech-card').forEach(el => {
  observer.observe(el);
});


// === PREVENT SCROLL SNAP DURING NAVIGATION ===
let isScrolling = false;

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    isScrolling = true;
    document.documentElement.style.scrollSnapType = 'none';

    setTimeout(() => {
      isScrolling = false;
      document.documentElement.style.scrollSnapType = 'y mandatory';
    }, 1000);
  });
});


// === CONSOLE MESSAGE ===
console.log('%c👋 Welcome to my portfolio!', 'color: #a855f7; font-size: 24px; font-weight: bold;');
console.log('%cDeveloped by Chaimaa Amjad', 'color: #22d3ee; font-size: 14px;');
console.log('%c🌐 www.chaimaa.dev', 'color: #ffffff; font-size: 12px;');
