document.addEventListener("DOMContentLoaded", () => {

  /* INTRO SCREEN */
  const intro = document.querySelector(".intro");
  setTimeout(() => {
    intro.classList.add("hide");
  }, 2200);

  /* HEADER SCROLL + PARALLAX */
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.style.background = window.scrollY > 50
      ? "rgba(0,0,0,.95)"
      : "rgba(0,0,0,.75)";

    const heroImg = document.querySelector(".hero-right img");
    heroImg.style.setProperty("--parallax", window.scrollY * 0.2 + "px");
  });

  /* FADE-IN SECTIONS */
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(section => observer.observe(section));

  /* MOBILE MENU */
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector("nav");

  menuBtn.addEventListener("click", () => {
    if (getComputedStyle(nav).display === "none") {
      nav.style.display = "flex";
      nav.style.flexDirection = "column";
      nav.style.gap = "20px";
      nav.style.background = "rgba(0,0,0,.95)";
      nav.style.position = "absolute";
      nav.style.top = "80px";
      nav.style.right = "8%";
      nav.style.padding = "20px 25px";
      nav.style.border = "1px solid #222";
    } else {
      nav.style.display = "none";
    }
  });

});
