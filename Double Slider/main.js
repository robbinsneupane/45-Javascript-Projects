const sliderWrapper = document.querySelector(".sliderWrapper");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const upBtn = document.querySelector("#up");
const downBtn = document.querySelector("#down");
const slideLength = right.querySelectorAll(".right div").length;

let slideInd = 0;
left.style.top = `-${(slideLength - 1) * 100}vh`;

upBtn.addEventListener("click", () => changeSlide("up"));
downBtn.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  let slideHeight = sliderWrapper.clientHeight;

  if (direction === "up") {
    slideInd++;
    if (slideInd > slideLength - 1) {
      slideInd = 0;
    }
  } else if (direction === "down") {
    slideInd--;
    if (slideInd < 0) {
      slideInd = slideLength - 1;
    }
  }

  right.style.transform = `translateY(-${slideInd * slideHeight}px)`;
  left.style.transform = `translateY(${slideInd * slideHeight}px)`;
};
