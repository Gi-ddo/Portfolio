document.addEventListener("DOMContentLoaded", () => {
  // If Satement to check window width, to not show menu btn and close if width less than 1024px
  if (window.innerWidth < 1024) {
    document.getElementById('menu-button').style.display = 'inline-block';
    document.getElementById('close-button').style.display = 'none';
    document.querySelector('.nav-links').classList.remove('show');
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true
    });
    tsParticles.load("particles-js", {
    fpsLimit: 30, // ⬅️ lower FPS
    particles: {
      number: { value: 10 }, // ⬅️ fewer dots
      move: { speed: 0.2 },
      }
    });
  } else {
    document.getElementById('menu-button').style.display = 'none';
    document.getElementById('close-button').style.display = 'none';
    document.querySelector('.nav-links').classList.add('show');
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true
    });
  }

  // Media lazy loading using Intersection Observer
  const mediaObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const dataSrc = el.getAttribute('data-src');
      if (dataSrc) {
        el.setAttribute('src', dataSrc);
        el.removeAttribute('data-src');
        observer.unobserve(el);
      }
    }
  });
  }, {
    rootMargin: "200px",
    threshold: 0.1
  });

  // Apply to all placeholders
  document.querySelectorAll('img[data-src]').forEach(img => {
    mediaObserver.observe(img);
  });

  // Smooth scroll nav
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Hamburger nav toggle
  const menuBtn = document.getElementById('menu-button');
  const closeBtn = document.getElementById('close-button');
  const navLinksContainer = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');

  const openMenu = () => {
    navLinksContainer.classList.add('show');
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    navLinksContainer.classList.remove('show');
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    document.body.style.overflow = '';
  };

  menuBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  navItems.forEach(link => link.addEventListener('click', closeMenu));
});

// Scroll-to-top logic — global
const scrollBtn = document.getElementById("scrollToTop");
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
