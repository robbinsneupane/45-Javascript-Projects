const searchIcon = document.querySelector(".fa-search");
const input = document.querySelector("input");
const section = document.querySelector("section");

searchIcon.addEventListener("click", () => {
  section.classList.toggle("active");
});
