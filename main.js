const loginSection = document.getElementById("right-login");
const loginCard = document.getElementById("login-card");
const dropImg = document.getElementById("drop-img");

loginSection.addEventListener("click", () => {
  dropImg.classList.toggle("rotate");
  loginCard.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!loginSection.contains(e.target) && !loginCard.contains(e.target)) {
    dropImg.classList.remove("rotate");
    loginCard.classList.remove("show");
  }
});

// Hamburger
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector("#middle-links");

// Toggle menu
hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("open");
});

// Close menu on outside click
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove("active");
    hamburger.classList.remove("open");
  }
});

// Close menu when a link is clicked
document.querySelectorAll("#middle-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("open");
  });
});