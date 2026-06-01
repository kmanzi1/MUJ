window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if(window.scrollY > 50){
header.style.background = "rgba(0,0,0,.95)";
}
else{
header.style.background = "rgba(0,0,0,.75)";
}

});

const cards = document.querySelectorAll(
".platform-card, .service-card, .beat-card, .contact-card"
);

cards.forEach(card => {

card.addEventListener("mouseenter", () => {
card.style.transform = "translateY(-10px)";
});

card.addEventListener("mouseleave", () => {
card.style.transform = "translateY(0)";
});

});
