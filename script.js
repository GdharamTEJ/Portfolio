/*===== Type Writer Animation in HomePage =====*/
var typed = new Typed(".multiple-text", {
  strings: [
    "Fullstack Developer",
    "Ethical Hacker",
    "Security Analyst",
    "YouTuber",
    "Gamer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

/*===== About Me =====*/
var typed = new Typed(".type-dev", {
  strings: ["All Rounder ?"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

/*===== Toggle Icon NavBar =====*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.oneclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*===== Scroll Sections Active Link =====*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*===== Sticky NavBar =====*/
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /*===== Remove Toggle Icon and NavBar When Click NavBar Links (scroll) =====*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*===== Scroll Reveal =====*/
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".heading", { origin: "top" });
ScrollReveal().reveal(".services-container, .portfolio-box, .contact form", {
  origin: "bottom",
});
ScrollReveal().reveal(".about-img", { origin: "left" });
ScrollReveal().reveal(".about-content", { origin: "right" });
