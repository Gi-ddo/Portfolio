document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true
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
