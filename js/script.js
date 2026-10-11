// Mobile sidebar toggle
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

// Close mobile sidebar when a link is clicked
sidebar.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
  });
});

// Highlight the nav link for the section currently in view
const navLinks = document.querySelectorAll('#navLinks a');
const sections = [...navLinks].map(link => document.querySelector(link.getAttribute('href')));

const setActiveLink = () => {
  let current = sections[0];
  sections.forEach(section => {
    if (section && window.scrollY >= section.offsetTop - window.innerHeight / 3) {
      current = section;
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', document.querySelector(link.getAttribute('href')) === current);
  });
};

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);

// Resume dropdown — position as a fixed-position flyout so it escapes the
// sidebar's scroll clipping, and close it on an outside click
const resumeDD = document.querySelector('.resume-dd');
if (resumeDD) {
  const resumeMenu = resumeDD.querySelector('.resume-menu');
  const positionResumeMenu = () => {
    const rect = resumeDD.getBoundingClientRect();
    resumeMenu.style.top = `${rect.top}px`;
    resumeMenu.style.left = `${rect.right + 10}px`;
  };
  resumeDD.addEventListener('toggle', () => {
    if (resumeDD.open) positionResumeMenu();
  });
  document.addEventListener('click', (e) => {
    if (resumeDD.open && !resumeDD.contains(e.target)) {
      resumeDD.removeAttribute('open');
    }
  });
}

// Typewriter effect for "Skilled at ___"
const typedEl = document.getElementById('typed');
if (typedEl) {
  const phrases = [
    'Generative AI Engineer',
    'Data Scientist',
    'Machine Learning Engineer'
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const current = phrases[phraseIndex];
    if (!deleting) {
      charIndex++;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      charIndex--;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }
    setTimeout(tick, deleting ? 35 : 65);
  };

  tick();
}
