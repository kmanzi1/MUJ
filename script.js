document.addEventListener("DOMContentLoaded", () => {

  /* INTRO */
  const intro = document.querySelector(".intro");
  setTimeout(() => intro.classList.add("hide"), 2200);

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

  /* PARALLAX */
  window.addEventListener("scroll", () => {
    const heroImg = document.querySelector(".hero-right img");
    if (heroImg) {
      heroImg.style.setProperty("--parallax", window.scrollY * 0.2 + "px");
    }
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

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  /* FIRE BAR — NO MIC PERMISSION */
const fireBar = document.querySelector(".fire-bar");

// simple pulse animation (CSS handles it)
/* INTRO FIX FOR MOBILE FREEZE */
document.addEventListener("DOMContentLoaded", () => {
  const intro = document.querySelector(".intro");
  const body = document.body;

  // allow scrolling after intro hides
  setTimeout(() => {
    if (intro) {
      intro.classList.add("hide");
      body.style.overflowY = "auto";
    }
  }, 2200);
});

