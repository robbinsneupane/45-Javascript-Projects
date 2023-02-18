const nums = document.querySelectorAll(".nums h1");
const ready = document.querySelector(".ready");
const replay = document.querySelector(".replay");
const replayBtn = document.querySelector("#replayBtn");


function runAnimation() {
  nums.forEach((num, ind) => {
    secondLast = nums.length - 1;
    num.addEventListener("animationend", (e) => {
      if (e.animationName === "goIn" && ind !== secondLast) {
        num.classList.remove("in");
        num.classList.add("out");
      } else if (e.animationName === "goOut" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("in");
      } else {
        ready.classList.add("hide");
        replay.classList.add("show");
      }
    });
  });
}
runAnimation();

function resetDOM() {
  nums.forEach((num) => {
    num.classList.value = "";
  });

  nums[0].classList.add("in");

  ready.classList.remove("hide");
  replay.classList.remove("show");
}

replayBtn.addEventListener("click", () => {
  resetDOM();
  runAnimation();
});
