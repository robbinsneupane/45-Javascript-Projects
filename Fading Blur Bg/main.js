const bg = document.querySelector(".bg");
const loadingText = document.querySelector(".loadingText");

load = 0;

let interval = setInterval(updateBlur, 20);

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

function updateBlur() {
  load++;

  if (load > 99) {
    clearInterval(interval);
  }

  loadingText.innerText = `${load}%`;
  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`;
}
updateBlur();
