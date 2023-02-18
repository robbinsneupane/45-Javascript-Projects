const canvas = document.querySelector("canvas");
const dec = document.querySelector("#dec");
const inc = document.querySelector("#inc");
const size = document.querySelector("#size");
const colorEl = document.querySelector("#color");
const clear = document.querySelector("#clear");

const ctx = canvas.getContext("2d");

let brushSize = 1;
let color = colorEl.value;
let isPressed = false;
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", () => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, brushSize, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = brushSize * 2;
  ctx.stroke();
}

function updateBrushSize() {
  size.innerText = brushSize;
}
updateBrushSize();

dec.addEventListener("click", () => {
  brushSize--;

  if (brushSize < 1) {
    brushSize = 1;
  }
  updateBrushSize();
});

inc.addEventListener("click", () => {
  brushSize++;

  if (brushSize > 10) {
    brushSize = 10;
  }
  updateBrushSize();
});

colorEl.addEventListener("change", (e) => (color = e.target.value));

clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
