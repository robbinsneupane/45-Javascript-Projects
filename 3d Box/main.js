const button = document.querySelector("#button");
const container = document.querySelector("#container");

button.addEventListener("click", () => {
  container.classList.toggle("big");
});

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `${-j * 7.5}rem ${-i * 7.5}rem`;
      container.append(box);
    }
  }
}
createBoxes();
