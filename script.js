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

  /* FIRE BAR BASS REACTIVITY */
  const fireBar = document.querySelector(".fire-bar");

  if (navigator.mediaDevices) {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      const audioCtx = new AudioContext();
      const analyser = audioCtx.createAnalyser();
      const mic = audioCtx.createMediaStreamSource(stream);
      mic.connect(analyser);

      const data = new Uint8Array(analyser.frequencyBinCount);

      function pulse() {
        analyser.getByteFrequencyData(data);
        const bass = data.slice(0, 20).reduce((a,b) => a + b) / 20;
        const scale = 1 + bass / 200;
        fireBar.style.transform = `scaleY(${scale})`;
        requestAnimationFrame(pulse);
      }

      pulse();
    });
  }
});
