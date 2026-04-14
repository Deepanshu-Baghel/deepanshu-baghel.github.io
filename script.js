/* ============================================================
   DEEPANSHU BAGHEL — script.js
   Midnight Green + Amber Theme
   ============================================================ */

'use strict';

/* ============================================================
   1. PAGE LOADER
   ============================================================ */
window.addEventListener('load', () => {
  const loader = document.getElementById('page-loader');
  if (!loader) return;
  setTimeout(() => {
    loader.classList.add('done');
    setTimeout(() => loader.remove(), 600);

    // Kick off hero counters & typer after load
    startCounters();
    initTyper();
  }, 1800);
});

/* ============================================================
   2. CUSTOM CURSOR
   ============================================================ */
(function initCursor() {
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  if (!cursor || !follower) return;

  let mx = 0, my = 0, fx = 0, fy = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  function animateFollower() {
    fx += (mx - fx) * 0.12;
    fy += (my - fy) * 0.12;
    follower.style.left = fx + 'px';
    follower.style.top  = fy + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  document.querySelectorAll('a, button, .skill-tag, .project-card, .highlight-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('active');
      follower.classList.add('active');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('active');
      follower.classList.remove('active');
    });
  });
})();

/* ============================================================
   3. PARTICLE CANVAS
   ============================================================ */
(function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  const COLORS = ['rgba(16,185,129,', 'rgba(245,158,11,', 'rgba(110,231,183,'];

  class Particle {
    constructor() { this.reset(true); }
    reset(initial = false) {
      this.x  = Math.random() * W;
      this.y  = initial ? Math.random() * H : H + 10;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = -(Math.random() * 0.4 + 0.1);
      this.r  = Math.random() * 2 + 0.5;
      this.alpha = Math.random() * 0.6 + 0.1;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.life  = Math.random() * 300 + 100;
      this.age   = 0;
    }
    update() {
      this.x += this.vx; this.y += this.vy; this.age++;
      if (this.age > this.life || this.y < -10) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.color + this.alpha + ')';
      ctx.fill();
    }
  }

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function init() {
    resize();
    particles = Array.from({ length: 80 }, () => new Particle());
    loop();
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    // Draw connecting lines between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 90) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(16,185,129,${0.06 * (1 - dist/90)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }

  window.addEventListener('resize', resize);
  init();
})();

/* ============================================================
   4. TYPING ANIMATION
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
   5. COUNTER ANIMATION
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
   6. NAVBAR — scroll & mobile toggle & active link
   ============================================================ */
(function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const navMenu   = document.getElementById('navMenu');
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.querySelectorAll('.nav-link');
  if (!navbar) return;

  // Scroll
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    updateActiveLink();
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
    document.querySelectorAll('section[id]').forEach(sec => {
      const top = sec.offsetTop, btm = top + sec.offsetHeight;
      const id  = sec.getAttribute('id');
      const lnk = document.querySelector(`.nav-link[data-section="${id}"]`);
      if (lnk) lnk.classList.toggle('active', scrollY >= top && scrollY < btm);
    });
  }
  updateActiveLink();
})();

/* ============================================================
   7. SCROLL REVEAL
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
   8. BACK TO TOP
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
   9. CONTACT FORM
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
   10. TOAST
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
   11. TILT EFFECT on Project Cards
   ============================================================ */
(function initTilt() {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width  / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) *  5;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();

/* ============================================================
   12. MAGNETIC BUTTONS
   ============================================================ */
(function initMagneticBtns() {
  document.querySelectorAll('.btn-primary, .btn-outline').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width  / 2;
      const y = e.clientY - rect.top  - rect.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
})();

/* ============================================================
   13. SKILL TAGS — staggered entrance
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

/* ============================================================
   14. MOUSE PARALLAX on Hero Blobs
   ============================================================ */
(function initParallax() {
  const blobs = document.querySelectorAll('.blob');
  if (!blobs.length) return;
  document.addEventListener('mousemove', e => {
    const xPct = (e.clientX / window.innerWidth  - 0.5);
    const yPct = (e.clientY / window.innerHeight - 0.5);
    blobs.forEach((blob, i) => {
      const depth = (i + 1) * 12;
      blob.style.transform = `translate(${xPct * depth}px, ${yPct * depth}px)`;
    });
  });
})();

/* ============================================================
   15. HIGHLIGHT ITEM RIPPLE on hover
   ============================================================ */
(function initRipple() {
  document.querySelectorAll('.highlight-item, .contact-method').forEach(el => {
    el.addEventListener('click', e => {
      const ripple = document.createElement('span');
      const rect   = el.getBoundingClientRect();
      const size   = Math.max(rect.width, rect.height);
      ripple.style.cssText = `
        position:absolute; border-radius:50%; background:rgba(16,185,129,0.25);
        width:${size}px; height:${size}px;
        left:${e.clientX - rect.left - size/2}px;
        top:${e.clientY - rect.top  - size/2}px;
        transform:scale(0); opacity:1; pointer-events:none;
        animation: rippleAnim 0.6s ease forwards;
      `;
      el.style.position = 'relative'; el.style.overflow = 'hidden';
      el.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
  // Inject keyframe
  const s = document.createElement('style');
  s.textContent = `@keyframes rippleAnim { to { transform: scale(2.5); opacity: 0; } }
  .cursor-blink { animation: cursorBlink 1s step-end infinite; }
  @keyframes cursorBlink { 0%,100%{opacity:1;} 50%{opacity:0;} }`;
  document.head.appendChild(s);
})();

/* ============================================================
   16. SMOOTH SCROLL for nav links (fallback for older browsers)
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ============================================================
   17. SECTION ENTRY GLOW SWEEP
   ============================================================ */
(function initSweep() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'none';
        void entry.target.offsetWidth; // reflow
        entry.target.style.animation = '';
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.section-tag').forEach(el => obs.observe(el));
})();
