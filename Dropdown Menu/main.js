const downArrow = document.querySelector(".fa-chevron-down");
const menu = document.querySelector(".menu");
const content = document.querySelector(".content");
const nameEl = document.querySelectorAll(".name");
const title = document.querySelector("#title");

menu.addEventListener("click", () => {
  content.classList.toggle("active");
  downArrow.classList.toggle("active");
});

nameEl.forEach((names) => {
  names.addEventListener("click", () => {
    title.innerHTML = names.innerHTML;
    content.classList.remove("active");
  });
});
