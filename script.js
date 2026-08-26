document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.className = navMenu.classList.contains('active') ? 'bx bx-x' : 'bx bx-menu-alt-right';
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        if (icon) icon.className = 'bx bx-menu-alt-right';
      });
    });
  }

  const sections = document.querySelectorAll('section[id]');
  const scrollSpy = () => {
    let current = 'home';
    const scrollPos = window.scrollY + 130;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.clientHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  };
  window.addEventListener('scroll', scrollSpy);

  const typedText = document.getElementById('typed-text');
  const typingWords = [
    'AI-Powered Products',
    'Full-Stack Applications',
    'Scalable Software',
    'Intelligent Solutions',
    'Beautiful User Experiences',
    'Real-World Impact'
  ];

  if (typedText) {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const typeLoop = () => {
      const current = typingWords[wordIndex];
      typedText.textContent = current.slice(0, charIndex);

      if (!deleting && charIndex < current.length) {
        charIndex++;
        setTimeout(typeLoop, 110);
      } else if (!deleting && charIndex === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1000);
      } else if (deleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeLoop, 60);
      } else {
        deleting = false;
        wordIndex = (wordIndex + 1) % typingWords.length;
        setTimeout(typeLoop, 350);
      }
    };

    typeLoop();
  }

  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.14 });
  revealElements.forEach(el => revealObserver.observe(el));

  const cursorGlow = document.querySelector('.cursor-glow');
  const spotlight = document.querySelector('.spotlight');
  document.addEventListener('mousemove', e => {
    if (cursorGlow) {
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
    }
    if (spotlight) {
      spotlight.style.left = `${e.clientX}px`;
      spotlight.style.top = `${e.clientY}px`;
    }
  });

  const counters = document.querySelectorAll('.counter');
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const counter = entry.target;
      const target = Number(counter.dataset.target);
      const duration = 1400;
      const startTime = performance.now();

      const run = now => {
        const progress = Math.min((now - startTime) / duration, 1);
        const value = Number.isInteger(target)
          ? Math.round(progress * target)
          : Number((progress * target).toFixed(2));
        counter.textContent = value;
        if (progress < 1) requestAnimationFrame(run);
      };

      requestAnimationFrame(run);
      counterObserver.unobserve(counter);
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));

  const contactForm = document.getElementById('portfolio-contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending... <i class="bx bx-loader-alt bx-spin"></i>';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        formFeedback.className = 'form-feedback success';
        formFeedback.textContent = 'Thank you! Your message has been sent successfully.';
        contactForm.reset();
        setTimeout(() => {
          formFeedback.textContent = '';
          formFeedback.className = 'form-feedback';
        }, 5000);
      }, 1200);
    });
  }
});
