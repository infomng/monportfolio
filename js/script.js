/*toggle icon navbar*/

// scroll section active link

//! A corriger
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
        console.log(id);
      });
    }
  });
};

// sicky navbar

//! A terminer

let header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 100);

/* scroll reveal */

ScrollReveal({
  reset: true,
  origin: "top",
  distance: "80px",
  duration: 2000,
  //   rotate: { x: 5, y: 5, z: 5 },
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });

ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/* --------------------------------typed js---------------------------------- */

let typed = new Typed(".multiple-text", {
  strings: ["General Engineer", "Full Stack Developer", "Software Engineer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
