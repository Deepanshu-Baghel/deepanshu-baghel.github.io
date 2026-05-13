/* ============================================================
   DEEPANSHU BAGHEL — script.js
   Midnight Green + Amber Theme
   ============================================================ */

'use strict';

/* ============================================================
   1. INIT ON DOM READY
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  startCounters();
  initTyper();
});

/* ============================================================
  2. TYPING ANIMATION
  ============================================================ */
function initTyper() {
  const el = document.getElementById('typedRole');
  if (!el) return;
  const roles = [
    'Full Stack Developer',
    'Blockchain Engineer',
    'Web3 Builder',
    'Smart Contract Dev',
    'React Specialist',
    'Open Source Contributor'
  ];
  let roleIndex = 0, charIndex = 0, deleting = false;

  function tick() {
    const current = roles[roleIndex];
    if (!deleting) {
      el.textContent = current.slice(0, ++charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 2000);
        return;
      }
    } else {
      el.textContent = current.slice(0, --charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(tick, deleting ? 40 : 90);
  }
  tick();
}

/* ============================================================
  3. COUNTER ANIMATION
  ============================================================ */
function startCounters() {
  const counters = document.querySelectorAll('.stat-number[data-count]');
  counters.forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    let current = 0;
    const step  = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current;
      if (current >= target) clearInterval(timer);
    }, 40);
  });
}

/* ============================================================
  4. NAVBAR — scroll & mobile toggle & active link
  ============================================================ */
(function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const navMenu   = document.getElementById('navMenu');
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.querySelectorAll('.nav-link');
  if (!navbar) return;

  const sections = Array.from(document.querySelectorAll('section[id]'));
  const linkById = new Map();
  navLinks.forEach(link => linkById.set(link.dataset.section, link));
  let ticking = false;

  // Scroll
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        updateActiveLink();
        ticking = false;
      });
    }
  }, { passive: true });

  // Toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const open = navMenu.classList.toggle('open');
      navToggle.classList.toggle('active', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }

  // Close on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle && navToggle.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Active section highlight
  function updateActiveLink() {
    const scrollY = window.scrollY + 100;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const btm = top + sec.offsetHeight;
      const id = sec.getAttribute('id');
      const lnk = linkById.get(id);
      if (lnk) lnk.classList.toggle('active', scrollY >= top && scrollY < btm);
    });
  }
  updateActiveLink();
})();

/* ============================================================
  5. SCROLL REVEAL
  ============================================================ */
(function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  document.querySelectorAll('.timeline-item').forEach(el => obs.observe(el));
})();

/* ============================================================
  6. BACK TO TOP
  ============================================================ */
(function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

/* ============================================================
  7. CONTACT FORM
  ============================================================ */
(function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalHTML = btn.innerHTML;

    // Validate
    const inputs = form.querySelectorAll('[required]');
    let valid = true;
    inputs.forEach(inp => {
      inp.style.borderColor = '';
      if (!inp.value.trim()) {
        inp.style.borderColor = '#f43f5e';
        valid = false;
      }
    });
    if (!valid) { showToast('Please fill in all fields.', true); return; }

    // Email validation
    const emailEl = form.querySelector('[type="email"]');
    if (emailEl && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value)) {
      emailEl.style.borderColor = '#f43f5e';
      showToast('Please enter a valid email.', true);
      return;
    }

    btn.innerHTML = '<i class="ph ph-spinner"></i> Sending...';
    btn.disabled = true;

    // Simulate async send
    await new Promise(r => setTimeout(r, 1800));

    form.reset();
    btn.innerHTML = originalHTML;
    btn.disabled  = false;
    showToast('Message sent! I\'ll reply within 24 hours. 🚀');
  });
})();

/* ============================================================
  8. TOAST
  ============================================================ */
function showToast(msg, isError = false) {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toastMsg');
  if (!toast || !msgEl) return;

  msgEl.textContent = msg;
  toast.style.borderColor = isError ? '#f43f5e' : 'var(--green-dark)';
  toast.style.color = isError ? '#fca5a5' : 'var(--green-light)';
  toast.querySelector('i').className = isError ? 'ph ph-warning-circle' : 'ph ph-check-circle';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

/* ============================================================
   9. SKILL TAGS — staggered entrance
   ============================================================ */
(function initSkillTags() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const tags = entry.target.querySelectorAll('.skill-tag');
        tags.forEach((tag, i) => {
          setTimeout(() => {
            tag.style.opacity    = '1';
            tag.style.transform  = 'translateY(0)';
          }, i * 50);
        });
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.skill-category').forEach(cat => {
    cat.querySelectorAll('.skill-tag').forEach(tag => {
      tag.style.opacity   = '0';
      tag.style.transform = 'translateY(12px)';
      tag.style.transition = 'all 0.4s ease';
    });
    obs.observe(cat);
  });
})();

