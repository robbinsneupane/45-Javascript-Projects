const bgImg = document.querySelector("#bgImg");

document.addEventListener("scroll", () => {
  zoomImg();
});

const zoomImg = () => {
  bgImg.style.opacity = 1 - window.pageYOffset / 800;
  bgImg.style.backgroundSize = 150 - window.pageYOffset / 20 + "%";
};
