const leftArrow = document.querySelector("#leftArrow");
const rightArrow = document.querySelector("#rightArrow");
const imagesCont = document.querySelector(".images");

let degree = 0;
let autoScroll;

leftArrow.addEventListener("click", () => {
  clearTimeout(autoScroll);
  degree = degree - 45;
  updateGallery();
});

rightArrow.addEventListener("click", () => {
  clearTimeout(autoScroll);
  degree = degree + 45;
  updateGallery();
});

function updateGallery() {
  imagesCont.style.transform = ` perspective(63rem) rotateY(${degree}deg)`;
  autoScroll = setTimeout(() => {
    degree = degree - 45;
    updateGallery();
  }, 3000);
}

updateGallery();
