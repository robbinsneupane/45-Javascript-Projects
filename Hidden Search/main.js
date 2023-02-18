const button = document.querySelector("button");
const expand = document.querySelector(".con");

button.addEventListener("click", () => {
  expand.classList.toggle("expanded");
});
