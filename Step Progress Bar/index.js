const circles = document.querySelectorAll(".circles");
const crossIcon = document.querySelectorAll(".circles i");
const leftArrow = document.querySelector("#leftArrow");
const rightArrow = document.querySelector("#rightArrow");
const bar2 = document.querySelector(".bar2");

let activeStatus = 1;

rightArrow.addEventListener("click", () => {
  leftArrow.removeAttribute("disabled");
  bar2.style.width = `${(activeStatus / (circles.length - 1)) * 100}%`;

  activeStatus++;
  if (activeStatus >= circles.length) {
    activeStatus = circles.length;
    rightArrow.setAttribute("disabled", "disabled");
  }
  addActive();
  changeIcon();
});

function addActive() {
  circles.forEach((circle, ind) => {
    if (ind < activeStatus) {
      circle.classList.add("active");
    }
  });
}

leftArrow.addEventListener("click", () => {
  rightArrow.removeAttribute("disabled");
  activeStatus--;
  bar2.style.width = `${((activeStatus - 1) / (circles.length - 1)) * 100}%`;

  if (activeStatus <= 1) {
    activeStatus = 1;
    leftArrow.setAttribute("disabled", "disabled");
  }
  removeActive();
  changeIcon();
});

function removeActive() {
  circles.forEach((circle, ind) => {
    if (ind >= activeStatus) {
      circle.classList.remove("active");
    }
  });
}

function changeIcon() {
  crossIcon.forEach((icon) => {
    if (icon.parentElement.classList.contains("active")) {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-check");
    } else {
      icon.classList.remove("fa-check");
      icon.classList.add("fa-xmark");
    }
  });
}
