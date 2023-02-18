const nav = document.querySelector(".nav");
const serviceDiv = document.querySelector("#services");

window.addEventListener("scroll", () => {
  let Y = window.scrollY;
  if (Y > serviceDiv.offsetTop - nav.offsetHeight - 10) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

const heroEl = document.querySelector(".hero");
const ctaBtn = document.querySelector("#ctaBtn");
const popup = document.querySelector(".popup");
const closePopup = document.querySelector("#closePopup");

ctaBtn.addEventListener("click", () => {
  popup.classList.add("active");
  heroEl.classList.add("blur");
});

closePopup.addEventListener("click", () => {
  heroEl.classList.remove("blur");
  popup.classList.remove("active");
});

