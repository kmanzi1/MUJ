document.addEventListener("DOMContentLoaded", () => {
  // INTRO FADE OUT (no freezing)
  const intro = document.querySelector(".intro");
  if (intro) {
    setTimeout(() => {
      intro.classList.add("hide");
      document.body.style.overflowY = "auto";
    }, 2000);
  }

  // COLLAPSING HEADER
  const header = document.querySelector("header");
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const current = window.scrollY;
    if (current > lastScroll && current > 80) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
    lastScroll = current;
  });

  // MOBILE MENU
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector("nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("open");
    });

    // close menu when clicking a link
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
      });
    });
  }

  // SECTION FADE-IN
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );
  sections.forEach(section => observer.observe(section));
});
