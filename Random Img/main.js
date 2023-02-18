const darkMode = document.querySelector(".darkMode");
const label = document.querySelector("#label");
const checkBox = document.querySelector("#checkBox");

checkBox.checked = JSON.parse(localStorage.getItem("on"));

const toggleMode = () => {
  if (!checkBox.checked) {
    darkMode.style.backgroundColor = "black";
  } else {
    darkMode.style.backgroundColor = "white";
  }
};

const updateLs = () => {
  localStorage.setItem("on", JSON.stringify(!checkBox.checked));
};

label.addEventListener("click", () => {
  toggleMode();
  updateLs();
});

// =====================================================================

const textEffect = document.querySelector(".textEffect");

const whoAm = ["Youtuber", "Programmer", "Developer", "Instructor"];

let index = 0;
let charIndex = 0;

const updateText = () => {
  charIndex++;
  textEffect.innerHTML = ` <h1> I am ${
    whoAm[index].slice(0, 1) === "I" ? "an" : "a"
  } ${whoAm[index].slice(0, charIndex)}</h1>`;
  if (charIndex === whoAm[index].length) {
    index++;
    charIndex = 0;
  }
  if (index === whoAm.length) {
    index = 0;
  }
  setTimeout(updateText, 400);
};
updateText();
// =================================================================

// const tabBtn = document.querySelectorAll(".btnContainer");
// const content = document.querySelectorAll(".content");

// tabBtn.addEventListener("click", (e) => {
//   const id = e.target.dataset.id;
//   console.log(id);
// });

// =================================================================
const imgContainer = document.querySelector(".imgContainer");
const leftSlide = document.querySelector("#leftSlide");
const rightSlide = document.querySelector("#rightSlide");

const totalImg = imgContainer.children.length;

let activeImg = 1;
let timeOut;

const slideImg = () => {
  imgContainer.style.transform = `translateX(-${(activeImg - 1) * 500}px)`;
  if (activeImg >= totalImg) {
    activeImg = 0;
  } else if (activeImg < 1) {
    activeImg = totalImg;
  }

  timeOut = setTimeout(() => {
    activeImg++;
    slideImg();
  }, 3000);
};
slideImg();

leftSlide.addEventListener("click", () => {
  activeImg--;
  clearTimeout(timeOut);
  slideImg();
});

rightSlide.addEventListener("click", () => {
  activeImg++;
  clearTimeout(timeOut);
  slideImg();
});

const ImgEl = document.querySelector(".images");
const loadBtn = document.querySelector("#loadBtn");

let imageNum;

const updateImg = () => {
  for (let index = 0; index < imageNum; index++) {
    const imgTag = document.createElement("img");
    imgTag.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 1000
    )}`;
    ImgEl.appendChild(imgTag);
  }
};
updateImg();

loadBtn.addEventListener("click", () => {
  imageNum = 10;
  updateImg();
});
