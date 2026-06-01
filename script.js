document.addEventListener("DOMContentLoaded", () => {
  /* INTRO FIX */
  const intro = document.querySelector(".intro");
  const body = document.body;
  setTimeout(() => {
    if (intro) {
      intro.classList.add("hide");
      body.style.overflowY = "auto";
    }
  }, 2200);

  /* COLLAPSING HEADER */
  let lastScroll = 0;
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    const current = window.scrollY;
    if (current > lastScroll && current > 80) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
    lastScroll = current;
  });

  /* FADE-IN SECTIONS */
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.15 });
  sections.forEach(section => observer.observe(section));

  /* MOBILE SLIDE-IN MENU */
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector("nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  /* FIRE BAR SIMPLE PULSE (no mic permission) */
  const fireBar = document.querySelector(".fire-bar");
  if (fireBar) {
    let scale = 1;
    setInterval(() => {
      scale = scale === 1 ? 1.15 : 1;
      fireBar.style.transform = `scaleY(${scale})`;
    }, 1200);
  }
});
