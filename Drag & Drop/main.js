const fillEl = document.querySelector(".fill");
const emptyDivs = document.querySelectorAll(".empty");

fillEl.addEventListener("dragstart", dragStart);
fillEl.addEventListener("dragend", dragEnd);

for (const div of emptyDivs) {
  div.addEventListener("dragover", dragOver);
  div.addEventListener("dragenter", dragEnter);
  div.addEventListener("dragleave", dragLeave);
  div.addEventListener("drop", dragDrop);
}

function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
  console.log("started");
}

function dragOver(e) {
  e.preventDefault();
  console.log("over");
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave() {
  this.className = "empty";
}

function dragDrop() {
  this.className = "empty";
  this.append(fillEl);
}

function dragEnd() {
  this.className = "fill";
  console.log("end");
}
