const liBtn = document.querySelectorAll("li");
const images = document.querySelectorAll(".image");

liBtn.forEach((btn, ind) => {
  btn.addEventListener("click", () => {
    changeLi();
    changeImage();

    btn.classList.add("active");
    images[ind].classList.add("active");
  });
});

function changeLi() {
  liBtn.forEach((btn) => btn.classList.remove("active"));
}

function changeImage() {
  images.forEach((img) => {
    img.classList.remove("active");
  });
}
