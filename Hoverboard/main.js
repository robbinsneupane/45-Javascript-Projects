const cont = document.querySelector("#cont");
let boxes = 440;

for (let i = 0; i < boxes; i++) {
  const div = document.createElement("div");
  div.classList.add("box");
  cont.append(div);
}

const box = document.querySelectorAll(".box");
box.forEach((box) => {
  box.addEventListener("mouseover", () => addColor(box));
  box.addEventListener("mouseout", () => removeColor(box));
});

function addColor(boxColor) {
  let char = "ABCDEF1234567890";
  let colorName = "";
  for (let i = 0; i < 6; i++) {
    const ranNum = Math.floor(Math.random() * char.length);
    colorName += char[ranNum];
  }
  boxColor.style.backgroundColor = `#${colorName}`;
  boxColor.style.boxShadow = `#${colorName} 0px 0px 4px, #${colorName} 0px 0px 10px`;
}

function removeColor(boxColor) {
  setTimeout(() => {
    boxColor.style.backgroundColor = "rgb(41, 40, 42)";
    boxColor.style.boxShadow = "none";
  }, 1000);
}
