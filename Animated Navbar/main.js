const toggler = document.querySelector("#toggle");
const nav = document.querySelector("nav");

toggler.addEventListener("click", (e) => {
  nav.classList.toggle("active");
  console.log("click");
});
