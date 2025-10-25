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