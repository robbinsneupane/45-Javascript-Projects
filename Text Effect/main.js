const speedEl = document.querySelector("#speed");
const title = document.querySelector("#title");

console.log(speedEl, title);

const text = "I am a Programmer";
let ind = 1;
let speed = 300 / speedEl.value;

function updateDOM() {
  title.innerText = text.slice(0, ind);
  ind++;

  if (ind > text.length) {
    ind = 1;
  }

  setTimeout(updateDOM, speed);
}

updateDOM();

speedEl.addEventListener("click", (e) => {
  speed = 300 / e.target.value;
});
