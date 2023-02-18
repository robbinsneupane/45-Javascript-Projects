const showBtn = document.querySelectorAll("i");

showBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.classList.toggle("active");
  });
});
