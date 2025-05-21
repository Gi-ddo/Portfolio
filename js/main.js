/// Scroll-to-top button logic
const scrollBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menu-button');
  const closeBtn = document.getElementById('close-button');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');

  const openMenu = () => {
    navLinks.classList.add('show');
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
    document.body.style.overflow = 'hidden'; // disable scroll
  };

  const closeMenu = () => {
    navLinks.classList.remove('show');
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    document.body.style.overflow = ''; // re-enable scroll
  };

  menuBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

  navItems.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});
