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

/*===== Toggle Icon NavBar =====*/

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
};
