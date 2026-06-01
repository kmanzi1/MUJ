document.addEventListener("DOMContentLoaded", () => {
  // Scroll header background change
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.style.background = "rgba(0,0,0,.95)";
    } else {
      header.style.background = "rgba(0,0,0,.75)";
    }
  });

  // Hover animations for cards
  const cards = document.querySelectorAll(
    ".platform-card, .service-card, .beat-card, .contact-card"
  );

  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px)";
      card.style.transition = "transform 0.3s ease";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });

  // Mobile menu toggle
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector("nav");

  menuBtn.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  });
});
