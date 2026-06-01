document.addEventListener("DOMContentLoaded", () => {

  /* HEADER SCROLL EFFECT */
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.style.background = window.scrollY > 50
      ? "rgba(0,0,0,.95)"
      : "rgba(0,0,0,.75)";

    /* PARALLAX HERO IMAGE */
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
  });

  sections.forEach(section => observer.observe(section));

  /* MOBILE MENU */
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector("nav");

  menuBtn.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  });
});
